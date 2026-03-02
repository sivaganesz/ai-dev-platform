import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { KeyScope } from "@/../mock/core/settings/apiKeysData";
import { Layers, Activity } from "lucide-react";

interface KeyScopeClassificationProps {
  scopes: KeyScope[];
}

export function KeyScopeClassification({ scopes }: KeyScopeClassificationProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-bold flex items-center gap-2">
          <Layers className="h-4 w-4 text-primary" />
          Key Scope Classification
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {scopes.map((scope) => (
          <div key={scope.name} className="p-3 rounded-lg border bg-muted/20 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold">{scope.name}</span>
              <Badge variant={scope.riskLevel === 'HIGH' ? 'destructive' : 'outline'} className="text-[9px] h-4">
                {scope.riskLevel} RISK
              </Badge>
            </div>
            <div className="flex justify-between items-center text-[10px] text-muted-foreground">
              <div className="flex items-center gap-1">
                <Activity className="h-3 w-3" />
                {scope.count} Keys
              </div>
              <span>Used {scope.lastExecution}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
