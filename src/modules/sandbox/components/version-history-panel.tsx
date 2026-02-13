import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Layers, User, ChevronDown } from "lucide-react"
import type { PreviewVersion } from "@/../mock/core/sandbox/livePreviewsData"
import { cn } from "@/lib/utils"

interface VersionHistoryPanelProps {
  versions: PreviewVersion[]
}

export const VersionHistoryPanel: React.FC<VersionHistoryPanelProps> = ({ versions }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-3 border-b bg-muted/10">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-primary" />
          <CardTitle className="text-sm font-bold uppercase tracking-tight">Version History</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {versions.map((version) => (
            <div key={version.id} className="p-4 hover:bg-muted/30 transition-colors">
              <button 
                className="w-full flex justify-between items-center"
                onClick={() => setExpandedId(expandedId === version.id ? null : version.id)}
              >
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="font-mono text-[10px]">{version.version}</Badge>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                    {new Date(version.updatedAt).toLocaleDateString()}
                  </span>
                </div>
                <ChevronDown className={cn("w-4 h-4 text-muted-foreground transition-transform", expandedId === version.id && "rotate-180")} />
              </button>
              
              {expandedId === version.id && (
                <div className="pt-3 space-y-2 animate-in fade-in slide-in-from-top-1 duration-200">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <User className="w-3 h-3" />
                    <span>Agent: <span className="text-foreground font-medium">{version.agentId}</span></span>
                  </div>
                  <div className="p-2 rounded bg-muted/50 border text-xs text-muted-foreground italic">
                    {version.notes}
                  </div>
                </div>
              )}
            </div>
          ))}
          {versions.length === 0 && (
            <div className="p-8 text-center text-sm text-muted-foreground">
              No version history available.
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
