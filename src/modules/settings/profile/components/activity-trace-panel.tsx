import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ActivityTrace } from "@/../mock/core/settings/profileData";
import { History, Search, ArrowUpRight } from "lucide-react";

interface ActivityTracePanelProps {
  activities: ActivityTrace[];
}

export function ActivityTracePanel({ activities }: ActivityTracePanelProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-bold flex items-center gap-2">
          <History className="h-4 w-4" />
          Governance Activity Trace
        </CardTitle>
        <Search className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors group cursor-pointer border border-transparent hover:border-muted">
              <div className="mt-1 p-1.5 rounded-full bg-muted group-hover:bg-primary/10 transition-colors">
                <ArrowUpRight className="h-3 w-3 text-muted-foreground group-hover:text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex justify-between items-start">
                  <p className="text-[11px] font-medium leading-tight">{activity.action}</p>
                  <span className="text-[9px] text-muted-foreground whitespace-nowrap ml-2">{activity.date}</span>
                </div>
                <Badge variant="outline" className="text-[8px] h-3.5 px-1.5 uppercase font-bold tracking-tighter">
                  {activity.module}
                </Badge>
              </div>
            </div>
          ))}
          <button className="w-full text-center py-2 text-[10px] font-bold text-primary hover:underline">
            Export Audit Log (JSON/CSV)
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
