import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  async getDashboard() {
    const [projects, workflows, activities] = await Promise.all([
      this.prisma.project.findMany({ orderBy: { createdAt: 'desc' } }),
      this.prisma.workflow.findMany({
        include: { project: true },
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.dashboardActivity.findMany({
        orderBy: { timestamp: 'desc' },
        take: 10,
      }),
    ]);

    const metrics = {
      totalProjects: projects.length,
      activeProjects: projects.filter(p => p.status === 'ACTIVE').length,
      completedProjects: projects.filter(p => p.status === 'COMPLETED').length,
      totalWorkflows: workflows.length,
      activeWorkflows: workflows.filter(w => w.status === 'RUNNING').length,
      failedWorkflows: workflows.filter(w => w.status === 'FAILED').length,
      totalAgents: 6,
      activeAgents: 5,
      deploymentsThisWeek: 28,
    };

    const teamMap: Record<string, { completed: number; pending: number }> = {};
    projects.forEach(p => {
      const team = p.team as string[];
      team.forEach(t => {
        if (!teamMap[t]) teamMap[t] = { completed: 0, pending: 0 };
        teamMap[t].completed += p.completedTasks;
        teamMap[t].pending += (p.tasksCount - p.completedTasks);
      });
    });

    const teamPerformance = Object.entries(teamMap).map(([team, v]) => ({
      team,
      completedTasks: v.completed,
      pendingTasks: v.pending,
    }));

    const formattedProjects = projects.map(p => ({
      id: p.id,
      name: p.name,
      description: p.description || '',
      status: p.status,
      startDate: p.startDate?.toISOString().split('T')[0] || '',
      endDate: p.endDate?.toISOString().split('T')[0] || '',
      team: p.team as string[],
      owner: p.owner || '',
      tasksCount: p.tasksCount,
      completedTasks: p.completedTasks,
    }));

    const formattedWorkflows = workflows.map(w => ({
      id: w.id,
      projectId: w.projectId,
      name: w.name,
      description: w.description || '',
      status: w.status,
      assignedTo: w.assignedTo as string[],
      startDate: w.startDate?.toISOString().split('T')[0] || '',
      endDate: w.endDate?.toISOString().split('T')[0] || '',
      tasksCount: w.tasksCount,
      completedTasks: w.completedTasks,
    }));

    return {
      metrics,
      activities: activities.map(a => ({
        id: a.id,
        type: a.type,
        title: a.title,
        description: a.description || '',
        status: a.status,
        user: a.user || '',
        timestamp: a.timestamp.toISOString(),
      })),
      teamPerformance,
      projects: formattedProjects,
      workflows: formattedWorkflows,
    };
  }
}
