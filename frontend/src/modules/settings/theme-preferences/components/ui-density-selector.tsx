import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LayoutGrid, List, Layers } from "lucide-react";

interface UIDensitySelectorProps {
  selected: 'comfortable' | 'compact' | 'dense';
}

export function UIDensitySelector({ selected }: UIDensitySelectorProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-bold flex items-center gap-2">
          <Layers className="h-4 w-4 text-primary" />
          UI Density & Layout Scaling
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="grid grid-cols-1 gap-2">
            <div className={`p-3 rounded-lg border flex items-center justify-between cursor-pointer transition-colors ${selected === 'comfortable' ? 'bg-primary/5 border-primary' : 'hover:bg-muted/50'}`}>
              <div className="flex items-center gap-3">
                <LayoutGrid className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs font-bold">Comfortable</p>
                  <p className="text-[10px] text-muted-foreground">Spacious layout for high readability</p>
                </div>
              </div>
              {selected === 'comfortable' && <div className="w-2 h-2 rounded-full bg-primary" />}
            </div>
            
            <div className={`p-3 rounded-lg border flex items-center justify-between cursor-pointer transition-colors ${selected === 'compact' ? 'bg-primary/5 border-primary' : 'hover:bg-muted/50'}`}>
              <div className="flex items-center gap-3">
                <List className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs font-bold">Compact</p>
                  <p className="text-[10px] text-muted-foreground">Standard spacing for efficient usage</p>
                </div>
              </div>
              {selected === 'compact' && <div className="w-2 h-2 rounded-full bg-primary" />}
            </div>

            <div className={`p-3 rounded-lg border flex items-center justify-between cursor-pointer transition-colors ${selected === 'dense' ? 'bg-primary/5 border-primary' : 'hover:bg-muted/50'}`}>
              <div className="flex items-center gap-3">
                <Layers className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs font-bold">Developer Dense</p>
                  <p className="text-[10px] text-muted-foreground">Maximum data visibility for experts</p>
                </div>
              </div>
              {selected === 'dense' && <div className="w-2 h-2 rounded-full bg-primary" />}
            </div>
          </div>
          <p className="text-[9px] text-center text-muted-foreground italic pt-2">
            Dense mode is optimized for high-resolution monitors (1440p+).
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
