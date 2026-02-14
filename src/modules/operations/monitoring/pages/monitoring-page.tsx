import { useMonitoringData } from "../hooks/use-monitoring-data";
import { ServiceHealthGrid } from "../components/service-health-grid";
import { UptimeChart } from "../components/uptime-chart";
import { AgentActivityMonitor } from "../components/agent-activity-monitor";
import { WorkflowExecutionMonitor } from "../components/workflow-execution-monitor";
import { AlertStatusPanel } from "../components/alert-status-panel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MonitoringPage() {
  const { data, isLoading, refetch } = useMonitoringData();

  if (isLoading) {
    return <div className="flex items-center justify-center h-full">Loading system metrics...</div>;
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">System Monitoring</h2>
        </div>
        <Button size="sm" variant="outline" onClick={() => refetch()}>
          <RefreshCw className="mr-2 h-4 w-4" />
          Live Refresh
        </Button>
      </div>

      <ServiceHealthGrid services={data?.services || []} />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <UptimeChart data={data?.uptimeHistory || []} />
        <AgentActivityMonitor agents={data?.agents || []} />
        <WorkflowExecutionMonitor workflows={data?.workflows || []} />
      </div>

      <div className="grid gap-4">
        <AlertStatusPanel alerts={data?.alerts || []} />
      </div>

      <Tabs defaultValue="services" className="space-y-4">
        <TabsList>
          <TabsTrigger value="services">Service Status</TabsTrigger>
          <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
          <TabsTrigger value="network">Network Traffic</TabsTrigger>
        </TabsList>
        <TabsContent value="services" className="space-y-4">
          {/* Detailed service logs or metrics could go here */}
        </TabsContent>
      </Tabs>
    </div>
  );
}
