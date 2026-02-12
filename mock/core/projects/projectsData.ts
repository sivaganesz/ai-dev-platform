import { v4 as uuid } from "uuid";

export interface Project {
  id: string;
  name: string;
  description: string;
  status: "ACTIVE" | "ON_HOLD" | "COMPLETED";
  startDate: string;
  endDate: string;
  team: string[];
  owner: string;
  tasksCount: number;
  completedTasks: number;
}

export const projectsData: Project[] = [
  {
    id: uuid(),
    name: "AI Chatbot",
    description: "Enterprise-level AI customer support chatbot",
    status: "ACTIVE",
    startDate: "2026-01-01",
    endDate: "2026-06-30",
    team: ["Frontend", "Backend", "ML"],
    owner: "Alice Johnson",
    tasksCount: 50,
    completedTasks: 20,
  },
  {
    id: uuid(),
    name: "Workflow Automation",
    description: "Automate sales and internal workflows",
    status: "ON_HOLD",
    startDate: "2026-02-01",
    endDate: "2026-07-31",
    team: ["Backend", "DevOps"],
    owner: "Bob Smith",
    tasksCount: 30,
    completedTasks: 10,
  },
  {
    id: uuid(),
    name: "Data Analytics Platform",
    description: "Platform for real-time business analytics",
    status: "COMPLETED",
    startDate: "2025-08-01",
    endDate: "2026-01-15",
    team: ["Frontend", "Backend", "QA"],
    owner: "Charlie Lee",
    tasksCount: 40,
    completedTasks: 40,
  },
  {
    id: uuid(),
    name: "Cloud Migration",
    description: "Migrating legacy systems to AWS",
    status: "ACTIVE",
    startDate: "2026-03-01",
    endDate: "2026-12-31",
    team: ["DevOps", "Backend"],
    owner: "David Miller",
    tasksCount: 60,
    completedTasks: 5,
  },
];
