
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileCode, Clock, CheckCircle2, XCircle } from "lucide-react"

interface ReviewMetricsProps {
  metrics: {
    totalReviews: number
    pendingReviews: number
    approvedReviews: number
    rejectedReviews: number
  }
}

export function ReviewMetrics({ metrics }: ReviewMetricsProps) {
  const data = [
    {
      title: "Total Reviews",
      value: metrics.totalReviews,
      icon: FileCode,
      color: "text-blue-600",
      description: "Code quality control layer"
    },
    {
      title: "Pending Reviews",
      value: metrics.pendingReviews,
      icon: Clock,
      color: "text-yellow-600",
      description: "Awaiting technical validation"
    },
    {
      title: "Approved Reviews",
      value: metrics.approvedReviews,
      icon: CheckCircle2,
      color: "text-green-600",
      description: "Validated for deployment"
    },
    {
      title: "Rejected Reviews",
      value: metrics.rejectedReviews,
      icon: XCircle,
      color: "text-red-600",
      description: "Quality standard not met"
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
