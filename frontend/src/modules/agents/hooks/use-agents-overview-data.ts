import { useQuery } from "@tanstack/react-query";
import { executionNodes, executionEdges } from "@/../mock/core/agents/executionGraphData";
import { workflowParticipationData } from "@/../mock/core/agents/workflowParticipationData";
import { taskTrendData } from "@/../mock/core/agents/taskTrendData";
import { agentActivitiesData } from "@/../mock/core/agents/agentActivitiesData";
import { deploymentSummaryData } from "@/../mock/core/agents/deploymentSummaryData";
import { agentsData } from "@/../mock/core/agents/agentsData";

export function useAgentsOverviewData() {
  return useQuery({
    queryKey: ["agents-overview-data"],
    queryFn: async () => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      return {
        executionGraph: {
          nodes: executionNodes,
          edges: executionEdges,
        },
        workflowParticipation: workflowParticipationData,
        taskTrend: taskTrendData,
        recentActivities: agentActivitiesData,
        deploymentSummary: deploymentSummaryData,
        agents: agentsData,
      };
    },
  });
}
