import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ComplianceSettings } from "@/../mock/core/settings/companyData";
import { ShieldCheck, Clock, CheckCircle2, XCircle } from "lucide-react";

interface ComplianceGovernancePanelProps {
  settings: ComplianceSettings;
}

export function ComplianceGovernancePanel({ settings }: ComplianceGovernancePanelProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-bold flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-primary" />
          Compliance & Governance Defaults
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between p-2 rounded border bg-muted/10">
            <span className="text-xs">Architecture Approval</span>
            {settings.requireArchApproval ? <CheckCircle2 className="h-3.5 w-3.5 text-green-500" /> : <XCircle className="h-3.5 w-3.5 text-red-500" />}
          </div>
          <div className="flex items-center justify-between p-2 rounded border bg-muted/10">
            <span className="text-xs">Security Review</span>
            {settings.requireSecurityReview ? <CheckCircle2 className="h-3.5 w-3.5 text-green-500" /> : <XCircle className="h-3.5 w-3.5 text-red-500" />}
          </div>
          <div className="flex items-center justify-between p-2 rounded border bg-muted/10">
            <span className="text-xs">QA Validation</span>
            {settings.mandatoryQAValidation ? <CheckCircle2 className="h-3.5 w-3.5 text-green-500" /> : <XCircle className="h-3.5 w-3.5 text-red-500" />}
          </div>
          <div className="flex items-center justify-between p-2 rounded border bg-muted/10">
            <span className="text-xs">Prompt Audit Logging</span>
            {settings.promptAuditLogging ? <CheckCircle2 className="h-3.5 w-3.5 text-green-500" /> : <XCircle className="h-3.5 w-3.5 text-red-500" />}
          </div>
        </div>

        <div className="flex items-center gap-4 p-3 rounded-lg border border-yellow-500/20 bg-yellow-500/5">
          <Clock className="h-5 w-5 text-yellow-500" />
          <div className="flex-1">
            <p className="text-xs font-bold">Data Retention Policy</p>
            <p className="text-[10px] text-muted-foreground">Systems logs and AI traces are retained for {settings.dataRetentionDays} days.</p>
          </div>
          <Button size="sm" variant="ghost" className="h-7 text-[10px] font-bold">Update</Button>
        </div>

        <div>
          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3 block">Compliance Standards</label>
          <div className="flex flex-wrap gap-2">
            {settings.standards.map(std => (
              <Badge key={std.name} variant={std.enabled ? "default" : "secondary"} className="text-[10px] h-6 px-3">
                {std.name}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
