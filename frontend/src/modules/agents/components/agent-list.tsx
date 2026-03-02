import type { Agent } from "@/../mock/core/agents/agentsData";
import { AgentCard } from "./agent-card";

interface AgentListProps {
  agents: Agent[];
}

export function AgentList({ agents }: AgentListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {agents.map((agent) => (
        <AgentCard key={agent.agentId} agent={agent} />
      ))}
    </div>
  );
}
