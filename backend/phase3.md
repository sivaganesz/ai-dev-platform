You are building Phase 3 of the AI Dev Platform backend.
Phases 0, 1 (Settings), and 2 (Core: Dashboard/Projects/Workflows)
are already complete and running.

This phase covers the full AI AGENTS module:
  - Agents Overview page (execution graph, participation,
    task trends, activities, deployment summary)
  - 5 individual Agent detail pages (UX, Frontend, Backend,
    QA, DevOps) with role execution flows, tasks, timelines,
    handoff intelligence, workflow participation

════════════════════════════════════════════════════════════
IMPORTANT RULES FOR THIS PHASE
════════════════════════════════════════════════════════════

1. AGENTS ARE READ-ONLY in the system — no Create/Delete.
   Each agent is a fixed role in the pipeline. You will
   expose PATCH /agents/:agentId to update status, execution
   count, and success rate only (admin use).

2. There are exactly 5 agents, always seeded with fixed IDs:
   AG-001 = Frontend Agent
   AG-002 = Backend Agent
   AG-003 = QA Agent
   AG-004 = DevOps Agent
   AG-005 = UX Agent
   These IDs are hardcoded in frontend routing — do NOT change.

3. All sub-data (tasks, timelines, flows, handoff stats) is
   stored per-agent in separate DB tables. The frontend hooks
   call a single GET /agents/:agentId endpoint that returns
   ALL sub-data for that agent in one response.

4. The agents-overview page hook (useAgentsOverviewData) expects
   a single GET /agents/overview endpoint returning:
   { executionGraph, workflowParticipation, taskTrend,
     recentActivities, deploymentSummary, agents }

5. The agent-details hook (useAgent) expects GET /agents/:id
   returning: { agent, activities, flow, tasks, timeline,
                handoff, workflows }

6. The execution trend chart on AgentDetailsPage is currently
   hardcoded with static data (executionTrend array). After
   migration it must come from the API.

7. The QA agent detail page shows hardcoded values 1245, 12, 2
   for passed/failed/blocking tests. These must come from the
   API (stored in QA-specific metadata on the agent record).

════════════════════════════════════════════════════════════
STEP 1 — PRISMA MODELS
════════════════════════════════════════════════════════════

Add to prisma/schema.prisma:

model Agent {
  id                 String        @id  // e.g. "AG-001"
  agentName          String        @map("agent_name")
  agentType          String        @map("agent_type")
  status             AgentStatus   @default(Active)
  executionCount     Int           @default(0)  @map("execution_count")
  successRate        Float         @default(0)  @map("success_rate")
  avgCompletionTime  String        @default("0m") @map("avg_completion_time")
  lastExecutionAt    DateTime?     @map("last_execution_at")
  deploymentLinked   Boolean       @default(false) @map("deployment_linked")
  capabilities       Json          @default("[]")
  executionFlowInput  String?      @map("execution_flow_input")
  executionFlowOutput String?      @map("execution_flow_output")
  executionFlowProcess Json        @default("[]") @map("execution_flow_process")
  // QA-specific metadata
  passedTests        Int           @default(0) @map("passed_tests")
  failedTests        Int           @default(0) @map("failed_tests")
  blockingDefects    Int           @default(0) @map("blocking_defects")

  tasks              AgentTask[]
  timelines          AgentTimeline[]
  flowNodes          AgentFlowNode[]
  handoffStats       AgentHandoffStats?
  activities         AgentActivity[]
  executionTrend     AgentExecutionTrend[]

  @@map("agents")
}

enum AgentStatus {
  Active
  Idle
  Failed
}

model AgentTask {
  id          String   @id @default(uuid())
  agentId     String   @map("agent_id")
  taskId      String   @map("task_id") // e.g. "TSK-3001"
  workflowId  String   @map("workflow_id")
  projectId   String   @map("project_id")
  taskName    String   @map("task_name")
  priority    String   // HIGH | MEDIUM | LOW
  status      String   // IN_PROGRESS | BLOCKED | COMPLETED
  startedAt   DateTime @map("started_at")
  createdAt   DateTime @default(now()) @map("created_at")

  agent       Agent    @relation(fields: [agentId], references: [id])

  @@map("agent_tasks")
}

model AgentTimeline {
  id           String   @id @default(uuid())
  agentId      String   @map("agent_id")
  entryId      String   @map("entry_id") // e.g. "tl-1"
  stageName    String   @map("stage_name")
  duration     String
  status       String   // SUCCESS | FAILURE
  timestamp    DateTime
  errorDetails String?  @map("error_details")

  agent        Agent    @relation(fields: [agentId], references: [id])

  @@map("agent_timelines")
}

model AgentFlowNode {
  id              String   @id @default(uuid())
  agentId         String   @map("agent_id")
  nodeId          String   @map("node_id") // e.g. "fe-1"
  stageName       String   @map("stage_name")
  inputArtifact   String   @map("input_artifact")
  outputArtifact  String   @map("output_artifact")
  status          String   // COMPLETED|IN_PROGRESS|PENDING|FAILED
  timestamp       DateTime?
  sortOrder       Int      @default(0) @map("sort_order")
  handoffType     String?  @map("handoff_type") // INTERNAL | EXTERNAL | null

  agent           Agent    @relation(fields: [agentId], references: [id])

  @@map("agent_flow_nodes")
}

model AgentHandoffStats {
  id               String  @id @default(uuid())
  agentId          String  @unique @map("agent_id")
  received         Int     @default(0)
  delivered        Int     @default(0)
  downstreamAgent  String  @map("downstream_agent")
  artifactType     String  @map("artifact_type")

  agent            Agent   @relation(fields: [agentId], references: [id])

  @@map("agent_handoff_stats")
}

model AgentActivity {
  id          String   @id @default(uuid())
  agentId     String   @map("agent_id")
  activityId  String   @map("activity_id") // e.g. "ACT-9001"
  workflowId  String   @map("workflow_id")
  taskId      String   @map("task_id")
  action      String
  status      String   // Completed | Failed | In Progress
  duration    String?
  timestamp   DateTime

  // For overview activities (agentActivitiesData shape)
  agentName   String?  @map("agent_name")
  projectId   String?  @map("project_id")
  // overview status: SUCCESS | FAILED | RUNNING
  overviewStatus String? @map("overview_status")

  agent       Agent    @relation(fields: [agentId], references: [id])

  @@map("agent_activities")
}

model AgentExecutionTrend {
  id       String   @id @default(uuid())
  agentId  String   @map("agent_id")
  time     String   // e.g. "08:00"
  load     Int      @default(0)

  agent    Agent    @relation(fields: [agentId], references: [id])

  @@map("agent_execution_trends")
}

// Global task trend (not per-agent — covers all agents per date)
model AgentTaskTrend {
  id       String @id @default(uuid())
  date     String // e.g. "2026-02-07"
  frontend Int    @default(0)
  backend  Int    @default(0)
  qa       Int    @default(0)
  devops   Int    @default(0)
  ux       Int    @default(0)

  @@map("agent_task_trends")
}

// Deployment summary for overview page
model AgentDeploymentSummary {
  id               String   @id @default(uuid())
  totalDeployments Int      @default(0) @map("total_deployments")
  successful       Int      @default(0)
  failed           Int      @default(0)
  successRate      Float    @default(0) @map("success_rate")
  lastDeployment   DateTime @map("last_deployment")

  @@map("agent_deployment_summary")
}

Run:
  npx prisma migrate dev --name agents_module
  npx prisma generate

════════════════════════════════════════════════════════════
STEP 2 — SEED DATA
════════════════════════════════════════════════════════════

Create prisma/seeds/agents.seed.ts:

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedAgents() {

  // ── AGENTS ──────────────────────────────────────────────

  await prisma.agent.createMany({
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

  // AG-001 Frontend
  await prisma.agentFlowNode.createMany({
    data: [
      { agentId: 'AG-001', nodeId: 'fe-1', stageName: 'UX Design',            inputArtifact: 'Figma Link',           outputArtifact: 'UI Specs',               status: 'COMPLETED',   timestamp: new Date('2026-02-13T09:00:00Z'), sortOrder: 0, handoffType: 'INTERNAL' },
      { agentId: 'AG-001', nodeId: 'fe-2', stageName: 'UI Implementation',     inputArtifact: 'UI Specs',             outputArtifact: 'JSX/CSS',                status: 'COMPLETED',   timestamp: new Date('2026-02-13T10:00:00Z'), sortOrder: 1, handoffType: 'INTERNAL' },
      { agentId: 'AG-001', nodeId: 'fe-3', stageName: 'Component Development', inputArtifact: 'JSX/CSS',              outputArtifact: 'React Components',       status: 'IN_PROGRESS', timestamp: new Date('2026-02-13T11:00:00Z'), sortOrder: 2, handoffType: 'INTERNAL' },
      { agentId: 'AG-001', nodeId: 'fe-4', stageName: 'State Integration',     inputArtifact: 'React Components',     outputArtifact: 'Wired UI',               status: 'PENDING',     timestamp: null,                             sortOrder: 3, handoffType: 'INTERNAL' },
      { agentId: 'AG-001', nodeId: 'fe-5', stageName: 'API Binding',           inputArtifact: 'Wired UI',             outputArtifact: 'Functional Frontend',    status: 'PENDING',     timestamp: null,                             sortOrder: 4, handoffType: 'INTERNAL' },
      { agentId: 'AG-001', nodeId: 'fe-6', stageName: 'Handoff → Backend',     inputArtifact: 'Functional Frontend',  outputArtifact: 'Integration Contract',   status: 'PENDING',     timestamp: null,                             sortOrder: 5, handoffType: 'EXTERNAL' },
    ],
  });

  // AG-002 Backend
  await prisma.agentFlowNode.createMany({
    data: [
      { agentId: 'AG-002', nodeId: 'be-1', stageName: 'Receives UI Contracts',   inputArtifact: 'UI Contract',   outputArtifact: 'API Spec',       status: 'COMPLETED',   timestamp: new Date('2026-02-13T10:30:00Z'), sortOrder: 0, handoffType: 'INTERNAL' },
      { agentId: 'AG-002', nodeId: 'be-2', stageName: 'API Development',         inputArtifact: 'API Spec',      outputArtifact: 'REST Endpoints', status: 'COMPLETED',   timestamp: new Date('2026-02-13T11:30:00Z'), sortOrder: 1, handoffType: 'INTERNAL' },
      { agentId: 'AG-002', nodeId: 'be-3', stageName: 'Business Logic',          inputArtifact: 'REST Endpoints',outputArtifact: 'Services',       status: 'IN_PROGRESS', timestamp: new Date('2026-02-13T12:00:00Z'), sortOrder: 2, handoffType: 'INTERNAL' },
      { agentId: 'AG-002', nodeId: 'be-4', stageName: 'Database Integration',    inputArtifact: 'Services',      outputArtifact: 'Data Layer',     status: 'PENDING',     timestamp: null,                             sortOrder: 3, handoffType: 'INTERNAL' },
      { agentId: 'AG-002', nodeId: 'be-5', stageName: 'Security Implementation', inputArtifact: 'Data Layer',    outputArtifact: 'Secure API',     status: 'PENDING',     timestamp: null,                             sortOrder: 4, handoffType: 'INTERNAL' },
      { agentId: 'AG-002', nodeId: 'be-6', stageName: 'Handoff → QA',            inputArtifact: 'Secure API',    outputArtifact: 'QA Build',       status: 'PENDING',     timestamp: null,                             sortOrder: 5, handoffType: 'EXTERNAL' },
    ],
  });

  // AG-003 QA
  await prisma.agentFlowNode.createMany({
    data: [
      { agentId: 'AG-003', nodeId: 'qa-1', stageName: 'Receives Build',       inputArtifact: 'Dev Build',       outputArtifact: 'Test Environment',   status: 'COMPLETED',   timestamp: new Date('2026-02-13T11:15:00Z'), sortOrder: 0, handoffType: 'INTERNAL' },
      { agentId: 'AG-003', nodeId: 'qa-2', stageName: 'Test Case Generation', inputArtifact: 'Requirements',    outputArtifact: 'Test Suite',          status: 'COMPLETED',   timestamp: new Date('2026-02-13T12:00:00Z'), sortOrder: 1, handoffType: 'INTERNAL' },
      { agentId: 'AG-003', nodeId: 'qa-3', stageName: 'Automation Execution', inputArtifact: 'Test Suite',      outputArtifact: 'Execution Results',   status: 'IN_PROGRESS', timestamp: new Date('2026-02-13T12:30:00Z'), sortOrder: 2, handoffType: 'INTERNAL' },
      { agentId: 'AG-003', nodeId: 'qa-4', stageName: 'Bug Detection',        inputArtifact: 'Exec Results',    outputArtifact: 'Bug Reports',         status: 'PENDING',     timestamp: null,                             sortOrder: 3, handoffType: 'INTERNAL' },
      { agentId: 'AG-003', nodeId: 'qa-5', stageName: 'Regression Testing',   inputArtifact: 'Fixes',           outputArtifact: 'Stability Report',    status: 'PENDING',     timestamp: null,                             sortOrder: 4, handoffType: 'INTERNAL' },
      { agentId: 'AG-003', nodeId: 'qa-6', stageName: 'Validation Report',    inputArtifact: 'Full Results',    outputArtifact: 'Quality Sign-off',    status: 'PENDING',     timestamp: null,                             sortOrder: 5, handoffType: null },
    ],
  });

  // AG-004 DevOps
  await prisma.agentFlowNode.createMany({
    data: [
      { agentId: 'AG-004', nodeId: 'do-1', stageName: 'QA Approved Build',    inputArtifact: 'QA Sign-off',     outputArtifact: 'Release Candidate',  status: 'COMPLETED',   timestamp: new Date('2026-02-12T16:00:00Z'), sortOrder: 0, handoffType: 'INTERNAL' },
      { agentId: 'AG-004', nodeId: 'do-2', stageName: 'CI Pipeline Trigger',  inputArtifact: 'RC',              outputArtifact: 'Build Artifacts',    status: 'COMPLETED',   timestamp: new Date('2026-02-12T16:30:00Z'), sortOrder: 1, handoffType: 'INTERNAL' },
      { agentId: 'AG-004', nodeId: 'do-3', stageName: 'Containerization',     inputArtifact: 'Artifacts',       outputArtifact: 'Docker Images',       status: 'COMPLETED',   timestamp: new Date('2026-02-12T16:45:00Z'), sortOrder: 2, handoffType: 'INTERNAL' },
      { agentId: 'AG-004', nodeId: 'do-4', stageName: 'Infra Provisioning',   inputArtifact: 'IaC Scripts',     outputArtifact: 'Cloud Resources',     status: 'COMPLETED',   timestamp: new Date('2026-02-12T17:00:00Z'), sortOrder: 3, handoffType: 'INTERNAL' },
      { agentId: 'AG-004', nodeId: 'do-5', stageName: 'Deployment Release',   inputArtifact: 'Images',          outputArtifact: 'Live App',            status: 'COMPLETED',   timestamp: new Date('2026-02-12T17:30:00Z'), sortOrder: 4, handoffType: 'INTERNAL' },
      { agentId: 'AG-004', nodeId: 'do-6', stageName: 'Monitoring & Alerts',  inputArtifact: 'Live App',        outputArtifact: 'Metrics/Logs',        status: 'IN_PROGRESS', timestamp: new Date('2026-02-12T18:00:00Z'), sortOrder: 5, handoffType: null },
    ],
  });

  // AG-005 UX
  await prisma.agentFlowNode.createMany({
    data: [
      { agentId: 'AG-005', nodeId: 'ux-1', stageName: 'Requirement Intake',  inputArtifact: 'User Stories',   outputArtifact: 'Product Brief',    status: 'COMPLETED',   timestamp: new Date('2026-02-13T08:00:00Z'), sortOrder: 0, handoffType: 'INTERNAL' },
      { agentId: 'AG-005', nodeId: 'ux-2', stageName: 'User Research',       inputArtifact: 'Product Brief',  outputArtifact: 'User Personas',     status: 'COMPLETED',   timestamp: new Date('2026-02-13T08:30:00Z'), sortOrder: 1, handoffType: 'INTERNAL' },
      { agentId: 'AG-005', nodeId: 'ux-3', stageName: 'Wireframe Creation',  inputArtifact: 'Personas',       outputArtifact: 'Low-fi Wireframes', status: 'COMPLETED',   timestamp: new Date('2026-02-13T09:00:00Z'), sortOrder: 2, handoffType: 'INTERNAL' },
      { agentId: 'AG-005', nodeId: 'ux-4', stageName: 'Design System Setup', inputArtifact: 'Wireframes',     outputArtifact: 'UI Kit',            status: 'IN_PROGRESS', timestamp: new Date('2026-02-13T09:30:00Z'), sortOrder: 3, handoffType: 'INTERNAL' },
      { agentId: 'AG-005', nodeId: 'ux-5', stageName: 'Accessibility Review',inputArtifact: 'UI Kit',         outputArtifact: 'Audit Report',      status: 'PENDING',     timestamp: null,                             sortOrder: 4, handoffType: 'INTERNAL' },
      { agentId: 'AG-005', nodeId: 'ux-6', stageName: 'Handoff → Frontend',  inputArtifact: 'Final Designs',  outputArtifact: 'Figma Assets',      status: 'PENDING',     timestamp: null,                             sortOrder: 5, handoffType: 'EXTERNAL' },
    ],
  });

  // ── TASKS ────────────────────────────────────────────────

  await prisma.agentTask.createMany({
    data: [
      { agentId: 'AG-001', taskId: 'TSK-3001', workflowId: 'WF-2001', projectId: 'PRJ-1001', taskName: 'Dashboard Component Library',    priority: 'HIGH',   status: 'IN_PROGRESS', startedAt: new Date('2026-02-13T10:00:00Z') },
      { agentId: 'AG-001', taskId: 'TSK-3002', workflowId: 'WF-2001', projectId: 'PRJ-1001', taskName: 'Navigation State Integration',   priority: 'MEDIUM', status: 'IN_PROGRESS', startedAt: new Date('2026-02-13T11:00:00Z') },
      { agentId: 'AG-001', taskId: 'TSK-3003', workflowId: 'WF-2001', projectId: 'PRJ-1001', taskName: 'Login UI Refinement',            priority: 'LOW',    status: 'COMPLETED',   startedAt: new Date('2026-02-13T09:00:00Z') },
      { agentId: 'AG-002', taskId: 'TSK-4001', workflowId: 'WF-2001', projectId: 'PRJ-1001', taskName: 'User Authentication Service',    priority: 'HIGH',   status: 'IN_PROGRESS', startedAt: new Date('2026-02-13T11:30:00Z') },
      { agentId: 'AG-002', taskId: 'TSK-4002', workflowId: 'WF-2001', projectId: 'PRJ-1001', taskName: 'Data Migration Script',          priority: 'MEDIUM', status: 'BLOCKED',     startedAt: new Date('2026-02-13T10:00:00Z') },
      { agentId: 'AG-003', taskId: 'TSK-5001', workflowId: 'WF-2002', projectId: 'PRJ-1001', taskName: 'Security Audit Regression',      priority: 'HIGH',   status: 'IN_PROGRESS', startedAt: new Date('2026-02-13T12:30:00Z') },
      { agentId: 'AG-004', taskId: 'TSK-6001', workflowId: 'WF-2001', projectId: 'PRJ-1001', taskName: 'Kubernetes Cluster Scaling',     priority: 'HIGH',   status: 'IN_PROGRESS', startedAt: new Date('2026-02-13T14:00:00Z') },
      { agentId: 'AG-005', taskId: 'TSK-7001', workflowId: 'WF-2001', projectId: 'PRJ-1002', taskName: 'Sales App User Journey Map',     priority: 'HIGH',   status: 'COMPLETED',   startedAt: new Date('2026-02-13T08:00:00Z') },
    ],
  });

  // ── TIMELINES ────────────────────────────────────────────

  await prisma.agentTimeline.createMany({
    data: [
      { agentId: 'AG-001', entryId: 'tl-1',  stageName: 'UI Implementation',           duration: '45m',     status: 'SUCCESS',  timestamp: new Date('2026-02-13T10:00:00Z') },
      { agentId: 'AG-001', entryId: 'tl-2',  stageName: 'UX Design Review',            duration: '30m',     status: 'SUCCESS',  timestamp: new Date('2026-02-13T09:00:00Z') },
      { agentId: 'AG-001', entryId: 'tl-3',  stageName: 'API Integration',             duration: '15m',     status: 'FAILURE',  timestamp: new Date('2026-02-12T16:00:00Z'), errorDetails: 'Endpoint unreachable' },
      { agentId: 'AG-002', entryId: 'tl-4',  stageName: 'API Development',             duration: '1h 20m',  status: 'SUCCESS',  timestamp: new Date('2026-02-13T11:30:00Z') },
      { agentId: 'AG-002', entryId: 'tl-5',  stageName: 'Auth Schema Design',          duration: '40m',     status: 'SUCCESS',  timestamp: new Date('2026-02-13T10:30:00Z') },
      { agentId: 'AG-003', entryId: 'tl-6',  stageName: 'Automation Suite Generation', duration: '25m',     status: 'SUCCESS',  timestamp: new Date('2026-02-13T12:00:00Z') },
      { agentId: 'AG-003', entryId: 'tl-7',  stageName: 'Build Acceptance',            duration: '10m',     status: 'SUCCESS',  timestamp: new Date('2026-02-13T11:15:00Z') },
      { agentId: 'AG-004', entryId: 'tl-8',  stageName: 'Cloud Infra Setup',           duration: '15m',     status: 'SUCCESS',  timestamp: new Date('2026-02-12T17:00:00Z') },
      { agentId: 'AG-004', entryId: 'tl-9',  stageName: 'Docker Containerization',     duration: '12m',     status: 'SUCCESS',  timestamp: new Date('2026-02-12T16:45:00Z') },
      { agentId: 'AG-005', entryId: 'tl-10', stageName: 'User Research Analysis',      duration: '2h',      status: 'SUCCESS',  timestamp: new Date('2026-02-13T08:30:00Z') },
      { agentId: 'AG-005', entryId: 'tl-11', stageName: 'Product Briefing',            duration: '30m',     status: 'SUCCESS',  timestamp: new Date('2026-02-13T08:00:00Z') },
    ],
  });

  // ── HANDOFF STATS ────────────────────────────────────────

  await prisma.agentHandoffStats.createMany({
    data: [
      { agentId: 'AG-001', received: 45, delivered: 42, downstreamAgent: 'Backend Agent',    artifactType: 'UI Contracts' },
      { agentId: 'AG-002', received: 42, delivered: 38, downstreamAgent: 'QA Agent',          artifactType: 'REST APIs' },
      { agentId: 'AG-003', received: 38, delivered: 35, downstreamAgent: 'DevOps Agent',      artifactType: 'QA Approved Build' },
      { agentId: 'AG-004', received: 35, delivered: 35, downstreamAgent: 'Production',        artifactType: 'Live Release' },
      { agentId: 'AG-005', received: 15, delivered: 12, downstreamAgent: 'Frontend Agent',    artifactType: 'Figma Assets' },
    ],
  });

  // ── ACTIVITIES ───────────────────────────────────────────

  // Per-agent detail activities (agentsData.agentActivities shape)
  await prisma.agentActivity.createMany({
    data: [
      { agentId: 'AG-001', activityId: 'ACT-9001', workflowId: 'WF-2001', taskId: 'UI Component Build',  action: 'Component Generation', status: 'Completed',   duration: '12m', timestamp: new Date('2026-02-13T10:30:00Z') },
      { agentId: 'AG-002', activityId: 'ACT-9002', workflowId: 'WF-2001', taskId: 'API Integration',    action: 'Endpoint Creation',    status: 'Completed',   duration: '15m', timestamp: new Date('2026-02-13T11:00:00Z') },
      { agentId: 'AG-003', activityId: 'ACT-9003', workflowId: 'WF-2002', taskId: 'Regression Test',    action: 'Test Suite Execution', status: 'Completed',   duration: '8m',  timestamp: new Date('2026-02-13T11:15:00Z') },
    ],
  });

  // Overview activities (agentActivitiesData shape — these are shown in overview page)
  await prisma.agentActivity.createMany({
    data: [
      { agentId: 'AG-002', activityId: 'ACT-001', workflowId: 'WF-2001', taskId: '',  action: 'Generated API endpoints for Dashboard',    status: 'Completed',   overviewStatus: 'SUCCESS', agentName: 'Backend Agent',  projectId: 'PRJ-1001', duration: null, timestamp: new Date('2026-02-13T10:30:00Z') },
      { agentId: 'AG-001', activityId: 'ACT-002', workflowId: 'WF-2001', taskId: '',  action: 'Building UI components for Project Alpha',  status: 'In Progress', overviewStatus: 'RUNNING',  agentName: 'Frontend Agent', projectId: 'PRJ-1001', duration: null, timestamp: new Date('2026-02-13T11:00:00Z') },
      { agentId: 'AG-003', activityId: 'ACT-003', workflowId: 'WF-2002', taskId: '',  action: 'Regression testing failed on Edge cases',   status: 'Failed',      overviewStatus: 'FAILED',   agentName: 'QA Agent',       projectId: 'PRJ-1001', duration: null, timestamp: new Date('2026-02-13T09:45:00Z') },
      { agentId: 'AG-005', activityId: 'ACT-004', workflowId: 'WF-2001', taskId: '',  action: 'Optimized user journey for Sales App',      status: 'Completed',   overviewStatus: 'SUCCESS', agentName: 'UX Agent',       projectId: 'PRJ-1002', duration: null, timestamp: new Date('2026-02-13T08:15:00Z') },
    ],
  });

  // ── EXECUTION TREND (per-agent, for detail page chart) ───

  const trends: Record<string, { time: string; load: number }[]> = {
    'AG-001': [
      { time: '08:00', load: 10 }, { time: '09:00', load: 18 },
      { time: '10:00', load: 45 }, { time: '11:00', load: 32 },
      { time: '12:00', load: 56 }, { time: '13:00', load: 48 },
      { time: '14:00', load: 64 },
    ],
    'AG-002': [
      { time: '08:00', load: 8  }, { time: '09:00', load: 15 },
      { time: '10:00', load: 38 }, { time: '11:00', load: 50 },
      { time: '12:00', load: 44 }, { time: '13:00', load: 52 },
      { time: '14:00', load: 60 },
    ],
    'AG-003': [
      { time: '08:00', load: 5  }, { time: '09:00', load: 10 },
      { time: '10:00', load: 20 }, { time: '11:00', load: 30 },
      { time: '12:00', load: 45 }, { time: '13:00', load: 35 },
      { time: '14:00', load: 40 },
    ],
    'AG-004': [
      { time: '08:00', load: 3  }, { time: '09:00', load: 5  },
      { time: '10:00', load: 10 }, { time: '11:00', load: 8  },
      { time: '12:00', load: 12 }, { time: '13:00', load: 7  },
      { time: '14:00', load: 5  },
    ],
    'AG-005': [
      { time: '08:00', load: 12 }, { time: '09:00', load: 20 },
      { time: '10:00', load: 15 }, { time: '11:00', load: 25 },
      { time: '12:00', load: 18 }, { time: '13:00', load: 22 },
      { time: '14:00', load: 30 },
    ],
  };

  for (const [agentId, trendData] of Object.entries(trends)) {
    await prisma.agentExecutionTrend.createMany({
      data: trendData.map(t => ({ agentId, time: t.time, load: t.load })),
    });
  }

  // ── TASK TREND (global, for overview page chart) ─────────

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

  // ── DEPLOYMENT SUMMARY (global, for overview page) ───────

  await prisma.agentDeploymentSummary.create({
    data: {
      totalDeployments: 45,
      successful: 42,
      failed: 3,
      successRate: 93,
      lastDeployment: new Date('2026-02-12T18:00:00Z'),
    },
  });

  console.log('✅ Agents seed complete');
}

Update prisma/seed.ts to also call seedAgents:

import { seedSettings } from './seeds/settings.seed';
import { seedCore }     from './seeds/core.seed';
import { seedAgents }   from './seeds/agents.seed';

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await seedSettings();
  await seedCore();
  await seedAgents();
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());

Run: npx prisma db seed

════════════════════════════════════════════════════════════
STEP 3 — BACKEND MODULE STRUCTURE
════════════════════════════════════════════════════════════

Create inside src/modules/agents/:

agents/
├── agents.module.ts
├── agents.controller.ts
├── agents.service.ts
└── dto/
    └── update-agent.dto.ts

════════════════════════════════════════════════════════════
STEP 4 — DTO
════════════════════════════════════════════════════════════

--- update-agent.dto.ts ---

import { IsString, IsOptional, IsNumber, IsBoolean, IsIn } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateAgentDto {
  @ApiPropertyOptional({ enum: ['Active', 'Idle', 'Failed'] })
  @IsOptional() @IsIn(['Active', 'Idle', 'Failed'])
  status?: string;

  @ApiPropertyOptional()
  @IsOptional() @IsNumber()
  executionCount?: number;

  @ApiPropertyOptional()
  @IsOptional() @IsNumber()
  successRate?: number;

  @ApiPropertyOptional()
  @IsOptional() @IsString()
  avgCompletionTime?: string;

  @ApiPropertyOptional()
  @IsOptional() @IsBoolean()
  deploymentLinked?: boolean;
}

════════════════════════════════════════════════════════════
STEP 5 — SERVICE
════════════════════════════════════════════════════════════

--- agents.service.ts ---

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { UpdateAgentDto } from './dto/update-agent.dto';

@Injectable()
export class AgentsService {
  constructor(private prisma: PrismaService) {}

  // ─── Helper: format a single agent ────────────────────

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

    // Build execution graph nodes (static pipeline order)
    const stageMap: Record<string, string> = {
      'AG-005': 'DESIGN',
      'AG-001': 'BUILD',
      'AG-002': 'BUILD',
      'AG-003': 'TEST',
      'AG-004': 'DEPLOY',
    };

    const executionGraph = {
      nodes: agents.map(a => ({
        agentId: a.id,
        agentName: a.agentName,
        stage: stageMap[a.id] || 'BUILD',
        status: a.status === 'Active' ? 'RUNNING'
               : a.status === 'Idle'   ? 'IDLE'
               : 'FAILED',
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

    // Workflow participation from handoff stats
    const workflowParticipationFormatted = workflowParticipation.map(h => ({
      agentId: h.agentId,
      agentName: h.agent.agentName,
      workflows: ['WF-2001'],
      totalExecutions: h.agent.executionCount,
    }));

    return {
      executionGraph,
      workflowParticipation: workflowParticipationFormatted,
      taskTrend: taskTrend.map(t => ({
        date: t.date,
        frontend: t.frontend,
        backend: t.backend,
        qa: t.qa,
        devops: t.devops,
        ux: t.ux,
      })),
      recentActivities: overviewActivities.map(a => ({
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
      agents: agents.map(this.formatAgent.bind(this)),
    };
  }

  // ─── GET /agents (list) ────────────────────────────────

  async findAll() {
    const agents = await this.prisma.agent.findMany({
      orderBy: { id: 'asc' },
    });
    return agents.map(this.formatAgent.bind(this));
  }

  // ─── GET /agents/:id (full detail) ────────────────────

  async findOne(id: string) {
    const agent = await this.prisma.agent.findUnique({
      where: { id },
      include: {
        tasks:         { orderBy: { startedAt: 'desc' } },
        timelines:     { orderBy: { timestamp: 'desc' } },
        flowNodes:     { orderBy: { sortOrder: 'asc'  } },
        handoffStats:  true,
        activities:    {
          where: { overviewStatus: null },  // detail activities only
          orderBy: { timestamp: 'desc' },
        },
        executionTrend: { orderBy: { time: 'asc' } },
      },
    });

    if (!agent) throw new NotFoundException(`Agent ${id} not found`);

    // Build flow shape expected by useAgent hook
    const flow = {
      agentId: agent.id,
      nodes: agent.flowNodes.map(n => ({
        id: n.nodeId,
        agentId: n.agentId,
        stageName: n.stageName,
        inputArtifact: n.inputArtifact,
        outputArtifact: n.outputArtifact,
        status: n.status,
        timestamp: n.timestamp?.toISOString() || '',
      })),
      edges: agent.flowNodes
        .filter(n => n.handoffType !== null && n.sortOrder < agent.flowNodes.length - 1)
        .map((n, i, arr) => {
          const next = agent.flowNodes.find(fn => fn.sortOrder === n.sortOrder + 1);
          return next
            ? { fromStageId: n.nodeId, toStageId: next.nodeId, handoffType: n.handoffType || 'INTERNAL' }
            : null;
        })
        .filter(Boolean),
    };

    // Workflow participation derived from handoffStats
    const handoff = agent.handoffStats
      ? {
          received: agent.handoffStats.received,
          delivered: agent.handoffStats.delivered,
          downstreamAgent: agent.handoffStats.downstreamAgent,
          artifactType: agent.handoffStats.artifactType,
        }
      : null;

    const workflows = agent.tasks
      .map(t => t.workflowId)
      .filter((v, i, arr) => arr.indexOf(v) === i)
      .map(wfId => ({
        workflowId: wfId,
        stageName: agent.flowNodes.find(n => n.status === 'IN_PROGRESS')?.stageName || 'Idle',
        executions: Math.round(agent.executionCount / (agent.tasks.length || 1)),
        status: (agent.status === 'Active' ? 'ACTIVE' : 'IDLE') as 'ACTIVE' | 'IDLE' | 'COMPLETED',
      }));

    return {
      agent: {
        ...this.formatAgent(agent),
        // QA-specific fields
        passedTests: agent.passedTests,
        failedTests: agent.failedTests,
        blockingDefects: agent.blockingDefects,
        // workflowIds and projectIds derived from tasks
        workflowIds: [...new Set(agent.tasks.map(t => t.workflowId))],
        projectIds:  [...new Set(agent.tasks.map(t => t.projectId))],
        activeWorkflowId: agent.tasks.find(t => t.status === 'IN_PROGRESS')?.workflowId || null,
      },
      activities: agent.activities.map(a => ({
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
      tasks: agent.tasks.map(t => ({
        taskId: t.taskId,
        workflowId: t.workflowId,
        projectId: t.projectId,
        taskName: t.taskName,
        priority: t.priority,
        status: t.status,
        startedAt: t.startedAt.toISOString(),
      })),
      timeline: agent.timelines.map(t => ({
        id: t.entryId,
        stageName: t.stageName,
        duration: t.duration,
        status: t.status,
        timestamp: t.timestamp.toISOString(),
        errorDetails: t.errorDetails || undefined,
      })),
      handoff,
      workflows,
      executionTrend: agent.executionTrend.map(e => ({
        time: e.time,
        load: e.load,
      })),
    };
  }

  // ─── PATCH /agents/:id (admin update) ─────────────────

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

════════════════════════════════════════════════════════════
STEP 6 — CONTROLLER
════════════════════════════════════════════════════════════

--- agents.controller.ts ---

import {
  Controller, Get, Patch,
  Param, Body, UseGuards,
} from '@nestjs/common';
import {
  ApiTags, ApiBearerAuth, ApiOperation,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { AgentsService } from './agents.service';
import { UpdateAgentDto } from './dto/update-agent.dto';

@ApiTags('AI Agents')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('agents')
export class AgentsController {
  constructor(private agentsService: AgentsService) {}

  @Get('overview')
  @ApiOperation({ summary: 'Get agents overview — execution graph, trends, activities' })
  getOverview() {
    return this.agentsService.getOverview();
  }

  @Get()
  @ApiOperation({ summary: 'Get all agents (list)' })
  findAll() {
    return this.agentsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get full agent detail by ID (e.g. AG-001)' })
  findOne(@Param('id') id: string) {
    return this.agentsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update agent status/metrics (admin)' })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateAgentDto,
  ) {
    return this.agentsService.update(id, dto);
  }
}

════════════════════════════════════════════════════════════
STEP 7 — AGENTS MODULE + REGISTER IN APP
════════════════════════════════════════════════════════════

--- agents.module.ts ---

import { Module } from '@nestjs/common';
import { AgentsController } from './agents.controller';
import { AgentsService } from './agents.service';

@Module({
  controllers: [AgentsController],
  providers: [AgentsService],
  exports: [AgentsService],
})
export class AgentsModule {}

--- Update app.module.ts ---

import { AgentsModule } from './modules/agents/agents.module';

@Module({
  imports: [
    ...existing modules...,
    AgentsModule,  // ← add this
  ],
})
export class AppModule {}

════════════════════════════════════════════════════════════
STEP 8 — FRONTEND HOOK MIGRATION
════════════════════════════════════════════════════════════

--- use-agents-overview-data.ts ---

import { useQuery } from '@tanstack/react-query';
import axiosClient from '@/services/api/axios-client';

export function useAgentsOverviewData() {
  return useQuery({
    queryKey: ['agents-overview-data'],
    queryFn: async () => {
      const { data } = await axiosClient.get('/agents/overview');
      return data.data;
    },
  });
}

--- use-agents-data.ts ---

import { useQuery, useMutation, useQueryClient }
  from '@tanstack/react-query';
import axiosClient from '@/services/api/axios-client';

export function useAgentsData() {
  return useQuery({
    queryKey: ['agents-data'],
    queryFn: async () => {
      const { data } = await axiosClient.get('/agents');
      return { agents: data.data, activities: [] };
    },
  });
}

export function useAgent(agentId: string) {
  return useQuery({
    queryKey: ['agent-data', agentId],
    enabled: !!agentId,
    queryFn: async () => {
      const { data } = await axiosClient.get(`/agents/${agentId}`);
      return data.data;
    },
  });
}

export function useUpdateAgent() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...dto }: any) =>
      axiosClient.patch(`/agents/${id}`, dto).then(r => r.data.data),
    onSuccess: (_, vars) => {
      queryClient.invalidateQueries({ queryKey: ['agents-data'] });
      queryClient.invalidateQueries({ queryKey: ['agent-data', vars.id] });
      queryClient.invalidateQueries({ queryKey: ['agents-overview-data'] });
    },
  });
}

════════════════════════════════════════════════════════════
STEP 9 — FRONTEND COMPONENT FIXES
════════════════════════════════════════════════════════════

──────────────────────────────────────────────────────────
FIX 1 — agent-details-page.tsx: hardcoded executionTrend
──────────────────────────────────────────────────────────

Remove the hardcoded:
  const executionTrend = [
    { time: "08:00", load: 12 }, ...
  ];

The useAgent hook now returns executionTrend in the response.
Destructure and use it:
  const { agent, activities, flow, tasks,
          timeline, handoff, workflows,
          executionTrend } = data;

Pass to the AreaChart:
  <AreaChart data={executionTrend}>

──────────────────────────────────────────────────────────
FIX 2 — agent-details-page.tsx: hardcoded QA test counts
──────────────────────────────────────────────────────────

Remove hardcoded values 1245, 12, 2.
The agent object now contains passedTests, failedTests,
blockingDefects from the API.

Replace:
  <div className="text-2xl font-bold text-green-700">1,245</div>
  → <div ...>{agent.passedTests.toLocaleString()}</div>

  <div className="text-2xl font-bold text-red-700">12</div>
  → <div ...>{agent.failedTests}</div>

  <div className="text-2xl font-bold text-orange-700">2</div>
  → <div ...>{agent.blockingDefects}</div>

──────────────────────────────────────────────────────────
FIX 3 — agents-overview-page.tsx: hardcoded success rate
──────────────────────────────────────────────────────────

The overview page shows:
  <div className="text-2xl font-bold">96.4%</div>

Replace with computed value from real agents:
  const avgSuccessRate = data.agents.length > 0
    ? (data.agents.reduce((acc, a) => acc + a.successRate, 0)
       / data.agents.length).toFixed(1)
    : '0.0';

  <div className="text-2xl font-bold">{avgSuccessRate}%</div>

════════════════════════════════════════════════════════════
STEP 10 — VERIFY ALL ENDPOINTS
════════════════════════════════════════════════════════════

Test via Swagger at http://localhost:3001/api/v1/docs
Authorize with Bearer token first.

✅ GET /api/v1/agents/overview
   Returns: { data: { executionGraph, workflowParticipation,
              taskTrend, recentActivities, deploymentSummary,
              agents } }
   agents array should have 5 entries
   taskTrend should have 7 date entries
   recentActivities should have 4 entries

✅ GET /api/v1/agents
   Returns: { data: Agent[] } — 5 agents

✅ GET /api/v1/agents/AG-001
   Returns full Frontend Agent detail:
   { data: { agent, activities, flow, tasks, timeline,
             handoff, workflows, executionTrend } }
   flow.nodes should have 6 entries
   tasks array should have 3 entries (TSK-3001/3002/3003)
   timeline should have 3 entries (tl-1/2/3)
   executionTrend should have 7 time entries

✅ GET /api/v1/agents/AG-003
   agent.passedTests === 1245
   agent.failedTests === 12
   agent.blockingDefects === 2

✅ GET /api/v1/agents/AG-004
   agent.status === "Idle"
   flow.nodes should have 6 entries, all COMPLETED except
   last one which is IN_PROGRESS

✅ PATCH /api/v1/agents/AG-004
   Body: { "status": "Active" }
   Returns updated agent with status "Active"

Frontend checks:
✅ Agents Overview page loads real execution graph
✅ All 5 agent cards visible with live data
✅ Task Completion Trend chart shows 7-day data
✅ Deployment Summary shows 93% success rate
✅ Clicking "View Details" on agent card opens detail page
✅ Agent detail page shows real KPIs (not hardcoded)
✅ Role Execution Flow nodes match DB (6 per agent)
✅ Execution Load Trend chart uses API data (not hardcoded)
✅ QA agent detail shows passedTests/failedTests/blockingDefects
   from API (not hardcoded 1245/12/2)
✅ No mock imports remain in agents module

════════════════════════════════════════════════════════════
PHASE 3 COMPLETION CHECKLIST
════════════════════════════════════════════════════════════

[ ] Migration ran — 8 new agent tables created
[ ] Seed ran — 5 agents + all sub-data seeded
[ ] GET /agents/overview returns full shape
[ ] GET /agents/:id returns all 7 sub-data keys
[ ] PATCH /agents/:id updates agent fields
[ ] Overview page charts driven by real data
[ ] Agent detail execution trend from API
[ ] QA agent test metrics from API
[ ] No hardcoded data remains in agents module

Once all 9 items are checked, reply "Phase 3 complete"
and we move to Phase 4 — DEVELOPMENT GOVERNANCE
(Senior Developers, Approvals, Code Reviews,
Architecture Decisions).