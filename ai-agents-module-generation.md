Module: AI Agents
Context: Enterprise AI Development Platform

You are generating the AI Agents Module for an AI-driven software development platform.
This module tracks agent-specific operations across projects and workflows, providing detailed analytics on performance, task completion, workflow participation, and deployments.

1. Technology Context

Use the same project stack:

React (Vite)

TypeScript

Tailwind CSS

ShadCN UI

TanStack Query

Recharts (for charts)

Install if missing:

npm install recharts

2. Folder Structure
src/modules/agents/
│
├── pages/
│   ├── agents-page.tsx        # Overview page
│   ├── frontend-agent.tsx
│   ├── backend-agent.tsx
│   ├── qa-agent.tsx
│   ├── devops-agent.tsx
│   └── ux-agent.tsx
│
├── components/
│   ├── agent-stats-card.tsx
│   ├── agent-performance-chart.tsx
│   ├── agent-activity-feed.tsx
│   ├── agent-deployment-summary.tsx
│   └── agent-workflow-chart.tsx
│
└── hooks/
    └── use-agent-data.ts

3. Mock Data Structure

Create mock source aligned with Projects and Workflows modules:

mock/
 └── core/
      ├── agents/
      │     ├── agentsData.ts
      │     ├── agentActivities.ts
      │     ├── agentPerformance.ts
      │     └── agentDeployments.ts
      ├── projects/
      │     └── projectsData.ts
      └── workflows/
            └── workflowsData.ts


Notes:

agentsData.ts includes all agent profiles and types.

agentActivities.ts references workflowId and projectId.

agentPerformance.ts tracks task completion by agent per team/project.

agentDeployments.ts references workflowId for deployment success/failures.

4. Data Schema Design
4.1 Agent Profile Schema
interface Agent {
  id: string
  name: string
  type: "FRONTEND" | "BACKEND" | "QA" | "DEVOPS" | "UX"
  assignedProjects: string[]  // projectIds
  assignedWorkflows: string[] // workflowIds
  isActive: boolean
}

4.2 Agent Activity Schema
interface AgentActivity {
  id: string
  agentId: string
  projectId: string
  workflowId: string
  type: "TASK" | "DEPLOYMENT" | "BUG_FIX"
  description: string
  status: "SUCCESS" | "FAILED" | "IN_PROGRESS"
  timestamp: string
}

4.3 Agent Performance Schema
interface AgentPerformance {
  agentId: string
  team: string
  completedTasks: number
  pendingTasks: number
  efficiencyScore: number // 0-100
}

4.4 Agent Deployment Schema
interface AgentDeployment {
  deploymentId: string
  agentId: string
  workflowId: string
  projectId: string
  status: "SUCCESS" | "FAILED"
  timestamp: string
}

5. Interconnection Logic

All mock data must match existing IDs:

projectId → agent.assignedProjects, workflow.projectId
workflowId → agent.assignedWorkflows, deployment.workflowId
agentId → agentActivities.agentId, agentPerformance.agentId, agentDeployments.agentId


Ensures full dashboard integration.

Agents’ metrics feed into Dashboard aggregate stats.

6. Module Widgets
6.1 Agent Stats Cards

Displays: Active agents, tasks completed, pending tasks, efficiency score

Component: agent-stats-card.tsx

UI: Icon, metric value, trend indicator, subtitle

6.2 Agent Workflow Participation Chart

Chart Type: Stacked bar / pie

Shows number of workflows per agent type (running, completed, failed)

Component: agent-workflow-chart.tsx

6.3 Agent Performance Chart

Chart Type: Line or bar

Shows task completion trends over time

Component: agent-performance-chart.tsx

6.4 Agent Activity Feed

Shows last 10 activities per agent (tasks, deployments, bug fixes)

Includes status badge, timestamp, project/workflow link

Component: agent-activity-feed.tsx

6.5 Agent Deployment Summary

Shows deployments handled by agents

Success rate, failed builds, last deployment time

Component: agent-deployment-summary.tsx

7. Data Fetching Layer

Hook: use-agent-data.ts

Responsibilities:

Fetch agent profile, performance, activity, deployment data

Aggregate metrics per agent type

Feed dashboard module with active agents, workflow participation, and deployment stats

Mock fetch only

8. Page Layout

Agents Overview Page (agents-page.tsx):

Row 1 → Agent Stats Cards (Active, Efficiency)
Row 2 → Agent Workflow Participation + Performance Charts
Row 3 → Activity Feed
Row 4 → Deployment Summary


Desktop → 4 columns

Tablet → 2 columns

Mobile → 1 column

Individual agent pages (frontend, backend, QA, DevOps, UX) filter data by agent type.

9. UI Design Requirements

Enterprise-grade cards, shadows, soft borders

Glass headers, gradient icons

Chart tooltips, legend labels

Filter by agent type, project, workflow

ShadCN Card components

10. Routing Integration

Routes:

/agents             → Agents Overview
/agents/frontend     → Frontend Agent
/agents/backend      → Backend Agent
/agents/qa           → QA Agent
/agents/devops       → DevOps Agent
/agents/ux           → UX Agent


Lazy load pages.

11. Backend Alignment Rules

UUID/string IDs

Follow relational structure

Include timestamps

Include status enums

Ready for future API integration

12. Restrictions

Do NOT:

Call real APIs

Implement CRUD

Build unrelated modules

Add authentication

Focus: visualization and mock data integration.

13. Final Output

Provide:

Folder structure

Mock schema files

Chart and feed components

Data aggregation logic

Page layout explanation

Goal

Build a serious, enterprise-grade AI Agents module:

Fully integrated with Dashboard, Projects, and Workflows

Accurate metrics per agent type

Realistic mock data for development and visualization

Supports dashboards with workflow, performance, activity, and deployment views

End of AI Agents module prompt ✅