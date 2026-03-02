import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LineChart, Play, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

export function VisualizationStylePanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-bold flex items-center gap-2">
          <LineChart className="h-4 w-4 text-primary" />
          Dashboard Visualization Style
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Chart Style</label>
            <Select defaultValue="modern">
              <SelectTrigger className="h-8 text-xs">
                <SelectValue placeholder="Style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="modern">Modern (Gradient)</SelectItem>
                <SelectItem value="classic">Classic (Flat)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Pipeline Flow</label>
            <Select defaultValue="node">
              <SelectTrigger className="h-8 text-xs">
                <SelectValue placeholder="Flow" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="linear">Linear Steps</SelectItem>
                <SelectItem value="node">Node Graph</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between p-2 rounded border bg-muted/10">
            <div className="flex items-center gap-2">
              <Play className="h-3.5 w-3.5 text-blue-500" />
              <span className="text-[11px] font-bold">Graph Animations</span>
            </div>
            <Button size="sm" variant="default" className="h-6 text-[9px] px-2">ENABLED</Button>
          </div>
          <div className="flex items-center justify-between p-2 rounded border bg-muted/10">
            <div className="flex items-center gap-2">
              <Flame className="h-3.5 w-3.5 text-orange-500" />
              <span className="text-[11px] font-bold">Heatmap Visibility</span>
            </div>
            <Button size="sm" variant="outline" className="h-6 text-[9px] px-2">OFF</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
