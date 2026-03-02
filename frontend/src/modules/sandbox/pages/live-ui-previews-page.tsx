
import React from "react"
import { useLivePreviewsData } from "../hooks/use-live-previews-data"
import { PreviewCard } from "../components/preview-card"
import { PreviewStatsCard } from "../components/preview-stats-card"
import { VersionHistoryPanel } from "../components/version-history-panel"
import { PreviewActivityFeed } from "../components/preview-activity-feed"
import { 
  Monitor, 
  PlayCircle, 
  StopCircle, 
  AlertCircle,
  Clock,
  LayoutGrid
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LiveUIPreviewsPage() {
  const { previews, versionHistory, activities, metrics, isLoading } = useLivePreviewsData()

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
          <h1 className="text-3xl font-bold tracking-tight">Live UI Previews</h1>
          <p className="text-muted-foreground mt-1">Real-time validation of sandboxed applications and workflow components.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <LayoutGrid className="w-4 h-4" />
            Refresh All
          </Button>
        </div>
      </div>

      {/* Row 1: Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <PreviewStatsCard 
          title="Total Previews" 
          value={metrics.total} 
          icon={Monitor} 
          colorClass="text-blue-500"
        />
        <PreviewStatsCard 
          title="Running" 
          value={metrics.running} 
          icon={PlayCircle} 
          colorClass="text-green-500"
          description="Active preview instances"
        />
        <PreviewStatsCard 
          title="Stopped" 
          value={metrics.stopped} 
          icon={StopCircle} 
          colorClass="text-slate-500"
        />
        <PreviewStatsCard 
          title="Errors" 
          value={metrics.error} 
          icon={AlertCircle} 
          colorClass="text-red-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content: Previews Grid (Left 2/3) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold flex items-center gap-2">
              Preview Instances
              <span className="text-xs font-medium px-2 py-0.5 bg-muted rounded-full text-muted-foreground">
                {previews.length}
              </span>
            </h2>
            <div className="flex gap-2 text-[10px] text-muted-foreground items-center">
              <Clock className="w-3 h-3" />
              <span>Last global sync: {new Date().toLocaleTimeString()}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {previews.map((preview) => (
              <PreviewCard key={preview.id} preview={preview} />
            ))}
            {previews.length === 0 && (
              <div className="col-span-full text-center py-20 border-2 border-dashed rounded-xl">
                <p className="text-muted-foreground">No live previews available.</p>
              </div>
            )}
          </div>
        </div>

        {/* Side Content: History & Activity (Right 1/3) */}
        <div className="space-y-8">
          <VersionHistoryPanel versions={versionHistory} />
          <PreviewActivityFeed activities={activities} />
        </div>
      </div>
    </div>
  )
}
