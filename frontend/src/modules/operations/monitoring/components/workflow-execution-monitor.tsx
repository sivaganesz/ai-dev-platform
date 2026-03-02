import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { WorkflowExecution } from "@/../mock/core/operations/monitoringData";
import { GitBranch, Play, CheckCircle2, XCircle, Clock } from "lucide-react";

interface WorkflowExecutionMonitorProps {
  workflows: WorkflowExecution[];
}

export function WorkflowExecutionMonitor({ workflows }: WorkflowExecutionMonitorProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "RUNNING": return <Play className="h-3 w-3 text-blue-500 animate-pulse" />;
      case "COMPLETED": return <CheckCircle2 className="h-3 w-3 text-green-500" />;
      case "FAILED": return <XCircle className="h-3 w-3 text-red-500" />;
      default: return <GitBranch className="h-3 w-3 text-muted-foreground" />;
    }
  };

  return (
    <Card className="col-span-full md:col-span-1">
      <CardHeader>
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <GitBranch className="h-4 w-4" />
          Workflow Executions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {workflows.map((wf) => (
            <div key={wf.id} className="flex items-center justify-between p-2 rounded-lg bg-muted/30">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-1.5 rounded-full bg-background border shadow-sm">
                  {getStatusIcon(wf.status)}
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-medium truncate">{wf.name}</p>
                  <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{new Date(wf.startTime).toLocaleTimeString()}</span>
                    <span>•</span>
                    <span>{wf.duration}</span>
                  </div>
                </div>
              </div>
              <Badge variant={wf.status === "FAILED" ? "destructive" : "outline"} className="text-[10px]">
                {wf.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
