import { useQuery } from "@tanstack/react-query";
import axiosClient from "@/services/api/axios-client";

export function useSecurityData() {
  return useQuery({
    queryKey: ["security-settings-data"],
    queryFn: async () => {
      const { data } = await axiosClient.get("/settings/security");
      return data.data; // TransformInterceptor wraps: { data: ..., success, timestamp }
    },
  });
}
