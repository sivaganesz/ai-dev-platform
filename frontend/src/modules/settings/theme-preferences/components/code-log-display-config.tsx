import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileCode, Type, MoveVertical, Palette } from "lucide-react";

export function CodeLogDisplayConfig() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-bold flex items-center gap-2">
          <FileCode className="h-4 w-4 text-primary" />
          Code & Log Display Preferences
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
              <Type className="h-3 w-3" /> Font Family
            </label>
            <Select defaultValue="jetbrains">
              <SelectTrigger className="h-8 text-xs font-mono">
                <SelectValue placeholder="Font" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="jetbrains">JetBrains Mono</SelectItem>
                <SelectItem value="fira">Fira Code</SelectItem>
                <SelectItem value="cascadia">Cascadia Code</SelectItem>
                <SelectItem value="roboto">Roboto Mono</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
              <MoveVertical className="h-3 w-3" /> Font Size
            </label>
            <div className="flex gap-2">
              <Input type="number" defaultValue={14} className="h-8 text-xs font-mono" />
              <span className="text-[10px] font-bold self-center">PX</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
            <Palette className="h-3 w-3" /> Syntax Highlighting Theme
          </label>
          <Select defaultValue="dracula">
            <SelectTrigger className="h-8 text-xs">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dracula">Dracula</SelectItem>
              <SelectItem value="monokai">Monokai Pro</SelectItem>
              <SelectItem value="github-dark">GitHub Dark</SelectItem>
              <SelectItem value="nord">Nord</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="p-3 rounded border bg-slate-950 font-mono text-[11px] leading-relaxed">
          <div className="flex justify-between items-center mb-2 border-b border-white/10 pb-1">
            <span className="text-slate-500 uppercase tracking-tighter">Preview: Agent_Trace.log</span>
            <span className="text-[9px] text-green-500">SYNTAX: JSON</span>
          </div>
          <p><span className="text-pink-500">"status"</span>: <span className="text-yellow-500">"SUCCESS"</span>,</p>
          <p><span className="text-pink-500">"agent"</span>: <span className="text-cyan-400">"Frontend_V3"</span>,</p>
          <p><span className="text-pink-500">"execution_time"</span>: <span className="text-purple-400">1240ms</span></p>
        </div>
      </CardContent>
    </Card>
  );
}
