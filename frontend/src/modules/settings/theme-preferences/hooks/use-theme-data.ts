import { useQuery } from "@tanstack/react-query";
import axiosClient from "@/services/api/axios-client";

export function useThemeData() {
  return useQuery({
    queryKey: ["theme-preferences-data"],
    queryFn: async () => {
      const { data } = await axiosClient.get("/settings/theme");
      return data.data; // TransformInterceptor wraps: { data: ..., success, timestamp }
    },
  });
}
