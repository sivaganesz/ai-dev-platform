# AI AGENTS — OVERVIEW INTELLIGENCE PROMPTS (V2)

Context: Enterprise AI Development Platform
Module Path: `src/modules/agents/overview/`

These prompts extend the Agents Overview Page into an **Execution Intelligence System** instead of a static listing UI.

All mock data MUST align with:

* Projects → PRJ-XXXX
* Workflows → WF-XXXX
* Agents → AG-XXX
* Deployments → DEP-XXX

---

# 1️⃣ EXECUTION GRAPH PROMPT

File:
`agents-execution-graph.md`

Component:
`execution-graph.tsx`

Mock Source:
`mock/core/agents/executionGraphData.ts`

---

## Objective

Visualize how AI agents execute software workflows in a pipeline model.

Agents must appear as orchestrated nodes, not isolated cards.

---

## Graph Flow Model

```
UX → Frontend → Backend → QA → DevOps
```

Each node represents an execution stage.

---

## Data Schema

```
interface ExecutionNode {
  agentId: string
  agentName: string
  stage: "DESIGN" | "BUILD" | "TEST" | "DEPLOY"
  status: "IDLE" | "RUNNING" | "COMPLETED" | "FAILED"
  workflowId: string
}

interface ExecutionEdge {
  from: string
  to: string
}
```

---

## Mock Data Example

```
[
  {
    agentId: "AG-001",
    agentName: "UX Agent",
    stage: "DESIGN",
    status: "COMPLETED",
    workflowId: "WF-2001"
  },
  {
    agentId: "AG-002",
    agentName: "Frontend Agent",
    stage: "BUILD",
    status: "RUNNING",
    workflowId: "WF-2001"
  }
]
```

---

## Visualization Requirements

* Directed graph / pipeline layout
* Node colors by status:

  * Running → Blue
  * Completed → Green
  * Failed → Red
* Edge arrows showing execution flow
* Tooltip → workflow + project

---

# 2️⃣ WORKFLOW PARTICIPATION PROMPT

File:
`agents-workflow-participation.md`

Component:
`workflow-participation-chart.tsx`

Mock Source:
`mock/core/agents/workflowParticipationData.ts`

---

## Objective

Show how agents participate across workflows.

This visualizes orchestration load distribution.

---

## Data Schema

```
interface WorkflowParticipation {
  agentId: string
  agentName: string
  workflows: string[]
  totalExecutions: number
}
```

---

## Mock Data

```
[
  {
    agentId: "AG-001",
    agentName: "UX Agent",
    workflows: ["WF-2001"],
    totalExecutions: 12
  },
  {
    agentId: "AG-003",
    agentName: "QA Agent",
    workflows: ["WF-2001", "WF-2002"],
    totalExecutions: 28
  }
]
```

---

## Chart Type

Stacked Bar / Horizontal Bar

X-Axis → Execution count
Y-Axis → Agents

---

# 3️⃣ TASK COMPLETION TREND PROMPT

File:
`agents-task-trend.md`

Component:
`task-completion-trend.tsx`

Mock Source:
`mock/core/agents/taskTrendData.ts`

---

## Objective

Track productivity trends of agents over time.

Shows execution velocity + delivery health.

---

## Data Schema

```
interface TaskTrend {
  date: string
  frontend: number
  backend: number
  qa: number
  devops: number
}
```

---

## Mock Data

```
[
  {
    date: "2026-02-10",
    frontend: 12,
    backend: 9,
    qa: 15,
    devops: 3
  },
  {
    date: "2026-02-11",
    frontend: 10,
    backend: 11,
    qa: 13,
    devops: 4
  }
]
```

---

## Chart Requirements

* Multi-line chart
* Tooltip → execution counts
* Legend → agent types

---

# 4️⃣ RECENT AGENT ACTIVITIES PROMPT

File:
`agents-recent-activities.md`

Component:
`recent-agent-activities.tsx`

Mock Source:
`mock/core/agents/agentActivitiesData.ts`

---

## Objective

Display real-time cross-agent execution logs.

This is system-wide — not per agent.

---

## Data Schema

```
interface AgentActivity {
  id: string
  agentId: string
  agentName: string
  workflowId: string
  projectId: string
  action: string
  status: "SUCCESS" | "FAILED" | "RUNNING"
  timestamp: string
}
```

---

## Mock Data

```
[
  {
    id: "ACT-001",
    agentId: "AG-002",
    agentName: "Frontend Agent",
    workflowId: "WF-2001",
    projectId: "PRJ-1001",
    action: "Generated dashboard UI",
    status: "SUCCESS",
    timestamp: "2026-02-13T10:30:00Z"
  }
]
```

---

# 5️⃣ DEPLOYMENT SUMMARY PROMPT

File:
`agents-deployment-summary.md`

Component:
`deployment-summary.tsx`

Mock Source:
`mock/core/agents/deploymentSummaryData.ts`

---

## Objective

Track deployments executed via agent workflows.

This links Agents ↔ DevOps ↔ Releases.

---

## Data Schema

```
interface DeploymentSummary {
  totalDeployments: number
  successful: number
  failed: number
  successRate: number
  lastDeployment: string
}
```

---

## Mock Data

```
{
  totalDeployments: 3,
  successful: 2,
  failed: 1,
  successRate: 67,
  lastDeployment: "2026-02-12T18:00:00Z"
}
```

---

# 6️⃣ OVERVIEW PAGE LAYOUT

File:
`agents-overview-page.tsx`

---

## Layout Grid

```
Row 1 → Stats Cards

Row 2 → Execution Graph (Full width)

Row 3 → Workflow Participation | Task Trend

Row 4 → Recent Activities | Deployment Summary
```

---

# 7️⃣ Folder Structure

```
src/modules/agents/

├── pages/
│   └── agents-overview-page.tsx
│
├── components/
│   ├── execution-graph.tsx
│   ├── workflow-participation-chart.tsx
│   ├── task-completion-trend.tsx
│   ├── recent-agent-activities.tsx
│   └── deployment-summary.tsx
│
└── hooks/
    └── use-agents-overview-data.ts
```

---

# 8️⃣ Integration Rules

All data must map:

```
workflowId → workflows module
projectId → projects module
deploymentId → deployments module
agentId → agents module
```

No isolated mock data allowed.

---

# FINAL GOAL

Transform Agents Overview into:

* Execution Intelligence Hub
* Workflow Orchestration Map
* Productivity Monitor
* Deployment Support Analyzer

Not just an agent listing UI.

**End of AI Agents Overview Prompts**
