export interface AgentTask {
  taskId: string;
  workflowId: string;
  projectId: string;
  taskName: string;
  priority: "HIGH" | "MEDIUM" | "LOW";
  status: "IN_PROGRESS" | "BLOCKED" | "COMPLETED";
  startedAt: string;
}

export const agentTasks: Record<string, AgentTask[]> = {
  "AG-001": [
    { taskId: "TSK-3001", workflowId: "WF-2001", projectId: "PRJ-1001", taskName: "Dashboard Component Library", priority: "HIGH", status: "IN_PROGRESS", startedAt: "2026-02-13T10:00:00Z" },
    { taskId: "TSK-3002", workflowId: "WF-2001", projectId: "PRJ-1001", taskName: "Navigation State Integration", priority: "MEDIUM", status: "IN_PROGRESS", startedAt: "2026-02-13T11:00:00Z" },
    { taskId: "TSK-3003", workflowId: "WF-2001", projectId: "PRJ-1001", taskName: "Login UI Refinement", priority: "LOW", status: "COMPLETED", startedAt: "2026-02-13T09:00:00Z" },
  ],
  "AG-002": [
    { taskId: "TSK-4001", workflowId: "WF-2001", projectId: "PRJ-1001", taskName: "User Authentication Service", priority: "HIGH", status: "IN_PROGRESS", startedAt: "2026-02-13T11:30:00Z" },
    { taskId: "TSK-4002", workflowId: "WF-2001", projectId: "PRJ-1001", taskName: "Data Migration Script", priority: "MEDIUM", status: "BLOCKED", startedAt: "2026-02-13T10:00:00Z" },
  ],
  "AG-003": [
    { taskId: "TSK-5001", workflowId: "WF-2002", projectId: "PRJ-1001", taskName: "Security Audit Regression", priority: "HIGH", status: "IN_PROGRESS", startedAt: "2026-02-13T12:30:00Z" },
  ],
  "AG-004": [
    { taskId: "TSK-6001", workflowId: "WF-2001", projectId: "PRJ-1001", taskName: "Kubernetes Cluster Scaling", priority: "HIGH", status: "IN_PROGRESS", startedAt: "2026-02-13T14:00:00Z" },
  ],
  "AG-005": [
    { taskId: "TSK-7001", workflowId: "WF-2001", projectId: "PRJ-1002", taskName: "Sales App User Journey Map", priority: "HIGH", status: "COMPLETED", startedAt: "2026-02-13T08:00:00Z" },
  ]
};
