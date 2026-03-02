import { type ReactNode } from "react";
import { useSidebar } from "./sidebar-context";
import { cn } from "@/lib/utils";

interface SidebarGroupProps {
  label: string;
  children: ReactNode;
}

export function SidebarGroup({ label, children }: SidebarGroupProps) {
  const { isCollapsed } = useSidebar();

  return (
    <div className="py-2">
      {!isCollapsed ? (
        <h2 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </h2>
      ) : (
        <div className="mb-2 border-t border-muted/20 mx-2" />
      )}
      <div className={cn("space-y-1", !isCollapsed && "px-2")}>
        {children}
      </div>
    </div>
  );
}
