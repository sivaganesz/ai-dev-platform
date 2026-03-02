import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import type { DeploymentPolicy, EnvironmentStrategy } from "@/../mock/core/settings/companyData";
import { Server } from "lucide-react";

interface InfrastructurePolicyPanelProps {
  deployments: DeploymentPolicy[];
  strategies: EnvironmentStrategy[];
}

export function InfrastructurePolicyPanel({ deployments, strategies }: InfrastructurePolicyPanelProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-bold flex items-center gap-2">
          <Server className="h-4 w-4 text-primary" />
          Infrastructure & Environment Strategy
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2 block">Deployment Region Mapping</label>
          <div className="rounded-md border overflow-hidden">
            <Table>
              <TableHeader className="bg-muted/50">
                <TableRow>
                  <TableHead className="text-[9px] font-bold uppercase py-2">Environment</TableHead>
                  <TableHead className="text-[9px] font-bold uppercase py-2">Region</TableHead>
                  <TableHead className="text-[9px] font-bold uppercase py-2">Provider</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {deployments.map((policy) => (
                  <TableRow key={policy.environment}>
                    <TableCell className="text-xs py-2">{policy.environment}</TableCell>
                    <TableCell className="text-xs py-2 font-medium">{policy.region}</TableCell>
                    <TableCell className="py-2">
                      <Badge variant="outline" className="text-[9px] h-4 font-mono">
                        {policy.provider}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div>
          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2 block">Environment Lifecycle Policies</label>
          <div className="space-y-2">
            {strategies.map((strategy) => (
              <div key={strategy.type} className="flex items-center justify-between p-2 rounded border bg-muted/10">
                <span className="text-[11px] font-bold">{strategy.type}</span>
                <span className="text-[10px] text-muted-foreground">{strategy.policy}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
