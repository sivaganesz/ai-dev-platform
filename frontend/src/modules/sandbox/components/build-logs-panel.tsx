import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Terminal, Copy, Download, Trash2, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { DemoBuild } from "@/../mock/core/sandbox/demoBuildsData"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

interface BuildLogsPanelProps {
  build: DemoBuild | null
}

export const BuildLogsPanel: React.FC<BuildLogsPanelProps> = ({ build }) => {
  if (!build) {
    return (
      <Card className="h-full">
        <CardContent className="flex flex-col items-center justify-center h-[400px] text-muted-foreground">
          <Terminal className="w-12 h-12 opacity-10 mb-4" />
          <p>Select a build to view logs</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="h-full flex flex-col shadow-md border-primary/10">
      <CardHeader className="pb-3 border-b bg-muted/10 flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-primary" />
          <CardTitle className="text-sm font-bold uppercase tracking-tight">Build Logs: {build.id}</CardTitle>
        </div>
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" className="h-7 w-7"><Copy className="w-3.5 h-3.5" /></Button>
          <Button variant="ghost" size="icon" className="h-7 w-7"><Download className="w-3.5 h-3.5" /></Button>
          <Button variant="ghost" size="icon" className="h-7 w-7"><Maximize2 className="w-3.5 h-3.5" /></Button>
        </div>
      </CardHeader>
      <CardContent className="p-0 flex-1 bg-zinc-950 font-mono text-[11px] leading-relaxed text-zinc-300">
        <ScrollArea className="h-[500px] w-full p-4">
          <div className="space-y-1">
            {build.logs.map((log, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-zinc-600 select-none min-w-[20px]">{i + 1}</span>
                <span className={cn(
                  "whitespace-pre-wrap",
                  log.includes("[ERROR]") || log.includes("[FATAL]") ? "text-red-400" : 
                  log.includes("[WARN]") ? "text-yellow-400" : "text-zinc-300"
                )}>
                  {log}
                </span>
              </div>
            ))}
            {build.status === "IN_PROGRESS" && (
              <div className="flex gap-3 animate-pulse">
                <span className="text-zinc-600 select-none min-w-[20px]">{build.logs.length + 1}</span>
                <span className="text-primary">Fetching latest logs...</span>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
      <div className="p-3 border-t bg-muted/5 flex justify-between items-center text-[10px] text-muted-foreground">
        <div className="flex gap-4">
          <span>Status: <span className={cn("font-bold", build.status === "SUCCESS" ? "text-green-500" : build.status === "FAILED" ? "text-red-500" : "text-blue-500")}>{build.status}</span></span>
          <span>Version: <span className="font-mono">{build.version}</span></span>
        </div>
        <Button variant="ghost" size="sm" className="h-6 text-[10px] text-destructive hover:bg-destructive/10">
          <Trash2 className="w-3 h-3 mr-1" /> Clear Terminal
        </Button>
      </div>
    </Card>
  )
}
