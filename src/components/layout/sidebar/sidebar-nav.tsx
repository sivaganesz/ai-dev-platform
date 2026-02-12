import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarGroup } from "./sidebar-group";
import { SidebarItem } from "./sidebar-item";
import { navigationConfig } from "./nav-config";

export function SidebarNav() {
  return (
    <ScrollArea className="flex-1 py-2">
      <div className="flex flex-col gap-2">
        {navigationConfig.map((group) => (
          <SidebarGroup key={group.groupLabel} label={group.groupLabel}>
            {group.items.map((item) => (
              <SidebarItem
                key={item.href}
                title={item.title}
                href={item.href}
                icon={item.icon}
                badge={item.badge}
              />
            ))}
          </SidebarGroup>
        ))}
      </div>
    </ScrollArea>
  );
}
