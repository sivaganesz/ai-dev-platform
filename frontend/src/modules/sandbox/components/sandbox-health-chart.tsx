
import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"
import { Activity } from "lucide-react"

interface SandboxHealthChartProps {
  data: {
    name: string
    value: number
    color: string
  }[]
}

export const SandboxHealthChart: React.FC<SandboxHealthChartProps> = ({ data }) => {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2 border-b bg-muted/5">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-primary" />
          <CardTitle className="text-sm font-bold uppercase tracking-tight">Environment Health</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 text-center">
          <p className="text-xs text-muted-foreground italic">
            Visual feedback on overall sandbox environment stability.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
