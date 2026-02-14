import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { AIConfig } from "@/../mock/core/administration/aiConfigData";
import { Cpu, Settings2, ShieldCheck, History } from "lucide-react";

interface ModelConfigCardProps {
  config: AIConfig;
  isSelected: boolean;
  onSelect: (config: AIConfig) => void;
}

export function ModelConfigCard({ config, isSelected, onSelect }: ModelConfigCardProps) {
  return (
    <Card 
      className={`cursor-pointer transition-all ${isSelected ? 'border-primary ring-1 ring-primary' : 'hover:border-primary/50'}`}
      onClick={() => onSelect(config)}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-bold flex items-center gap-2">
          <Cpu className="h-4 w-4 text-primary" />
          {config.provider}
        </CardTitle>
        <Badge variant={config.status === "ACTIVE" ? "default" : "secondary"}>
          {config.status}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="text-xs text-muted-foreground uppercase font-bold tracking-tighter">Model Version</p>
            <p className="text-sm font-mono font-bold">{config.model}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-[10px] text-muted-foreground flex items-center gap-1">
                <Settings2 className="h-3 w-3" /> Mode
              </p>
              <p className="text-xs font-semibold">{config.orchestrationMode}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] text-muted-foreground flex items-center gap-1">
                <History className="h-3 w-3" /> Max Tokens
              </p>
              <p className="text-xs font-semibold">{config.maxTokens.toLocaleString()}</p>
            </div>
          </div>

          <div className="pt-2 border-t flex items-center justify-between">
            <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
              <ShieldCheck className="h-3 w-3 text-green-500" />
              Production Ready
            </div>
            <span className="text-[10px] text-muted-foreground">
              Temp: {config.temperature}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
