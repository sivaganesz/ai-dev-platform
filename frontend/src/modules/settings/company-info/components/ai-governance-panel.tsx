import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { AIGovernanceDefaults } from "@/../mock/core/settings/companyData";
import { Brain, ShieldAlert, FileText, Coins, CheckCircle2, XCircle } from "lucide-react";

interface AIGovernancePanelProps {
  defaults: AIGovernanceDefaults;
}

export function AIGovernancePanel({ defaults }: AIGovernancePanelProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-bold flex items-center gap-2">
          <Brain className="h-4 w-4 text-primary" />
          Org-Wide AI Governance
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between p-3 rounded-lg border bg-muted/20">
          <div className="space-y-0.5">
            <p className="text-xs font-bold">Autonomous Execution</p>
            <p className="text-[10px] text-muted-foreground">Allow agents to trigger code changes without intervention</p>
          </div>
          {defaults.allowAutonomousExecution ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <XCircle className="h-4 w-4 text-red-500" />}
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg border bg-muted/20">
          <div className="space-y-0.5">
            <p className="text-xs font-bold">Production Code Approval</p>
            <p className="text-[10px] text-muted-foreground">Mandatory human sign-off for agent-generated PRs</p>
          </div>
          {defaults.requireHumanApproval ? <ShieldAlert className="h-4 w-4 text-yellow-500" /> : <CheckCircle2 className="h-4 w-4 text-green-500" />}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 rounded-lg border bg-muted/10 space-y-1">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-muted-foreground tracking-widest">
              <FileText className="h-3 w-3" /> Audit Level
            </div>
            <p className="text-sm font-bold">{defaults.promptLoggingLevel}</p>
          </div>
          <div className="p-3 rounded-lg border bg-muted/10 space-y-1">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-muted-foreground tracking-widest">
              <Coins className="h-3 w-3" /> Monthly Cap
            </div>
            <p className="text-sm font-bold">{(defaults.tokenCapPerMonth / 1000000).toFixed(0)}M Tokens</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
