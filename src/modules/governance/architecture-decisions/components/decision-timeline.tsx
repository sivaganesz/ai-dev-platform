
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Clock, Send, AlertTriangle } from "lucide-react"
import type { ArchitectureDecision } from "@/../mock/core/governance/architectureDecisionsData"

interface DecisionTimelineProps {
  decisions: ArchitectureDecision[]
}

type TimelineEvent = {
  id: string
  title: string
  timestamp: string
  user: string
  type: 'PROPOSED' | 'REVIEWED' | 'APPROVED' | 'REJECTED'
}

export function DecisionTimeline({ decisions }: DecisionTimelineProps) {
  const events: TimelineEvent[] = decisions.flatMap(d => {
    const list: TimelineEvent[] = [
      {
        id: `prop-${d.id}`,
        title: `Proposal: ${d.title}`,
        timestamp: d.createdAt,
        user: d.proposedBy,
        type: 'PROPOSED'
      }
    ]

    if (d.decidedAt) {
      list.push({
        id: `dec-${d.id}`,
        title: `Final Decision: ${d.decisionStatus}`,
        timestamp: d.decidedAt,
        user: d.reviewedBy[0] || "Architecture Board",
        type: d.decisionStatus as any
      })
    }

    return list
  }).sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())

  const getIcon = (type: TimelineEvent['type']) => {
    switch (type) {
      case 'PROPOSED': return <Send className="h-4 w-4 text-blue-500" />
      case 'APPROVED': return <CheckCircle2 className="h-4 w-4 text-green-500" />
      case 'REJECTED': return <AlertTriangle className="h-4 w-4 text-red-500" />
      default: return <Clock className="h-4 w-4 text-yellow-500" />
    }
  }

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Architecture Evolution Log</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {events.map((event) => (
            <div key={event.id} className="relative pl-8 before:absolute before:left-[15px] before:top-2 before:bottom-[-24px] before:w-[2px] before:bg-muted last:before:hidden">
              <div className="absolute left-0 top-1 rounded-full border bg-background p-1.5 z-10">
                {getIcon(event.type)}
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold">{event.title}</h4>
                  <span className="text-[10px] text-muted-foreground">
                    {new Date(event.timestamp).toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>Owner: <span className="text-foreground font-medium">{event.user}</span></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
