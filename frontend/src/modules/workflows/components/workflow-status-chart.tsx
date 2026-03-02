import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type Workflow } from "@/../mock/core/workflows/workflowsData";

interface WorkflowStatusChartProps {
  workflows: Workflow[];
}

export function WorkflowStatusChart({ workflows }: WorkflowStatusChartProps) {
  const counts = workflows.reduce(
    (acc, w) => {
      acc[w.status]++;
      return acc;
    },
    { RUNNING: 0, COMPLETED: 0, FAILED: 0 }
  );

  const data = [
    { name: "Running", value: counts.RUNNING, color: "#3b82f6" },
    { name: "Completed", value: counts.COMPLETED, color: "#10b981" },
    { name: "Failed", value: counts.FAILED, color: "#ef4444" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">Workflow Health</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[240px] w-full">
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
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  color: "hsl(var(--foreground))",
                }}
                itemStyle={{ color: "hsl(var(--foreground))" }}
              />
              <Legend verticalAlign="bottom" height={36}/>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
