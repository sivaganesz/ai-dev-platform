import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { type Agent } from "@/../mock/core/agents/agentsData";

interface AgentWorkflowChartProps {
  agents: Agent[];
}

export function AgentWorkflowChart({ agents }: AgentWorkflowChartProps) {
  const chartData = agents.map(agent => ({
    name: agent.name.split(' ')[0],
    Workflows: agent.assignedWorkflows.length,
    Projects: agent.assignedProjects.length,
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">Workflow Participation</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[240px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
              <XAxis dataKey="name" fontSize={10} tickLine={false} axisLine={false} />
              <YAxis fontSize={10} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{ 
                  backgroundColor: "hsl(var(--background))", 
                  borderColor: "hsl(var(--border))",
                  fontSize: "10px",
                  borderRadius: "8px"
                }}
              />
              <Legend fontSize={10} />
              <Bar dataKey="Workflows" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} barSize={20} />
              <Bar dataKey="Projects" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
