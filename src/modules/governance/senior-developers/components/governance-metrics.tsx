
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, CheckCircle2, FileSearch, ShieldAlert } from "lucide-react"

interface GovernanceMetricsProps {
  metrics: {
    totalSeniorDevs: number
    activeApprovals: number
    pendingReviews: number
    adrDecisionsThisMonth: number
  }
}

export function GovernanceMetrics({ metrics }: GovernanceMetricsProps) {
  const data = [
    {
      title: "Total Senior Developers",
      value: metrics.totalSeniorDevs,
      icon: Users,
      description: "Technical authority layer",
      color: "text-blue-600",
    },
    {
      title: "Active Approvals",
      value: metrics.activeApprovals,
      icon: CheckCircle2,
      description: "Pending deployment signs",
      color: "text-green-600",
    },
    {
      title: "Pending Reviews",
      value: metrics.pendingReviews,
      icon: FileSearch,
      description: "Code & workflow reviews",
      color: "text-yellow-600",
    },
    {
      title: "ADR Decisions (Month)",
      value: metrics.adrDecisionsThisMonth,
      icon: ShieldAlert,
      description: "Architecture decisions",
      color: "text-purple-600",
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
