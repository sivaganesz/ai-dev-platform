import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { NotificationChannel } from "@/../mock/core/integrations/notificationsData";
import { Bell, CheckCircle2, XCircle } from "lucide-react";

interface NotificationChannelCardProps {
  channel: NotificationChannel;
}

export function NotificationChannelCard({ channel }: NotificationChannelCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          <div className="flex items-center gap-2">
            <Bell className="h-4 w-4 text-muted-foreground" />
            {channel.channel}
          </div>
        </CardTitle>
        <Badge variant={channel.status === "ACTIVE" ? "default" : "secondary"}>
          {channel.status}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-1">Linked Events</p>
            <div className="flex flex-wrap gap-1">
              {channel.linkedEvents.map((event) => (
                <Badge key={event} variant="outline" className="text-[10px]">
                  {event}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-1">Recipients</p>
            <div className="text-xs text-muted-foreground">
              {channel.recipients.join(", ")}
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 border-t">
            <span className="text-[10px] text-muted-foreground">
              Last triggered: {new Date(channel.lastTriggered).toLocaleString()}
            </span>
            {channel.status === "ACTIVE" ? (
              <CheckCircle2 className="h-3 w-3 text-green-500" />
            ) : (
              <XCircle className="h-3 w-3 text-red-500" />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
