import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Download, Terminal } from "lucide-react";
import type { Pipeline } from "../cicdData";

interface PipelineLogsPanelProps {
  pipeline: Pipeline | null;
}

export function PipelineLogsPanel({ pipeline }: PipelineLogsPanelProps) {
  if (!pipeline) return null;

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Terminal className="h-5 w-5 text-primary" />
          Execution Logs
        </CardTitle>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Download className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden p-0">
        <ScrollArea className="h-[300px] w-full bg-slate-950 p-4">
          <div className="font-mono text-xs text-slate-300 space-y-1">
            {pipeline.logs.map((log, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-slate-600 select-none w-4">{i + 1}</span>
                <span className={log.includes('ERROR') ? 'text-red-400' : ''}>{log}</span>
              </div>
            ))}
            {pipeline.status === 'IN_PROGRESS' && (
              <div className="flex gap-4 animate-pulse">
                <span className="text-slate-600 select-none w-4">{pipeline.logs.length + 1}</span>
                <span className="text-blue-400">Loading next events...</span>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
