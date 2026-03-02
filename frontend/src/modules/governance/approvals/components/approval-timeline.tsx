
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock, Send, AlertTriangle, MessageSquare } from "lucide-react"
import type { ApprovalRequest, ApprovalDecision } from "@/../mock/core/governance/approvalsData"

interface ApprovalTimelineProps {
  requests: ApprovalRequest[]
  decisions: ApprovalDecision[]
}

type ApprovalEvent = {
  id: string
  type: 'REQUEST' | 'DECISION'
  title: string
  timestamp: string
  status: string
  user: string
  requestType?: string
  comment?: string
}

export function ApprovalTimeline({ requests, decisions }: ApprovalTimelineProps) {
  // Combine and sort events
  const events: ApprovalEvent[] = [
    ...requests.map(r => ({
      id: `req-${r.id}`,
      type: 'REQUEST' as const,
      title: `Approval Requested: ${r.title}`,
      timestamp: r.createdAt,
      status: r.status,
      user: r.requestedBy,
      requestType: r.type
    })),
    ...decisions.map(d => ({
      id: `dec-${d.id}`,
      type: 'DECISION' as const,
      title: `Decision Rendered: ${d.decision}`,
      timestamp: d.timestamp,
      comment: d.comment,
      user: d.approverId,
      status: d.decision
    }))
  ].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())

  const getEventIcon = (type: string, status?: string) => {
    if (type === 'REQUEST') return <Send className="h-4 w-4 text-blue-500" />
    if (status === 'APPROVED') return <CheckCircle2 className="h-4 w-4 text-green-500" />
    if (status === 'REJECTED') return <AlertTriangle className="h-4 w-4 text-red-500" />
    if (status === 'ESCALATED') return <AlertTriangle className="h-4 w-4 text-purple-500" />
    return <Clock className="h-4 w-4 text-yellow-500" />
  }

  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Governance Audit Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {events.map((event) => (
            <div key={event.id} className="relative pl-8 before:absolute before:left-[15px] before:top-2 before:bottom-[-24px] before:w-[2px] before:bg-muted last:before:hidden">
              <div className="absolute left-0 top-1 rounded-full border bg-background p-1.5 z-10">
                {getEventIcon(event.type, event.status)}
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold">{event.title}</h4>
                  <span className="text-[10px] text-muted-foreground">
                    {new Date(event.timestamp).toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>User: <span className="text-foreground">{event.user}</span></span>
                  {event.type === 'REQUEST' && event.requestType && (
                    <>
                      <span>•</span>
                      <Badge variant="outline" className="text-[8px] h-4">{event.requestType}</Badge>
                    </>
                  )}
                </div>
                {event.type === 'DECISION' && event.comment && (
                  <div className="mt-2 flex gap-2 items-start bg-muted/30 p-2 rounded text-xs italic">
                    <MessageSquare className="h-3 w-3 mt-0.5 opacity-50" />
                    <p>{event.comment}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
