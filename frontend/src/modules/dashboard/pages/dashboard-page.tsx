import { FolderKanban, GitBranch, Bot, Rocket } from "lucide-react";
import { StatsCard } from "../components/stats-card";
import { ProjectsOverviewChart } from "../components/projects-overview-chart";
import { WorkflowStatusChart } from "../components/workflow-status-chart";
import { TeamPerformanceChart } from "../components/team-performance-chart";
import { RecentActivities } from "../components/recent-activities";
import { DeploymentSummary } from "../components/deployment-summary";
import { useDashboardData } from "../hooks/use-dashboard-data";

export default function DashboardPage() {
  const { data, isLoading } = useDashboardData();

  if (isLoading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-sm text-muted-foreground">Loading dashboard intelligence...</p>
        </div>
      </div>
    );
  }

  const metrics = data?.metrics;

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">System Intelligence</h1>
        <p className="text-muted-foreground">Real-time overview of AI development operations.</p>
      </div>

      {/* Row 1: Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Projects"
          value={metrics?.totalProjects || 0}
          icon={FolderKanban}
          description="Across all teams"
          trend={{ value: "12%", isUp: true }}
        />
        <StatsCard
          title="Active Workflows"
          value={metrics?.activeWorkflows || 0}
          icon={GitBranch}
          description="Running automation"
          trend={{ value: "4", isUp: true }}
        />
        <StatsCard
          title="Active Agents"
          value={metrics?.activeAgents || 0}
          icon={Bot}
          description="AI entities online"
        />
        <StatsCard
          title="Deployments"
          value={metrics?.deploymentsThisWeek || 0}
          icon={Rocket}
          description="This week"
          trend={{ value: "18%", isUp: true }}
        />
      </div>

      {/* Row 2: Charts */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
        <ProjectsOverviewChart />
        <WorkflowStatusChart />
      </div>

      {/* Row 3: Team Performance */}
      <div className="grid gap-4 grid-cols-1">
        <TeamPerformanceChart />
      </div>

      {/* Row 4: Activities & Deployments */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
        <RecentActivities />
        <DeploymentSummary />
      </div>
    </div>
  );
}
