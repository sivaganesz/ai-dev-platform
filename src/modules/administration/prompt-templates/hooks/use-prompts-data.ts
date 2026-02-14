import { useQuery } from "@tanstack/react-query";
import { promptsData, promptVersions, promptUsages } from "@/../mock/core/administration/promptsData";

export function usePromptsData() {
  return useQuery({
    queryKey: ["prompts-templates-data"],
    queryFn: async () => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      return {
        prompts: promptsData,
        versions: promptVersions,
        usages: promptUsages
      };
    },
  });
}
