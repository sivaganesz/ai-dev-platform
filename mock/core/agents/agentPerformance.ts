import { agentsData } from "./agentsData";

export interface AgentPerformance {
  agentId: string;
  team: string;
  completedTasks: number;
  pendingTasks: number;
  efficiencyScore: number; // 0-100
}

export const agentPerformance: AgentPerformance[] = [
  {
    agentId: agentsData[0].id,
    team: "Frontend",
    completedTasks: 42,
    pendingTasks: 5,
    efficiencyScore: 92,
  },
  {
    agentId: agentsData[1].id,
    team: "Backend",
    completedTasks: 56,
    pendingTasks: 12,
    efficiencyScore: 88,
  },
  {
    agentId: agentsData[2].id,
    team: "QA",
    completedTasks: 38,
    pendingTasks: 3,
    efficiencyScore: 95,
  },
  {
    agentId: agentsData[3].id,
    team: "DevOps",
    completedTasks: 24,
    pendingTasks: 2,
    efficiencyScore: 85,
  },
  {
    agentId: agentsData[4].id,
    team: "UX",
    completedTasks: 15,
    pendingTasks: 0,
    efficiencyScore: 78,
  },
];
