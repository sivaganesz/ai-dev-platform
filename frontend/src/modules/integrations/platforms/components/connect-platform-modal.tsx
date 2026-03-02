import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Github, Gitlab, Box, Cloud } from "lucide-react";

export function ConnectPlatformModal() {
  const providers = [
    { name: 'GitHub', icon: <Github className="h-5 w-5" />, color: 'bg-zinc-900' },
    { name: 'GitLab', icon: <Gitlab className="h-5 w-5" />, color: 'bg-orange-600' },
    { name: 'Bitbucket', icon: <Box className="h-5 w-5" />, color: 'bg-blue-600' },
    { name: 'Azure DevOps', icon: <Cloud className="h-5 w-5" />, color: 'bg-sky-500' },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Connect Platform
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Connect Dev Platform</DialogTitle>
          <DialogDescription>
            Choose a platform to connect your repositories and organizations.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          {providers.map((provider) => (
            <Button
              key={provider.name}
              variant="outline"
              className="h-24 flex flex-col gap-2 hover:border-primary hover:bg-primary/5 transition-all"
            >
              <div className={`p-2 rounded-lg text-white ${provider.color}`}>
                {provider.icon}
              </div>
              <span className="text-sm font-semibold">{provider.name}</span>
            </Button>
          ))}
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Organization / Username</label>
            <Input placeholder="e.g. ai-dev-team" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="w-full">Authorize & Connect</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
