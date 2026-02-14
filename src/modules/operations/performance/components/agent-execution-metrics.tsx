import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import type { AgentMetric } from "@/../mock/core/operations/performanceData";
import { Bot, Zap, Target } from "lucide-react";

interface AgentExecutionMetricsProps {
  agents: AgentMetric[];
}

export function AgentExecutionMetrics({ agents }: AgentExecutionMetricsProps) {
  return (
    <Card className="col-span-full md:col-span-1">
      <CardHeader>
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <Bot className="h-4 w-4" />
          Agent Execution Speed
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {agents.map((agent) => (
            <div key={agent.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold">{agent.agentName}</span>
                <Badge variant={agent.avgExecutionTime > 2000 ? "destructive" : "secondary"} className="text-[10px]">
                  {agent.avgExecutionTime}ms avg
                </Badge>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Zap className="h-3 w-3 text-yellow-500" />
                  <div className="flex-1">
                    <div className="flex justify-between text-[9px] mb-1">
                      <span>Throughput</span>
                      <span>{agent.taskThroughput} tasks/h</span>
                    </div>
                    <Progress value={agent.taskThroughput * 2} className="h-1" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-3 w-3 text-green-500" />
                  <div className="flex-1">
                    <div className="flex justify-between text-[9px] mb-1">
                      <span>Success Rate</span>
                      <span>{agent.successRate}%</span>
                    </div>
                    <Progress value={agent.successRate} className="h-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
