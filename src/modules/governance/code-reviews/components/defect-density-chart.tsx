
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ZAxis } from "recharts"

interface DefectDensityChartProps {
  data: {
    name: string
    defects: number
    score: number
  }[]
}

export function DefectDensityChart({ data }: DefectDensityChartProps) {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Defect Density vs Quality Score</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                type="number" 
                dataKey="score" 
                name="Quality Score" 
                unit="%" 
                domain={[0, 100]}
              />
              <YAxis 
                type="number" 
                dataKey="defects" 
                name="Defect Count" 
              />
              <ZAxis type="category" dataKey="name" name="Review ID" />
              <Tooltip 
                cursor={{ strokeDasharray: '3 3' }}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Scatter name="Reviews" data={data} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
