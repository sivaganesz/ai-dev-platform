import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TeamPerformance {
  team: string;
  completedTasks: number;
  pendingTasks: number;
}

interface Props {
  teamPerformance: TeamPerformance[];
}

export function TeamPerformanceChart({ teamPerformance }: Props) {
  const data = teamPerformance.map(t => ({
    team: t.team,
    completed: t.completedTasks,
    pending: t.pendingTasks,
  }));

  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle className="text-base font-medium">Team Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical">
              <XAxis type="number" hide />
              <YAxis
                dataKey="team"
                type="category"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                cursor={{ fill: "transparent" }}
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  color: "hsl(var(--foreground))",
                }}
                itemStyle={{ color: "hsl(var(--foreground))" }}
              />
              <Legend />
              <Bar dataKey="completed" stackId="a" fill="#10b981" radius={[0, 0, 0, 0]} barSize={20} />
              <Bar dataKey="pending" stackId="a" fill="hsl(var(--muted))" radius={[0, 4, 4, 0]} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
