import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  workflows: { status: string }[];
}

export function WorkflowStatusChart({ workflows }: Props) {
  const data = [
    {
      name: "Running",
      value: workflows.filter(w => w.status === "RUNNING").length,
      color: "#3b82f6",
    },
    {
      name: "Completed",
      value: workflows.filter(w => w.status === "COMPLETED").length,
      color: "#10b981",
    },
    {
      name: "Failed",
      value: workflows.filter(w => w.status === "FAILED").length,
      color: "#ef4444",
    },
  ];

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="text-base font-medium">Workflow Status</CardTitle>
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
