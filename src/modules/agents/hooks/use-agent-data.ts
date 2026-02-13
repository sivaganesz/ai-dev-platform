import { useQuery } from "@tanstack/react-query";
import { agentsData } from "@/../mock/core/agents/agentsData";
import { agentActivities } from "@/../mock/core/agents/agentActivities";
import { agentPerformance } from "@/../mock/core/agents/agentPerformance";
import { agentDeployments } from "@/../mock/core/agents/agentDeployments";

export const useAgentData = () => {
  return useQuery({
    queryKey: ["agent-data"],
    queryFn: async () => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 300));
      
      return {
        agents: agentsData,
        activities: agentActivities,
        performance: agentPerformance,
        deployments: agentDeployments,
      };
    },
  });
};

export const useAgentByType = (type: "FRONTEND" | "BACKEND" | "QA" | "DEVOPS" | "UX") => {
  const { data, ...rest } = useAgentData();
  
  const agent = data?.agents.find(a => a.type === type);
  const activities = data?.activities.filter(a => a.agentId === agent?.id) || [];
  const performance = data?.performance.find(p => p.agentId === agent?.id);
  const deployments = data?.deployments.filter(d => d.agentId === agent?.id) || [];
  
  return {
    ...rest,
    data: agent ? {
      agent,
      activities,
      performance,
      deployments,
    } : null,
  };
};
