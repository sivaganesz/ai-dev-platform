import { v4 as uuid } from "uuid";
import { projectsData } from "../projects/projectsData";
import { workflowsData } from "../workflows/workflowsData";

export interface Agent {
  id: string;
  name: string;
  type: "FRONTEND" | "BACKEND" | "QA" | "DEVOPS" | "UX";
  assignedProjects: string[]; // projectIds
  assignedWorkflows: string[]; // workflowIds
  isActive: boolean;
}

export const agentsData: Agent[] = [
  {
    id: uuid(),
    name: "Frontend Agent",
    type: "FRONTEND",
    assignedProjects: [projectsData[0].id, projectsData[2].id],
    assignedWorkflows: [workflowsData[0].id],
    isActive: true,
  },
  {
    id: uuid(),
    name: "Backend Agent",
    type: "BACKEND",
    assignedProjects: [projectsData[0].id, projectsData[1].id, projectsData[2].id, projectsData[3].id],
    assignedWorkflows: [workflowsData[0].id, workflowsData[1].id, workflowsData[2].id],
    isActive: true,
  },
  {
    id: uuid(),
    name: "QA Agent",
    type: "QA",
    assignedProjects: [projectsData[2].id],
    assignedWorkflows: [workflowsData[2].id],
    isActive: true,
  },
  {
    id: uuid(),
    name: "DevOps Agent",
    type: "DEVOPS",
    assignedProjects: [projectsData[1].id, projectsData[3].id],
    assignedWorkflows: [workflowsData[1].id, workflowsData[3].id],
    isActive: true,
  },
  {
    id: uuid(),
    name: "UX Agent",
    type: "UX",
    assignedProjects: [projectsData[0].id],
    assignedWorkflows: [],
    isActive: false,
  },
];
