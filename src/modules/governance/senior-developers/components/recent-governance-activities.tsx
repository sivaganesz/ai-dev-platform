
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle, Clock, ShieldCheck, MessageSquare, AlertTriangle, FileCode } from "lucide-react"
import { seniorDevelopers } from "@/../mock/core/governance/seniorDevelopersData"
import type { GovernanceActivity } from "@/../mock/core/governance/seniorDevelopersData"

interface RecentGovernanceActivitiesProps {
  activities: GovernanceActivity[]
}

export function RecentGovernanceActivities({ activities }: RecentGovernanceActivitiesProps) {
  const getIcon = (type: GovernanceActivity['type']) => {
    switch (type) {
      case 'APPROVAL': return <ShieldCheck className="h-4 w-4 text-green-500" />
      case 'CODE_REVIEW': return <FileCode className="h-4 w-4 text-blue-500" />
      case 'ADR': return <MessageSquare className="h-4 w-4 text-purple-500" />
      case 'ESCALATION': return <AlertTriangle className="h-4 w-4 text-red-500" />
    }
  }

  const getStatusIcon = (status: GovernanceActivity['status']) => {
    switch (status) {
      case 'APPROVED': return <CheckCircle2 className="h-3 w-3 text-green-500" />
      case 'REJECTED': return <XCircle className="h-3 w-3 text-red-500" />
      case 'PENDING': return <Clock className="h-3 w-3 text-yellow-500" />
    }
  }

  const getDevName = (id: string) => {
    return seniorDevelopers.find(dev => dev.id === id)?.name || id
  }

  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Recent Governance Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4">
              <div className="mt-1 rounded-full border p-2 bg-muted/50">
                {getIcon(activity.type)}
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{activity.title}</p>
                  <span className="text-xs text-muted-foreground">
                    {new Date(activity.timestamp).toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Badge variant="outline" className="text-[10px]">
                    {activity.type}
                  </Badge>
                  <span>Handled by: <span className="text-foreground font-medium">{getDevName(activity.handledBy)}</span></span>
                  <span>•</span>
                  <span>Project: {activity.projectId}</span>
                  <span className="ml-auto flex items-center gap-1">
                    {getStatusIcon(activity.status)}
                    {activity.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
