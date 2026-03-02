import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { AccessScope } from "@/../mock/core/settings/profileData";
import { ShieldCheck, CheckCircle2, AlertCircle, XCircle } from "lucide-react";

interface RoleAccessScopeProps {
  scopes: AccessScope[];
}

export function RoleAccessScope({ scopes }: RoleAccessScopeProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'GRANTED': return <CheckCircle2 className="h-3 w-3 text-green-500" />;
      case 'RESTRICTED': return <AlertCircle className="h-3 w-3 text-yellow-500" />;
      case 'DENIED': return <XCircle className="h-3 w-3 text-red-500" />;
      default: return <CheckCircle2 className="h-3 w-3" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-bold flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-primary" />
          Role Visibility & Access Scope
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {scopes.map((scope) => (
            <div key={scope.category} className="flex items-center justify-between p-2 rounded border bg-muted/10">
              <div>
                <p className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">{scope.category}</p>
                <p className="text-xs font-medium">{scope.privilege}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-bold">{scope.status}</span>
                {getStatusIcon(scope.status)}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 p-3 rounded-lg border-dashed border-2 flex flex-col items-center justify-center text-center">
          <p className="text-[10px] text-muted-foreground mb-2">Need higher privileges?</p>
          <button className="text-[10px] font-bold text-primary hover:underline">
            Submit Access Request
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
