
import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { History, PlayCircle, StopCircle, RefreshCw, AlertTriangle } from "lucide-react"
import type { PreviewActivity } from "@/../mock/core/sandbox/livePreviewsData"

interface PreviewActivityFeedProps {
  activities: PreviewActivity[]
}

export const PreviewActivityFeed: React.FC<PreviewActivityFeedProps> = ({ activities }) => {
  const getActionIcon = (action: string) => {
    switch (action) {
      case "START": return <PlayCircle className="w-4 h-4 text-green-500" />
      case "STOP": return <StopCircle className="w-4 h-4 text-slate-500" />
      case "UPDATE": return <RefreshCw className="w-4 h-4 text-blue-500" />
      case "ERROR": return <AlertTriangle className="w-4 h-4 text-red-500" />
      default: return null
    }
  }

  const getActionBadge = (action: string) => {
    switch (action) {
      case "START": return <Badge className="bg-green-500/10 text-green-500 border-green-500/20 text-[10px] h-4">START</Badge>
      case "STOP": return <Badge variant="secondary" className="text-[10px] h-4">STOP</Badge>
      case "UPDATE": return <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20 text-[10px] h-4">UPDATE</Badge>
      case "ERROR": return <Badge variant="destructive" className="text-[10px] h-4">ERROR</Badge>
      default: return null
    }
  }

  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-3 border-b bg-muted/10">
        <div className="flex items-center gap-2">
          <History className="w-4 h-4 text-primary" />
          <CardTitle className="text-sm font-bold uppercase tracking-tight">Recent Interactions</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {activities.map((activity) => (
            <div key={activity.id} className="p-4 hover:bg-muted/50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <div className="mt-0.5">{getActionIcon(activity.action)}</div>
                  <span className="text-sm font-bold leading-none">{activity.previewName}</span>
                </div>
                {getActionBadge(activity.action)}
              </div>
              <div className="flex flex-col gap-1.5 ml-6">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                  <span>Agent:</span>
                  <span className="text-foreground px-1.5 py-0.5 bg-muted rounded text-[10px]">{activity.agentId}</span>
                </div>
                {activity.details && (
                  <p className="text-[11px] text-muted-foreground line-clamp-1">{activity.details}</p>
                )}
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                  {new Date(activity.timestamp).toLocaleString()}
                </span>
              </div>
            </div>
          ))}
          {activities.length === 0 && (
            <div className="p-8 text-center text-sm text-muted-foreground">
              No recent interactions recorded.
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
