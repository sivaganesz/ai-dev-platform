import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Globe, Server } from "lucide-react";

export function ProviderSelector() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-bold flex items-center gap-2">
          <Globe className="h-4 w-4" />
          Primary Intelligence Provider
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Select Provider</label>
          <Select defaultValue="google">
            <SelectTrigger>
              <SelectValue placeholder="Select provider" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="google">Google Gemini</SelectItem>
              <SelectItem value="openai">OpenAI GPT</SelectItem>
              <SelectItem value="anthropic">Anthropic Claude</SelectItem>
              <SelectItem value="meta">Meta Llama (Self-hosted)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="p-3 rounded-lg border bg-muted/30 flex items-center gap-3">
          <Server className="h-5 w-5 text-primary" />
          <div>
            <p className="text-xs font-bold">API Region: us-central1</p>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-[9px] h-4">LATENCY: 120ms</Badge>
              <Badge variant="outline" className="text-[9px] h-4">UPTIME: 99.9%</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
