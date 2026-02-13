import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ArrowRight, CheckCircle2, PlayCircle, XCircle, PauseCircle } from "lucide-react";
import type { ExecutionNode, ExecutionEdge } from "@/../mock/core/agents/executionGraphData";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface ExecutionGraphProps {
  nodes: ExecutionNode[];
  edges: ExecutionEdge[];
}

const idToPath: Record<string, string> = {
  "AG-001": "frontend",
  "AG-002": "backend",
  "AG-003": "qa",
  "AG-004": "devops",
  "AG-005": "ux",
};

export function ExecutionGraph({ nodes, edges }: ExecutionGraphProps) {
  const getStatusIcon = (status: ExecutionNode["status"]) => {
    switch (status) {
      case "COMPLETED":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case "RUNNING":
        return <PlayCircle className="h-4 w-4 text-blue-500 animate-pulse" />;
      case "FAILED":
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <PauseCircle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: ExecutionNode["status"]) => {
    switch (status) {
      case "COMPLETED":
        return "border-green-500 bg-green-500/10 hover:bg-green-500/20";
      case "RUNNING":
        return "border-blue-500 bg-blue-500/10 hover:bg-blue-500/20";
      case "FAILED":
        return "border-red-500 bg-red-500/10 hover:bg-red-500/20";
      default:
        return "border-muted bg-muted/10 hover:bg-muted/20";
    }
  };

  // Group nodes by stage to create a pipeline layout
  const stages: ExecutionNode["stage"][] = ["DESIGN", "BUILD", "TEST", "DEPLOY"];
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center justify-between">
          <div className="flex items-center gap-2">
            Agent Execution Pipeline
            <Badge variant="outline" className="ml-2 font-mono">WF-2001</Badge>
          </div>
          <span className="text-[10px] text-muted-foreground uppercase font-normal tracking-tighter italic">Click nodes to view intelligence</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 py-4">
          <TooltipProvider>
            {stages.map((stage, index) => {
              const stageNodes = nodes.filter(n => n.stage === stage);
              
              return (
                <div key={stage} className="flex flex-col items-center gap-4 flex-1">
                  <span className="text-xs font-bold text-muted-foreground tracking-widest uppercase">
                    {stage}
                  </span>
                  
                  <div className="flex flex-col gap-3 w-full items-center">
                    {stageNodes.map((node) => (
                      <Tooltip key={node.agentId}>
                        <TooltipTrigger asChild>
                          <Link 
                            to={`/agents/${idToPath[node.agentId] || node.agentId.toLowerCase()}`}
                            className={cn(
                              "flex items-center gap-3 p-3 rounded-lg border w-full max-w-[180px] transition-all cursor-pointer shadow-sm hover:shadow-md",
                              getStatusColor(node.status)
                            )}
                          >
                            {getStatusIcon(node.status)}
                            <div className="flex flex-col overflow-hidden">
                              <span className="text-sm font-medium truncate">{node.agentName}</span>
                              <span className="text-[10px] text-muted-foreground">{node.agentId}</span>
                            </div>
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="font-semibold">{node.agentName}</p>
                          <p className="text-xs">Workflow: {node.workflowId}</p>
                          <p className="text-xs capitalize">Status: {node.status.toLowerCase()}</p>
                          <p className="text-[10px] text-primary mt-1 font-bold">Click to view agent details →</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>

                  {index < stages.length - 1 && (
                    <div className="hidden md:block absolute" style={{ left: `${(index + 1) * 25 - 2}%`, top: '50%' }}>
                      <ArrowRight className="h-6 w-6 text-muted-foreground/30" />
                    </div>
                  )}
                </div>
              );
            })}
          </TooltipProvider>
        </div>
      </CardContent>
    </Card>
  );
}
