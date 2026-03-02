import { useAgentsOverviewData } from "../hooks/use-agents-overview-data";
import { ExecutionGraph } from "../components/execution-graph";
import { WorkflowParticipationChart } from "../components/workflow-participation-chart";
import { TaskCompletionTrend } from "../components/task-completion-trend";
import { RecentAgentActivities } from "../components/recent-agent-activities";
import { DeploymentSummary } from "../components/deployment-summary";
import { AgentList } from "../components/agent-list";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Activity, CheckCircle, Rocket, BrainCircuit } from "lucide-react";

export default function AgentsOverviewPage() {
  const { data, isLoading } = useAgentsOverviewData();

  if (isLoading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-sm text-muted-foreground">Synchronizing agent intelligence...</p>
        </div>
      </div>
    );
  }

  if (!data) return null;

  const activeAgents = data.agents.filter((a) => a.status === "Active").length;
  const totalExecutions = data.agents.reduce((acc, a) => acc + a.executionCount, 0);

  return (
    <div className="p-6 space-y-8">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <BrainCircuit className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold tracking-tight">Execution Intelligence</h1>
        </div>
        <p className="text-muted-foreground">
          Real-time orchestration and performance monitoring of AI agent workflows.
        </p>
      </div>

      {/* Row 1: Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Total Agents</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.agents.length}</div>
            <p className="text-xs text-muted-foreground mt-1">Cross-functional entities</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Active Instances</CardTitle>
            <Activity className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeAgents}</div>
            <p className="text-xs text-muted-foreground mt-1">Currently executing tasks</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Total Task Executions</CardTitle>
            <CheckCircle className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalExecutions}</div>
            <p className="text-xs text-muted-foreground mt-1">System-wide throughput</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Agent Success Rate</CardTitle>
            <Rocket className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">96.4%</div>
            <p className="text-xs text-muted-foreground mt-1">Reliability index</p>
          </CardContent>
        </Card>
      </div>

      {/* Row 2: Execution Graph (Full width) */}
      <div className="grid gap-4 grid-cols-1">
        <ExecutionGraph 
          nodes={data.executionGraph.nodes} 
          edges={data.executionGraph.edges} 
        />
      </div>

      {/* Row 3: Workflow Participation | Task Trend */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1">
          <WorkflowParticipationChart data={data.workflowParticipation} />
        </div>
        <div className="md:col-span-2">
          <TaskCompletionTrend data={data.taskTrend} />
        </div>
      </div>

      {/* Row 4: Recent Activities | Deployment Summary */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <RecentAgentActivities activities={data.recentActivities} />
        </div>
        <div className="md:col-span-1">
          <DeploymentSummary data={data.deploymentSummary} />
        </div>
      </div>

      {/* Row 5: Agent Workforce List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight">Agent Workforce</h2>
          <Badge variant="secondary">Lifecycle Management</Badge>
        </div>
        <AgentList agents={data.agents} />
      </div>
    </div>
  );
}
