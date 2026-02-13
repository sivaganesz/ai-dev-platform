
import React, { useState } from "react"
import { useDemoBuildsData } from "../hooks/use-demo-builds-data"
import { BuildCard } from "../components/build-card"
import { BuildStatsCard } from "../components/build-stats-card"
import { BuildLogsPanel } from "../components/build-logs-panel"
import { BuildActions } from "../components/build-actions"
import { BuildPreviewModal } from "../components/build-preview-modal"
import { CreateBuildModal } from "../components/create-build-modal"
import { 
  FlaskConical, 
  CheckCircle2, 
  AlertCircle, 
  Activity,
  Plus,
  BarChart
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DemoBuildsPage() {
  const { 
    builds, 
    selectedBuild, 
    setSelectedBuildId, 
    metrics, 
    isLoading,
    addBuild,
    triggerRebuild
  } = useDemoBuildsData()

  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [isCreateOpen, setIsCreateOpen] = useState(false)

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
          <h1 className="text-3xl font-bold tracking-tight">Demo Builds</h1>
          <p className="text-muted-foreground mt-1">Immutable build artifacts for stakeholder demos and regression testing.</p>
        </div>
        <Button className="gap-2 shadow-sm" onClick={() => setIsCreateOpen(true)}>
          <Plus className="w-4 h-4" />
          Initialize Build
        </Button>
      </div>

      {/* Row 1: Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <BuildStatsCard 
          title="Total Builds" 
          value={metrics.total} 
          icon={FlaskConical} 
          colorClass="text-blue-500"
        />
        <BuildStatsCard 
          title="Success Rate" 
          value={`${metrics.successRate}%`} 
          icon={BarChart} 
          colorClass="text-green-500"
          description="Overall pipeline stability"
        />
        <BuildStatsCard 
          title="Active Builds" 
          value={metrics.inProgress} 
          icon={Activity} 
          colorClass="text-orange-500"
          description="Builds currently running"
        />
        <BuildStatsCard 
          title="Failed" 
          value={metrics.failed} 
          icon={AlertCircle} 
          colorClass="text-red-500"
          description="Action required"
        />
      </div>

      {/* Row 2: Actions */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Contextual Operations</h3>
          {selectedBuild && (
            <span className="text-xs text-muted-foreground">
              Acting on: <span className="font-mono text-primary font-bold">{selectedBuild.id}</span>
            </span>
          )}
        </div>
        <BuildActions 
          build={selectedBuild} 
          onPreview={() => setIsPreviewOpen(true)}
          onRebuild={triggerRebuild}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content: Build List (Left 2/3) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold flex items-center gap-2">
              Build Registry
              <span className="text-xs font-medium px-2 py-0.5 bg-muted rounded-full text-muted-foreground">
                {builds.length}
              </span>
            </h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Filter</Button>
              <Button variant="outline" size="sm">Sort</Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {builds.map((build) => (
              <BuildCard 
                key={build.id} 
                build={build} 
                isSelected={selectedBuild?.id === build.id}
                onSelect={setSelectedBuildId}
              />
            ))}
            {builds.length === 0 && (
              <div className="col-span-full text-center py-20 border-2 border-dashed rounded-xl">
                <p className="text-muted-foreground">No demo builds found.</p>
              </div>
            )}
          </div>
        </div>

        {/* Side Content: Logs Panel (Right 1/3) */}
        <div className="lg:col-span-1">
          <div className="sticky top-6">
            <BuildLogsPanel build={selectedBuild} />
          </div>
        </div>
      </div>

      {/* Modals */}
      <BuildPreviewModal 
        build={selectedBuild} 
        isOpen={isPreviewOpen} 
        onClose={() => setIsPreviewOpen(false)} 
      />
      <CreateBuildModal 
        isOpen={isCreateOpen} 
        onClose={() => setIsCreateOpen(false)} 
        onSubmit={addBuild}
      />
    </div>
  )
}
