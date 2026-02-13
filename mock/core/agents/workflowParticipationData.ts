export interface WorkflowParticipation {
  agentId: string;
  agentName: string;
  workflows: string[];
  totalExecutions: number;
}

export const workflowParticipationData: WorkflowParticipation[] = [
  {
    agentId: "AG-001",
    agentName: "Frontend Agent",
    workflows: ["WF-2001"],
    totalExecutions: 156,
  },
  {
    agentId: "AG-002",
    agentName: "Backend Agent",
    workflows: ["WF-2001"],
    totalExecutions: 142,
  },
  {
    agentId: "AG-003",
    agentName: "QA Agent",
    workflows: ["WF-2001", "WF-2002"],
    totalExecutions: 89,
  },
  {
    agentId: "AG-004",
    agentName: "DevOps Agent",
    workflows: ["WF-2001", "WF-2002"],
    totalExecutions: 45,
  },
  {
    agentId: "AG-005",
    agentName: "UX Agent",
    workflows: ["WF-2001"],
    totalExecutions: 67,
  },
];
