import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Lock, Unlock } from "lucide-react";

interface PermissionMatrixProps {
  modules: string[];
  actions: string[];
}

export function PermissionMatrix({ modules, actions }: PermissionMatrixProps) {
  // Mock function to check if a permission is granted
  const isGranted = (_module: string, _action: string) => {
    // In a real app, this would check the selected role's permissions
    return Math.random() > 0.5;
  };

  return (
    <div className="rounded-md border bg-card overflow-hidden">
      <div className="bg-muted/30 p-3 border-b flex items-center justify-between">
        <h3 className="text-sm font-bold flex items-center gap-2">
          <Lock className="h-4 w-4 text-muted-foreground" />
          Module-Action Access Matrix
        </h3>
        <div className="flex items-center gap-4 text-[10px] text-muted-foreground">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-primary" /> Granted
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-muted border" /> Inherited
          </div>
        </div>
      </div>
      <Table>
        <TableHeader className="bg-muted/50">
          <TableRow>
            <TableHead className="w-[150px]">Module</TableHead>
            {actions.map(action => (
              <TableHead key={action} className="text-center text-[10px] font-bold uppercase tracking-wider">
                {action}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {modules.map((module) => (
            <TableRow key={module}>
              <TableCell className="font-medium text-xs">{module}</TableCell>
              {actions.map(action => (
                <TableCell key={action} className="text-center">
                  <div className="flex justify-center">
                    {/* Since checkbox.tsx is missing from package.json/ui folder as noted in previous turns, I'll use a custom styled toggle or just a visual indicator for now to avoid build errors. Actually I see checkbox.tsx was not in the file list earlier. Let me double check src/components/ui */}
                    <div className={`w-4 h-4 rounded border transition-colors flex items-center justify-center cursor-pointer ${isGranted(module, action) ? 'bg-primary border-primary text-primary-foreground' : 'bg-background border-input'}`}>
                      {isGranted(module, action) && <Unlock className="h-2.5 w-2.5" />}
                    </div>
                  </div>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
