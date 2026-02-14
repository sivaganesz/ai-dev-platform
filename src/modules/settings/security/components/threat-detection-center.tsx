import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { Shield, Zap, Activity } from "lucide-react";

interface ThreatDetectionCenterProps {
  loginTrend: any[];
}

export function ThreatDetectionCenter({ loginTrend }: ThreatDetectionCenterProps) {
  const threats = [
    { signal: "Multiple failed logins", severity: "MEDIUM", status: "Active" },
    { signal: "Suspicious IP: 45.22.x.x", severity: "HIGH", status: "Blocked" },
    { signal: "API Abuse Attempt", severity: "HIGH", status: "Isolated" },
  ];

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-sm font-bold flex items-center gap-2">
          <Shield className="h-4 w-4 text-primary" />
          Threat Detection Center (AI-Driven)
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
              <Activity className="h-3 w-3" /> Anomaly Signals
            </label>
            <div className="space-y-2">
              {threats.map((threat) => (
                <div key={threat.signal} className="flex items-center justify-between p-3 rounded-lg border bg-muted/20">
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold">{threat.signal}</p>
                    <p className="text-[9px] text-muted-foreground uppercase">{threat.status}</p>
                  </div>
                  <Badge variant={threat.severity === 'HIGH' ? 'destructive' : 'secondary'} className="text-[9px] h-4">
                    {threat.severity}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
              <Zap className="h-3 w-3" /> Authentication Patterns
            </label>
            <div className="h-[180px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={loginTrend}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="name" fontSize={9} axisLine={false} tickLine={false} />
                  <YAxis fontSize={9} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ fontSize: '10px', borderRadius: '8px' }} />
                  <Legend iconSize={8} wrapperStyle={{ fontSize: '10px' }} />
                  <Line type="monotone" dataKey="success" stroke="#10b981" strokeWidth={2} dot={false} name="Success" />
                  <Line type="monotone" dataKey="failed" stroke="#ef4444" strokeWidth={2} dot={false} name="Failed" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
