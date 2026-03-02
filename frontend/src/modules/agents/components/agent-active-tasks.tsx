import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, AlertCircle, CheckCircle2 } from "lucide-react";
import type { AgentTask } from "@/../mock/core/agents/execution/agentTasks";
import { cn } from "@/lib/utils";

interface AgentActiveTasksProps {
  tasks: AgentTask[];
}

export function AgentActiveTasks({ tasks }: AgentActiveTasksProps) {
  const getStatusIcon = (status: AgentTask["status"]) => {
    switch (status) {
      case "IN_PROGRESS":
        return <Clock className="h-4 w-4 text-blue-500 animate-pulse" />;
      case "BLOCKED":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      case "COMPLETED":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
    }
  };

  const getPriorityColor = (priority: AgentTask["priority"]) => {
    switch (priority) {
      case "HIGH":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      case "MEDIUM":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "LOW":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
    }
  };

  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center justify-between">
          Active Execution Tasks
          <Badge variant="outline">{tasks.filter(t => t.status === "IN_PROGRESS").length} Running</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div key={task.taskId} className="p-3 rounded-lg border bg-muted/30 space-y-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-bold">{task.taskName}</p>
                  <p className="text-[10px] text-muted-foreground font-mono">{task.taskId} • {task.workflowId}</p>
                </div>
                <Badge variant="outline" className={cn("text-[9px]", getPriorityColor(task.priority))}>
                  {task.priority}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {getStatusIcon(task.status)}
                  <span className="text-[11px] font-medium uppercase tracking-wider">
                    {task.status.replace("_", " ")}
                  </span>
                </div>
                <span className="text-[10px] text-muted-foreground">
                  Started: {new Date(task.startedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>

              {task.status === "IN_PROGRESS" && (
                <Progress value={45} className="h-1" />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
