import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function DeploymentSummary() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="text-base font-medium">Deployment Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground leading-none">Total Deployments</p>
            <p className="text-2xl font-bold">124</p>
          </div>
          <div className="text-right space-y-1">
            <p className="text-sm text-muted-foreground leading-none">Success Rate</p>
            <p className="text-2xl font-bold text-green-500">96.8%</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>Production Stability</span>
            <span className="font-medium">Stable</span>
          </div>
          <Progress value={96.8} className="h-2" />
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground uppercase">Failed Builds</p>
            <p className="text-lg font-semibold text-red-500">4</p>
          </div>
          <div className="text-right space-y-1">
            <p className="text-xs text-muted-foreground uppercase">Avg. Build Time</p>
            <p className="text-lg font-semibold">2m 45s</p>
          </div>
        </div>

        <div className="pt-2 text-xs text-muted-foreground">
          Last deployment: <strong>2 hours ago</strong> to Production
        </div>
      </CardContent>
    </Card>
  );
}
