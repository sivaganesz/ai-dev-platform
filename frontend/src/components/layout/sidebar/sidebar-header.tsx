import { Bot, PanelLeftClose } from "lucide-react";
import { useSidebar } from "./sidebar-context";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SidebarHeader() {
  const { isCollapsed, toggleCollapse } = useSidebar();

  return (
    <div className={cn(
      "flex h-16 items-center border-b px-4",
      isCollapsed ? "justify-center" : "justify-between"
    )}>
      {!isCollapsed && (
        <div className="flex items-center gap-2 overflow-hidden transition-all">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Bot className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold tracking-tight truncate">
            Enterprise AI
          </span>
        </div>
      )}
      {isCollapsed && (
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleCollapse}
            className="hidden md:flex"
          >
            <Bot className="h-5 w-5" />
          </Button>
        </div>
      )}
      {!isCollapsed && (
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleCollapse}
          className="hidden md:flex"
        >
          <PanelLeftClose className="h-5 w-5 text-muted-foreground" />
        </Button>
      )}
    </div>
  );
}
