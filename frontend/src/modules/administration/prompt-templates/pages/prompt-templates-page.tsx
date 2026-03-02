import { useState } from "react";
import { usePromptsData } from "../hooks/use-prompts-data";
import { PromptLibraryGrid } from "../components/prompt-library-grid";
import { PromptEditor } from "../components/prompt-editor";
import { VersionHistoryPanel } from "../components/version-history-panel";
import { UsageMappingTable } from "../components/usage-mapping-table";
import { CreatePromptModal } from "../components/create-prompt-modal";
import { Terminal, Settings, History, Map } from "lucide-react";
import type { PromptTemplate } from "@/../mock/core/administration/promptsData";

export default function PromptTemplatesPage() {
  const { data, isLoading } = usePromptsData();
  const [selectedPrompt, setSelectedPrompt] = useState<PromptTemplate | null>(null);

  if (isLoading) {
    return <div className="flex items-center justify-center h-full">Synchronizing instruction library...</div>;
  }

  // Initialize selection
  if (!selectedPrompt && data?.prompts.length) {
    setSelectedPrompt(data.prompts[0]);
  }

  const selectedVersions = data?.versions.filter(v => v.promptId === selectedPrompt?.id) || [];
  const selectedUsages = data?.usages.filter(u => u.promptId === selectedPrompt?.id) || [];

  return (
    <div className="flex-1 space-y-4 p-4 pt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">AI Instruction Library</h2>
        </div>
        <CreatePromptModal />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column - Library */}
        <div className="lg:col-span-4 space-y-6">
          <div className="space-y-4">
            <h3 className="text-xs font-bold flex items-center gap-2 uppercase tracking-widest text-muted-foreground">
              <Settings className="h-4 w-4" />
              Template Library
            </h3>
            <PromptLibraryGrid 
              prompts={data?.prompts || []} 
              selectedId={selectedPrompt?.id || null}
              onSelect={setSelectedPrompt}
            />
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xs font-bold flex items-center gap-2 uppercase tracking-widest text-muted-foreground">
              <Map className="h-4 w-4" />
              Workflow Traces
            </h3>
            <UsageMappingTable usages={selectedUsages} />
          </div>
        </div>

        {/* Center/Right - Editor & History */}
        <div className="lg:col-span-5">
          <div className="space-y-4 h-full">
            <h3 className="text-xs font-bold flex items-center gap-2 uppercase tracking-widest text-muted-foreground">
              <Terminal className="h-4 w-4" />
              Instruction Designer
            </h3>
            <PromptEditor prompt={selectedPrompt} />
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="space-y-4">
            <h3 className="text-xs font-bold flex items-center gap-2 uppercase tracking-widest text-muted-foreground">
              <History className="h-4 w-4" />
              Audit Log
            </h3>
            <VersionHistoryPanel versions={selectedVersions} />
          </div>
        </div>
      </div>
    </div>
  );
}
