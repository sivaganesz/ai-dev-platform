import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { MonitoringAlert } from "@/../mock/core/operations/monitoringData";
import { AlertCircle, AlertTriangle, Info, Bell } from "lucide-react";
import { cn } from "@/lib/utils";

interface AlertStatusPanelProps {
  alerts: MonitoringAlert[];
}

export function AlertStatusPanel({ alerts }: AlertStatusPanelProps) {
  const getSeverityStyles = (severity: string) => {
    switch (severity) {
      case "CRITICAL": return {
        icon: <AlertCircle className="h-4 w-4 text-red-500" />,
        bg: "bg-red-500/10",
        border: "border-red-500/20"
      };
      case "WARNING": return {
        icon: <AlertTriangle className="h-4 w-4 text-yellow-500" />,
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/20"
      };
      default: return {
        icon: <Info className="h-4 w-4 text-blue-500" />,
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
      };
    }
  };

  return (
    <Card className="col-span-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <Bell className="h-4 w-4" />
          Active System Incidents & Alerts
        </CardTitle>
        <Badge variant="outline">{alerts.length} Active</Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {alerts.map((alert) => {
            const styles = getSeverityStyles(alert.severity);
            return (
              <div 
                key={alert.id} 
                className={cn(
                  "flex items-start gap-4 p-3 rounded-lg border",
                  styles.bg,
                  styles.border
                )}
              >
                <div className="mt-0.5">{styles.icon}</div>
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between">
                    <p className="text-xs font-semibold">{alert.service}</p>
                    <span className="text-[10px] text-muted-foreground">
                      {new Date(alert.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{alert.message}</p>
                </div>
                <Badge 
                  variant={alert.severity === "CRITICAL" ? "destructive" : "secondary"} 
                  className="text-[10px]"
                >
                  {alert.severity}
                </Badge>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
