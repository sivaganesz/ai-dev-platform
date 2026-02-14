import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import type { KeyActivityLog } from "@/../mock/core/settings/apiKeysData";
import { Clock, Globe } from "lucide-react";

interface KeyActivityLogsProps {
  logs: KeyActivityLog[];
}

export function KeyActivityLogs({ logs }: KeyActivityLogsProps) {
  return (
    <div className="rounded-md border bg-card">
      <div className="p-3 border-b bg-muted/30">
        <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
          <Clock className="h-3.5 w-3.5" />
          Real-time Authentication Logs
        </h3>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="text-[10px] font-bold">Key ID</TableHead>
            <TableHead className="text-[10px] font-bold">Module</TableHead>
            <TableHead className="text-[10px] font-bold">Action</TableHead>
            <TableHead className="text-[10px] font-bold text-center">Status</TableHead>
            <TableHead className="text-[10px] font-bold">Timestamp</TableHead>
            <TableHead className="text-[10px] font-bold text-right">Source IP</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-[11px] font-mono">
          {logs.map((log) => (
            <TableRow key={log.id}>
              <TableCell className="uppercase text-muted-foreground">{log.keyId}</TableCell>
              <TableCell className="font-bold">{log.module}</TableCell>
              <TableCell>{log.action}</TableCell>
              <TableCell className="text-center">
                <Badge variant={log.status === 'SUCCESS' ? 'default' : 'destructive'} className="text-[8px] h-3.5 px-1 uppercase">
                  {log.status}
                </Badge>
              </TableCell>
              <TableCell className="whitespace-nowrap text-muted-foreground">
                {new Date(log.timestamp).toLocaleTimeString()}
              </TableCell>
              <TableCell className="text-right flex items-center justify-end gap-1 text-muted-foreground">
                <Globe className="h-2.5 w-2.5" />
                {log.ipAddress}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
