import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { Deployment, DeploymentEvent } from "@/../mock/core/operations/deploymentsData";
import { DeploymentTimeline } from "./deployment-timeline";
import { DeploymentMetrics } from "./deployment-metrics";
import { Rocket, ShieldCheck, User, Globe, Tag } from "lucide-react";

interface DeploymentDetailsDrawerProps {
  deployment: Deployment | null;
  events: DeploymentEvent[];
  isOpen: boolean;
  onClose: () => void;
}

export function DeploymentDetailsDrawer({ 
  deployment, 
  events, 
  isOpen, 
  onClose 
}: DeploymentDetailsDrawerProps) {
  if (!deployment) return null;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="sm:max-w-xl overflow-y-auto">
        <SheetHeader>
          <div className="flex items-center justify-between">
            <SheetTitle className="text-xl font-bold flex items-center gap-2">
              <Rocket className="h-5 w-5 text-primary" />
              {deployment.projectName}
            </SheetTitle>
            <Badge>{deployment.status}</Badge>
          </div>
          <SheetDescription>
            Deployment details for {deployment.version} in {deployment.environment}
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <Tag className="h-3 w-3" /> Version
              </p>
              <p className="text-sm font-mono font-bold">{deployment.version}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <Globe className="h-3 w-3" /> Environment
              </p>
              <p className="text-sm font-semibold">{deployment.environment}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <User className="h-3 w-3" /> Deployed By
              </p>
              <p className="text-sm font-semibold">{deployment.deployedBy}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <ShieldCheck className="h-3 w-3" /> Rollback Available
              </p>
              <Badge variant={deployment.rollbackAvailable ? "default" : "secondary"}>
                {deployment.rollbackAvailable ? "Yes" : "No"}
              </Badge>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Deployment Lifecycle</h4>
            <DeploymentTimeline events={events} />
          </div>

          <Separator />

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Environment Metrics</h4>
            <DeploymentMetrics />
          </div>

          <Separator />

          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Infrastructure Detail</h4>
            <div className="bg-muted p-3 rounded-md space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Provider</span>
                <span className="font-medium">{deployment.cloudProvider}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Pipeline ID</span>
                <span className="font-mono">{deployment.pipelineId}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Build ID</span>
                <span className="font-mono">{deployment.buildId}</span>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
