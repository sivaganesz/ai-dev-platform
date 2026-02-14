import { useQuery } from "@tanstack/react-query";
import { 
  apiKeysData, 
  keyScopes, 
  keyActivityLogs, 
  keyUsageStats, 
  apiKeysSummary 
} from "@/../mock/core/settings/apiKeysData";

export function useAPIKeysData() {
  return useQuery({
    queryKey: ["api-keys-data"],
    queryFn: async () => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      return {
        keys: apiKeysData,
        scopes: keyScopes,
        logs: keyActivityLogs,
        usageTrend: keyUsageStats,
        summary: apiKeysSummary
      };
    },
  });
}
