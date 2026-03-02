import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import type { OrgHierarchy } from "@/../mock/core/settings/companyData";
import { Map, User } from "lucide-react";

interface OrgStructureMappingProps {
  hierarchy: OrgHierarchy[];
}

export function OrgStructureMapping({ hierarchy }: OrgStructureMappingProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-bold flex items-center gap-2">
          <Map className="h-4 w-4 text-primary" />
          Organizational Structure Mapping
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border overflow-hidden">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="text-[10px] font-bold uppercase">Department</TableHead>
                <TableHead className="text-[10px] font-bold uppercase">Head of Dept</TableHead>
                <TableHead className="text-[10px] font-bold uppercase">Associated Teams</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {hierarchy.map((dept) => (
                <TableRow key={dept.id}>
                  <TableCell className="text-xs font-bold">{dept.department}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-xs">
                      <User className="h-3 w-3 text-muted-foreground" />
                      {dept.head}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {dept.teams.map(team => (
                        <Badge key={team} variant="outline" className="text-[9px] h-4">
                          {team}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <p className="text-[9px] text-muted-foreground mt-4 italic">
          This mapping is used for automated ADR approval routing and code review escalation paths.
        </p>
      </CardContent>
    </Card>
  );
}
