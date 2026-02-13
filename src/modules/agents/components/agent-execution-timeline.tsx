import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CheckCircle2, XCircle, Clock } from "lucide-react";
import type { ExecutionTimelineEntry } from "@/../mock/core/agents/execution/agentTimelines";
import { cn } from "@/lib/utils";

interface AgentExecutionTimelineProps {
  timeline: ExecutionTimelineEntry[];
}

export function AgentExecutionTimeline({ timeline }: AgentExecutionTimelineProps) {
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          Execution Lifecycle Timeline
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[350px] pr-4">
          <div className="relative space-y-6 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-muted before:to-transparent">
            {timeline.map((entry) => (
              <div key={entry.id} className="relative flex items-start gap-6">
                <div className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-background shadow-sm z-10",
                  entry.status === "SUCCESS" ? "border-green-500/50" : "border-red-500/50"
                )}>
                  {entry.status === "SUCCESS" ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500" />
                  )}
                </div>
                
                <div className="flex flex-1 flex-col gap-1 py-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold leading-none">{entry.stageName}</p>
                    <span className="text-[10px] text-muted-foreground font-mono">
                      {new Date(entry.timestamp).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>Duration: {entry.duration}</span>
                    <span>•</span>
                    <Badge variant="outline" className={cn(
                      "text-[9px] py-0",
                      entry.status === "SUCCESS" ? "text-green-500" : "text-red-500"
                    )}>
                      {entry.status}
                    </Badge>
                  </div>

                  {entry.errorDetails && (
                    <p className="mt-2 text-[11px] text-red-500/80 bg-red-500/5 p-2 rounded border border-red-500/10 italic">
                      Error: {entry.errorDetails}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
