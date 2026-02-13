import type { Agent } from "@/../mock/core/agents/agentsData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

interface AgentCardProps {
  agent: Agent;
}

const idToPath: Record<string, string> = {
  "AG-001": "frontend",
  "AG-002": "backend",
  "AG-003": "qa",
  "AG-004": "devops",
  "AG-005": "ux",
};

export function AgentCard({ agent }: AgentCardProps) {
  const getStatusColor = (status: Agent["status"]) => {
    switch (status) {
      case "Active":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "Idle":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "Failed":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  const agentPath = idToPath[agent.agentId] || agent.agentId.toLowerCase();

  return (
    <Card className="hover:border-primary/50 transition-colors">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <div className="space-y-1">
          <CardTitle className="text-xl">{agent.agentName}</CardTitle>
          <p className="text-sm text-muted-foreground">{agent.agentId}</p>
        </div>
        <Badge variant="outline" className={getStatusColor(agent.status)}>
          {agent.status}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Type</span>
            <span className="font-medium">{agent.agentType}</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Success Rate</span>
              <span className="font-medium">{agent.successRate}%</span>
            </div>
            <Progress value={agent.successRate} className="h-1" />
          </div>
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Executions</p>
              <p className="text-sm font-semibold">{agent.executionCount}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Avg Time</p>
              <p className="text-sm font-semibold">{agent.avgCompletionTime}</p>
            </div>
          </div>
          <div className="pt-2">
            <Button asChild variant="outline" className="w-full">
              <Link to={`/agents/${agentPath}`}>View Details</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
