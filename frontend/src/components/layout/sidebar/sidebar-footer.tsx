import { LogOut, Settings } from "lucide-react";
import { useSidebar } from "./sidebar-context";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function SidebarFooter() {
  const { isCollapsed } = useSidebar();

  return (
    <div className="border-t p-4">
      <div className={cn(
        "flex items-center",
        isCollapsed ? "justify-center" : "gap-3"
      )}>
        <Avatar className="h-9 w-9 border">
          <AvatarImage src="https://github.com/shadcn.png" alt="User" />
          <AvatarFallback>SM</AvatarFallback>
        </Avatar>
        
        {!isCollapsed && (
          <div className="flex flex-1 flex-col overflow-hidden">
            <span className="text-sm font-medium leading-none truncate">Siva Muthu</span>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-xs text-muted-foreground truncate">Senior Architect</span>
              <Badge variant="outline" className="h-4 px-1 text-[9px] uppercase">Pro</Badge>
            </div>
          </div>
        )}
      </div>

      {!isCollapsed ? (
        <div className="mt-4 flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8 flex-1 justify-start px-2">
            <Settings className="mr-2 h-4 w-4" />
            <span className="text-xs">Settings</span>
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:bg-destructive/10 hover:text-destructive">
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div className="mt-4 flex flex-col gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Settings className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:bg-destructive/10 hover:text-destructive">
                <LogOut className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">Logout</TooltipContent>
          </Tooltip>
        </div>
      )}
    </div>
  );
}
