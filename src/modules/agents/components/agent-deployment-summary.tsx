import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type AgentDeployment } from "@/../mock/core/agents/agentDeployments";
import { Rocket, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface AgentDeploymentSummaryProps {
  deployments: AgentDeployment[];
}

export function AgentDeploymentSummary({ deployments }: AgentDeploymentSummaryProps) {
  const total = deployments.length;
  const success = deployments.filter(d => d.status === "SUCCESS").length;
  const failed = deployments.filter(d => d.status === "FAILED").length;
  const successRate = total > 0 ? Math.round((success / total) * 100) : 0;

  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle className="text-sm font-medium">Deployment Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="space-y-1">
            <p className="text-[10px] uppercase text-muted-foreground font-semibold">Success Rate</p>
            <p className="text-2xl font-bold">{successRate}%</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] uppercase text-muted-foreground font-semibold flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3 text-green-500" /> Successful
            </p>
            <p className="text-2xl font-bold text-green-500">{success}</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] uppercase text-muted-foreground font-semibold flex items-center gap-1">
              <XCircle className="h-3 w-3 text-red-500" /> Failed
            </p>
            <p className="text-2xl font-bold text-red-500">{failed}</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] uppercase text-muted-foreground font-semibold flex items-center gap-1">
              <Rocket className="h-3 w-3 text-primary" /> Total Builds
            </p>
            <p className="text-2xl font-bold text-primary">{total}</p>
          </div>
        </div>
        
        <div className="mt-6">
          <p className="text-[10px] uppercase text-muted-foreground font-semibold mb-3">Recent Builds</p>
          <div className="space-y-2">
            {deployments.slice(0, 3).map((d) => (
              <div key={d.deploymentId} className="flex items-center justify-between text-xs border-l-2 border-primary pl-3 py-1 bg-primary/5 rounded-r-sm">
                <div className="flex flex-col">
                  <span className="font-medium">Build #{d.deploymentId.slice(0, 8)}</span>
                  <span className="text-[10px] text-muted-foreground">{new Date(d.timestamp).toLocaleString()}</span>
                </div>
                <Badge variant={d.status === "SUCCESS" ? "default" : "destructive"} className="text-[9px] px-1.5 py-0">
                  {d.status}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Internal Badge helper
function Badge({ children, variant, className }: { children: React.ReactNode, variant?: 'default' | 'destructive', className?: string }) {
  return (
    <div className={cn(
      "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      variant === 'destructive' ? "border-transparent bg-destructive text-destructive-foreground" : "border-transparent bg-primary text-primary-foreground",
      className
    )}>
      {children}
    </div>
  )
}
