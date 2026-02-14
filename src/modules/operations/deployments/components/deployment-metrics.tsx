import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  { time: "08:00", cpu: 35, memory: 55, latency: 110 },
  { time: "08:15", cpu: 42, memory: 58, latency: 115 },
  { time: "08:30", cpu: 45, memory: 62, latency: 120 },
  { time: "08:45", cpu: 48, memory: 65, latency: 125 },
  { time: "09:00", cpu: 40, memory: 60, latency: 118 },
  { time: "09:15", cpu: 38, memory: 58, latency: 112 },
];

export function DeploymentMetrics() {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle className="text-sm font-medium">Performance Metrics (Last 2h)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorCpu" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="time" 
                fontSize={10}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                fontSize={10}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip 
                contentStyle={{ fontSize: '10px' }}
                itemStyle={{ fontSize: '10px' }}
              />
              <Area 
                type="monotone" 
                dataKey="cpu" 
                stroke="#8884d8" 
                fillOpacity={1} 
                fill="url(#colorCpu)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
