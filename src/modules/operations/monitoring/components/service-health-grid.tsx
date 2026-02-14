import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import type { ServiceHealth } from "@/../mock/core/operations/monitoringData";
import { Activity, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

interface ServiceHealthGridProps {
  services: ServiceHealth[];
}

export function ServiceHealthGrid({ services }: ServiceHealthGridProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "HEALTHY": return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case "DEGRADED": return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case "DOWN": return <XCircle className="h-4 w-4 text-red-500" />;
      default: return <Activity className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {services.map((service) => (
        <Card key={service.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{service.service}</CardTitle>
            {getStatusIcon(service.status)}
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">{service.uptime}%</span>
                <Badge variant={service.status === "HEALTHY" ? "default" : "secondary"}>
                  {service.status}
                </Badge>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] text-muted-foreground">
                  <span>Current Load</span>
                  <span>{service.load}%</span>
                </div>
                <Progress value={service.load} className="h-1" />
              </div>
              <div className="flex justify-between text-[10px] text-muted-foreground pt-2 border-t">
                <span>Incidents: {service.incidents}</span>
                <span>Last: {service.lastIncident === "N/A" ? "N/A" : new Date(service.lastIncident).toLocaleTimeString()}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
