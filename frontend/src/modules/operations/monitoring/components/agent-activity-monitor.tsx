import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import type { AgentActivity } from "@/../mock/core/operations/monitoringData";
import { Bot, Cpu } from "lucide-react";

interface AgentActivityMonitorProps {
  agents: AgentActivity[];
}

export function AgentActivityMonitor({ agents }: AgentActivityMonitorProps) {
  return (
    <Card className="col-span-full md:col-span-1">
      <CardHeader>
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <Bot className="h-4 w-4" />
          Agent Activity Monitor
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {agents.map((agent) => (
            <div key={agent.id} className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-semibold">{agent.name}</p>
                  <p className="text-[10px] text-muted-foreground">{agent.type}</p>
                </div>
                <Badge variant={agent.status === "BUSY" ? "default" : "secondary"} className="text-[10px]">
                  {agent.status}
                </Badge>
              </div>
              {agent.currentTask && (
                <p className="text-[10px] italic text-muted-foreground truncate">
                  Task: {agent.currentTask}
                </p>
              )}
              <div className="flex items-center gap-2">
                <Cpu className="h-3 w-3 text-muted-foreground" />
                <Progress value={agent.load} className="h-1.5 flex-1" />
                <span className="text-[10px] font-mono w-8 text-right">{agent.load}%</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
