import { useQuery } from "@tanstack/react-query";
import { 
  userProfile, 
  agentPreferences, 
  notificationPreferences, 
  activityTraces, 
  accessScopes, 
  profileStats 
} from "@/../mock/core/settings/profileData";

export function useProfileData() {
  return useQuery({
    queryKey: ["user-profile-data"],
    queryFn: async () => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      return {
        profile: userProfile,
        agentPrefs: agentPreferences,
        notifications: notificationPreferences,
        activity: activityTraces,
        access: accessScopes,
        stats: profileStats
      };
    },
  });
}
