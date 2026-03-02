import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { RegisteredDevice } from "@/../mock/core/settings/securityData";
import { Laptop, ShieldAlert, CheckCircle2 } from "lucide-react";

interface DeviceAccessControlProps {
  devices: RegisteredDevice[];
}

export function DeviceAccessControl({ devices }: DeviceAccessControlProps) {
  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'TRUSTED': return <CheckCircle2 className="h-3 w-3 text-green-500" />;
      case 'UNVERIFIED': return <ShieldAlert className="h-3 w-3 text-yellow-500" />;
      case 'REVOKED': return <ShieldAlert className="h-3 w-3 text-red-500" />;
      default: return null;
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-sm font-bold flex items-center gap-2">
          <Laptop className="h-4 w-4 text-primary" />
          Registered Device Governance
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border overflow-hidden">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="text-[10px] font-bold uppercase">Device</TableHead>
                <TableHead className="text-[10px] font-bold uppercase">Owner</TableHead>
                <TableHead className="text-[10px] font-bold uppercase text-right">Trust Level</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {devices.map((device) => (
                <TableRow key={device.id}>
                  <TableCell className="text-xs font-bold">{device.name}</TableCell>
                  <TableCell className="text-[10px] text-muted-foreground">{device.owner}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <span className="text-[9px] font-bold">{device.trustLevel}</span>
                      {getLevelIcon(device.trustLevel)}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-4 space-y-2">
          <p className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Active Policies</p>
          <div className="flex items-center justify-between text-[10px] p-2 bg-muted/30 rounded border">
            <span>Only allow trusted devices</span>
            <span className="text-green-500 font-bold uppercase">Active</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
