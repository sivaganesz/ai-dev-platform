
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, Clock, CheckCircle } from "lucide-react"
import { seniorDevelopers } from "@/../mock/core/governance/seniorDevelopersData"
import type { Escalation } from "@/../mock/core/governance/seniorDevelopersData"

interface EscalationQueueProps {
  escalations: Escalation[]
}

export function EscalationQueue({ escalations }: EscalationQueueProps) {
  const getSeverityColor = (severity: Escalation['severity']) => {
    switch (severity) {
      case 'HIGH': return 'bg-red-100 text-red-800'
      case 'MEDIUM': return 'bg-orange-100 text-orange-800'
      case 'LOW': return 'bg-blue-100 text-blue-800'
    }
  }

  const getAssignedToName = (id: string) => {
    return seniorDevelopers.find(dev => dev.id === id)?.name || id
  }

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-red-500" />
          Escalation Queue
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {escalations.map((item) => (
          <div key={item.id} className="flex items-start justify-between rounded-lg border p-3">
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">{item.issueTitle}</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>Raised by: {item.raisedBy}</span>
                <span>•</span>
                <span>Assigned: {getAssignedToName(item.assignedTo)}</span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <Badge className={getSeverityColor(item.severity)}>
                {item.severity}
              </Badge>
              <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                {item.status === 'OPEN' ? (
                  <><Clock className="h-3 w-3" /> In Progress</>
                ) : (
                  <><CheckCircle className="h-3 w-3 text-green-500" /> Resolved</>
                )}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
