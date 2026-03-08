import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosClient from "@/services/api/axios-client";

export function useAgentsData() {
  return useQuery({
    queryKey: ["agents-data"],
    queryFn: async () => {
      const { data } = await axiosClient.get("/agents");
      return { agents: data.data, activities: [] };
    },
  });
}

export function useAgent(agentId: string) {
  return useQuery({
    queryKey: ["agent-data", agentId],
    enabled: !!agentId,
    queryFn: async () => {
      const { data } = await axiosClient.get(`/agents/${agentId}`);
      return data.data;
    },
  });
}

export function useUpdateAgent() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...dto }: any) =>
      axiosClient.patch(`/agents/${id}`, dto).then((r) => r.data.data),
    onSuccess: (_: any, vars: any) => {
      queryClient.invalidateQueries({ queryKey: ["agents-data"] });
      queryClient.invalidateQueries({ queryKey: ["agent-data", vars.id] });
      queryClient.invalidateQueries({ queryKey: ["agents-overview-data"] });
    },
  });
}
