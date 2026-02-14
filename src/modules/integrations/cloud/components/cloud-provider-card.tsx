import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cloud, Globe, Server, Settings, AlertTriangle, CheckCircle2 } from "lucide-react";
import type { CloudProvider } from "../cloudData";
import { cn } from "@/lib/utils";

interface CloudProviderCardProps {
  provider: CloudProvider;
  onSelect: (provider: CloudProvider) => void;
  isSelected: boolean;
}

export function CloudProviderCard({ provider, onSelect, isSelected }: CloudProviderCardProps) {
  const statusConfig = {
    ACTIVE: { icon: <CheckCircle2 className="h-4 w-4 text-emerald-500" />, class: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" },
    WARNING: { icon: <AlertTriangle className="h-4 w-4 text-orange-500" />, class: "text-orange-500 bg-orange-500/10 border-orange-500/20" },
    ERROR: { icon: <AlertTriangle className="h-4 w-4 text-red-500" />, class: "text-red-500 bg-red-500/10 border-red-500/20" },
  };

  return (
    <Card 
      className={cn(
        "cursor-pointer transition-all hover:border-primary/50",
        isSelected && "border-primary ring-1 ring-primary"
      )}
      onClick={() => onSelect(provider)}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Cloud className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold leading-none">{provider.provider}</h3>
            <p className="text-xs text-muted-foreground mt-1">{provider.accountName}</p>
          </div>
        </div>
        <Badge variant="outline" className={cn("gap-1.5 capitalize font-medium", statusConfig[provider.status].class)}>
          {statusConfig[provider.status].icon}
          {provider.status.toLowerCase()}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4 pt-2">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <span className="text-[10px] text-muted-foreground uppercase">Environments</span>
            <div className="flex items-center gap-2">
              <Server className="h-3 w-3 text-muted-foreground" />
              <span className="text-sm font-medium">{provider.environments.length}</span>
            </div>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] text-muted-foreground uppercase">Regions</span>
            <div className="flex items-center gap-2">
              <Globe className="h-3 w-3 text-muted-foreground" />
              <span className="text-sm font-medium">
                {[...new Set(provider.environments.map(e => e.region))].length}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t bg-muted/50 px-6 py-3">
        <Button variant="ghost" size="sm" className="w-full h-8 text-xs gap-2">
          <Settings className="h-3.5 w-3.5" />
          Manage Provider
        </Button>
      </CardFooter>
    </Card>
  );
}
