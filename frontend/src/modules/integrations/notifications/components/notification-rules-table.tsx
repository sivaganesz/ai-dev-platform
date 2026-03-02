import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { NotificationRule } from "@/../mock/core/integrations/notificationsData";

interface NotificationRulesTableProps {
  rules: NotificationRule[];
}

export function NotificationRulesTable({ rules }: NotificationRulesTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Event</TableHead>
            <TableHead>Channel Mapping</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rules.map((rule) => (
            <TableRow key={rule.id}>
              <TableCell className="font-medium text-xs">{rule.event}</TableCell>
              <TableCell>
                <Badge variant="outline" className="text-[10px]">
                  {rule.channelName}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge 
                  variant={rule.status === "ENABLED" ? "default" : "secondary"}
                  className="text-[10px]"
                >
                  {rule.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm" className="h-8 text-xs">
                  {rule.status === "ENABLED" ? "Disable" : "Enable"}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
