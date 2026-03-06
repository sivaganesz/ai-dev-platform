import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  projects: { status: string }[];
}

export function ProjectsOverviewChart({ projects }: Props) {
  const data = [
    {
      name: "Active",
      value: projects.filter(p => p.status === "ACTIVE").length,
      color: "hsl(var(--primary))",
    },
    {
      name: "Completed",
      value: projects.filter(p => p.status === "COMPLETED").length,
      color: "hsl(var(--primary) / 0.7)",
    },
    {
      name: "On Hold",
      value: projects.filter(p => p.status === "ON_HOLD").length,
      color: "hsl(var(--muted))",
    },
  ];

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="text-base font-medium">Projects Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[240px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis
                dataKey="name"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  color: "hsl(var(--foreground))",
                }}
                itemStyle={{ color: "hsl(var(--foreground))" }}
              />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
