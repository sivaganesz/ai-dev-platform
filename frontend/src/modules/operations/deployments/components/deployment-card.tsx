import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Deployment } from "@/../mock/core/operations/deploymentsData";
import { Rocket, Clock, Database } from "lucide-react";

interface DeploymentCardProps {
  deployment: Deployment;
  onClick: (deployment: Deployment) => void;
}

export function DeploymentCard({ deployment, onClick }: DeploymentCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "SUCCESS": return "default";
      case "FAILED": return "destructive";
      case "IN_PROGRESS": return "secondary";
      case "ROLLBACK": return "outline";
      default: return "secondary";
    }
  };

  return (
    <Card 
      className="cursor-pointer hover:border-primary transition-colors" 
      onClick={() => onClick(deployment)}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          <div className="flex items-center gap-2">
            <Rocket className="h-4 w-4 text-muted-foreground" />
            {deployment.projectName}
          </div>
        </CardTitle>
        <Badge variant={getStatusColor(deployment.status)}>
          {deployment.status}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground">Version</span>
            <span className="text-xs font-mono font-bold">{deployment.version}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground">Environment</span>
            <Badge variant="outline" className="text-[10px]">
              {deployment.environment}
            </Badge>
          </div>
          <div className="flex justify-between items-center pt-2 border-t">
            <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
              <Clock className="h-3 w-3" />
              {new Date(deployment.deployedAt).toLocaleString()}
            </div>
            <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
              <Database className="h-3 w-3" />
              {deployment.cloudProvider}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
