import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ArrowRight, CheckCircle2, CircleDashed, Circle, AlertCircle, Share2 } from "lucide-react";
import type { RoleExecutionNode, RoleExecutionEdge } from "@/../mock/core/agents/execution/roleExecutionFlows";
import { cn } from "@/lib/utils";

interface AgentRoleExecutionFlowProps {
  nodes: RoleExecutionNode[];
  edges: RoleExecutionEdge[];
}

export function AgentRoleExecutionFlow({ nodes, edges }: AgentRoleExecutionFlowProps) {
  const getStatusIcon = (status: RoleExecutionNode["status"]) => {
    switch (status) {
      case "COMPLETED":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case "IN_PROGRESS":
        return <CircleDashed className="h-5 w-5 text-blue-500 animate-spin" />;
      case "FAILED":
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case "PENDING":
        return <Circle className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getStatusBg = (status: RoleExecutionNode["status"]) => {
    switch (status) {
      case "COMPLETED":
        return "bg-green-500/10 border-green-500/20";
      case "IN_PROGRESS":
        return "bg-blue-500/10 border-blue-500/50 ring-2 ring-blue-500/20";
      case "FAILED":
        return "bg-red-500/10 border-red-500/20";
      case "PENDING":
        return "bg-muted/50 border-muted";
    }
  };

  return (
    <Card className="w-full overflow-hidden">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          Role Execution Flow
          <Badge variant="secondary" className="text-[10px] uppercase tracking-wider">
            Lifecycle Model
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto pb-6">
        <div className="flex items-center min-w-max gap-0 py-4 px-2">
          <TooltipProvider>
            {nodes.map((node, index) => {
              const edge = edges.find(e => e.fromStageId === node.id);
              
              return (
                <div key={node.id} className="flex items-center">
                  {/* Node */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className={cn(
                        "flex flex-col items-center gap-2 p-4 rounded-xl border transition-all cursor-default w-40 relative",
                        getStatusBg(node.status)
                      )}>
                        {getStatusIcon(node.status)}
                        <span className="text-xs font-bold text-center line-clamp-2 h-8 flex items-center">
                          {node.stageName}
                        </span>
                        
                        {node.timestamp && (
                          <span className="text-[9px] text-muted-foreground absolute -bottom-5">
                            {new Date(node.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        )}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="w-64 p-3">
                      <div className="space-y-2">
                        <p className="font-bold border-b pb-1">{node.stageName}</p>
                        <div className="grid grid-cols-2 gap-2 text-[11px]">
                          <div>
                            <p className="text-muted-foreground uppercase font-bold text-[9px]">Input</p>
                            <p className="truncate">{node.inputArtifact}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground uppercase font-bold text-[9px]">Output</p>
                            <p className="truncate">{node.outputArtifact}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="w-full justify-center py-0 text-[10px]">
                          {node.status}
                        </Badge>
                      </div>
                    </TooltipContent>
                  </Tooltip>

                  {/* Connector / Edge */}
                  {index < nodes.length - 1 && (
                    <div className="flex flex-col items-center px-2">
                      <div className="flex items-center">
                        <div className={cn(
                          "h-[2px] w-8",
                          node.status === "COMPLETED" ? "bg-green-500" : "bg-muted"
                        )} />
                        {edge?.handoffType === "EXTERNAL" ? (
                          <div className="relative group">
                            <Share2 className="h-4 w-4 text-primary animate-pulse mx-1" />
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                              ROLE HANDOFF
                            </span>
                          </div>
                        ) : (
                          <ArrowRight className={cn(
                            "h-4 w-4 mx-1",
                            node.status === "COMPLETED" ? "text-green-500" : "text-muted-foreground"
                          )} />
                        )}
                        <div className={cn(
                          "h-[2px] w-8",
                          nodes[index + 1].status === "COMPLETED" || nodes[index + 1].status === "IN_PROGRESS" ? "bg-primary/50" : "bg-muted"
                        )} />
                      </div>
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
