import { useAgentsData } from "../hooks/use-agents-data";
import { AgentList } from "../components/agent-list";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Activity, CheckCircle, XCircle } from "lucide-react";
import type { Agent } from "@/../mock/core/agents/agentsData";

export default function AgentsPage() {
  const { data, isLoading } = useAgentsData();

  if (isLoading) {
    return <div className="p-8">Loading agents...</div>;
  }

  const agents = (data?.agents as Agent[]) || [];
  const activeAgents = agents.filter((a) => a.status === "Active").length;
  const totalExecutions = agents.reduce((acc, a) => acc + a.executionCount, 0);
  const avgSuccessRate = agents.length > 0 
    ? Math.round(agents.reduce((acc, a) => acc + a.successRate, 0) / agents.length)
    : 0;

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">AI Agents</h1>
        <p className="text-muted-foreground">
          Monitor and manage your autonomous agent workforce.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Agents</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{agents.length}</div>
            <p className="text-xs text-muted-foreground">Across all types</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
            <Activity className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeAgents}</div>
            <p className="text-xs text-muted-foreground">Executing tasks</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Executions</CardTitle>
            <CheckCircle className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalExecutions}</div>
            <p className="text-xs text-muted-foreground">Lifetime tasks</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Avg. Success Rate</CardTitle>
            <XCircle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgSuccessRate}%</div>
            <p className="text-xs text-muted-foreground">Performance score</p>
          </CardContent>
        </Card>
      </div>

      <AgentList agents={agents} />
    </div>
  );
}
