import { useState } from "react";
import { useCreateWorkflow, type Workflow } from "../hooks/use-workflows-data";
import { useProjectsData } from "@/modules/projects/hooks/use-projects-data";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

interface Props {
  open: boolean;
  onClose: () => void;
}

const TEAMS = ["ML", "Backend", "Frontend", "DevOps", "QA"];

export function CreateWorkflowModal({ open, onClose }: Props) {
  const createWorkflow = useCreateWorkflow();
  const { data: projects = [] } = useProjectsData();

  const [form, setForm] = useState<Partial<Workflow>>({
    name: "",
    description: "",
    projectId: "",
    status: "RUNNING",
    assignedTo: [],
    startDate: "",
    endDate: "",
    tasksCount: 0,
  });

  const handleTeamToggle = (t: string) => {
    const current = form.assignedTo || [];
    setForm(prev => ({
      ...prev,
      assignedTo: current.includes(t) ? current.filter(x => x !== t) : [...current, t],
    }));
  };

  const handleSubmit = () => {
    if (!form.name || !form.projectId) return;
    createWorkflow.mutate(form, {
      onSuccess: () => { onClose(); setForm({ name: "", status: "RUNNING", assignedTo: [] }); },
    });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>New Workflow</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label>Name *</Label>
            <Input value={form.name || ""} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} placeholder="Workflow name" />
          </div>
          <div className="grid gap-2">
            <Label>Description</Label>
            <Textarea value={form.description || ""} onChange={e => setForm(p => ({ ...p, description: e.target.value }))} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label>Project *</Label>
              <Select value={form.projectId} onValueChange={v => setForm(p => ({ ...p, projectId: v }))}>
                <SelectTrigger><SelectValue placeholder="Select project" /></SelectTrigger>
                <SelectContent>
                  {projects.map(p => (
                    <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label>Status</Label>
              <Select value={form.status} onValueChange={v => setForm(p => ({ ...p, status: v as Workflow["status"] }))}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="RUNNING">Running</SelectItem>
                  <SelectItem value="COMPLETED">Completed</SelectItem>
                  <SelectItem value="FAILED">Failed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label>Start Date</Label>
              <Input type="date" value={form.startDate || ""} onChange={e => setForm(p => ({ ...p, startDate: e.target.value }))} />
            </div>
            <div className="grid gap-2">
              <Label>End Date</Label>
              <Input type="date" value={form.endDate || ""} onChange={e => setForm(p => ({ ...p, endDate: e.target.value }))} />
            </div>
          </div>
          <div className="grid gap-2">
            <Label>Assigned To</Label>
            <div className="flex flex-wrap gap-2">
              {TEAMS.map(t => (
                <Button key={t} size="sm" variant={form.assignedTo?.includes(t) ? "default" : "outline"}
                  onClick={() => handleTeamToggle(t)} type="button" className="text-xs">
                  {t}
                </Button>
              ))}
            </div>
          </div>
          <div className="grid gap-2">
            <Label>Tasks Count</Label>
            <Input type="number" value={form.tasksCount || 0} onChange={e => setForm(p => ({ ...p, tasksCount: parseInt(e.target.value) || 0 }))} />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} disabled={createWorkflow.isPending}>
            {createWorkflow.isPending ? "Creating..." : "Create Workflow"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
