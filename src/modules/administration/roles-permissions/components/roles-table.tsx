import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import type { Role } from "@/../mock/core/administration/rolesData";
import { Shield, ChevronRight } from "lucide-react";

interface RolesTableProps {
  roles: Role[];
  onSelectRole: (role: Role) => void;
  selectedRoleId?: string;
}

export function RolesTable({ roles, onSelectRole, selectedRoleId }: RolesTableProps) {
  return (
    <div className="rounded-md border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Role Name</TableHead>
            <TableHead>Permissions</TableHead>
            <TableHead>Modules</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {roles.map((role) => (
            <TableRow 
              key={role.id} 
              className={`cursor-pointer group transition-colors ${selectedRoleId === role.id ? 'bg-muted' : 'hover:bg-muted/50'}`}
              onClick={() => onSelectRole(role)}
            >
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  {role.name}
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="secondary" className="text-[10px]">
                  {role.permissions.length} Actions
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {role.modulesAccess.slice(0, 3).map(m => (
                    <span key={m} className="text-[9px] px-1.5 py-0.5 rounded-full bg-muted border text-muted-foreground">
                      {m}
                    </span>
                  ))}
                  {role.modulesAccess.length > 3 && (
                    <span className="text-[9px] text-muted-foreground">+{role.modulesAccess.length - 3}</span>
                  )}
                </div>
              </TableCell>
              <TableCell>
                <ChevronRight className={`h-4 w-4 text-muted-foreground transition-opacity ${selectedRoleId === role.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
