# Module: Dashboard

# Context: Enterprise AI Development Platform

You are generating the **Dashboard Module** for an AI-driven software development platform.

This dashboard serves as the **central system intelligence layer** that aggregates data from multiple modules and visualizes platform operations in real time.

---

# 1. Technology Context

Use the existing project stack:

* React (Vite)
* TypeScript
* Tailwind CSS
* ShadCN UI
* TanStack Query
* Recharts (for charts)

Install if missing:

```
npm install recharts
```

---

# 2. Folder Structure

Create module structure:

```
src/modules/dashboard/
│
├── pages/
│   └── dashboard-page.tsx
│
├── components/
│   ├── stats-card.tsx
│   ├── projects-overview-chart.tsx
│   ├── workflow-status-chart.tsx
│   ├── team-performance-chart.tsx
│   ├── recent-activities.tsx
│   └── deployment-summary.tsx
│
└── hooks/
    └── use-dashboard-data.ts
```

---

# 3. Mock Data Structure

Use demo data only.

Create mock source:

```
mock/
 └── core/
      ├── dashboard/
      │     └── dashboardData.ts
      ├── projects/
      │     └── projectsData.ts
      └── workflows/
            └── workflowsData.ts
```

---

# 4. Data Schema Design

Design backend-ready structures.

---

## Dashboard Aggregate Schema

```
interface DashboardMetrics {
  totalProjects: number
  activeProjects: number
  completedProjects: number

  totalWorkflows: number
  activeWorkflows: number
  failedWorkflows: number

  totalAgents: number
  activeAgents: number

  deploymentsThisWeek: number
}
```

---

## Recent Activity Schema

```
interface Activity {
  id: string
  type: "PROJECT" | "WORKFLOW" | "DEPLOYMENT" | "AGENT"
  title: string
  description: string
  status: "SUCCESS" | "FAILED" | "IN_PROGRESS"
  timestamp: string
  user: string
}
```

---

## Team Performance Schema

```
interface TeamPerformance {
  team: string
  completedTasks: number
  pendingTasks: number
}
```

---

# 5. Interconnection Logic

Dashboard must aggregate data from:

* Projects module
* Workflows module
* Agents (mock summary)
* Deployments

Relationships must use shared IDs.

Example:

```
projectId → workflow.projectId
workflowId → deployment.workflowId
```

---

# 6. Dashboard Widgets

Create the following widgets:

---

## 1. Stats Overview Cards

Display:

* Total Projects
* Active Workflows
* Active Agents
* Deployments This Week

Component:

`stats-card.tsx`

UI:

* Icon
* Metric value
* Trend indicator
* Subtitle

---

## 2. Projects Overview Chart

Chart Type: Bar Chart

Shows:

* Active
* Completed
* Pending projects

Component:

`projects-overview-chart.tsx`

---

## 3. Workflow Status Chart

Chart Type: Pie / Donut

Displays:

* Running
* Completed
* Failed workflows

Component:

`workflow-status-chart.tsx`

---

## 4. Team Performance Chart

Chart Type: Stacked Bar

Shows:

* Tasks completed vs pending
* Per team (Frontend, Backend, QA, DevOps)

Component:

`team-performance-chart.tsx`

---

## 5. Recent Activities Feed

Displays:

* Last 10 system activities
* Status badge
* Timestamp
* User / Agent source

Component:

`recent-activities.tsx`

---

## 6. Deployment Summary

Displays:

* Total deployments
* Success rate
* Failed builds
* Last deployment time

Component:

`deployment-summary.tsx`

---

# 7. Data Fetching Layer

Use TanStack Query.

Hook:

```
use-dashboard-data.ts
```

Responsibilities:

* Fetch dashboardData
* Combine project + workflow stats
* Provide aggregated metrics

(Mock fetch only — no APIs)

---

# 8. Page Layout

File:

`dashboard-page.tsx`

Layout grid:

```
Row 1 → Stats Cards
Row 2 → Projects Chart + Workflow Chart
Row 3 → Team Performance
Row 4 → Activities + Deployment Summary
```

Use responsive grid:

* Desktop → 4 columns
* Tablet → 2 columns
* Mobile → 1 column

---

# 9. UI Design Requirements

Must look enterprise-grade:

* Card shadows
* Soft borders
* Glass headers
* Gradient icons
* Chart tooltips
* Legend labels

Use ShadCN Card components.

---

# 10. Routing Integration

Route already exists:

```
/
```

Ensure dashboard loads at root.

Lazy load page.

---

# 11. Backend Alignment Rules

Mock data must:

* Use UUID/string IDs
* Follow relational structure
* Include timestamps
* Include status enums
* Be API-ready

This ensures backend can reuse schemas directly.

---

# 12. Restrictions

Do NOT:

* Call real APIs
* Implement CRUD
* Build project/workflow pages
* Add authentication

Dashboard visualization only.

---

# 13. Final Output

Provide:

1. Folder structure
2. Mock schema files
3. Chart implementations
4. Data aggregation logic
5. Page layout preview explanation

---

# Goal

Build a realistic enterprise dashboard that visualizes:

* AI development lifecycle
* Project execution
* Workflow automation
* Agent performance
* Deployment operations

Using interconnected mock data aligned for future backend integration.

**End of dashboard.md**
