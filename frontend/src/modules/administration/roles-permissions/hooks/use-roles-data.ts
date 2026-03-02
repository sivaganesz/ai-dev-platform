import { useQuery } from "@tanstack/react-query";
import { rolesData, permissionsList, modulesList, actionsList } from "@/../mock/core/administration/rolesData";

export function useRolesData() {
  return useQuery({
    queryKey: ["roles-permissions-data"],
    queryFn: async () => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      return {
        roles: rolesData,
        permissions: permissionsList,
        modules: modulesList,
        actions: actionsList
      };
    },
  });
}
