import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Palette, MousePointer2, Type } from "lucide-react";

interface AccentColorPickerProps {
  primary: string;
  accent: string;
  hover: string;
}

export function AccentColorPicker({ primary, accent, hover }: AccentColorPickerProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-bold flex items-center gap-2">
          <Palette className="h-4 w-4 text-primary" />
          Brand Color & Accent Styling
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Primary Brand</label>
            <div className="flex gap-2">
              <div className="w-9 h-9 rounded border" style={{ backgroundColor: primary }} />
              <Input defaultValue={primary} className="font-mono text-xs" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Secondary Accent</label>
            <div className="flex gap-2">
              <div className="w-9 h-9 rounded border" style={{ backgroundColor: accent }} />
              <Input defaultValue={accent} className="font-mono text-xs" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
            <MousePointer2 className="h-3 w-3" /> Hover Highlight Color
          </label>
          <div className="flex gap-2">
            <div className="w-full h-9 rounded border flex items-center px-3 gap-3" style={{ backgroundColor: `${hover}20`, borderColor: hover }}>
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: hover }} />
              <span className="text-[10px] font-mono text-muted-foreground">{hover}</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
            <Type className="h-3 w-3" /> Button Style
          </label>
          <Select defaultValue="rounded">
            <SelectTrigger className="h-9 text-xs">
              <SelectValue placeholder="Select style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sharp">Sharp Edges</SelectItem>
              <SelectItem value="rounded">Rounded Corner</SelectItem>
              <SelectItem value="pill">Pill Style</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}
