import { useAgentByType, useAgentData } from "../hooks/use-agent-data";
import { AgentStatsCard } from "../components/agent-stats-card";
import { AgentPerformanceChart } from "../components/agent-performance-chart";
import { AgentActivityFeed } from "../components/agent-activity-feed";
import { AgentDeploymentSummary } from "../components/agent-deployment-summary";
import { Zap, CheckCircle, Clock, Loader2, AlertCircle, ClipboardCheck } from "lucide-react";

export default function QAAgentPage() {
  const { data, isLoading, isError } = useAgentByType("QA");
  const { data: allData } = useAgentData();

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
        <span>Failed to load QA agent data</span>
      </div>
    );
  }

  const { agent, activities, performance, deployments } = data;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-primary/10 p-2 text-primary">
          <ClipboardCheck className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{agent.name}</h1>
          <p className="text-muted-foreground">Specialized in automated testing, regression verification, and quality assurance.</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <AgentStatsCard
          title="Efficiency Score"
          value={`${performance?.efficiencyScore || 0}%`}
          icon={Zap}
          subtitle="Real-time performance rating"
        />
        <AgentStatsCard
          title="Completed Tasks"
          value={performance?.completedTasks || 0}
          icon={CheckCircle}
          subtitle="Successfully delivered"
        />
        <AgentStatsCard
          title="Active Projects"
          value={agent.assignedProjects.length}
          icon={Clock}
          subtitle="Currently participating"
        />
      </div>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        <AgentPerformanceChart />
        <AgentDeploymentSummary deployments={deployments} />
      </div>

      <div className="grid gap-4 grid-cols-1">
        <AgentActivityFeed activities={activities} agents={allData?.agents || []} />
      </div>
    </div>
  );
}
