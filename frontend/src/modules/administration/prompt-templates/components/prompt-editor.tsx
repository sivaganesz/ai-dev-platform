import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { PromptTemplate } from "@/../mock/core/administration/promptsData";
import { Save, RotateCcw, Copy, Play } from "lucide-react";

interface PromptEditorProps {
  prompt: PromptTemplate | null;
}

export function PromptEditor({ prompt }: PromptEditorProps) {
  if (!prompt) {
    return (
      <Card className="h-full flex items-center justify-center border-dashed">
        <div className="text-center p-6 text-muted-foreground">
          <FileCode className="h-8 w-8 mx-auto mb-2 opacity-20" />
          <p className="text-sm">Select a template to edit its instructions</p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between py-4">
        <div className="space-y-1">
          <CardTitle className="text-lg font-bold">Edit Template</CardTitle>
          <p className="text-xs text-muted-foreground">{prompt.name} ({prompt.version})</p>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" className="h-8 px-2">
            <Play className="h-3.5 w-3.5 mr-1" /> Test
          </Button>
          <Button size="sm" className="h-8 px-2">
            <Save className="h-3.5 w-3.5 mr-1" /> Save Version
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex-1 pb-4">
        <div className="relative h-full min-h-[400px]">
          <textarea
            className="w-full h-full min-h-[400px] p-4 rounded-md border bg-slate-950 text-slate-300 font-mono text-sm leading-relaxed resize-none focus:outline-none focus:ring-1 focus:ring-primary"
            defaultValue={prompt.content}
          />
          <div className="absolute top-2 right-2 flex gap-1">
            <Button size="icon" variant="ghost" className="h-7 w-7 text-slate-500 hover:text-white">
              <Copy className="h-3.5 w-3.5" />
            </Button>
            <Button size="icon" variant="ghost" className="h-7 w-7 text-slate-500 hover:text-white">
              <RotateCcw className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

import { FileCode } from "lucide-react";
