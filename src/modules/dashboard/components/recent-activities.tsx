import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const activities = [
  {
    id: "a1",
    type: "DEPLOYMENT",
    title: "Production Deploy",
    description: "Alpha AI successfully deployed to production",
    status: "SUCCESS",
    timestamp: "2 hours ago",
    user: "DevOps Agent",
    initials: "DA",
  },
  {
    id: "a2",
    type: "WORKFLOW",
    title: "UI Component Library",
    description: "Build failed due to linting errors",
    status: "FAILED",
    timestamp: "3 hours ago",
    user: "Frontend Agent",
    initials: "FA",
  },
  {
    id: "a3",
    type: "PROJECT",
    title: "New Project: Zeta",
    description: "Project Zeta initialized by admin",
    status: "SUCCESS",
    timestamp: "5 hours ago",
    user: "Siva Muthu",
    initials: "SM",
  },
  {
    id: "a4",
    type: "AGENT",
    title: "QA Agent assigned",
    description: "Assigned to Project Delta for testing",
    status: "IN_PROGRESS",
    timestamp: "6 hours ago",
    user: "System",
    initials: "SY",
  },
];

export function RecentActivities() {
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
                  <AvatarFallback>{activity.initials}</AvatarFallback>
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
                    <span>{activity.timestamp}</span>
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
