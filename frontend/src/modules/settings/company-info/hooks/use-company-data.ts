import { useQuery } from "@tanstack/react-query";
import axiosClient from "@/services/api/axios-client";

export function useCompanyData() {
  return useQuery({
    queryKey: ["company-info-data"],
    queryFn: async () => {
      const { data } = await axiosClient.get("/settings/company");
      return data.data; // TransformInterceptor wraps: { data: ..., success, timestamp }
    },
  });
}
