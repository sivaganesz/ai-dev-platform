import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { PromptVersion } from "@/../mock/core/administration/promptsData";
import { History, User, Calendar, ArrowRight } from "lucide-react";

interface VersionHistoryPanelProps {
  versions: PromptVersion[];
}

export function VersionHistoryPanel({ versions }: VersionHistoryPanelProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-bold flex items-center gap-2">
          <History className="h-4 w-4" />
          Version History
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {versions.map((version) => (
          <div key={version.id} className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-muted group">
            <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-primary border-2 border-background" />
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold">{version.version}</span>
                <Badge variant="outline" className="text-[9px] h-4">RESTORE</Badge>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                <span className="flex items-center gap-1"><User className="h-3 w-3" /> {version.updatedBy}</span>
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {new Date(version.updatedAt).toLocaleDateString()}</span>
              </div>
              <p className="text-[11px] text-muted-foreground italic leading-relaxed pt-1 group-hover:text-foreground transition-colors">
                {version.changes}
              </p>
            </div>
          </div>
        ))}
        <button className="w-full text-center py-2 text-[10px] font-bold text-primary hover:underline flex items-center justify-center gap-1">
          View All Versions <ArrowRight className="h-3 w-3" />
        </button>
      </CardContent>
    </Card>
  );
}
