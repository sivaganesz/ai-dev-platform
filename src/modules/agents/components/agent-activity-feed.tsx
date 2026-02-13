import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type AgentActivity } from "@/../mock/core/agents/agentActivities";
import { type Agent } from "@/../mock/core/agents/agentsData";
import { CheckCircle2, XCircle, Loader2, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

interface AgentActivityFeedProps {
  activities: AgentActivity[];
  agents: Agent[];
}

const statusIcons = {
  SUCCESS: CheckCircle2,
  FAILED: XCircle,
  IN_PROGRESS: Loader2,
};

const statusColors = {
  SUCCESS: "text-green-500",
  FAILED: "text-red-500",
  IN_PROGRESS: "text-blue-500",
};

export function AgentActivityFeed({ activities, agents }: AgentActivityFeedProps) {
  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle className="text-sm font-medium">Recent Agent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const agent = agents.find(a => a.id === activity.agentId);
            const StatusIcon = statusIcons[activity.status];
            
            return (
              <div key={activity.id} className="flex items-start gap-3 border-b border-muted pb-4 last:border-0 last:pb-0">
                <div className="mt-0.5 rounded-full bg-primary/10 p-1.5">
                  <Bot className="h-3 w-3 text-primary" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium">
                      {agent?.name} • {activity.type}
                    </p>
                    <span className="text-[10px] text-muted-foreground">
                      {new Date(activity.timestamp).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground">{activity.description}</p>
                  <div className="flex items-center gap-2 pt-1">
                    <div className="flex items-center gap-1">
                      <StatusIcon className={cn("h-3 w-3", statusColors[activity.status], activity.status === "IN_PROGRESS" && "animate-spin")} />
                      <span className={cn("text-[10px] font-medium", statusColors[activity.status])}>
                        {activity.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
