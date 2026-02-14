import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { SecurityPolicy } from "@/../mock/core/settings/securityData";
import { ShieldAlert, CheckCircle2 } from "lucide-react";

interface SecurityPolicyEngineProps {
  policies: SecurityPolicy[];
}

export function SecurityPolicyEngine({ policies }: SecurityPolicyEngineProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-bold flex items-center gap-2">
          <ShieldAlert className="h-4 w-4 text-primary" />
          Security Policy Engine
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {policies.map((policy) => (
            <div key={policy.id} className="p-3 rounded-lg border bg-muted/20 flex flex-col justify-between gap-3">
              <div>
                <p className="text-[9px] font-bold uppercase text-muted-foreground tracking-widest mb-1">Policy</p>
                <p className="text-xs font-bold">{policy.policy}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-muted-foreground font-mono">{policy.enforcement}</span>
                <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
