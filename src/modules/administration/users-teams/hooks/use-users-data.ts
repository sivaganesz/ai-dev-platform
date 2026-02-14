import { useQuery } from "@tanstack/react-query";
import { usersData, teamsData, adminStats } from "@/../mock/core/administration/usersData";

export function useUsersData() {
  return useQuery({
    queryKey: ["users-teams-data"],
    queryFn: async () => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      return {
        users: usersData,
        teams: teamsData,
        stats: adminStats
      };
    },
  });
}
