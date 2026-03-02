import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ConfigHistory } from "@/../mock/core/administration/aiConfigData";
import { History, User, Calendar } from "lucide-react";

interface ConfigHistoryTimelineProps {
  history: ConfigHistory[];
}

export function ConfigHistoryTimeline({ history }: ConfigHistoryTimelineProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-bold flex items-center gap-2">
          <History className="h-4 w-4" />
          Configuration History
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6 relative before:absolute before:inset-0 before:left-2 before:w-0.5 before:bg-muted before:h-full">
          {history.map((item) => (
            <div key={item.id} className="relative pl-8">
              <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-background border-2 border-primary" />
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold">{item.version}</span>
                  <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {new Date(item.updatedAt).toLocaleDateString()}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                  <User className="h-3 w-3" />
                  Updated by {item.updatedBy}
                </div>
                <p className="text-[11px] text-muted-foreground leading-relaxed mt-2 bg-muted/30 p-2 rounded italic">
                  "{item.changeSummary}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
