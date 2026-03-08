import { useQuery } from "@tanstack/react-query";
import axiosClient from "@/services/api/axios-client";

export function useAgentsOverviewData() {
  return useQuery({
    queryKey: ["agents-overview-data"],
    queryFn: async () => {
      const { data } = await axiosClient.get("/agents/overview");
      return data.data;
    },
  });
}
