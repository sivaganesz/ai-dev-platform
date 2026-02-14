import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Terminal } from "lucide-react";

export function CreatePromptModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">
          <Plus className="mr-2 h-4 w-4" />
          Create Template
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-primary" />
            New Prompt Template
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Template Name</label>
            <Input placeholder="e.g. Unit Test Generator" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <label className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Target Agent</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Agent" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="frontend">Frontend Agent</SelectItem>
                  <SelectItem value="backend">Backend Agent</SelectItem>
                  <SelectItem value="qa">QA Agent</SelectItem>
                  <SelectItem value="devops">DevOps Agent</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <label className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Category</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gen">Generation</SelectItem>
                  <SelectItem value="ana">Analysis</SelectItem>
                  <SelectItem value="rev">Review</SelectItem>
                  <SelectItem value="sim">Simulation</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-2">
            <label className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Base Instructions</label>
            <textarea 
              className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="System prompt instructions..."
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="w-full">Initialize Template</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
