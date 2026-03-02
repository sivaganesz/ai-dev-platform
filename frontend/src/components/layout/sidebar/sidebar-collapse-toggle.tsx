import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useSidebar } from "./sidebar-context";
import { Button } from "@/components/ui/button";

export function SidebarCollapseToggle() {
  const { toggleCollapse } = useSidebar();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleCollapse}
      className="hidden md:flex"
    >
      {true ? (
        <PanelLeftOpen className="h-5 w-5 text-muted-foreground" />
      ) : (
        <PanelLeftClose className="h-5 w-5 text-muted-foreground" />
      )}
    </Button>
  );
}
