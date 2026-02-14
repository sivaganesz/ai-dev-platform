import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from "recharts";
import type { WorkflowCompletion } from "@/../mock/core/operations/performanceData";

interface WorkflowCompletionChartProps {
  data: WorkflowCompletion[];
}

export function WorkflowCompletionChart({ data }: WorkflowCompletionChartProps) {
  return (
    <Card className="col-span-full md:col-span-1">
      <CardHeader>
        <CardTitle className="text-sm font-medium">Workflow Completion Efficiency</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[240px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid stroke="#f0f0f0" />
              <PolarAngleAxis dataKey="name" fontSize={10} />
              <PolarRadiusAxis fontSize={10} angle={30} domain={[0, 4000]} />
              <Radar
                name="Avg Time"
                dataKey="avgTime"
                stroke="#10b981"
                fill="#10b981"
                fillOpacity={0.5}
              />
              <Radar
                name="Max Time"
                dataKey="maxTime"
                stroke="#f43f5e"
                fill="#f43f5e"
                fillOpacity={0.3}
              />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', fontSize: '10px' }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center gap-4 mt-2">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#10b981]" />
            <span className="text-[10px] text-muted-foreground">Avg Duration</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#f43f5e]" />
            <span className="text-[10px] text-muted-foreground">Max Duration</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
