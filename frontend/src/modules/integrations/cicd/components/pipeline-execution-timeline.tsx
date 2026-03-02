import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Pipeline } from "../cicdData";
import { CheckCircle2, XCircle, Loader2, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

interface PipelineExecutionTimelineProps {
  pipeline: Pipeline | null;
}

export function PipelineExecutionTimeline({ pipeline }: PipelineExecutionTimelineProps) {
  if (!pipeline) {
    return (
      <Card className="h-full flex items-center justify-center text-muted-foreground p-8">
        Select a pipeline to view execution details
      </Card>
    );
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'SUCCESS': return <CheckCircle2 className="h-5 w-5 text-emerald-500" />;
      case 'FAILED': return <XCircle className="h-5 w-5 text-red-500" />;
      case 'IN_PROGRESS': return <Loader2 className="h-5 w-5 text-blue-500 animate-spin" />;
      default: return <Circle className="h-5 w-5 text-muted-foreground" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Execution Timeline: {pipeline.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-2.5 before:h-full before:w-0.5 before:-translate-x-px before:bg-muted">
          {pipeline.stages.map((stage) => (
            <div key={stage.id} className="relative flex items-start gap-4 pl-8">
              <div className="absolute left-0 flex h-5 w-5 items-center justify-center rounded-full bg-background ring-2 ring-muted">
                {getStatusIcon(stage.status)}
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">{stage.name}</span>
                  <Badge variant="outline" className="text-[10px] font-mono">
                    {stage.duration || '--'}
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Badge 
                    variant="outline" 
                    className={cn(
                      "text-[10px] capitalize",
                      stage.status === 'SUCCESS' && "border-emerald-500/20 text-emerald-500",
                      stage.status === 'FAILED' && "border-red-500/20 text-red-500",
                      stage.status === 'IN_PROGRESS' && "border-blue-500/20 text-blue-500"
                    )}
                  >
                    {stage.status.replace("_", " ").toLowerCase()}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
