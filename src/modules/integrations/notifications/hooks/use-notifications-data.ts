import { useQuery } from "@tanstack/react-query";
import { 
  notificationChannels, 
  notificationRules, 
  alertLogs, 
  notificationStats 
} from "@/../mock/core/integrations/notificationsData";

export function useNotificationsData() {
  return useQuery({
    queryKey: ["notifications-data"],
    queryFn: async () => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      return {
        channels: notificationChannels,
        rules: notificationRules,
        logs: alertLogs,
        stats: notificationStats
      };
    },
  });
}
