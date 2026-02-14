import { useQuery } from "@tanstack/react-query";
import { 
  deploymentsData, 
  deploymentEvents, 
  deploymentStats,
  environmentHealth
} from "@/../mock/core/operations/deploymentsData";

export function useDeploymentsData() {
  return useQuery({
    queryKey: ["deployments-data"],
    queryFn: async () => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      return {
        deployments: deploymentsData,
        events: deploymentEvents,
        stats: deploymentStats,
        environmentHealth: environmentHealth
      };
    },
  });
}

export function useDeployment(id: string) {
  return useQuery({
    queryKey: ["deployment-data", id],
    queryFn: async () => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      const deployment = deploymentsData.find(d => d.id === id);
      const events = deploymentEvents.filter(e => e.deploymentId === id);

      return {
        deployment,
        events
      };
    },
  });
}
