export interface DashboardMetrics {
  totalProjects: number;
  activeProjects: number;
  completedProjects: number;
  totalWorkflows: number;
  activeWorkflows: number;
  failedWorkflows: number;
  totalAgents: number;
  activeAgents: number;
  deploymentsThisWeek: number;
}

export interface Activity {
  id: string;
  type: "PROJECT" | "WORKFLOW" | "DEPLOYMENT" | "AGENT";
  title: string;
  description: string;
  status: "SUCCESS" | "FAILED" | "IN_PROGRESS";
  timestamp: string;
  user: string;
}

export interface TeamPerformance {
  team: string;
  completedTasks: number;
  pendingTasks: number;
}

export const dashboardMetrics: DashboardMetrics = {
  totalProjects: 12,
  activeProjects: 8,
  completedProjects: 4,
  totalWorkflows: 45,
  activeWorkflows: 12,
  failedWorkflows: 3,
  totalAgents: 6,
  activeAgents: 5,
  deploymentsThisWeek: 28,
};

export const recentActivities: Activity[] = [
  {
    id: "a1",
    type: "DEPLOYMENT",
    title: "Production Deploy",
    description: "Alpha AI successfully deployed to production",
    status: "SUCCESS",
    timestamp: "2026-02-13T09:00:00Z",
    user: "DevOps Agent",
  },
  {
    id: "a2",
    type: "WORKFLOW",
    title: "UI Component Library",
    description: "Build failed due to linting errors",
    status: "FAILED",
    timestamp: "2026-02-13T08:45:00Z",
    user: "Frontend Agent",
  },
  {
    id: "a3",
    type: "PROJECT",
    title: "New Project: Zeta",
    description: "Project Zeta initialized by admin",
    status: "SUCCESS",
    timestamp: "2026-02-13T08:30:00Z",
    user: "Siva Muthu",
  },
  {
    id: "a4",
    type: "AGENT",
    title: "QA Agent assigned",
    description: "Assigned to Project Delta for regression testing",
    status: "IN_PROGRESS",
    timestamp: "2026-02-13T08:15:00Z",
    user: "System",
  },
];

export const teamPerformance: TeamPerformance[] = [
  { team: "Frontend", completedTasks: 24, pendingTasks: 8 },
  { team: "Backend", completedTasks: 18, pendingTasks: 12 },
  { team: "QA", completedTasks: 30, pendingTasks: 5 },
  { team: "DevOps", completedTasks: 12, pendingTasks: 4 },
];
