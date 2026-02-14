import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { AuthControl } from "@/../mock/core/settings/securityData";
import { Lock, ShieldCheck, Settings } from "lucide-react";

interface AuthenticationControlsProps {
  controls: AuthControl[];
}

export function AuthenticationControls({ controls }: AuthenticationControlsProps) {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-bold flex items-center gap-2">
          <Lock className="h-4 w-4 text-primary" />
          Authentication & Identity Controls
        </CardTitle>
        <Button size="sm" variant="outline" className="h-7 text-[10px]">Update All</Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {controls.map((control) => (
          <div key={control.id} className="flex items-center justify-between p-3 rounded-lg border bg-muted/20 group">
            <div className="space-y-0.5">
              <p className="text-xs font-bold">{control.policy}</p>
              <p className="text-[10px] text-muted-foreground">{control.description}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold text-primary">{control.status.toUpperCase()}</span>
              <Button size="icon" variant="ghost" className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity">
                <Settings className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        ))}
        <div className="p-3 rounded-lg border border-blue-500/20 bg-blue-500/5 flex items-center gap-3">
          <ShieldCheck className="h-5 w-5 text-blue-500" />
          <div className="flex-1">
            <p className="text-[10px] font-bold">SSO Integration</p>
            <p className="text-[9px] text-muted-foreground">Azure AD, Okta, and Google Workspace are configured.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
