import { Calendar, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { type Project } from "@/../mock/core/projects/projectsData";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const progress = Math.round((project.completedTasks / project.tasksCount) * 100);

  const statusColors = {
    ACTIVE: "border-blue-500 text-blue-500",
    ON_HOLD: "border-yellow-500 text-yellow-500",
    COMPLETED: "border-green-500 text-green-500",
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-bold truncate pr-4">
          {project.name}
        </CardTitle>
        <Badge
          variant="outline"
          className={cn("text-[10px] uppercase", statusColors[project.status])}
        >
          {project.status.replace("_", " ")}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2 min-h-[40px]">
          {project.description}
        </p>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="h-3 w-3" />
            <span>{project.owner}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>Ends {new Date(project.endDate).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span>Progress</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="h-1.5" />
          <div className="flex justify-between text-[10px] text-muted-foreground">
            <span>{project.completedTasks} tasks done</span>
            <span>{project.tasksCount} total</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 pt-2">
          {project.team.map((m) => (
            <Badge key={m} variant="secondary" className="text-[9px] px-1.5 py-0">
              {m}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
