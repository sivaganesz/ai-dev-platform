import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShieldCheck, RotateCcw, Bell, Lock } from "lucide-react";

export function KeySecurityPolicies() {
  const policies = [
    { name: "Auto Key Rotation", status: "Enabled", icon: RotateCcw },
    { name: "Expiry Alerts (7 days)", status: "Enabled", icon: Bell },
    { name: "IP Locking Policy", status: "Optional", icon: Lock },
    { name: "MFA for Execute", status: "Required", icon: ShieldCheck },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-bold flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-primary" />
          Security & Rotation Policies
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {policies.map((policy) => (
          <div key={policy.name} className="flex items-center justify-between p-2 rounded border bg-muted/10">
            <div className="flex items-center gap-2">
              <policy.icon className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-xs font-medium">{policy.name}</span>
            </div>
            <Badge variant={policy.status === 'Required' || policy.status === 'Enabled' ? 'default' : 'outline'} className="text-[9px] h-4 uppercase">
              {policy.status}
            </Badge>
          </div>
        ))}
        <Button variant="outline" size="sm" className="w-full text-[10px] h-8 mt-2 font-bold uppercase tracking-widest">
          Apply Org-Wide Policy
        </Button>
      </CardContent>
    </Card>
  );
}
