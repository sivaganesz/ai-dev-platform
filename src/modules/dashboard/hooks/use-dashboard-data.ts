import { useQuery } from "@tanstack/react-query";
import { dashboardMetrics, recentActivities, teamPerformance } from "@/../mock/core/dashboard/dashboardData";
import { projectsData } from "@/../mock/core/projects/projectsData";
import { workflowsData } from "@/../mock/core/workflows/workflowsData";

export function useDashboardData() {
  return useQuery({
    queryKey: ["dashboard-data"],
    queryFn: async () => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      return {
        metrics: dashboardMetrics,
        activities: recentActivities,
        teamPerformance: teamPerformance,
        projects: projectsData,
        workflows: workflowsData,
      };
    },
  });
}
