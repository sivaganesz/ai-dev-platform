import { useQuery } from "@tanstack/react-query";
import { agentsData, agentActivities } from "@/../mock/core/agents/agentsData";
import { roleExecutionFlows } from "@/../mock/core/agents/execution/roleExecutionFlows";
import { agentTasks } from "@/../mock/core/agents/execution/agentTasks";
import { agentTimelines } from "@/../mock/core/agents/execution/agentTimelines";
import { handoffLogs } from "@/../mock/core/agents/execution/handoffLogs";

export function useAgentsData() {
  return useQuery({
    queryKey: ["agents-data"],
    queryFn: async () => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      return {
        agents: agentsData,
        activities: agentActivities,
      };
    },
  });
}

export function useAgent(agentId: string) {
  return useQuery({
    queryKey: ["agent-data", agentId],
    queryFn: async () => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      const agent = agentsData.find((a) => a.agentId === agentId);
      const activities = agentActivities.filter((a) => a.agentId === agentId);
      const flow = roleExecutionFlows[agentId];
      const tasks = agentTasks[agentId] || [];
      const timeline = agentTimelines[agentId] || [];
      const handoff = handoffLogs[agentId];

      // Derived workflow participation
      const workflows = agent?.workflowIds.map(wfId => ({
        workflowId: wfId,
        stageName: flow?.nodes.find(n => n.status === "IN_PROGRESS")?.stageName || "Idle",
        executions: agent.workflowIds.length > 0 ? agent.executionCount / agent.workflowIds.length : 0,
        status: (agent.status === "Active" ? "ACTIVE" : "IDLE") as "ACTIVE" | "IDLE" | "COMPLETED",
      })) || [];

      return {
        agent,
        activities,
        flow,
        tasks,
        timeline,
        handoff,
        workflows
      };
    },
  });
}
