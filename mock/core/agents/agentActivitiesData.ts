export interface AgentActivity {
  id: string;
  agentId: string;
  agentName: string;
  workflowId: string;
  projectId: string;
  action: string;
  status: "SUCCESS" | "FAILED" | "RUNNING";
  timestamp: string;
}

export const agentActivitiesData: AgentActivity[] = [
  {
    id: "ACT-001",
    agentId: "AG-002",
    agentName: "Backend Agent",
    workflowId: "WF-2001",
    projectId: "PRJ-1001",
    action: "Generated API endpoints for Dashboard",
    status: "SUCCESS",
    timestamp: "2026-02-13T10:30:00Z",
  },
  {
    id: "ACT-002",
    agentId: "AG-001",
    agentName: "Frontend Agent",
    workflowId: "WF-2001",
    projectId: "PRJ-1001",
    action: "Building UI components for Project Alpha",
    status: "RUNNING",
    timestamp: "2026-02-13T11:00:00Z",
  },
  {
    id: "ACT-003",
    agentId: "AG-003",
    agentName: "QA Agent",
    workflowId: "WF-2002",
    projectId: "PRJ-1001",
    action: "Regression testing failed on Edge cases",
    status: "FAILED",
    timestamp: "2026-02-13T09:45:00Z",
  },
  {
    id: "ACT-004",
    agentId: "AG-005",
    agentName: "UX Agent",
    workflowId: "WF-2001",
    projectId: "PRJ-1002",
    action: "Optimized user journey for Sales App",
    status: "SUCCESS",
    timestamp: "2026-02-13T08:15:00Z",
  },
];
