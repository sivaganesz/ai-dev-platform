import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type Project } from "@/../mock/core/projects/projectsData";

interface ProjectSummaryChartProps {
  projects: Project[];
}

export function ProjectSummaryChart({ projects }: ProjectSummaryChartProps) {
  const counts = projects.reduce(
    (acc, p) => {
      acc[p.status]++;
      return acc;
    },
    { ACTIVE: 0, ON_HOLD: 0, COMPLETED: 0 }
  );

  const data = [
    { name: "Active", value: counts.ACTIVE, color: "#3b82f6" },
    { name: "On Hold", value: counts.ON_HOLD, color: "#eab308" },
    { name: "Completed", value: counts.COMPLETED, color: "#10b981" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">Project Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full">
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
              <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={40}>
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
