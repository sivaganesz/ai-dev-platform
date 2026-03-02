import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { ActiveSession } from "@/../mock/core/settings/securityData";
import { Monitor, XOctagon, LogOut, Globe } from "lucide-react";

interface ActiveSessionMonitorProps {
  sessions: ActiveSession[];
}

export function ActiveSessionMonitor({ sessions }: ActiveSessionMonitorProps) {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-bold flex items-center gap-2">
          <Monitor className="h-4 w-4 text-primary" />
          Active Session Monitoring
        </CardTitle>
        <Button variant="destructive" size="sm" className="h-7 text-[9px] font-bold uppercase tracking-widest">Terminate All</Button>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border overflow-hidden">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="text-[10px] font-bold uppercase">Identity</TableHead>
                <TableHead className="text-[10px] font-bold uppercase">Device / OS</TableHead>
                <TableHead className="text-[10px] font-bold uppercase">Location / IP</TableHead>
                <TableHead className="text-[10px] font-bold uppercase text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sessions.map((session) => (
                <TableRow key={session.id} className="group">
                  <TableCell className="text-xs font-bold">{session.user}</TableCell>
                  <TableCell className="text-[10px] text-muted-foreground">{session.device}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-[10px]">
                      <Globe className="h-3 w-3 text-muted-foreground" />
                      <span className="font-mono">{session.ip}</span>
                      <span className="text-muted-foreground">({session.location})</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="icon" variant="ghost" className="h-7 w-7 text-red-500">
                        <LogOut className="h-3.5 w-3.5" />
                      </Button>
                      <Button size="icon" variant="ghost" className="h-7 w-7 text-red-500">
                        <XOctagon className="h-3.5 w-3.5" />
                      </Button>
                    </div>
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
