
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from "recharts"

interface RiskAssessmentPanelProps {
  data?: {
    scalabilityRisk: number
    securityRisk: number
    performanceRisk: number
    costRisk: number
  }
}

export function RiskAssessmentPanel({ data }: RiskAssessmentPanelProps) {
  const chartData = [
    { subject: 'Scalability', A: data?.scalabilityRisk || 0, fullMark: 100 },
    { subject: 'Security', A: data?.securityRisk || 0, fullMark: 100 },
    { subject: 'Performance', A: data?.performanceRisk || 0, fullMark: 100 },
    { subject: 'Cost', A: data?.costRisk || 0, fullMark: 100 },
  ]

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Architecture Risk Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10 }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} />
              <Radar
                name="Risk Level"
                dataKey="A"
                stroke="#ef4444"
                fill="#ef4444"
                fillOpacity={0.6}
              />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
