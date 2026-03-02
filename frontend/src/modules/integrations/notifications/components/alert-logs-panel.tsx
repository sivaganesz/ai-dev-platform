import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import type { AlertLog } from "@/../mock/core/integrations/notificationsData";

interface AlertLogsPanelProps {
  logs: AlertLog[];
}

export function AlertLogsPanel({ logs }: AlertLogsPanelProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Timestamp</TableHead>
            <TableHead>Event</TableHead>
            <TableHead>Channel</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Message</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {logs.map((log) => (
            <TableRow key={log.id}>
              <TableCell className="text-xs">
                {new Date(log.timestamp).toLocaleString(undefined, {
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit'
                })}
              </TableCell>
              <TableCell className="font-medium text-xs">{log.event}</TableCell>
              <TableCell className="text-xs">{log.channel}</TableCell>
              <TableCell>
                <Badge 
                  variant={
                    log.status === "DELIVERED" ? "default" : 
                    log.status === "FAILED" ? "destructive" : "secondary"
                  }
                  className="text-[10px]"
                >
                  {log.status}
                </Badge>
              </TableCell>
              <TableCell className="text-xs text-muted-foreground max-w-[300px] truncate">
                {log.message}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
