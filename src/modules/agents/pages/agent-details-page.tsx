import { useParams } from "react-router-dom";
import { useAgent } from "../hooks/use-agents-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Activity, Clock, Target, Rocket, AlertCircle, ShieldCheck, ShieldAlert, Shield, BrainCircuit } from "lucide-react";
import type { Agent, AgentActivity } from "@/../mock/core/agents/agentsData";
import { AgentRoleExecutionFlow } from "../components/agent-role-execution-flow";
import { AgentActiveTasks } from "../components/agent-active-tasks";
import { AgentExecutionTimeline } from "../components/agent-execution-timeline";
import { AgentHandoffIntelligence } from "../components/agent-handoff-intelligence";
import { AgentWorkflowParticipation } from "../components/agent-workflow-participation";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { cn } from "@/lib/utils";

const agentMap: Record<string, string> = {
  frontend: "AG-001",
  backend: "AG-002",
  qa: "AG-003",
  devops: "AG-004",
  ux: "AG-005",
};

// Mock trend data for individual agent
const executionTrend = [
  { time: "08:00", load: 12 },
  { time: "09:00", load: 18 },
  { time: "10:00", load: 45 },
  { time: "11:00", load: 32 },
  { time: "12:00", load: 56 },
  { time: "13:00", load: 48 },
  { time: "14:00", load: 64 },
];

export default function AgentDetailsPage() {
  const { agentType } = useParams<{ agentType: string }>();
  const agentId = agentType ? agentMap[agentType.toLowerCase()] : null;
  const { data, isLoading } = useAgent(agentId || "");

  if (isLoading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-sm text-muted-foreground">Synchronizing agent execution state...</p>
        </div>
      </div>
    );
  }

  if (!data?.agent) {
    return (
      <div className="p-8 text-center">
        <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold">Agent Not Found</h2>
        <p className="text-muted-foreground">The agent you are looking for does not exist.</p>
      </div>
    );
  }

  const { agent, activities, flow, tasks, timeline, handoff, workflows } = data;

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <BrainCircuit className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">{agent.agentName}</h1>
            <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
              {agent.status}
            </Badge>
          </div>
          <p className="text-muted-foreground font-mono text-sm">{agent.agentId} • {agent.agentType}</p>
        </div>
      </div>

      {/* Row 1: Agent KPIs */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
              <Target className="h-3.5 w-3.5" /> Success Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{agent.successRate}%</div>
            <Progress value={agent.successRate} className="h-1 mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
              <Activity className="h-3.5 w-3.5" /> Total Executions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{agent.executionCount}</div>
            <p className="text-[10px] text-muted-foreground mt-1">Lifetime operations</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
              <Clock className="h-3.5 w-3.5" /> Avg completion
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{agent.avgCompletionTime}</div>
            <p className="text-[10px] text-muted-foreground mt-1">Per atomic task</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
              <Rocket className="h-3.5 w-3.5" /> Deployment Linked
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{agent.deploymentLinked ? "ACTIVE" : "N/A"}</div>
            <p className="text-[10px] text-muted-foreground mt-1">Release participation</p>
          </CardContent>
        </Card>
      </div>

      {/* Row 2: Execution Trend Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Execution Load Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={executionTrend}>
                <defs>
                  <linearGradient id="colorLoad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--muted-foreground))" opacity={0.1} />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ backgroundColor: "hsl(var(--background))", borderColor: "hsl(var(--border))" }}
                  itemStyle={{ color: "hsl(var(--primary))" }}
                />
                <Area type="monotone" dataKey="load" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorLoad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Row 3: Role Execution Flow */}
      {flow && (
        <AgentRoleExecutionFlow nodes={flow.nodes} edges={flow.edges} />
      )}

      {/* Row 4: Active Tasks + Timeline */}
      <div className="grid gap-6 md:grid-cols-2">
        <AgentActiveTasks tasks={tasks} />
        <AgentExecutionTimeline timeline={timeline} />
      </div>

      {/* Special QA View if applicable */}
      {agent.agentId === "AG-003" && (
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="bg-green-500/5 border-green-500/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-bold text-green-600 flex items-center gap-2 uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" />
                Passed Tests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-700">1,245</div>
            </CardContent>
          </Card>
          <Card className="bg-red-500/5 border-red-500/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-bold text-red-600 flex items-center gap-2 uppercase tracking-wider">
                <ShieldAlert className="h-4 w-4" />
                Failed Tests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-700">12</div>
            </CardContent>
          </Card>
          <Card className="bg-orange-500/5 border-orange-500/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-bold text-orange-600 flex items-center gap-2 uppercase tracking-wider">
                <Shield className="h-4 w-4" />
                Blocking Defects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-700">2</div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Row 5: Handoff Intelligence & Workflow Participation */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1">
          {handoff && <AgentHandoffIntelligence stats={handoff} />}
        </div>
        <div className="md:col-span-2">
          <AgentWorkflowParticipation workflows={workflows} />
        </div>
      </div>

      {/* Row 6: Activity Logs */}
      <Card>
        <CardHeader>
          <CardTitle>Global Activity Intelligence</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px] pr-4">
            <div className="space-y-4">
              {activities.length > 0 ? (
                activities.map((activity) => (
                  <div key={activity.activityId} className="flex items-start justify-between border-b pb-4 last:border-0">
                    <div className="space-y-1">
                      <p className="font-medium text-sm">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">
                        Task: {activity.taskId} • Workflow: {activity.workflowId}
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        {new Date(activity.timestamp).toLocaleString()}
                      </p>
                    </div>
                    <div className="text-right space-y-1">
                      <Badge 
                        variant={activity.status === "Completed" ? "default" : activity.status === "In Progress" ? "outline" : "destructive"} 
                        className={cn(
                          "text-[9px]",
                          activity.status === "In Progress" && "bg-blue-500/10 text-blue-500 border-blue-500/20"
                        )}
                      >
                        {activity.status}
                      </Badge>
                      <p className="text-[10px] text-muted-foreground font-mono">{activity.duration}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-muted-foreground py-8">No recent activities detected</p>
              )}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
