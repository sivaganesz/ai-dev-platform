import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileSearch, CheckCircle2, History } from "lucide-react";

interface AuditCompliancePanelProps {
  logs: any[];
}

export function AuditCompliancePanel({ logs }: AuditCompliancePanelProps) {
  const standards = ["SOC2", "ISO 27001", "GDPR", "HIPAA"];

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-sm font-bold flex items-center gap-2">
          <History className="h-4 w-4 text-primary" />
          Audit Trail & Compliance
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Compliance Certifications</label>
          <div className="grid grid-cols-2 gap-2">
            {standards.map(std => (
              <div key={std} className="flex items-center justify-between p-2 rounded border bg-muted/10">
                <span className="text-[10px] font-bold">{std}</span>
                <CheckCircle2 className={`h-3.5 w-3.5 ${std === 'HIPAA' ? 'text-muted-foreground opacity-20' : 'text-green-500'}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Governance Audit Logs</label>
          <div className="space-y-2">
            {logs.map((log, i) => (
              <div key={i} className="flex items-start gap-3 p-2 rounded hover:bg-muted/50 transition-colors border-b border-muted last:border-0">
                <div className="mt-1">
                  <FileSearch className="h-3 w-3 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <p className="text-[10px] font-bold">{log.action}</p>
                    <span className="text-[8px] text-muted-foreground">{log.date}</span>
                  </div>
                  <p className="text-[9px] text-muted-foreground">User: {log.user} • Target: {log.target}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
