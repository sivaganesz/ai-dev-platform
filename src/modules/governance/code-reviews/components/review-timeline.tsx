
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock, MessageSquare, AlertTriangle, FileCode, Ban } from "lucide-react"
import type { CodeReview, ReviewComment } from "@/../mock/core/governance/codeReviewsData"

interface ReviewTimelineProps {
  reviews: CodeReview[]
  comments: ReviewComment[]
}

type ReviewEvent = {
  id: string
  type: 'CREATED' | 'DECISION' | 'COMMENT'
  title: string
  timestamp: string
  status?: string
  user: string
  severity?: string
}

export function ReviewTimeline({ reviews, comments }: ReviewTimelineProps) {
  const events: ReviewEvent[] = [
    ...reviews.map(r => ({
      id: `cre-${r.id}`,
      type: 'CREATED' as const,
      title: `Review Created: ${r.title}`,
      timestamp: r.createdAt,
      user: r.agentId || "System"
    })),
    ...reviews.filter(r => r.reviewedAt).map(r => ({
      id: `dec-${r.id}`,
      type: 'DECISION' as const,
      title: `Review ${r.status.replace('_', ' ')}`,
      timestamp: r.reviewedAt!,
      status: r.status,
      user: r.reviewerId
    })),
    ...comments.map(c => ({
      id: `com-${c.id}`,
      type: 'COMMENT' as const,
      title: `New Comment`,
      timestamp: c.timestamp,
      user: c.reviewer,
      severity: c.severity
    }))
  ].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())

  const getEventIcon = (event: ReviewEvent) => {
    if (event.type === 'CREATED') return <FileCode className="h-4 w-4 text-blue-500" />
    if (event.type === 'COMMENT') return <MessageSquare className="h-4 w-4 text-purple-500" />
    
    switch (event.status) {
      case 'APPROVED': return <CheckCircle2 className="h-4 w-4 text-green-500" />
      case 'CHANGES_REQUESTED': return <AlertTriangle className="h-4 w-4 text-orange-500" />
      case 'REJECTED': return <Ban className="h-4 w-4 text-red-500" />
      default: return <Clock className="h-4 w-4 text-yellow-500" />
    }
  }

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Review Activity Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {events.map((event) => (
            <div key={event.id} className="relative pl-8 before:absolute before:left-[15px] before:top-2 before:bottom-[-24px] before:w-[2px] before:bg-muted last:before:hidden">
              <div className="absolute left-0 top-1 rounded-full border bg-background p-1.5 z-10">
                {getEventIcon(event)}
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
                  {event.severity && (
                    <>
                      <span>•</span>
                      <Badge variant="outline" className={`text-[8px] h-4 ${
                        event.severity === 'HIGH' ? 'text-red-600 border-red-200' : 
                        event.severity === 'MEDIUM' ? 'text-orange-600 border-orange-200' : 
                        'text-blue-600 border-blue-200'
                      }`}>
                        {event.severity} SEVERITY
                      </Badge>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
