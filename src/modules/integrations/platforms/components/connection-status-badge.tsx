import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ConnectionStatusBadgeProps {
  status: 'CONNECTED' | 'DISCONNECTED' | 'SYNCING' | 'ERROR';
  className?: string;
}

export function ConnectionStatusBadge({ status, className }: ConnectionStatusBadgeProps) {
  const variants = {
    CONNECTED: "bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 border-emerald-500/20",
    DISCONNECTED: "bg-slate-500/10 text-slate-500 hover:bg-slate-500/20 border-slate-500/20",
    SYNCING: "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border-blue-500/20 animate-pulse",
    ERROR: "bg-red-500/10 text-red-500 hover:bg-red-500/20 border-red-500/20",
  };

  return (
    <Badge variant="outline" className={cn("capitalize font-medium", variants[status], className)}>
      {status.toLowerCase()}
    </Badge>
  );
}
