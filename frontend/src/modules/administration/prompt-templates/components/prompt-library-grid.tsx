import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { PromptTemplate } from "@/../mock/core/administration/promptsData";
import { FileCode, Activity, Bot, Clock } from "lucide-react";

interface PromptLibraryGridProps {
  prompts: PromptTemplate[];
  selectedId: string | null;
  onSelect: (prompt: PromptTemplate) => void;
}

export function PromptLibraryGrid({ prompts, selectedId, onSelect }: PromptLibraryGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {prompts.map((prompt) => (
        <Card 
          key={prompt.id} 
          className={`cursor-pointer transition-all ${selectedId === prompt.id ? 'border-primary ring-1 ring-primary' : 'hover:border-primary/50'}`}
          onClick={() => onSelect(prompt)}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-bold flex items-center gap-2">
              <FileCode className="h-4 w-4 text-primary" />
              {prompt.name}
            </CardTitle>
            <Badge variant="outline" className="text-[10px]">{prompt.version}</Badge>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Bot className="h-3 w-3" />
                Target: <span className="text-foreground font-medium">{prompt.agent}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                  <Activity className="h-3 w-3" />
                  Used {prompt.usageCount} times
                </div>
                <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {prompt.lastUpdated}
                </div>
              </div>
              <p className="text-[11px] text-muted-foreground line-clamp-2 bg-muted/30 p-2 rounded">
                {prompt.content}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
