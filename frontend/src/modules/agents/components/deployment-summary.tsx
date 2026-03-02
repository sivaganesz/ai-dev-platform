import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import type { DeploymentSummary as DeploymentSummaryType } from "@/../mock/core/agents/deploymentSummaryData";
import { Rocket, CheckCircle, XCircle, Clock } from "lucide-react";

interface DeploymentSummaryProps {
  data: DeploymentSummaryType;
}

export function DeploymentSummary({ data }: DeploymentSummaryProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Rocket className="h-5 w-5 text-primary" />
          Deployment Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Success Rate</p>
            <p className="text-3xl font-bold">{data.successRate}%</p>
          </div>
          <div className="h-12 w-12 rounded-full border-4 border-primary/20 border-t-primary flex items-center justify-center">
            <span className="text-xs font-bold">{data.successRate}%</span>
          </div>
        </div>

        <Progress value={data.successRate} className="h-2" />

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-green-500/5 border border-green-500/10">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <div>
              <p className="text-xs text-muted-foreground">Successful</p>
              <p className="text-sm font-bold">{data.successful}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-red-500/5 border border-red-500/10">
            <XCircle className="h-4 w-4 text-red-500" />
            <div>
              <p className="text-xs text-muted-foreground">Failed</p>
              <p className="text-sm font-bold">{data.failed}</p>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" /> Last Deployment
            </span>
            <span className="font-medium text-primary">
              {new Date(data.lastDeployment).toLocaleDateString()}
            </span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Total Executions</span>
            <Badge variant="secondary" className="font-mono text-[10px]">{data.totalDeployments}</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
