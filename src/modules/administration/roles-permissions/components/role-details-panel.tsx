import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { Role } from "@/../mock/core/administration/rolesData";
import { Shield, Info, Layers, Key } from "lucide-react";

interface RoleDetailsPanelProps {
  role: Role | null;
}

export function RoleDetailsPanel({ role }: RoleDetailsPanelProps) {
  if (!role) {
    return (
      <Card className="h-full flex items-center justify-center border-dashed">
        <div className="text-center p-6 text-muted-foreground">
          <Info className="h-8 w-8 mx-auto mb-2 opacity-20" />
          <p className="text-sm">Select a role to view detailed permissions</p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            {role.name}
          </CardTitle>
          <Badge variant="outline" className="font-mono text-[10px]">{role.id}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Description</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {role.description}
          </p>
        </div>

        <Separator />

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
            <Layers className="h-4 w-4" />
            Module Coverage
          </h4>
          <div className="flex flex-wrap gap-2">
            {role.modulesAccess.map(module => (
              <Badge key={module} variant="secondary" className="text-[10px]">
                {module}
              </Badge>
            ))}
          </div>
        </div>

        <Separator />

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
            <Key className="h-4 w-4" />
            Global Permissions
          </h4>
          <div className="space-y-2">
            {role.permissions.map(perm => (
              <div key={perm} className="flex items-center justify-between p-2 rounded bg-muted/30 border border-muted text-[11px]">
                <span className="font-mono">{perm}</span>
                <span className="text-green-500 font-bold text-[9px]">GRANTED</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
