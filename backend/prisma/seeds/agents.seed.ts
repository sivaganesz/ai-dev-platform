import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter } as any);

export async function seedAgents() {
  // ── AGENTS ──────────────────────────────────────────────

  await prisma.agent.createMany({
    skipDuplicates: true,
    data: [
      {
        id: 'AG-001',
        agentName: 'Frontend Agent',
        agentType: 'Engineering',
        status: 'Active',
        executionCount: 156,
        successRate: 96,
        avgCompletionTime: '14m',
        lastExecutionAt: new Date('2026-02-13T10:30:00Z'),
        deploymentLinked: true,
        capabilities: [
          'Convert UX wireframes → React components',
          'Build responsive layouts',
          'Integrate APIs',
          'Optimize performance',
          'Fix UI bugs',
        ],
        executionFlowInput: 'Design files + task specs',
        executionFlowProcess: ['Parse UX assets', 'Generate component tree', 'Apply styling system', 'Bind APIs'],
        executionFlowOutput: 'Production-ready UI modules',
      },
      {
        id: 'AG-002',
        agentName: 'Backend Agent',
        agentType: 'Engineering',
        status: 'Active',
        executionCount: 142,
        successRate: 94,
        avgCompletionTime: '18m',
        lastExecutionAt: new Date('2026-02-13T11:00:00Z'),
        deploymentLinked: true,
        capabilities: ['API generation', 'DB schema design', 'Auth systems', 'Microservices', 'Event streaming'],
        executionFlowInput: 'Feature spec',
        executionFlowProcess: ['Design DB schema', 'Generate API endpoints', 'Implement business logic', 'Add validations'],
        executionFlowOutput: 'REST/GraphQL services',
      },
      {
        id: 'AG-003',
        agentName: 'QA Agent',
        agentType: 'Testing',
        status: 'Active',
        executionCount: 89,
        successRate: 98,
        avgCompletionTime: '9m',
        lastExecutionAt: new Date('2026-02-13T11:15:00Z'),
        deploymentLinked: false,
        capabilities: ['Unit testing', 'Integration testing', 'UI automation', 'Performance testing', 'Regression suites'],
        executionFlowInput: 'Code changes + test plans',
        executionFlowProcess: ['Execute unit tests', 'Run integration suite', 'Perform UI automation', 'Validate performance'],
        executionFlowOutput: 'Test reports + bug logs',
        passedTests: 1245,
        failedTests: 12,
        blockingDefects: 2,
      },
      {
        id: 'AG-004',
        agentName: 'DevOps Agent',
        agentType: 'DevOps',
        status: 'Idle',
        executionCount: 45,
        successRate: 100,
        avgCompletionTime: '5m',
        lastExecutionAt: new Date('2026-02-12T16:45:00Z'),
        deploymentLinked: true,
        capabilities: ['CI/CD pipelines', 'Docker builds', 'Kubernetes deploy', 'Monitoring setup', 'Rollbacks'],
        executionFlowInput: 'Merged code + infrastructure config',
        executionFlowProcess: ['Build container images', 'Run security scans', 'Deploy to environment', 'Health checks'],
        executionFlowOutput: 'Live environment URL',
      },
      {
        id: 'AG-005',
        agentName: 'UX Agent',
        agentType: 'Design',
        status: 'Active',
        executionCount: 67,
        successRate: 92,
        avgCompletionTime: '25m',
        lastExecutionAt: new Date('2026-02-13T09:00:00Z'),
        deploymentLinked: false,
        capabilities: ['Wireframe generation', 'Design systems', 'Accessibility audits', 'Interaction design', 'User journey mapping'],
        executionFlowInput: 'User requirements + brand guidelines',
        executionFlowProcess: ['Create user journeys', 'Generate wireframes', 'Define design tokens', 'Accessibility audit'],
        executionFlowOutput: 'Figma assets / JSON design tokens',
      },
    ],
  });

  // ── FLOW NODES ───────────────────────────────────────────

  await prisma.agentFlowNode.createMany({
    data: [
      // AG-001 Frontend
      { agentId: 'AG-001', nodeId: 'fe-1', stageName: 'UX Design',            inputArtifact: 'Figma Link',          outputArtifact: 'UI Specs',             status: 'COMPLETED',   timestamp: new Date('2026-02-13T09:00:00Z'), sortOrder: 0, handoffType: 'INTERNAL' },
      { agentId: 'AG-001', nodeId: 'fe-2', stageName: 'UI Implementation',     inputArtifact: 'UI Specs',            outputArtifact: 'JSX/CSS',              status: 'COMPLETED',   timestamp: new Date('2026-02-13T10:00:00Z'), sortOrder: 1, handoffType: 'INTERNAL' },
      { agentId: 'AG-001', nodeId: 'fe-3', stageName: 'Component Development', inputArtifact: 'JSX/CSS',             outputArtifact: 'React Components',     status: 'IN_PROGRESS', timestamp: new Date('2026-02-13T11:00:00Z'), sortOrder: 2, handoffType: 'INTERNAL' },
      { agentId: 'AG-001', nodeId: 'fe-4', stageName: 'State Integration',     inputArtifact: 'React Components',   outputArtifact: 'Wired UI',             status: 'PENDING',     timestamp: null,                             sortOrder: 3, handoffType: 'INTERNAL' },
      { agentId: 'AG-001', nodeId: 'fe-5', stageName: 'API Binding',           inputArtifact: 'Wired UI',           outputArtifact: 'Functional Frontend',  status: 'PENDING',     timestamp: null,                             sortOrder: 4, handoffType: 'INTERNAL' },
      { agentId: 'AG-001', nodeId: 'fe-6', stageName: 'Handoff → Backend',     inputArtifact: 'Functional Frontend',outputArtifact: 'Integration Contract', status: 'PENDING',     timestamp: null,                             sortOrder: 5, handoffType: 'EXTERNAL' },
      // AG-002 Backend
      { agentId: 'AG-002', nodeId: 'be-1', stageName: 'Receives UI Contracts',   inputArtifact: 'UI Contract',   outputArtifact: 'API Spec',       status: 'COMPLETED',   timestamp: new Date('2026-02-13T10:30:00Z'), sortOrder: 0, handoffType: 'INTERNAL' },
      { agentId: 'AG-002', nodeId: 'be-2', stageName: 'API Development',         inputArtifact: 'API Spec',      outputArtifact: 'REST Endpoints', status: 'COMPLETED',   timestamp: new Date('2026-02-13T11:30:00Z'), sortOrder: 1, handoffType: 'INTERNAL' },
      { agentId: 'AG-002', nodeId: 'be-3', stageName: 'Business Logic',          inputArtifact: 'REST Endpoints',outputArtifact: 'Services',       status: 'IN_PROGRESS', timestamp: new Date('2026-02-13T12:00:00Z'), sortOrder: 2, handoffType: 'INTERNAL' },
      { agentId: 'AG-002', nodeId: 'be-4', stageName: 'Database Integration',    inputArtifact: 'Services',      outputArtifact: 'Data Layer',     status: 'PENDING',     timestamp: null,                             sortOrder: 3, handoffType: 'INTERNAL' },
      { agentId: 'AG-002', nodeId: 'be-5', stageName: 'Security Implementation', inputArtifact: 'Data Layer',    outputArtifact: 'Secure API',     status: 'PENDING',     timestamp: null,                             sortOrder: 4, handoffType: 'INTERNAL' },
      { agentId: 'AG-002', nodeId: 'be-6', stageName: 'Handoff → QA',            inputArtifact: 'Secure API',    outputArtifact: 'QA Build',       status: 'PENDING',     timestamp: null,                             sortOrder: 5, handoffType: 'EXTERNAL' },
      // AG-003 QA
      { agentId: 'AG-003', nodeId: 'qa-1', stageName: 'Receives Build',       inputArtifact: 'Dev Build',    outputArtifact: 'Test Environment', status: 'COMPLETED',   timestamp: new Date('2026-02-13T11:15:00Z'), sortOrder: 0, handoffType: 'INTERNAL' },
      { agentId: 'AG-003', nodeId: 'qa-2', stageName: 'Test Case Generation', inputArtifact: 'Requirements', outputArtifact: 'Test Suite',        status: 'COMPLETED',   timestamp: new Date('2026-02-13T12:00:00Z'), sortOrder: 1, handoffType: 'INTERNAL' },
      { agentId: 'AG-003', nodeId: 'qa-3', stageName: 'Automation Execution', inputArtifact: 'Test Suite',   outputArtifact: 'Execution Results', status: 'IN_PROGRESS', timestamp: new Date('2026-02-13T12:30:00Z'), sortOrder: 2, handoffType: 'INTERNAL' },
      { agentId: 'AG-003', nodeId: 'qa-4', stageName: 'Bug Detection',        inputArtifact: 'Exec Results', outputArtifact: 'Bug Reports',       status: 'PENDING',     timestamp: null,                             sortOrder: 3, handoffType: 'INTERNAL' },
      { agentId: 'AG-003', nodeId: 'qa-5', stageName: 'Regression Testing',   inputArtifact: 'Fixes',        outputArtifact: 'Stability Report',  status: 'PENDING',     timestamp: null,                             sortOrder: 4, handoffType: 'INTERNAL' },
      { agentId: 'AG-003', nodeId: 'qa-6', stageName: 'Validation Report',    inputArtifact: 'Full Results', outputArtifact: 'Quality Sign-off',  status: 'PENDING',     timestamp: null,                             sortOrder: 5, handoffType: null },
      // AG-004 DevOps
      { agentId: 'AG-004', nodeId: 'do-1', stageName: 'QA Approved Build',    inputArtifact: 'QA Sign-off',  outputArtifact: 'Release Candidate', status: 'COMPLETED',   timestamp: new Date('2026-02-12T16:00:00Z'), sortOrder: 0, handoffType: 'INTERNAL' },
      { agentId: 'AG-004', nodeId: 'do-2', stageName: 'CI Pipeline Trigger',  inputArtifact: 'RC',           outputArtifact: 'Build Artifacts',   status: 'COMPLETED',   timestamp: new Date('2026-02-12T16:30:00Z'), sortOrder: 1, handoffType: 'INTERNAL' },
      { agentId: 'AG-004', nodeId: 'do-3', stageName: 'Containerization',     inputArtifact: 'Artifacts',    outputArtifact: 'Docker Images',     status: 'COMPLETED',   timestamp: new Date('2026-02-12T16:45:00Z'), sortOrder: 2, handoffType: 'INTERNAL' },
      { agentId: 'AG-004', nodeId: 'do-4', stageName: 'Infra Provisioning',   inputArtifact: 'IaC Scripts',  outputArtifact: 'Cloud Resources',   status: 'COMPLETED',   timestamp: new Date('2026-02-12T17:00:00Z'), sortOrder: 3, handoffType: 'INTERNAL' },
      { agentId: 'AG-004', nodeId: 'do-5', stageName: 'Deployment Release',   inputArtifact: 'Images',       outputArtifact: 'Live App',          status: 'COMPLETED',   timestamp: new Date('2026-02-12T17:30:00Z'), sortOrder: 4, handoffType: 'INTERNAL' },
      { agentId: 'AG-004', nodeId: 'do-6', stageName: 'Monitoring & Alerts',  inputArtifact: 'Live App',     outputArtifact: 'Metrics/Logs',      status: 'IN_PROGRESS', timestamp: new Date('2026-02-12T18:00:00Z'), sortOrder: 5, handoffType: null },
      // AG-005 UX
      { agentId: 'AG-005', nodeId: 'ux-1', stageName: 'Requirement Intake',   inputArtifact: 'User Stories',  outputArtifact: 'Product Brief',    status: 'COMPLETED',   timestamp: new Date('2026-02-13T08:00:00Z'), sortOrder: 0, handoffType: 'INTERNAL' },
      { agentId: 'AG-005', nodeId: 'ux-2', stageName: 'User Research',        inputArtifact: 'Product Brief', outputArtifact: 'User Personas',    status: 'COMPLETED',   timestamp: new Date('2026-02-13T08:30:00Z'), sortOrder: 1, handoffType: 'INTERNAL' },
      { agentId: 'AG-005', nodeId: 'ux-3', stageName: 'Wireframe Creation',   inputArtifact: 'Personas',      outputArtifact: 'Low-fi Wireframes', status: 'COMPLETED',   timestamp: new Date('2026-02-13T09:00:00Z'), sortOrder: 2, handoffType: 'INTERNAL' },
      { agentId: 'AG-005', nodeId: 'ux-4', stageName: 'Design System Setup',  inputArtifact: 'Wireframes',    outputArtifact: 'UI Kit',            status: 'IN_PROGRESS', timestamp: new Date('2026-02-13T09:30:00Z'), sortOrder: 3, handoffType: 'INTERNAL' },
      { agentId: 'AG-005', nodeId: 'ux-5', stageName: 'Accessibility Review', inputArtifact: 'UI Kit',        outputArtifact: 'Audit Report',      status: 'PENDING',     timestamp: null,                             sortOrder: 4, handoffType: 'INTERNAL' },
      { agentId: 'AG-005', nodeId: 'ux-6', stageName: 'Handoff → Frontend',   inputArtifact: 'Final Designs', outputArtifact: 'Figma Assets',      status: 'PENDING',     timestamp: null,                             sortOrder: 5, handoffType: 'EXTERNAL' },
    ],
  });

  // ── TASKS ────────────────────────────────────────────────

  await prisma.agentTask.createMany({
    data: [
      { agentId: 'AG-001', taskId: 'TSK-3001', workflowId: 'WF-2001', projectId: 'PRJ-1001', taskName: 'Dashboard Component Library',   priority: 'HIGH',   status: 'IN_PROGRESS', startedAt: new Date('2026-02-13T10:00:00Z') },
      { agentId: 'AG-001', taskId: 'TSK-3002', workflowId: 'WF-2001', projectId: 'PRJ-1001', taskName: 'Navigation State Integration',  priority: 'MEDIUM', status: 'IN_PROGRESS', startedAt: new Date('2026-02-13T11:00:00Z') },
      { agentId: 'AG-001', taskId: 'TSK-3003', workflowId: 'WF-2001', projectId: 'PRJ-1001', taskName: 'Login UI Refinement',           priority: 'LOW',    status: 'COMPLETED',   startedAt: new Date('2026-02-13T09:00:00Z') },
      { agentId: 'AG-002', taskId: 'TSK-4001', workflowId: 'WF-2001', projectId: 'PRJ-1001', taskName: 'User Authentication Service',   priority: 'HIGH',   status: 'IN_PROGRESS', startedAt: new Date('2026-02-13T11:30:00Z') },
      { agentId: 'AG-002', taskId: 'TSK-4002', workflowId: 'WF-2001', projectId: 'PRJ-1001', taskName: 'Data Migration Script',         priority: 'MEDIUM', status: 'BLOCKED',     startedAt: new Date('2026-02-13T10:00:00Z') },
      { agentId: 'AG-003', taskId: 'TSK-5001', workflowId: 'WF-2002', projectId: 'PRJ-1001', taskName: 'Security Audit Regression',     priority: 'HIGH',   status: 'IN_PROGRESS', startedAt: new Date('2026-02-13T12:30:00Z') },
      { agentId: 'AG-004', taskId: 'TSK-6001', workflowId: 'WF-2001', projectId: 'PRJ-1001', taskName: 'Kubernetes Cluster Scaling',    priority: 'HIGH',   status: 'IN_PROGRESS', startedAt: new Date('2026-02-13T14:00:00Z') },
      { agentId: 'AG-005', taskId: 'TSK-7001', workflowId: 'WF-2001', projectId: 'PRJ-1002', taskName: 'Sales App User Journey Map',    priority: 'HIGH',   status: 'COMPLETED',   startedAt: new Date('2026-02-13T08:00:00Z') },
    ],
  });

  // ── TIMELINES ────────────────────────────────────────────

  await prisma.agentTimeline.createMany({
    data: [
      { agentId: 'AG-001', entryId: 'tl-1',  stageName: 'UI Implementation',           duration: '45m',    status: 'SUCCESS',  timestamp: new Date('2026-02-13T10:00:00Z') },
      { agentId: 'AG-001', entryId: 'tl-2',  stageName: 'UX Design Review',            duration: '30m',    status: 'SUCCESS',  timestamp: new Date('2026-02-13T09:00:00Z') },
      { agentId: 'AG-001', entryId: 'tl-3',  stageName: 'API Integration',             duration: '15m',    status: 'FAILURE',  timestamp: new Date('2026-02-12T16:00:00Z'), errorDetails: 'Endpoint unreachable' },
      { agentId: 'AG-002', entryId: 'tl-4',  stageName: 'API Development',             duration: '1h 20m', status: 'SUCCESS',  timestamp: new Date('2026-02-13T11:30:00Z') },
      { agentId: 'AG-002', entryId: 'tl-5',  stageName: 'Auth Schema Design',          duration: '40m',    status: 'SUCCESS',  timestamp: new Date('2026-02-13T10:30:00Z') },
      { agentId: 'AG-003', entryId: 'tl-6',  stageName: 'Automation Suite Generation', duration: '25m',    status: 'SUCCESS',  timestamp: new Date('2026-02-13T12:00:00Z') },
      { agentId: 'AG-003', entryId: 'tl-7',  stageName: 'Build Acceptance',            duration: '10m',    status: 'SUCCESS',  timestamp: new Date('2026-02-13T11:15:00Z') },
      { agentId: 'AG-004', entryId: 'tl-8',  stageName: 'Cloud Infra Setup',           duration: '15m',    status: 'SUCCESS',  timestamp: new Date('2026-02-12T17:00:00Z') },
      { agentId: 'AG-004', entryId: 'tl-9',  stageName: 'Docker Containerization',     duration: '12m',    status: 'SUCCESS',  timestamp: new Date('2026-02-12T16:45:00Z') },
      { agentId: 'AG-005', entryId: 'tl-10', stageName: 'User Research Analysis',      duration: '2h',     status: 'SUCCESS',  timestamp: new Date('2026-02-13T08:30:00Z') },
      { agentId: 'AG-005', entryId: 'tl-11', stageName: 'Product Briefing',            duration: '30m',    status: 'SUCCESS',  timestamp: new Date('2026-02-13T08:00:00Z') },
    ],
  });

  // ── HANDOFF STATS ────────────────────────────────────────

  await prisma.agentHandoffStats.createMany({
    data: [
      { agentId: 'AG-001', received: 45, delivered: 42, downstreamAgent: 'Backend Agent',  artifactType: 'UI Contracts'      },
      { agentId: 'AG-002', received: 42, delivered: 38, downstreamAgent: 'QA Agent',        artifactType: 'REST APIs'         },
      { agentId: 'AG-003', received: 38, delivered: 35, downstreamAgent: 'DevOps Agent',    artifactType: 'QA Approved Build' },
      { agentId: 'AG-004', received: 35, delivered: 35, downstreamAgent: 'Production',      artifactType: 'Live Release'      },
      { agentId: 'AG-005', received: 15, delivered: 12, downstreamAgent: 'Frontend Agent',  artifactType: 'Figma Assets'      },
    ],
  });

  // ── ACTIVITIES ───────────────────────────────────────────

  await prisma.agentActivity.createMany({
    data: [
      // Per-agent detail activities
      { agentId: 'AG-001', activityId: 'ACT-9001', workflowId: 'WF-2001', taskId: 'UI Component Build', action: 'Component Generation', status: 'Completed',   duration: '12m', timestamp: new Date('2026-02-13T10:30:00Z') },
      { agentId: 'AG-002', activityId: 'ACT-9002', workflowId: 'WF-2001', taskId: 'API Integration',   action: 'Endpoint Creation',    status: 'Completed',   duration: '15m', timestamp: new Date('2026-02-13T11:00:00Z') },
      { agentId: 'AG-003', activityId: 'ACT-9003', workflowId: 'WF-2002', taskId: 'Regression Test',   action: 'Test Suite Execution', status: 'Completed',   duration: '8m',  timestamp: new Date('2026-02-13T11:15:00Z') },
      // Overview activities (have overviewStatus set)
      { agentId: 'AG-002', activityId: 'ACT-001', workflowId: 'WF-2001', taskId: '', action: 'Generated API endpoints for Dashboard',   status: 'Completed',   overviewStatus: 'SUCCESS', agentName: 'Backend Agent',  projectId: 'PRJ-1001', timestamp: new Date('2026-02-13T10:30:00Z') },
      { agentId: 'AG-001', activityId: 'ACT-002', workflowId: 'WF-2001', taskId: '', action: 'Building UI components for Project Alpha', status: 'In Progress', overviewStatus: 'RUNNING',  agentName: 'Frontend Agent', projectId: 'PRJ-1001', timestamp: new Date('2026-02-13T11:00:00Z') },
      { agentId: 'AG-003', activityId: 'ACT-003', workflowId: 'WF-2002', taskId: '', action: 'Regression testing failed on Edge cases',  status: 'Failed',      overviewStatus: 'FAILED',   agentName: 'QA Agent',       projectId: 'PRJ-1001', timestamp: new Date('2026-02-13T09:45:00Z') },
      { agentId: 'AG-005', activityId: 'ACT-004', workflowId: 'WF-2001', taskId: '', action: 'Optimized user journey for Sales App',     status: 'Completed',   overviewStatus: 'SUCCESS', agentName: 'UX Agent',       projectId: 'PRJ-1002', timestamp: new Date('2026-02-13T08:15:00Z') },
    ],
  });

  // ── EXECUTION TREND (per-agent) ───────────────────────────

  const trends: Record<string, { time: string; load: number }[]> = {
    'AG-001': [{ time: '08:00', load: 10 }, { time: '09:00', load: 18 }, { time: '10:00', load: 45 }, { time: '11:00', load: 32 }, { time: '12:00', load: 56 }, { time: '13:00', load: 48 }, { time: '14:00', load: 64 }],
    'AG-002': [{ time: '08:00', load: 8  }, { time: '09:00', load: 15 }, { time: '10:00', load: 38 }, { time: '11:00', load: 50 }, { time: '12:00', load: 44 }, { time: '13:00', load: 52 }, { time: '14:00', load: 60 }],
    'AG-003': [{ time: '08:00', load: 5  }, { time: '09:00', load: 10 }, { time: '10:00', load: 20 }, { time: '11:00', load: 30 }, { time: '12:00', load: 45 }, { time: '13:00', load: 35 }, { time: '14:00', load: 40 }],
    'AG-004': [{ time: '08:00', load: 3  }, { time: '09:00', load: 5  }, { time: '10:00', load: 10 }, { time: '11:00', load: 8  }, { time: '12:00', load: 12 }, { time: '13:00', load: 7  }, { time: '14:00', load: 5  }],
    'AG-005': [{ time: '08:00', load: 12 }, { time: '09:00', load: 20 }, { time: '10:00', load: 15 }, { time: '11:00', load: 25 }, { time: '12:00', load: 18 }, { time: '13:00', load: 22 }, { time: '14:00', load: 30 }],
  };

  for (const [agentId, trendData] of Object.entries(trends)) {
    await prisma.agentExecutionTrend.createMany({
      data: trendData.map(t => ({ agentId, time: t.time, load: t.load })),
    });
  }

  // ── TASK TREND (global) ───────────────────────────────────

  await prisma.agentTaskTrend.createMany({
    data: [
      { date: '2026-02-07', frontend: 8,  backend: 6,  qa: 10, devops: 2, ux: 5  },
      { date: '2026-02-08', frontend: 12, backend: 9,  qa: 15, devops: 3, ux: 7  },
      { date: '2026-02-09', frontend: 10, backend: 11, qa: 13, devops: 4, ux: 6  },
      { date: '2026-02-10', frontend: 15, backend: 14, qa: 18, devops: 5, ux: 9  },
      { date: '2026-02-11', frontend: 14, backend: 12, qa: 16, devops: 4, ux: 8  },
      { date: '2026-02-12', frontend: 18, backend: 15, qa: 20, devops: 6, ux: 10 },
      { date: '2026-02-13', frontend: 20, backend: 18, qa: 22, devops: 7, ux: 12 },
    ],
  });

  // ── DEPLOYMENT SUMMARY ────────────────────────────────────

  const existingDeployment = await prisma.agentDeploymentSummary.findFirst();
  if (!existingDeployment) {
    await prisma.agentDeploymentSummary.create({
      data: {
        totalDeployments: 45,
        successful: 42,
        failed: 3,
        successRate: 93,
        lastDeployment: new Date('2026-02-12T18:00:00Z'),
      },
    });
  }

  console.log('✅ Agents seed complete');
}
