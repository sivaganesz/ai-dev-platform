import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus } from "lucide-react";

export function CreateNotificationRuleModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">
          <Plus className="mr-2 h-4 w-4" />
          Add Rule
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Notification Rule</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="event" className="text-sm font-medium">Event Type</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select event type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pipeline_failure">Pipeline Failure</SelectItem>
                <SelectItem value="deployment_success">Deployment Success</SelectItem>
                <SelectItem value="adr_approval">ADR Approval</SelectItem>
                <SelectItem value="security_alert">Security Alert</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <label htmlFor="channel" className="text-sm font-medium">Notification Channel</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select channel" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="slack">Slack</SelectItem>
                <SelectItem value="teams">Microsoft Teams</SelectItem>
                <SelectItem value="email">Email</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <label htmlFor="recipients" className="text-sm font-medium">Recipients (comma separated)</label>
            <Input id="recipients" placeholder="e.g. dev-team, ops-manager" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Create Rule</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
