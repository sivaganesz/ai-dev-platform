import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { CloudProvider } from "../cloudData";
import { Server, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface EnvironmentListProps {
  provider: CloudProvider | null;
}

export function EnvironmentList({ provider }: EnvironmentListProps) {
  if (!provider) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Server className="h-5 w-5 text-primary" />
          Configured Environments
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Environment Name</TableHead>
              <TableHead>Region</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {provider.environments.map((env) => (
              <TableRow key={env.id}>
                <TableCell className="font-medium">{env.name}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {env.region}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge 
                    variant="outline" 
                    className={cn(
                      "capitalize text-[10px]",
                      env.status === 'ACTIVE' && "border-emerald-500/20 text-emerald-500",
                      env.status === 'MAINTENANCE' && "border-orange-500/20 text-orange-500",
                      env.status === 'INACTIVE' && "border-slate-500/20 text-slate-500"
                    )}
                  >
                    {env.status.toLowerCase()}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
