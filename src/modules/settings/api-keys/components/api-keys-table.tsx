import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { APIKey } from "@/../mock/core/settings/apiKeysData";
import { Copy, RotateCw, Trash2 } from "lucide-react";

interface APIKeysTableProps {
  keys: APIKey[];
}

export function APIKeysTable({ keys }: APIKeysTableProps) {
  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'ACTIVE': return 'default';
      case 'EXPIRED': return 'destructive';
      case 'REVOKED': return 'secondary';
      default: return 'outline';
    }
  };

  const getEnvColor = (env: string) => {
    switch (env) {
      case 'Production': return 'bg-red-500/10 text-red-500 border-red-500/20';
      case 'Staging': return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      case 'Sandbox': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="rounded-md border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Key Name</TableHead>
            <TableHead>Scope</TableHead>
            <TableHead>Environment</TableHead>
            <TableHead>Permissions</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Used</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {keys.map((key) => (
            <TableRow key={key.id} className="group">
              <TableCell>
                <div className="flex flex-col">
                  <span className="font-bold text-sm">{key.name}</span>
                  <span className="text-[10px] font-mono text-muted-foreground uppercase">{key.keyId}</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="outline" className="text-[10px] uppercase font-bold tracking-tighter">
                  {key.scope}
                </Badge>
              </TableCell>
              <TableCell>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${getEnvColor(key.environment)}`}>
                  {key.environment.toUpperCase()}
                </span>
              </TableCell>
              <TableCell>
                <div className="flex gap-1">
                  {key.permissions.map(p => (
                    <span key={p} className="text-[9px] font-bold text-muted-foreground">{p[0]}</span>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <Badge variant={getStatusVariant(key.status)} className="text-[9px] h-4">
                  {key.status}
                </Badge>
              </TableCell>
              <TableCell className="text-[10px] text-muted-foreground">
                {new Date(key.lastUsed).toLocaleDateString()}
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="icon" variant="ghost" className="h-7 w-7">
                    <Copy className="h-3.5 w-3.5" />
                  </Button>
                  <Button size="icon" variant="ghost" className="h-7 w-7">
                    <RotateCw className="h-3.5 w-3.5" />
                  </Button>
                  <Button size="icon" variant="ghost" className="h-7 w-7 text-red-500">
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
