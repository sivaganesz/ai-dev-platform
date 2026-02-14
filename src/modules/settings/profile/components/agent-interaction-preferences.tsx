import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { AgentPreference } from "@/../mock/core/settings/profileData";
import { Bot, Power, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AgentInteractionPreferencesProps {
  preferences: AgentPreference[];
}

export function AgentInteractionPreferences({ preferences }: AgentInteractionPreferencesProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-bold flex items-center gap-2">
          <Bot className="h-4 w-4 text-primary" />
          Agent Interaction Intelligence
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {preferences.map((pref) => (
          <div key={pref.id} className="flex items-start justify-between p-3 rounded-lg border bg-muted/20 group">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold">{pref.name}</span>
                <Badge variant={pref.status ? "default" : "secondary"} className="text-[9px] h-4 uppercase">
                  {pref.status ? "Enabled" : "Disabled"}
                </Badge>
              </div>
              <p className="text-[10px] text-muted-foreground leading-relaxed max-w-[200px]">
                {pref.description}
              </p>
            </div>
            <Button size="icon" variant="ghost" className="h-8 w-8">
              <Power className={`h-4 w-4 ${pref.status ? 'text-green-500' : 'text-muted-foreground'}`} />
            </Button>
          </div>
        ))}
        
        <div className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/10 flex items-center gap-3">
          <Zap className="h-5 w-5 text-primary" />
          <div>
            <p className="text-[10px] font-bold">Optimization Engine</p>
            <p className="text-[9px] text-muted-foreground">Using Gemini 1.5 Pro for interaction logic</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
