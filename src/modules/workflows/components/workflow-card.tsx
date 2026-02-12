import { GitBranch, Box } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { type Workflow } from "@/../mock/core/workflows/workflowsData";
import { projectsData } from "@/../mock/core/projects/projectsData";

interface WorkflowCardProps {
  workflow: Workflow;
}

export function WorkflowCard({ workflow }: WorkflowCardProps) {
  const progress = Math.round((workflow.completedTasks / workflow.tasksCount) * 100);
  const projectName = projectsData.find(p => p.id === workflow.projectId)?.name || "Unknown Project";

  const statusColors = {
    RUNNING: "border-blue-500 text-blue-500",
    COMPLETED: "border-green-500 text-green-500",
    FAILED: "border-red-500 text-red-500",
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardTitle className="text-base font-bold truncate">
            {workflow.name}
          </CardTitle>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Box className="h-3 w-3" />
            <span>{projectName}</span>
          </div>
        </div>
        <Badge
          variant="outline"
          className={cn("text-[10px] uppercase", statusColors[workflow.status])}
        >
          {workflow.status}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-xs text-muted-foreground line-clamp-2">
          {workflow.description}
        </p>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-1">
              <GitBranch className="h-3 w-3" />
              Automation Progress
            </span>
            <span className="font-medium">{progress}%</span>
          </div>
          <Progress 
            value={progress} 
            className={cn(
              "h-1.5",
              workflow.status === "FAILED" && "[&>div]:bg-red-500"
            )} 
          />
        </div>

        <div className="flex flex-wrap gap-1 pt-1">
          {workflow.assignedTo.map((agent) => (
            <Badge key={agent} variant="secondary" className="text-[9px] px-1.5 py-0">
              {agent} Agent
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
