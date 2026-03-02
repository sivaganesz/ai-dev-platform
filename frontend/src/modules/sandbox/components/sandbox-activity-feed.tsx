import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle, Clock, History } from "lucide-react"
import type { SandboxActivity } from "@/../mock/core/sandbox/sandboxData"

interface SandboxActivityFeedProps {
  activities: SandboxActivity[]
}

export const SandboxActivityFeed: React.FC<SandboxActivityFeedProps> = ({ activities }) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "SUCCESS": return <CheckCircle2 className="w-4 h-4 text-green-500" />
      case "FAILED": return <XCircle className="w-4 h-4 text-red-500" />
      case "IN_PROGRESS": return <Clock className="w-4 h-4 text-blue-500 animate-spin" />
      default: return null
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "SUCCESS": return <Badge className="bg-green-500/10 text-green-500 border-green-500/20 text-[10px] h-4">SUCCESS</Badge>
      case "FAILED": return <Badge variant="destructive" className="text-[10px] h-4">FAILED</Badge>
      case "IN_PROGRESS": return <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20 text-[10px] h-4">IN PROGRESS</Badge>
      default: return null
    }
  }

  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-3 border-b bg-muted/10">
        <div className="flex items-center gap-2">
          <History className="w-4 h-4 text-primary" />
          <CardTitle className="text-sm font-bold uppercase tracking-tight">Recent Activities</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {activities.map((activity) => (
            <div key={activity.id} className="p-4 hover:bg-muted/50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <div className="mt-0.5">{getStatusIcon(activity.status)}</div>
                  <span className="text-sm font-bold leading-none">{activity.taskName}</span>
                </div>
                {getStatusBadge(activity.status)}
              </div>
              <div className="flex flex-col gap-1.5 ml-6">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                  <span>Sandbox:</span>
                  <span className="text-foreground px-1.5 py-0.5 bg-muted rounded text-[10px]">{activity.sandboxName}</span>
                </div>
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                  {new Date(activity.timestamp).toLocaleString(undefined, {
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </div>
            </div>
          ))}
          {activities.length === 0 && (
            <div className="p-12 text-center">
              <History className="w-8 h-8 text-muted-foreground/20 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">No recent activities recorded.</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
