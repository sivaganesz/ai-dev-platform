import { cn } from "@/lib/utils";
import { SidebarHeader } from "./sidebar-header";
import { SidebarNav } from "./sidebar-nav";
import { SidebarFooter } from "./sidebar-footer";
import { useSidebar } from "./sidebar-context";

export function Sidebar() {
  const { isCollapsed } = useSidebar();

  return (
    <aside
      className={cn(
        "hidden md:flex h-screen flex-col border-r bg-card transition-all duration-300",
        isCollapsed ? "w-[72px]" : "w-[260px]"
      )}
    >
      <SidebarHeader />
      <SidebarNav />
      <SidebarFooter />
    </aside>
  );
}
