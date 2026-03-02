import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { PromptUsage } from "@/../mock/core/administration/promptsData";
import { GitBranch, CheckCircle2, XCircle } from "lucide-react";

interface UsageMappingTableProps {
  usages: PromptUsage[];
}

export function UsageMappingTable({ usages }: UsageMappingTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-bold">Recent Usage Mapping</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-[10px] font-bold uppercase">Workflow</TableHead>
              <TableHead className="text-[10px] font-bold uppercase">Date</TableHead>
              <TableHead className="text-[10px] font-bold uppercase text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {usages.map((usage) => (
              <TableRow key={usage.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <GitBranch className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs font-medium">{usage.workflowName}</span>
                  </div>
                </TableCell>
                <TableCell className="text-[10px] text-muted-foreground">
                  {new Date(usage.executionDate).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-right">
                  {usage.status === "SUCCESS" ? (
                    <CheckCircle2 className="h-3.5 w-3.5 text-green-500 ml-auto" />
                  ) : (
                    <XCircle className="h-3.5 w-3.5 text-red-500 ml-auto" />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
