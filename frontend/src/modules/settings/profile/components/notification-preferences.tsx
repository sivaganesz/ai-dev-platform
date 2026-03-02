import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { NotificationPreference } from "@/../mock/core/settings/profileData";
import { Bell, Mail, MessageSquare, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NotificationPreferencesProps {
  preferences: NotificationPreference[];
}

export function NotificationPreferences({ preferences }: NotificationPreferencesProps) {
  const getIcon = (channel: string) => {
    switch (channel) {
      case 'Email': return <Mail className="h-4 w-4" />;
      case 'Slack': return <MessageSquare className="h-4 w-4" />;
      case 'Teams': return <MessageSquare className="h-4 w-4" />;
      case 'In-App': return <Monitor className="h-4 w-4" />;
      default: return <Bell className="h-4 w-4" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-bold flex items-center gap-2">
          <Bell className="h-4 w-4 text-primary" />
          Notification Routing & Channels
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {preferences.map((channel) => (
          <div key={channel.channel} className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-md bg-muted">
                  {getIcon(channel.channel)}
                </div>
                <span className="text-xs font-bold">{channel.channel}</span>
              </div>
              <Badge variant={channel.enabled ? "default" : "secondary"} className="text-[9px]">
                {channel.enabled ? "ACTIVE" : "OFF"}
              </Badge>
            </div>
            
            {channel.enabled && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-8">
                {channel.events.map((event) => (
                  <div key={event.event} className="flex items-center gap-2 text-[10px] bg-muted/30 p-1.5 rounded">
                    <div className={`w-1.5 h-1.5 rounded-full ${event.enabled ? 'bg-green-500' : 'bg-muted-foreground'}`} />
                    <span className={event.enabled ? 'text-foreground' : 'text-muted-foreground'}>{event.event}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        
        <Button variant="outline" size="sm" className="w-full text-[10px] h-8">
          Configure Alert Thresholds
        </Button>
      </CardContent>
    </Card>
  );
}
