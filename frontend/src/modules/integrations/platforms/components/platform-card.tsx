import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ConnectionStatusBadge } from "./connection-status-badge";
import type { Platform } from "../platformsData";
import { RefreshCw, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlatformCardProps {
  platform: Platform;
  onSelect: (platform: Platform) => void;
  isSelected: boolean;
}

export function PlatformCard({ platform, onSelect, isSelected }: PlatformCardProps) {
  return (
    <Card 
      className={cn(
        "cursor-pointer transition-all hover:border-primary/50",
        isSelected && "border-primary ring-1 ring-primary"
      )}
      onClick={() => onSelect(platform)}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10 border">
            <AvatarImage src={platform.avatarUrl} alt={platform.platformName} />
            <AvatarFallback>{platform.platformName[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold leading-none">{platform.platformName}</h3>
            <p className="text-sm text-muted-foreground mt-1">{platform.organization}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={(e) => {
          e.stopPropagation();
          // Action for external link
        }}>
          <ExternalLink className="h-4 w-4 text-muted-foreground" />
        </Button>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Repositories</span>
          <span className="font-medium">{platform.repositories.length}</span>
        </div>
        <div className="flex items-center justify-between text-sm mt-2">
          <span className="text-muted-foreground">Last Sync</span>
          <span className="text-xs">{new Date(platform.lastSync).toLocaleString()}</span>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t bg-muted/50 px-6 py-3">
        <ConnectionStatusBadge status={platform.status} />
        <Button variant="ghost" size="sm" className="h-8 px-2 text-xs" onClick={(e) => e.stopPropagation()}>
          <RefreshCw className="mr-2 h-3 w-3" />
          Sync
        </Button>
      </CardFooter>
    </Card>
  );
}

