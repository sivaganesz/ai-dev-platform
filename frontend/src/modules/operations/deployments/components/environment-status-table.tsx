import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertTriangle } from "lucide-react";

interface EnvironmentHealth {
  environment: string;
  status: string;
  activeDeployments: number;
  uptime: string;
}

interface EnvironmentStatusTableProps {
  data: EnvironmentHealth[];
}

export function EnvironmentStatusTable({ data }: EnvironmentStatusTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Environment</TableHead>
            <TableHead>Health Status</TableHead>
            <TableHead>Active Deployments</TableHead>
            <TableHead>Uptime</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((env) => (
            <TableRow key={env.environment}>
              <TableCell className="font-medium">{env.environment}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  {env.status === "HEALTHY" ? (
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  ) : (
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  )}
                  <span className="text-xs">{env.status}</span>
                </div>
              </TableCell>
              <TableCell className="text-center">{env.activeDeployments}</TableCell>
              <TableCell>
                <Badge variant="outline" className="font-mono">
                  {env.uptime}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
