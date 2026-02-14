import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { AIConfig } from "@/../mock/core/administration/aiConfigData";
import { Sliders, Thermometer, Hash, AlignLeft } from "lucide-react";

interface ParameterSlidersProps {
  config: AIConfig | null;
}

export function ParameterSliders({ config }: ParameterSlidersProps) {
  if (!config) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-bold flex items-center gap-2">
          <Sliders className="h-4 w-4" />
          Intelligence Parameters: {config.model}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold flex items-center gap-2">
              <Thermometer className="h-3.5 w-3.5 text-orange-500" />
              Temperature
            </label>
            <span className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded">{config.temperature}</span>
          </div>
          <Input type="range" min="0" max="2" step="0.1" defaultValue={config.temperature} className="h-4" />
          <p className="text-[10px] text-muted-foreground">Controls randomness: Lower is more deterministic, higher is more creative.</p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold flex items-center gap-2">
              <Hash className="h-3.5 w-3.5 text-blue-500" />
              Max Response Tokens
            </label>
            <span className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded">{config.maxTokens}</span>
          </div>
          <Input type="number" defaultValue={config.maxTokens} className="h-8 text-xs" />
          <p className="text-[10px] text-muted-foreground">The maximum number of tokens to generate in the response.</p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold flex items-center gap-2">
              <AlignLeft className="h-3.5 w-3.5 text-green-500" />
              Context Window Scale
            </label>
            <span className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded">100%</span>
          </div>
          <Input type="range" min="10" max="100" step="1" defaultValue="100" className="h-4" />
          <p className="text-[10px] text-muted-foreground">Limit the percentage of the model's total context window to be utilized.</p>
        </div>
      </CardContent>
    </Card>
  );
}
