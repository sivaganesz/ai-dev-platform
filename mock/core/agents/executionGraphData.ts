export type ExecutionNodeStatus = "IDLE" | "RUNNING" | "COMPLETED" | "FAILED";
export type ExecutionStage = "DESIGN" | "BUILD" | "TEST" | "DEPLOY";

export interface ExecutionNode {
  agentId: string;
  agentName: string;
  stage: ExecutionStage;
  status: ExecutionNodeStatus;
  workflowId: string;
}

export interface ExecutionEdge {
  from: string;
  to: string;
}

export const executionNodes: ExecutionNode[] = [
  {
    agentId: "AG-005",
    agentName: "UX Agent",
    stage: "DESIGN",
    status: "COMPLETED",
    workflowId: "WF-2001",
  },
  {
    agentId: "AG-001",
    agentName: "Frontend Agent",
    stage: "BUILD",
    status: "RUNNING",
    workflowId: "WF-2001",
  },
  {
    agentId: "AG-002",
    agentName: "Backend Agent",
    stage: "BUILD",
    status: "RUNNING",
    workflowId: "WF-2001",
  },
  {
    agentId: "AG-003",
    agentName: "QA Agent",
    stage: "TEST",
    status: "IDLE",
    workflowId: "WF-2001",
  },
  {
    agentId: "AG-004",
    agentName: "DevOps Agent",
    stage: "DEPLOY",
    status: "IDLE",
    workflowId: "WF-2001",
  },
];

export const executionEdges: ExecutionEdge[] = [
  { from: "AG-005", to: "AG-001" },
  { from: "AG-005", to: "AG-002" },
  { from: "AG-001", to: "AG-003" },
  { from: "AG-002", to: "AG-003" },
  { from: "AG-003", to: "AG-004" },
];
