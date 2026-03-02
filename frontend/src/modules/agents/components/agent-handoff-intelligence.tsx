import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Share2, Inbox, Send, ArrowRightLeft } from "lucide-react";
import type { HandoffStats } from "@/../mock/core/agents/execution/handoffLogs";

interface AgentHandoffIntelligenceProps {
  stats: HandoffStats;
}

export function AgentHandoffIntelligence({ stats }: AgentHandoffIntelligenceProps) {
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <ArrowRightLeft className="h-5 w-5 text-primary" />
          Handoff Intelligence
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-6 pb-6 border-b">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Inbox className="h-4 w-4" />
              <span className="text-xs uppercase font-bold tracking-wider">Received</span>
            </div>
            <p className="text-3xl font-bold">{stats.received}</p>
            <p className="text-[10px] text-muted-foreground">Tasks from upstream roles</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Send className="h-4 w-4" />
              <span className="text-xs uppercase font-bold tracking-wider">Delivered</span>
            </div>
            <p className="text-3xl font-bold text-primary">{stats.delivered}</p>
            <p className="text-[10px] text-muted-foreground">Artifacts to downstream</p>
          </div>
        </div>

        <div className="pt-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Share2 className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-muted-foreground tracking-tighter">Downstream Target</p>
                <p className="text-sm font-bold">{stats.downstreamAgent}</p>
              </div>
            </div>
            <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary uppercase text-[9px]">
              Active Handoff
            </Badge>
          </div>

          <div className="p-3 rounded-lg bg-muted/30 border space-y-1">
            <p className="text-[10px] uppercase font-bold text-muted-foreground">Contract Type</p>
            <p className="text-xs font-medium">{stats.artifactType}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
