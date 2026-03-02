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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Key } from "lucide-react";

export function GenerateKeyModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">
          <Plus className="mr-2 h-4 w-4" />
          Create New API Key
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Key className="h-5 w-5 text-primary" />
            Generate Access Credential
          </DialogTitle>
          <DialogDescription>
            Specify the scope and capability for the new API key.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Key Name</label>
            <Input placeholder="e.g. Agents Pipeline Executor" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Module Scope</label>
              <Select>
                <SelectTrigger className="h-8 text-xs">
                  <SelectValue placeholder="Select Scope" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="agents">AI Agents</SelectItem>
                  <SelectItem value="workflows">Workflows</SelectItem>
                  <SelectItem value="sandbox">Sandbox</SelectItem>
                  <SelectItem value="integrations">Integrations</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Environment</label>
              <Select>
                <SelectTrigger className="h-8 text-xs">
                  <SelectValue placeholder="Select Env" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dev">Development</SelectItem>
                  <SelectItem value="sbx">Sandbox</SelectItem>
                  <SelectItem value="prd">Production</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Permissions</label>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="h-7 text-[9px] px-3">READ</Button>
              <Button variant="outline" size="sm" className="h-7 text-[9px] px-3">WRITE</Button>
              <Button variant="default" size="sm" className="h-7 text-[9px] px-3">EXECUTE</Button>
              <Button variant="outline" size="sm" className="h-7 text-[9px] px-3">ADMIN</Button>
            </div>
          </div>
          <div className="grid gap-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Expiry Policy</label>
            <Select defaultValue="30">
              <SelectTrigger className="h-8 text-xs">
                <SelectValue placeholder="Select Expiry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30">30 Days (Recommended)</SelectItem>
                <SelectItem value="60">60 Days</SelectItem>
                <SelectItem value="90">90 Days</SelectItem>
                <SelectItem value="0">Never (Restricted)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="w-full">Generate Secure Token</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
