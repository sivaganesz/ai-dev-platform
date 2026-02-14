import { usePerformanceData } from "../hooks/use-performance-data";
import { ApiLatencyChart } from "../components/api-latency-chart";
import { BuildDurationChart } from "../components/build-duration-chart";
import { AgentExecutionMetrics } from "../components/agent-execution-metrics";
import { WorkflowCompletionChart } from "../components/workflow-completion-chart";
import { PerformanceInsightsPanel } from "../components/performance-insights-panel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gauge, Zap, Clock, Activity } from "lucide-react";

export default function PerformancePage() {
  const { data, isLoading } = usePerformanceData();

  if (isLoading) {
    return <div className="flex items-center justify-center h-full text-sm">Analyzing system performance...</div>;
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Gauge className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">System Performance</h2>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Overall Health</CardTitle>
            <Activity className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.stats.overallHealth}</div>
            <p className="text-[10px] text-muted-foreground">System wide stability</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Active Bottlenecks</CardTitle>
            <Zap className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.stats.activeBottlenecks}</div>
            <p className="text-[10px] text-muted-foreground">Requiring optimization</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Optimizations</CardTitle>
            <Clock className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.stats.optimizationOps}</div>
            <p className="text-[10px] text-muted-foreground">Potential improvements</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Performance Trend</CardTitle>
            <Activity className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.stats.trend}</div>
            <p className="text-[10px] text-green-500 font-medium">+4.5% efficiency</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <ApiLatencyChart data={data?.latencyHistory || []} />
        <BuildDurationChart data={data?.buildDurations || []} />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <AgentExecutionMetrics agents={data?.agentMetrics || []} />
        <WorkflowCompletionChart data={data?.workflows || []} />
      </div>

      <div className="grid gap-4">
        <PerformanceInsightsPanel insights={data?.insights || []} />
      </div>
    </div>
  );
}
