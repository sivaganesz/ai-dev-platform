import { useSecurityData } from "../hooks/use-security-data";
import { SecurityMetricsCards } from "../components/security-metrics-cards";
import { AuthenticationControls } from "../components/authentication-controls";
import { MFAStatusTable } from "../components/mfa-status-table";
import { ActiveSessionMonitor } from "../components/active-session-monitor";
import { DeviceAccessControl } from "../components/device-access-control";
import { ThreatDetectionCenter } from "../components/threat-detection-center";
import { SecurityIncidentLogs } from "../components/security-incident-logs";
import { AuditCompliancePanel } from "../components/audit-compliance-panel";
import { SecurityPolicyEngine } from "../components/security-policy-engine";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Lock, Download } from "lucide-react";

export default function SecuritySettingsPage() {
  const { data, isLoading } = useSecurityData();

  if (isLoading) {
    return <div className="flex items-center justify-center h-full">Encrypting security context...</div>;
  }

  return (
    <div className="flex-1 space-y-6 p-4 pt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">Security Command Center</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export Audit Logs
          </Button>
          <Button size="sm" variant="destructive">
            <Lock className="mr-2 h-4 w-4" />
            Enforce Org MFA
          </Button>
        </div>
      </div>

      <SecurityMetricsCards summary={data?.summary!} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AuthenticationControls controls={data?.authControls || []} />
        <MFAStatusTable users={data?.mfaUsers || []} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActiveSessionMonitor sessions={data?.sessions || []} />
        <DeviceAccessControl devices={data?.devices || []} />
      </div>

      <ThreatDetectionCenter loginTrend={data?.loginTrend || []} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SecurityIncidentLogs incidents={data?.incidents || []} />
        <AuditCompliancePanel logs={data?.auditLogs || []} />
      </div>

      <SecurityPolicyEngine policies={data?.policies || []} />
    </div>
  );
}
