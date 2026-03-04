import { useQuery } from "@tanstack/react-query";
import axiosClient from "@/services/api/axios-client";

export function useProfileData() {
  return useQuery({
    queryKey: ["user-profile-data"],
    queryFn: async () => {
      const { data } = await axiosClient.get("/settings/profile");
      return data.data; // TransformInterceptor wraps: { data: ..., success, timestamp }
    },
  });
}
