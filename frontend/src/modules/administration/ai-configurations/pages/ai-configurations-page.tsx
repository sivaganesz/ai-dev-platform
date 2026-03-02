import { useState } from "react";
import { useAIConfigData } from "../hooks/use-ai-config-data";
import { ModelConfigCard } from "../components/model-config-card";
import { ParameterSliders } from "../components/parameter-sliders";
import { ProviderSelector } from "../components/provider-selector";
import { OrchestrationRulesPanel } from "../components/orchestration-rules-panel";
import { ConfigHistoryTimeline } from "../components/config-history-timeline";
import { Button } from "@/components/ui/button";
import type { AIConfig } from "@/../mock/core/administration/aiConfigData";
import { Brain, Save, RotateCcw } from "lucide-react";

export default function AIConfigurationsPage() {
  const { data, isLoading } = useAIConfigData();
  const [selectedConfig, setSelectedConfig] = useState<AIConfig | null>(null);

  if (isLoading) {
    return <div className="flex items-center justify-center h-full">Calibrating AI governance...</div>;
  }

  // Initialize selected config if not set
  if (!selectedConfig && data?.configs.length) {
    setSelectedConfig(data.configs[0]);
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Brain className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">AI Brain Governance</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset Defaults
          </Button>
          <Button size="sm">
            <Save className="mr-2 h-4 w-4" />
            Save Configurations
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data?.configs.map((config) => (
              <ModelConfigCard 
                key={config.id} 
                config={config} 
                isSelected={selectedConfig?.id === config.id}
                onSelect={setSelectedConfig}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ParameterSliders config={selectedConfig} />
            <OrchestrationRulesPanel rules={data?.rules || []} />
          </div>
        </div>

        <div className="space-y-6">
          <ProviderSelector />
          <ConfigHistoryTimeline history={data?.history || []} />
        </div>
      </div>
    </div>
  );
}
