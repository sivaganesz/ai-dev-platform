import { useQuery } from "@tanstack/react-query";
import { 
  servicesHealth, 
  uptimeHistory, 
  agentsActivity, 
  workflowExecutions, 
  monitoringAlerts 
} from "@/../mock/core/operations/monitoringData";

export function useMonitoringData() {
  return useQuery({
    queryKey: ["monitoring-data"],
    queryFn: async () => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      return {
        services: servicesHealth,
        uptimeHistory: uptimeHistory,
        agents: agentsActivity,
        workflows: workflowExecutions,
        alerts: monitoringAlerts
      };
    },
  });
}
