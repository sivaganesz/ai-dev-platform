import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { AgentCost } from "@/../mock/core/administration/billingData";
import { Bot, DollarSign } from "lucide-react";

interface AgentCostAnalysisProps {
  agents: AgentCost[];
}

export function AgentCostAnalysis({ agents }: AgentCostAnalysisProps) {
  const maxCost = Math.max(...agents.map(a => a.totalCost));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-bold flex items-center gap-2">
          <Bot className="h-4 w-4" />
          Agent Efficiency Analysis
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {agents.map((agent) => (
          <div key={agent.agentId} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold">{agent.agentName}</span>
              <span className="text-xs font-bold">${agent.totalCost.toFixed(2)}</span>
            </div>
            <div className="space-y-1">
              <Progress value={(agent.totalCost / maxCost) * 100} className="h-1.5" />
              <div className="flex justify-between text-[9px] text-muted-foreground uppercase font-bold tracking-tighter">
                <span>{agent.executionCount} executions</span>
                <span className="flex items-center gap-0.5">
                  <DollarSign className="h-2 w-2" />
                  {agent.avgCostPerExecution.toFixed(2)} / exec
                </span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
