import { v4 as uuid } from "uuid";
import { projectsData } from "@/../mock/core/projects/projectsData";

export interface Workflow {
  id: string;
  projectId: string;
  name: string;
  description: string;
  status: "RUNNING" | "COMPLETED" | "FAILED";
  assignedTo: string[];
  startDate: string;
  endDate: string;
  tasksCount: number;
  completedTasks: number;
}

export const workflowsData: Workflow[] = [
  {
    id: uuid(),
    projectId: projectsData[0].id, // Matches "AI Chatbot"
    name: "Intent Recognition Setup",
    description: "Setup NLP models for intent recognition",
    status: "RUNNING",
    assignedTo: ["ML", "Backend"],
    startDate: "2026-01-05",
    endDate: "2026-03-10",
    tasksCount: 10,
    completedTasks: 3,
  },
  {
    id: uuid(),
    projectId: projectsData[1].id, // Matches "Workflow Automation"
    name: "Email Automation Workflow",
    description: "Automate email sending for leads",
    status: "FAILED",
    assignedTo: ["Backend", "DevOps"],
    startDate: "2026-02-10",
    endDate: "2026-04-15",
    tasksCount: 8,
    completedTasks: 5,
  },
  {
    id: uuid(),
    projectId: projectsData[2].id, // Matches "Data Analytics Platform"
    name: "Report Generation",
    description: "Generate daily business analytics reports",
    status: "COMPLETED",
    assignedTo: ["Backend", "QA"],
    startDate: "2025-08-10",
    endDate: "2026-01-10",
    tasksCount: 15,
    completedTasks: 15,
  },
  {
    id: uuid(),
    projectId: projectsData[3].id, // Matches "Cloud Migration"
    name: "S3 Bucket Configuration",
    description: "Configure secure S3 buckets for data storage",
    status: "RUNNING",
    assignedTo: ["DevOps"],
    startDate: "2026-03-05",
    endDate: "2026-04-01",
    tasksCount: 5,
    completedTasks: 1,
  },
];
