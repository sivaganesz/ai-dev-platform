import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Play, RotateCcw, GitBranch, Clock, BarChart3 } from "lucide-react";
import type { Pipeline } from "../cicdData";
import { cn } from "@/lib/utils";

interface PipelineCardProps {
  pipeline: Pipeline;
  onSelect: (pipeline: Pipeline) => void;
  isSelected: boolean;
}

export function PipelineCard({ pipeline, onSelect, isSelected }: PipelineCardProps) {
  const statusColors = {
    SUCCESS: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    FAILED: "text-red-500 bg-red-500/10 border-red-500/20",
    IN_PROGRESS: "text-blue-500 bg-blue-500/10 border-blue-500/20 animate-pulse",
  };

  return (
    <Card 
      className={cn(
        "cursor-pointer transition-all hover:border-primary/50",
        isSelected && "border-primary ring-1 ring-primary"
      )}
      onClick={() => onSelect(pipeline)}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <h3 className="font-semibold leading-none">{pipeline.name}</h3>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <GitBranch className="h-3 w-3" />
            {pipeline.repository}
          </div>
        </div>
        <Badge variant="outline" className={cn("capitalize", statusColors[pipeline.status])}>
          {pipeline.status.replace("_", " ").toLowerCase()}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground flex items-center gap-1">
              <BarChart3 className="h-3 w-3" /> Success Rate
            </span>
            <span className="font-medium">{pipeline.successRate}%</span>
          </div>
          <Progress value={pipeline.successRate} className="h-1.5" />
        </div>
        
        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-muted-foreground uppercase">Last Execution</span>
            <span className="text-xs flex items-center gap-1 font-medium">
              <Clock className="h-3 w-3" />
              {new Date(pipeline.lastExecution).toLocaleDateString()}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-muted-foreground uppercase">Stages</span>
            <span className="text-xs font-medium">{pipeline.stages.length} Stages</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center gap-2 border-t bg-muted/50 px-6 py-3">
        <Button variant="outline" size="sm" className="h-8 flex-1 text-xs" onClick={(e) => e.stopPropagation()}>
          <RotateCcw className="mr-2 h-3 w-3" />
          Rerun
        </Button>
        <Button size="sm" className="h-8 flex-1 text-xs" onClick={(e) => e.stopPropagation()}>
          <Play className="mr-2 h-3 w-3" />
          Trigger
        </Button>
      </CardFooter>
    </Card>
  );
}
