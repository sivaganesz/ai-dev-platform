
import React from "react"
import { useSandboxData } from "../hooks/use-sandbox-data"
import { SandboxList } from "../components/sandbox-list"
import { EnvironmentCreateModal } from "../components/environment-create-modal"
import { SandboxStatsCard } from "../components/sandbox-stats-card"
import { SandboxActivityFeed } from "../components/sandbox-activity-feed"
import { SandboxHealthChart } from "../components/sandbox-health-chart"
import { 
  Box, 
  CheckCircle, 
  Activity, 
  AlertCircle, 
  Workflow
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SandboxEnvironmentsPage() {
  const { environments, activities, metrics, healthData, isLoading } = useSandboxData()

  if (isLoading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Sandbox Environments</h1>
          <p className="text-muted-foreground mt-1">Strategic testing grounds for AI execution, workflows, and frontend validation.</p>
        </div>
        <div className="flex gap-2">
           <EnvironmentCreateModal />
        </div>
      </div>

      {/* Row 1: Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <SandboxStatsCard 
          title="Total Sandboxes" 
          value={metrics.total} 
          icon={Box} 
          colorClass="text-blue-500"
        />
        <SandboxStatsCard 
          title="Active" 
          value={metrics.active} 
          icon={CheckCircle} 
          colorClass="text-green-500"
          trend={{ value: "+2 from last week", positive: true }}
        />
        <SandboxStatsCard 
          title="Inactive" 
          value={metrics.inactive} 
          icon={Activity} 
          colorClass="text-slate-500"
        />
        <SandboxStatsCard 
          title="Failed" 
          value={metrics.failed} 
          icon={AlertCircle} 
          colorClass="text-red-500"
        />
        <SandboxStatsCard 
          title="Last Workflow" 
          value={metrics.lastExecutedWorkflow} 
          icon={Workflow} 
          colorClass="text-purple-500"
          description="Most recent execution"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content: Sandbox Grid (Left 2/3) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold flex items-center gap-2">
              Managed Environments
              <span className="text-xs font-medium px-2 py-0.5 bg-muted rounded-full text-muted-foreground">
                {environments.length}
              </span>
            </h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Filter</Button>
              <Button variant="outline" size="sm">Sort</Button>
            </div>
          </div>
          <SandboxList environments={environments} />
        </div>

        {/* Side Content: Health & Activity (Right 1/3) */}
        <div className="space-y-8">
          <SandboxHealthChart data={healthData} />
          <SandboxActivityFeed activities={activities} />
        </div>
      </div>
    </div>
  )
}
