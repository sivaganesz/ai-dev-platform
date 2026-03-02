import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import type { User } from "@/../mock/core/administration/usersData";
import { Mail, Calendar, Shield, Bot, FolderKanban } from "lucide-react";

interface UserDetailsDrawerProps {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
}

export function UserDetailsDrawer({ user, isOpen, onClose }: UserDetailsDrawerProps) {
  if (!user) return null;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="sm:max-w-md">
        <SheetHeader>
          <div className="flex flex-col items-center gap-4 py-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={user.avatar} />
              <AvatarFallback className="text-2xl">{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <SheetTitle className="text-xl font-bold">{user.name}</SheetTitle>
              <SheetDescription>{user.email}</SheetDescription>
            </div>
            <Badge>{user.status}</Badge>
          </div>
        </SheetHeader>

        <div className="space-y-6 mt-4">
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Identity & Role</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Shield className="h-4 w-4 text-primary" />
                <span className="font-medium">{user.roleName}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>Joined {user.joinedAt}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>{user.email}</span>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Assigned Agents</h4>
            <div className="flex flex-wrap gap-2">
              {user.assignedAgents.map(agentId => (
                <div key={agentId} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted border text-xs font-medium">
                  <Bot className="h-3 w-3 text-primary" />
                  {agentId}
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Team Context</h4>
            <div className="flex items-center gap-3 p-3 rounded-lg border bg-muted/30">
              <FolderKanban className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-bold">{user.teamName}</p>
                <p className="text-[10px] text-muted-foreground">{user.roleName} assigned to {user.teamName}</p>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
