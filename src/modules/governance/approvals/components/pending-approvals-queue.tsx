
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, Clock, ArrowRight } from "lucide-react"
import type { ApprovalRequest, ApprovalSLA } from "@/../mock/core/governance/approvalsData"
import { useNavigate } from "react-router-dom"

interface PendingApprovalsQueueProps {
  requests: ApprovalRequest[]
  slas: ApprovalSLA[]
}

export function PendingApprovalsQueue({ requests, slas }: PendingApprovalsQueueProps) {
  const navigate = useNavigate()
  
  const urgentRequests = requests
    .filter(r => r.status === 'PENDING')
    .filter(r => {
      const sla = slas.find(s => s.approvalId === r.id)
      return r.priority === 'HIGH' || (sla?.breached)
    })
    .slice(0, 5)

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-red-600">
          <AlertCircle className="h-5 w-5" />
          Urgent Approval Queue
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {urgentRequests.length > 0 ? (
          urgentRequests.map((request) => (
            <div 
              key={request.id} 
              className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
              onClick={() => navigate(`/governance/approvals/${request.id}`)}
            >
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none truncate max-w-[200px]">{request.title}</p>
                <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                  <Badge variant="outline" className="h-4 py-0 text-[8px]">{request.type}</Badge>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {new Date(request.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {request.priority === 'HIGH' && (
                  <Badge variant="destructive" className="h-5 py-0 text-[9px]">URGENT</Badge>
                )}
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-sm text-muted-foreground py-4">No urgent items pending.</p>
        )}
      </CardContent>
    </Card>
  )
}
