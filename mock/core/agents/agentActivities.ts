import { v4 as uuid } from "uuid";
import { agentsData } from "./agentsData";
import { projectsData } from "../projects/projectsData";
import { workflowsData } from "../workflows/workflowsData";

export interface AgentActivity {
  id: string;
  agentId: string;
  projectId: string;
  workflowId: string;
  type: "TASK" | "DEPLOYMENT" | "BUG_FIX";
  description: string;
  status: "SUCCESS" | "FAILED" | "IN_PROGRESS";
  timestamp: string;
}

export const agentActivities: AgentActivity[] = [
  {
    id: uuid(),
    agentId: agentsData[0].id, // Frontend
    projectId: projectsData[0].id,
    workflowId: workflowsData[0].id,
    type: "TASK",
    description: "Implemented new user dashboard widgets.",
    status: "SUCCESS",
    timestamp: "2026-02-13T09:30:00Z",
  },
  {
    id: uuid(),
    agentId: agentsData[1].id, // Backend
    projectId: projectsData[0].id,
    workflowId: workflowsData[0].id,
    type: "TASK",
    description: "Optimized database queries for analytics.",
    status: "SUCCESS",
    timestamp: "2026-02-13T10:00:00Z",
  },
  {
    id: uuid(),
    agentId: agentsData[3].id, // DevOps
    projectId: projectsData[1].id,
    workflowId: workflowsData[1].id,
    type: "DEPLOYMENT",
    description: "Production deployment for Automation module.",
    status: "FAILED",
    timestamp: "2026-02-13T08:45:00Z",
  },
  {
    id: uuid(),
    agentId: agentsData[2].id, // QA
    projectId: projectsData[2].id,
    workflowId: workflowsData[2].id,
    type: "BUG_FIX",
    description: "Verified fix for report generation timeout.",
    status: "SUCCESS",
    timestamp: "2026-02-12T15:20:00Z",
  },
  {
    id: uuid(),
    agentId: agentsData[1].id, // Backend
    projectId: projectsData[3].id,
    workflowId: workflowsData[3].id,
    type: "TASK",
    description: "Configuring S3 integration for cloud migration.",
    status: "IN_PROGRESS",
    timestamp: "2026-02-13T11:00:00Z",
  },
];
