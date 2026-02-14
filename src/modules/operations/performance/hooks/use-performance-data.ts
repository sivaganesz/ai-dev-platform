import { useQuery } from "@tanstack/react-query";
import { 
  performanceMetrics, 
  latencyHistory, 
  buildDurations, 
  agentMetrics, 
  workflowCompletionTimes, 
  performanceInsights,
  performanceStats 
} from "@/../mock/core/operations/performanceData";

export function usePerformanceData() {
  return useQuery({
    queryKey: ["performance-data"],
    queryFn: async () => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      return {
        metrics: performanceMetrics,
        latencyHistory: latencyHistory,
        buildDurations: buildDurations,
        agentMetrics: agentMetrics,
        workflows: workflowCompletionTimes,
        insights: performanceInsights,
        stats: performanceStats
      };
    },
  });
}
