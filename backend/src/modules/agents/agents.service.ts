import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { UpdateAgentDto } from './dto/update-agent.dto';

@Injectable()
export class AgentsService {
  constructor(private prisma: PrismaService) {}

  private formatAgent(a: any) {
    return {
      agentId: a.id,
      agentName: a.agentName,
      agentType: a.agentType,
      status: a.status,
      executionCount: a.executionCount,
      successRate: a.successRate,
      avgCompletionTime: a.avgCompletionTime,
      lastExecutionAt: a.lastExecutionAt?.toISOString() || null,
      deploymentLinked: a.deploymentLinked,
      capabilities: a.capabilities as string[],
      executionFlow: {
        input: a.executionFlowInput || '',
        process: a.executionFlowProcess as string[],
        output: a.executionFlowOutput || '',
      },
    };
  }

  // ─── GET /agents/overview ──────────────────────────────

  async getOverview() {
    const [
      agents,
      taskTrend,
      deploymentSummary,
      overviewActivities,
      workflowParticipation,
    ] = await Promise.all([
      this.prisma.agent.findMany({ orderBy: { id: 'asc' } }),
      this.prisma.agentTaskTrend.findMany({ orderBy: { date: 'asc' } }),
      this.prisma.agentDeploymentSummary.findFirst(),
      this.prisma.agentActivity.findMany({
        where: { overviewStatus: { not: null } },
        orderBy: { timestamp: 'desc' },
        take: 10,
      }),
      this.prisma.agentHandoffStats.findMany({
        include: { agent: true },
      }),
    ]);

    const stageMap: Record<string, string> = {
      'AG-005': 'DESIGN',
      'AG-001': 'BUILD',
      'AG-002': 'BUILD',
      'AG-003': 'TEST',
      'AG-004': 'DEPLOY',
    };

    const executionGraph = {
      nodes: agents.map((a: any) => ({
        agentId: a.id,
        agentName: a.agentName,
        stage: stageMap[a.id] || 'BUILD',
        status: a.status === 'Active' ? 'RUNNING' : a.status === 'Idle' ? 'IDLE' : 'FAILED',
        workflowId: 'WF-2001',
      })),
      edges: [
        { from: 'AG-005', to: 'AG-001' },
        { from: 'AG-005', to: 'AG-002' },
        { from: 'AG-001', to: 'AG-003' },
        { from: 'AG-002', to: 'AG-003' },
        { from: 'AG-003', to: 'AG-004' },
      ],
    };

    const workflowParticipationFormatted = workflowParticipation.map((h: any) => ({
      agentId: h.agentId,
      agentName: h.agent.agentName,
      workflows: ['WF-2001'],
      totalExecutions: h.agent.executionCount,
    }));

    return {
      executionGraph,
      workflowParticipation: workflowParticipationFormatted,
      taskTrend: taskTrend.map((t: any) => ({
        date: t.date,
        frontend: t.frontend,
        backend: t.backend,
        qa: t.qa,
        devops: t.devops,
        ux: t.ux,
      })),
      recentActivities: overviewActivities.map((a: any) => ({
        id: a.activityId,
        agentId: a.agentId,
        agentName: a.agentName || '',
        workflowId: a.workflowId,
        projectId: a.projectId || '',
        action: a.action,
        status: a.overviewStatus || 'SUCCESS',
        timestamp: a.timestamp.toISOString(),
      })),
      deploymentSummary: deploymentSummary
        ? {
            totalDeployments: deploymentSummary.totalDeployments,
            successful: deploymentSummary.successful,
            failed: deploymentSummary.failed,
            successRate: deploymentSummary.successRate,
            lastDeployment: deploymentSummary.lastDeployment.toISOString(),
          }
        : null,
      agents: agents.map((a: any) => this.formatAgent(a)),
    };
  }

  // ─── GET /agents ───────────────────────────────────────

  async findAll() {
    const agents = await this.prisma.agent.findMany({ orderBy: { id: 'asc' } });
    return agents.map((a: any) => this.formatAgent(a));
  }

  // ─── GET /agents/:id ──────────────────────────────────

  async findOne(id: string) {
    const agent = await this.prisma.agent.findUnique({
      where: { id },
      include: {
        tasks:          { orderBy: { startedAt: 'desc' } },
        timelines:      { orderBy: { timestamp: 'desc' } },
        flowNodes:      { orderBy: { sortOrder: 'asc' } },
        handoffStats:   true,
        activities:     { where: { overviewStatus: null }, orderBy: { timestamp: 'desc' } },
        executionTrend: { orderBy: { time: 'asc' } },
      },
    });

    if (!agent) throw new NotFoundException(`Agent ${id} not found`);

    const flow = {
      agentId: agent.id,
      nodes: agent.flowNodes.map((n: any) => ({
        id: n.nodeId,
        agentId: n.agentId,
        stageName: n.stageName,
        inputArtifact: n.inputArtifact,
        outputArtifact: n.outputArtifact,
        status: n.status,
        timestamp: n.timestamp?.toISOString() || '',
      })),
      edges: agent.flowNodes
        .filter((n: any) => n.handoffType !== null && n.sortOrder < agent.flowNodes.length - 1)
        .map((n: any) => {
          const next = agent.flowNodes.find((fn: any) => fn.sortOrder === n.sortOrder + 1);
          return next
            ? { fromStageId: n.nodeId, toStageId: next.nodeId, handoffType: n.handoffType || 'INTERNAL' }
            : null;
        })
        .filter(Boolean),
    };

    const handoff = agent.handoffStats
      ? {
          received: agent.handoffStats.received,
          delivered: agent.handoffStats.delivered,
          downstreamAgent: agent.handoffStats.downstreamAgent,
          artifactType: agent.handoffStats.artifactType,
        }
      : null;

    const workflows = [...new Set(agent.tasks.map((t: any) => t.workflowId))].map((wfId: any) => ({
      workflowId: wfId,
      stageName: agent.flowNodes.find((n: any) => n.status === 'IN_PROGRESS')?.stageName || 'Idle',
      executions: Math.round(agent.executionCount / (agent.tasks.length || 1)),
      status: (agent.status === 'Active' ? 'ACTIVE' : 'IDLE') as 'ACTIVE' | 'IDLE' | 'COMPLETED',
    }));

    return {
      agent: {
        ...this.formatAgent(agent),
        passedTests: agent.passedTests,
        failedTests: agent.failedTests,
        blockingDefects: agent.blockingDefects,
        workflowIds: [...new Set(agent.tasks.map((t: any) => t.workflowId))],
        projectIds: [...new Set(agent.tasks.map((t: any) => t.projectId))],
        activeWorkflowId: agent.tasks.find((t: any) => t.status === 'IN_PROGRESS')?.workflowId || null,
      },
      activities: agent.activities.map((a: any) => ({
        activityId: a.activityId,
        agentId: a.agentId,
        workflowId: a.workflowId,
        taskId: a.taskId,
        action: a.action,
        status: a.status,
        duration: a.duration || '',
        timestamp: a.timestamp.toISOString(),
      })),
      flow,
      tasks: agent.tasks.map((t: any) => ({
        taskId: t.taskId,
        workflowId: t.workflowId,
        projectId: t.projectId,
        taskName: t.taskName,
        priority: t.priority,
        status: t.status,
        startedAt: t.startedAt.toISOString(),
      })),
      timeline: agent.timelines.map((t: any) => ({
        id: t.entryId,
        stageName: t.stageName,
        duration: t.duration,
        status: t.status,
        timestamp: t.timestamp.toISOString(),
        errorDetails: t.errorDetails || undefined,
      })),
      handoff,
      workflows,
      executionTrend: agent.executionTrend.map((e: any) => ({
        time: e.time,
        load: e.load,
      })),
    };
  }

  // ─── PATCH /agents/:id ────────────────────────────────

  async update(id: string, dto: UpdateAgentDto) {
    const existing = await this.prisma.agent.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException(`Agent ${id} not found`);

    const agent = await this.prisma.agent.update({
      where: { id },
      data: {
        ...(dto.status !== undefined && { status: dto.status as any }),
        ...(dto.executionCount !== undefined && { executionCount: dto.executionCount }),
        ...(dto.successRate !== undefined && { successRate: dto.successRate }),
        ...(dto.avgCompletionTime !== undefined && { avgCompletionTime: dto.avgCompletionTime }),
        ...(dto.deploymentLinked !== undefined && { deploymentLinked: dto.deploymentLinked }),
      },
    });
    return this.formatAgent(agent);
  }
}
