import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Bot, ShieldCheck, Zap } from "lucide-react";

export function PreviewSimulatorPanel() {
  return (
    <Card className="h-full bg-muted/10 border-dashed border-2">
      <CardHeader>
        <CardTitle className="text-sm font-bold flex items-center gap-2">
          <Play className="h-4 w-4 text-primary" />
          Live Theme Simulator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Component Preview</label>
          <div className="p-4 rounded-xl border bg-card shadow-sm space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold">Frontend Agent</p>
                  <p className="text-[9px] text-muted-foreground">ID: AG-452</p>
                </div>
              </div>
              <Badge variant="default" className="text-[9px] h-4">ACTIVE</Badge>
            </div>
            
            <div className="space-y-1.5">
              <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full w-[75%] bg-primary" />
              </div>
              <div className="flex justify-between text-[8px] font-bold uppercase tracking-tighter text-muted-foreground">
                <span>Task Execution</span>
                <span>75% Complete</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 rounded bg-muted/30 border border-muted flex items-center gap-2">
                <ShieldCheck className="h-3 w-3 text-green-500" />
                <span className="text-[9px] font-bold">VERIFIED</span>
              </div>
              <div className="p-2 rounded bg-muted/30 border border-muted flex items-center gap-2">
                <Zap className="h-3 w-3 text-yellow-500" />
                <span className="text-[9px] font-bold">OPTIMIZED</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Pipeline Graph Style</label>
          <div className="flex items-center justify-center p-6 rounded-lg border bg-slate-900 gap-4">
            <div className="w-10 h-10 rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center text-primary text-[10px] font-bold">BUILD</div>
            <div className="w-8 h-0.5 bg-muted-foreground/30 relative">
              <div className="absolute top-[-4px] right-0 w-2 h-2 rounded-full bg-primary animate-ping" />
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center text-muted-foreground text-[10px] font-bold">DEPLOY</div>
          </div>
        </div>

        <p className="text-[10px] text-center text-muted-foreground leading-relaxed">
          Changes apply instantly to all visualizations, graphs, and analytics rendering components platform-wide.
        </p>
      </CardContent>
    </Card>
  );
}
