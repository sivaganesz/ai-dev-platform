
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck, Clock, AlertTriangle, Lightbulb } from "lucide-react"

interface DecisionMetricsProps {
  metrics: {
    totalDecisions: number
    approved: number
    underReview: number
    highRisk: number
  }
}

export function DecisionMetrics({ metrics }: DecisionMetricsProps) {
  const data = [
    {
      title: "Total Decisions",
      value: metrics.totalDecisions,
      icon: Lightbulb,
      color: "text-blue-600",
      description: "Architecture roadmap"
    },
    {
      title: "Approved",
      value: metrics.approved,
      icon: ShieldCheck,
      color: "text-green-600",
      description: "Validated for implementation"
    },
    {
      title: "Under Review",
      value: metrics.underReview,
      icon: Clock,
      color: "text-yellow-600",
      description: "Architectural evaluation"
    },
    {
      title: "High-Risk Decisions",
      value: metrics.highRisk,
      icon: AlertTriangle,
      color: "text-red-600",
      description: "Critical system impact"
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
