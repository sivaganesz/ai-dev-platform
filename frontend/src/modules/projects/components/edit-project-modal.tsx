import { useState, useEffect } from "react";
import { useUpdateProject, type Project } from "../hooks/use-projects-data";
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
  project: Project;
}

const TEAMS = ["Frontend", "Backend", "ML", "QA", "DevOps"];

export function EditProjectModal({ open, onClose, project }: Props) {
  const updateProject = useUpdateProject();
  const [form, setForm] = useState<Partial<Project>>(project);

  useEffect(() => { setForm(project); }, [project]);

  const handleTeamToggle = (t: string) => {
    const current = form.team || [];
    setForm(prev => ({
      ...prev,
      team: current.includes(t) ? current.filter(x => x !== t) : [...current, t],
    }));
  };

  const handleSubmit = () => {
    updateProject.mutate({ id: project.id, ...form }, { onSuccess: onClose });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Edit Project</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label>Name *</Label>
            <Input value={form.name || ""} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} />
          </div>
          <div className="grid gap-2">
            <Label>Description</Label>
            <Textarea value={form.description || ""} onChange={e => setForm(p => ({ ...p, description: e.target.value }))} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label>Status</Label>
              <Select value={form.status} onValueChange={v => setForm(p => ({ ...p, status: v as Project["status"] }))}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="ACTIVE">Active</SelectItem>
                  <SelectItem value="ON_HOLD">On Hold</SelectItem>
                  <SelectItem value="COMPLETED">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label>Owner</Label>
              <Input value={form.owner || ""} onChange={e => setForm(p => ({ ...p, owner: e.target.value }))} />
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
            <Label>Team</Label>
            <div className="flex flex-wrap gap-2">
              {TEAMS.map(t => (
                <Button key={t} size="sm" variant={form.team?.includes(t) ? "default" : "outline"}
                  onClick={() => handleTeamToggle(t)} type="button" className="text-xs">
                  {t}
                </Button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label>Tasks Count</Label>
              <Input type="number" value={form.tasksCount || 0} onChange={e => setForm(p => ({ ...p, tasksCount: parseInt(e.target.value) || 0 }))} />
            </div>
            <div className="grid gap-2">
              <Label>Completed Tasks</Label>
              <Input type="number" value={form.completedTasks || 0} onChange={e => setForm(p => ({ ...p, completedTasks: parseInt(e.target.value) || 0 }))} />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} disabled={updateProject.isPending}>
            {updateProject.isPending ? "Saving..." : "Save Changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
