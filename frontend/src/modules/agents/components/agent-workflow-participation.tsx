import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { GitBranch, UserCheck, BarChart3 } from "lucide-react";

interface WorkflowMapping {
  workflowId: string;
  stageName: string;
  executions: number;
  status: "ACTIVE" | "COMPLETED" | "IDLE";
}

interface AgentWorkflowParticipationProps {
  workflows: WorkflowMapping[];
}

export function AgentWorkflowParticipation({ workflows }: AgentWorkflowParticipationProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <GitBranch className="h-5 w-5 text-primary" />
          Workflow Execution Mapping
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="text-[10px] uppercase font-bold">Workflow ID</TableHead>
              <TableHead className="text-[10px] uppercase font-bold">Stage Ownership</TableHead>
              <TableHead className="text-[10px] uppercase font-bold">Execution Count</TableHead>
              <TableHead className="text-[10px] uppercase font-bold text-right">State</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {workflows.map((wf) => (
              <TableRow key={wf.workflowId} className="group cursor-default">
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="font-mono text-[10px]">{wf.workflowId}</Badge>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <UserCheck className="h-3 w-3 text-muted-foreground" />
                    <span className="text-sm font-medium">{wf.stageName}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-3 w-3 text-muted-foreground" />
                    <span className="text-sm font-medium">{wf.executions}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <Badge variant={wf.status === "ACTIVE" ? "default" : "secondary"} className="text-[9px]">
                    {wf.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
