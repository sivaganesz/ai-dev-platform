
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardList, Clock, CheckCircle2, AlertTriangle } from "lucide-react"

interface ApprovalMetricsProps {
  metrics: {
    totalRequests: number
    pendingApprovals: number
    approvedToday: number
    escalations: number
  }
}

export function ApprovalMetrics({ metrics }: ApprovalMetricsProps) {
  const data = [
    {
      title: "Total Requests",
      value: metrics.totalRequests,
      icon: ClipboardList,
      color: "text-blue-600",
      description: "Governance control gate"
    },
    {
      title: "Pending Approvals",
      value: metrics.pendingApprovals,
      icon: Clock,
      color: "text-yellow-600",
      description: "Awaiting authority sign-off"
    },
    {
      title: "Approved Today",
      value: metrics.approvedToday,
      icon: CheckCircle2,
      color: "text-green-600",
      description: "Executed gatekeeper decisions"
    },
    {
      title: "Escalations",
      value: metrics.escalations,
      icon: AlertTriangle,
      color: "text-red-600",
      description: "Critical technical blockers"
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {data.map((item) => (
        <Card key={item.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {item.title}
            </CardTitle>
            <item.icon className={`h-4 w-4 ${item.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.value}</div>
            <p className="text-xs text-muted-foreground">
              {item.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
