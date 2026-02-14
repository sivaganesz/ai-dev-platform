import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { SecurityIncident } from "@/../mock/core/settings/securityData";
import { AlertCircle } from "lucide-react";

interface SecurityIncidentLogsProps {
  incidents: SecurityIncident[];
}

export function SecurityIncidentLogs({ incidents }: SecurityIncidentLogsProps) {
  const getSeverityColor = (sev: string) => {
    switch (sev) {
      case 'CRITICAL': return 'bg-red-600 text-white';
      case 'HIGH': return 'bg-red-500/10 text-red-500 border-red-500/20';
      case 'MEDIUM': return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      default: return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-sm font-bold flex items-center gap-2">
          <AlertCircle className="h-4 w-4 text-red-500" />
          Security Incident Logs
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border overflow-hidden">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="text-[10px] font-bold uppercase">ID</TableHead>
                <TableHead className="text-[10px] font-bold uppercase">Type</TableHead>
                <TableHead className="text-[10px] font-bold uppercase">Severity</TableHead>
                <TableHead className="text-[10px] font-bold uppercase text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {incidents.map((incident) => (
                <TableRow key={incident.id}>
                  <TableCell className="text-[10px] font-mono font-bold">{incident.id}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold">{incident.type}</span>
                      <span className="text-[9px] text-muted-foreground uppercase">{incident.module}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded border ${getSeverityColor(incident.severity)}`}>
                      {incident.severity}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant={incident.status === 'RESOLVED' ? 'default' : 'secondary'} className="text-[8px] h-3.5 px-1">
                      {incident.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
