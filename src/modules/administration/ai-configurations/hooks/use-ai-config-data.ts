import { useQuery } from "@tanstack/react-query";
import { aiConfigs, orchestrationRules, configHistory } from "@/../mock/core/administration/aiConfigData";

export function useAIConfigData() {
  return useQuery({
    queryKey: ["ai-configs-data"],
    queryFn: async () => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      return {
        configs: aiConfigs,
        rules: orchestrationRules,
        history: configHistory
      };
    },
  });
}
