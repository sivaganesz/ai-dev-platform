import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import type { AgentActivity } from "@/../mock/core/agents/agentActivitiesData";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";

interface RecentAgentActivitiesProps {
  activities: AgentActivity[];
}

export function RecentAgentActivities({ activities }: RecentAgentActivitiesProps) {
  const getStatusIcon = (status: AgentActivity["status"]) => {
    switch (status) {
      case "SUCCESS":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case "FAILED":
        return <XCircle className="h-4 w-4 text-red-500" />;
      case "RUNNING":
        return <Loader2 className="h-4 w-4 text-blue-500 animate-spin" />;
    }
  };

  const getStatusBadge = (status: AgentActivity["status"]) => {
    switch (status) {
      case "SUCCESS":
        return <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20 text-[10px]">Success</Badge>;
      case "FAILED":
        return <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20 text-[10px]">Failed</Badge>;
      case "RUNNING":
        return <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20 text-[10px]">Running</Badge>;
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recent Agent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-4 p-3 rounded-lg border bg-muted/30 transition-colors hover:bg-muted/50">
                <div className="mt-1">{getStatusIcon(activity.status)}</div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{activity.action}</p>
                    {getStatusBadge(activity.status)}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="font-semibold text-primary/80">{activity.agentName}</span>
                    <span>•</span>
                    <span>Workflow: {activity.workflowId}</span>
                    <span>•</span>
                    <span>Project: {activity.projectId}</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground/70">
                    {new Date(activity.timestamp).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
