import { useQuery } from "@tanstack/react-query";
import { 
  defaultThemeSettings, 
  roleColorMappings, 
  themeStats 
} from "@/../mock/core/settings/themeData";

export function useThemeData() {
  return useQuery({
    queryKey: ["theme-preferences-data"],
    queryFn: async () => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      return {
        settings: defaultThemeSettings,
        roleColors: roleColorMappings,
        stats: themeStats
      };
    },
  });
}
