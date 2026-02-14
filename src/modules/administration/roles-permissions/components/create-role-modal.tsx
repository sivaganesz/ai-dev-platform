import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Shield } from "lucide-react";

export function CreateRoleModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">
          <Plus className="mr-2 h-4 w-4" />
          Create Role
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Create Access Role
          </DialogTitle>
          <DialogDescription>
            Define a new role and its primary access scope.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Role Name</label>
            <Input id="name" placeholder="e.g. Compliance Auditor" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="description" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Description</label>
            <textarea 
              id="description" 
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Describe the purpose of this role..."
            />
          </div>
          <div className="grid gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Initial Base Role</label>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm" className="text-[10px] h-8 justify-start">Developer Template</Button>
              <Button variant="outline" size="sm" className="text-[10px] h-8 justify-start">Manager Template</Button>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="w-full">Create & Configure Permissions</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
