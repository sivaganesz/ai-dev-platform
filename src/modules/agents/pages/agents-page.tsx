import { useAgentData } from "../hooks/use-agent-data";
import { AgentStatsCard } from "../components/agent-stats-card";
import { AgentWorkflowChart } from "../components/agent-workflow-chart";
import { AgentPerformanceChart } from "../components/agent-performance-chart";
import { AgentActivityFeed } from "../components/agent-activity-feed";
import { AgentDeploymentSummary } from "../components/agent-deployment-summary";
import { Users, Zap, CheckCircle, Clock, Loader2, AlertCircle } from "lucide-react";

export default function AgentsPage() {
  const { data, isLoading, isError } = useAgentData();

  if (isLoading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex h-[400px] items-center justify-center text-destructive">
        <AlertCircle className="mr-2 h-5 w-5" />
        <span>Failed to load agents dashboard</span>
      </div>
    );
  }

  const { agents, activities, performance, deployments } = data;
  
  const activeAgentsCount = agents.filter(a => a.isActive).length;
  const avgEfficiency = Math.round(performance.reduce((acc, p) => acc + p.efficiencyScore, 0) / performance.length);
  const totalCompleted = performance.reduce((acc, p) => acc + p.completedTasks, 0);
  const totalPending = performance.reduce((acc, p) => acc + p.pendingTasks, 0);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gradient bg-clip-text">AI Agents Intelligence</h1>
        <p className="text-muted-foreground">Comprehensive overview of AI agent performance and operations.</p>
      </div>

      {/* Row 1: Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <AgentStatsCard
          title="Active Agents"
          value={activeAgentsCount}
          icon={Users}
          subtitle="Entities currently online"
          trend={{ value: "12%", isUp: true }}
        />
        <AgentStatsCard
          title="Avg Efficiency"
          value={`${avgEfficiency}%`}
          icon={Zap}
          subtitle="Across all agent types"
          trend={{ value: "5%", isUp: true }}
        />
        <AgentStatsCard
          title="Tasks Completed"
          value={totalCompleted}
          icon={CheckCircle}
          subtitle="Last 30 days"
          trend={{ value: "18%", isUp: true }}
        />
        <AgentStatsCard
          title="Pending Tasks"
          value={totalPending}
          icon={Clock}
          subtitle="Awaiting agent action"
        />
      </div>

      {/* Row 2: Charts */}
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        <AgentWorkflowChart agents={agents} />
        <AgentPerformanceChart />
      </div>

      {/* Row 3: Activity & Deployments */}
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <AgentActivityFeed activities={activities} agents={agents} />
        </div>
        <div className="lg:col-span-1">
          <AgentDeploymentSummary deployments={deployments} />
        </div>
      </div>
    </div>
  );
}
