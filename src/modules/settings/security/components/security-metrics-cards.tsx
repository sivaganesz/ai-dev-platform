import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, ShieldAlert, ShieldX, Users, Fingerprint } from "lucide-react";
import type { SecuritySummary } from "@/../mock/core/settings/securityData";

interface SecurityMetricsCardsProps {
  summary: SecuritySummary;
}

export function SecurityMetricsCards({ summary }: SecurityMetricsCardsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-5">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Active Sessions</CardTitle>
          <Users className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{summary.activeSessions}</div>
          <p className="text-[10px] text-muted-foreground">Logged in devices</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">MFA Enabled</CardTitle>
          <Fingerprint className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{summary.mfaEnabledUsers}%</div>
          <p className="text-[10px] text-green-500 font-medium">Platform adoption</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Failed Logins (7d)</CardTitle>
          <ShieldAlert className="h-4 w-4 text-yellow-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{summary.failedLogins7d}</div>
          <p className="text-[10px] text-muted-foreground">Investigate traces</p>
        </CardContent>
      </Card>
      <Card className="border-red-500/20">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-red-500">Active Incidents</CardTitle>
          <ShieldX className="h-4 w-4 text-red-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-red-600">{summary.securityIncidents}</div>
          <p className="text-[10px] text-muted-foreground">Action required</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Threat Alerts</CardTitle>
          <Shield className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{summary.threatAlerts}</div>
          <p className="text-[10px] text-muted-foreground">Anomalies detected</p>
        </CardContent>
      </Card>
    </div>
  );
}
