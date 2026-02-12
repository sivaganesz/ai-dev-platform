import { Link, useLocation } from "react-router-dom";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSidebar } from "./sidebar-context";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

interface SidebarItemProps {
  title: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
}

export function SidebarItem({ title, href, icon: Icon, badge }: SidebarItemProps) {
  const { isCollapsed } = useSidebar();
  const location = useLocation();
  const isActive = location.pathname === href;

  const content = (
    <Link
      to={href}
      className={cn(
        "group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground",
        isActive ? "bg-accent text-accent-foreground" : "transparent",
        isCollapsed ? "justify-center px-2" : "justify-start"
      )}
    >
      <Icon
        className={cn(
          "h-5 w-5 shrink-0 transition-colors",
          isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary",
          !isCollapsed && "mr-3"
        )}
      />
      {!isCollapsed && (
        <span className="flex-1 truncate">{title}</span>
      )}
      {!isCollapsed && badge && (
        <Badge variant="secondary" className="ml-auto h-5 px-1.5 text-[10px]">
          {badge}
        </Badge>
      )}
      {isActive && !isCollapsed && (
        <div className="absolute left-0 h-6 w-1 rounded-r-full bg-primary" />
      )}
    </Link>
  );

  if (isCollapsed) {
    return (
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          {content}
        </TooltipTrigger>
        <TooltipContent side="right" className="flex items-center gap-4">
          {title}
          {badge && (
            <Badge variant="secondary" className="h-5 px-1.5 text-[10px]">
              {badge}
            </Badge>
          )}
        </TooltipContent>
      </Tooltip>
    );
  }

  return content;
}
