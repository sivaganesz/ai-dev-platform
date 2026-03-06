import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface Activity {
  id: string;
  type: string;
  title: string;
  description: string;
  status: string;
  user: string;
  timestamp: string;
}

interface RecentActivitiesProps {
  activities: Activity[];
}

function timeAgo(timestamp: string): string {
  const diff = Date.now() - new Date(timestamp).getTime();
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor(diff / 3_600_000);
  const minutes = Math.floor(diff / 60_000);
  if (days > 0) return `${days}d ago`;
  if (hours > 0) return `${hours}h ago`;
  return `${minutes}m ago`;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map(n => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function RecentActivities({ activities }: RecentActivitiesProps) {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="text-base font-medium">Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[350px] pr-4">
          <div className="space-y-6">
            {activities.map((activity) => (
              <div key={activity.id} className="flex gap-4">
                <Avatar className="h-9 w-9 border">
                  <AvatarFallback>{getInitials(activity.user || "SY")}</AvatarFallback>
                </Avatar>
                <div className="flex flex-1 flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium leading-none">
                      {activity.title}
                    </span>
                    <Badge
                      variant="outline"
                      className={cn(
                        "text-[10px] uppercase",
                        activity.status === "SUCCESS" && "border-green-500 text-green-500",
                        activity.status === "FAILED" && "border-red-500 text-red-500",
                        activity.status === "IN_PROGRESS" && "border-blue-500 text-blue-500"
                      )}
                    >
                      {activity.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {activity.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{activity.user}</span>
                    <span>•</span>
                    <span>{timeAgo(activity.timestamp)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
