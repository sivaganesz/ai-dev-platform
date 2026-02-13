import { v4 as uuid } from "uuid";
import { agentsData } from "./agentsData";
import { projectsData } from "../projects/projectsData";
import { workflowsData } from "../workflows/workflowsData";

export interface AgentDeployment {
  deploymentId: string;
  agentId: string;
  workflowId: string;
  projectId: string;
  status: "SUCCESS" | "FAILED";
  timestamp: string;
}

export const agentDeployments: AgentDeployment[] = [
  {
    deploymentId: uuid(),
    agentId: agentsData[3].id, // DevOps
    workflowId: workflowsData[1].id,
    projectId: projectsData[1].id,
    status: "FAILED",
    timestamp: "2026-02-13T08:45:00Z",
  },
  {
    deploymentId: uuid(),
    agentId: agentsData[3].id, // DevOps
    workflowId: workflowsData[3].id,
    projectId: projectsData[3].id,
    status: "SUCCESS",
    timestamp: "2026-02-12T14:30:00Z",
  },
  {
    deploymentId: uuid(),
    agentId: agentsData[1].id, // Backend (participation)
    workflowId: workflowsData[2].id,
    projectId: projectsData[2].id,
    status: "SUCCESS",
    timestamp: "2026-01-10T11:00:00Z",
  },
];
