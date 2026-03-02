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
import type { MFAUser } from "@/../mock/core/settings/securityData";
import { Fingerprint } from "lucide-react";

interface MFAStatusTableProps {
  users: MFAUser[];
}

export function MFAStatusTable({ users }: MFAStatusTableProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-sm font-bold flex items-center gap-2">
          <Fingerprint className="h-4 w-4 text-primary" />
          MFA Adoption & Method Registry
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border overflow-hidden">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="text-[10px] font-bold uppercase">User</TableHead>
                <TableHead className="text-[10px] font-bold uppercase">MFA Status</TableHead>
                <TableHead className="text-[10px] font-bold uppercase">Primary Method</TableHead>
                <TableHead className="text-[10px] font-bold uppercase text-right">Last Verified</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="text-xs font-bold">{user.user}</TableCell>
                  <TableCell>
                    <Badge variant={user.status === 'ENABLED' ? 'default' : 'secondary'} className="text-[9px] h-4">
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-[10px] text-muted-foreground">{user.method}</TableCell>
                  <TableCell className="text-right text-[10px] text-muted-foreground">
                    {user.lastVerified}
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
