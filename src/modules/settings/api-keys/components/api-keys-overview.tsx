import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, ShieldAlert, ShieldCheck, ShieldX } from "lucide-react";

interface APIKeysOverviewProps {
  summary: {
    total: number;
    active: number;
    expired: number;
    revoked: number;
  };
}

export function APIKeysOverview({ summary }: APIKeysOverviewProps) {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Total API Keys</CardTitle>
          <Shield className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{summary.total}</div>
          <p className="text-[10px] text-muted-foreground">Managed credentials</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Active Keys</CardTitle>
          <ShieldCheck className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{summary.active}</div>
          <p className="text-[10px] text-green-500 font-medium">Ready for execution</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Expired Keys</CardTitle>
          <ShieldAlert className="h-4 w-4 text-yellow-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{summary.expired}</div>
          <p className="text-[10px] text-muted-foreground">Requires rotation</p>
        </CardContent>
      </Card>
      <Card className="border-red-500/20">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-red-500">Revoked Keys</CardTitle>
          <ShieldX className="h-4 w-4 text-red-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-red-600">{summary.revoked}</div>
          <p className="text-[10px] text-muted-foreground">Permanently disabled</p>
        </CardContent>
      </Card>
    </div>
  );
}
