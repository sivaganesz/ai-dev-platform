import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import type { WorkflowParticipation } from "@/../mock/core/agents/workflowParticipationData";

interface WorkflowParticipationChartProps {
  data: WorkflowParticipation[];
}

export function WorkflowParticipationChart({ data }: WorkflowParticipationChartProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Workflow Participation</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="hsl(var(--muted-foreground))" opacity={0.1} />
              <XAxis type="number" hide />
              <YAxis 
                dataKey="agentName" 
                type="category" 
                axisLine={false} 
                tickLine={false}
                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                width={100}
              />
              <Tooltip 
                cursor={{ fill: 'transparent' }}
                contentStyle={{ 
                  backgroundColor: "hsl(var(--background))", 
                  borderColor: "hsl(var(--border))",
                  borderRadius: "8px",
                  fontSize: "12px"
                }}
              />
              <Bar 
                dataKey="totalExecutions" 
                fill="hsl(var(--primary))" 
                radius={[0, 4, 4, 0]} 
                barSize={20}
                label={{ position: 'right', fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
