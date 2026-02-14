import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { OrchestrationRule } from "@/../mock/core/administration/aiConfigData";
import { Workflow, Power, Trash2 } from "lucide-react";

interface OrchestrationRulesPanelProps {
  rules: OrchestrationRule[];
}

export function OrchestrationRulesPanel({ rules }: OrchestrationRulesPanelProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-bold flex items-center gap-2">
          <Workflow className="h-4 w-4" />
          Agent Orchestration Rules
        </CardTitle>
        <Button size="sm" variant="outline" className="h-7 text-[10px]">Add Rule</Button>
      </CardHeader>
      <CardContent className="space-y-3">
        {rules.map((rule) => (
          <div key={rule.id} className="p-3 rounded-lg border bg-muted/20 flex items-start justify-between group">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold">{rule.name}</span>
                <Badge variant={rule.priority === "HIGH" ? "destructive" : "secondary"} className="text-[9px] h-4">
                  {rule.priority}
                </Badge>
              </div>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                {rule.logic}
              </p>
            </div>
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button size="icon" variant="ghost" className="h-7 w-7">
                <Power className={`h-3.5 w-3.5 ${rule.enabled ? 'text-green-500' : 'text-muted-foreground'}`} />
              </Button>
              <Button size="icon" variant="ghost" className="h-7 w-7 text-red-500">
                <Trash2 className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
