import { useQuery } from "@tanstack/react-query";
import axiosClient from "@/services/api/axios-client";

export function useAPIKeysData() {
  return useQuery({
    queryKey: ["api-keys-data"],
    queryFn: async () => {
      const { data } = await axiosClient.get("/settings/api-keys");
      return data.data; // TransformInterceptor wraps: { data: ..., success, timestamp }
    },
  });
}
