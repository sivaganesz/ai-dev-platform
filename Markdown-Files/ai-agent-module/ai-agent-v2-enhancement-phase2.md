
# PHASE 2 — REAL-TIME ROLE EXECUTION INTELLIGENCE

---

## 1. Live Task Tracker

Each role page must show:

* Current tasks
* Assigned workflows
* Execution state

Component:

```
agent-active-tasks.tsx
```

---

## Task Schema

```
interface AgentTask {
  taskId: string
  workflowId: string
  projectId: string
  taskName: string
  priority: "HIGH" | "MEDIUM" | "LOW"
  status: "IN_PROGRESS" | "BLOCKED" | "COMPLETED"
  startedAt: string
}
```

---

## 2. Role Execution Timeline

Display historical execution:

* Completed stages
* Duration
* Failure points

Component:

```
agent-execution-timeline.tsx
```

---

## 3. Handoff Intelligence Panel

Show:

* Tasks received
* Tasks delivered
* Downstream dependency

Example:

```
Frontend → Delivered 42 tasks → Backend
Backend → Delivered 38 APIs → QA
```

---

## 4. Workflow Mapping View

Each role page must list:

* Participating workflows
* Stage ownership
* Execution count

Component:

```
agent-workflow-participation.tsx
```

---

# Layout Integration (Agent Detail Page)

Final page layout:

```
Row 1 → Agent KPIs

Row 2 → Execution Trend Chart

Row 3 → Role Execution Flow  ⭐ NEW

Row 4 → Active Tasks + Timeline

Row 5 → Workflow Participation

Row 6 → Activity Logs
```

---

# Mock Data Location

Create:

```
mock/core/agents/execution/

├── roleExecutionFlows.ts
├── agentTasks.ts
├── agentTimelines.ts
└── handoffLogs.ts
```

Must align with:

```
projectsData.ts
workflowsData.ts
agentsData.ts
```

Shared IDs mandatory.

---

# UI/UX Requirements

* Horizontal scroll flow
* Glow active stage
* Tooltip stage details
* Artifact preview labels
* Status badges
* Handoff arrows

---

# Restrictions

Do NOT:

* Use real APIs
* Break ID alignment
* Create isolated agent data
* Ignore workflow linkage

---

# Final Deliverables

Generate:

1. Execution flow component
2. Role-based flow mock data
3. Task tracker widgets
4. Timeline visualization
5. Handoff intelligence panel
6. Workflow participation mapping

---

# Goal

Transform agent pages into:

> Real-Time Execution Intelligence Interfaces

So stakeholders can see:

* What each agent is doing
* Where execution is stuck
* Who owns each stage
* How work flows across roles

---

**End of Prompt — AI Agents Role Execution Flow Intelligence**
