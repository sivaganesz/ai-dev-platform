
import React, { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Terminal, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { ApiSimulation } from "../../../../mock/core/sandbox/apiSimulationsData"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

interface ApiLogsPanelProps {
  simulation: ApiSimulation | null
}

export const ApiLogsPanel: React.FC<ApiLogsPanelProps> = ({ simulation }) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      const viewport = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]')
      if (viewport) {
        viewport.scrollTop = viewport.scrollHeight
      }
    }
  }, [simulation?.logs])

  if (!simulation) {
    return (
      <Card className="h-full border-dashed border-2">
        <CardContent className="flex flex-col items-center justify-center h-[200px] text-muted-foreground">
          <Terminal className="w-10 h-10 opacity-10 mb-4" />
          <p className="text-sm">Select a request to view logs</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="h-full flex flex-col shadow-md border-primary/10">
      <CardHeader className="pb-3 border-b bg-muted/10 flex flex-row items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-primary" />
          <CardTitle className="text-sm font-bold uppercase tracking-tight">Pipeline Logs</CardTitle>
        </div>
        <Button variant="ghost" size="icon" className="h-7 w-7 text-red-400 hover:bg-red-400/10"><Trash2 className="w-3.5 h-3.5" /></Button>
      </CardHeader>
      <CardContent className="p-0 flex-1 bg-zinc-950">
        <ScrollArea className="h-[250px] w-full p-4" ref={scrollRef}>
          <div className="font-mono text-[11px] leading-relaxed space-y-1">
            {simulation.logs.map((log, i) => (
              <div key={i} className="flex gap-3 group px-2 -mx-2 rounded hover:bg-white/5">
                <span className="text-zinc-600 select-none min-w-[20px] text-right">{i + 1}</span>
                <span className={cn(
                  "whitespace-pre-wrap flex-1",
                  log.includes("[ERROR]") ? "text-red-400" : 
                  log.includes("[INFO]") ? "text-zinc-400" : "text-zinc-300"
                )}>
                  {log}
                </span>
              </div>
            ))}
            {simulation.status === "IN_PROGRESS" && (
              <div className="flex gap-3 animate-pulse px-2 -mx-2">
                <span className="text-zinc-600 min-w-[20px] text-right">{simulation.logs.length + 1}</span>
                <span className="text-primary italic font-bold">Stream: Executing request...</span>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
