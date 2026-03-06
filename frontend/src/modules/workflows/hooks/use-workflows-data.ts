import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axiosClient from '@/services/api/axios-client';

export interface Workflow {
  id: string;
  projectId: string;
  name: string;
  description: string;
  status: 'RUNNING' | 'COMPLETED' | 'FAILED';
  assignedTo: string[];
  startDate: string;
  endDate: string;
  tasksCount: number;
  completedTasks: number;
}

export const useWorkflowsData = (
  status?: string,
  projectId?: string,
  search?: string,
) => {
  return useQuery({
    queryKey: ['workflows', status, projectId, search],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (status && status !== 'ALL') params.set('status', status);
      if (projectId && projectId !== 'ALL') params.set('projectId', projectId);
      if (search) params.set('search', search);
      const { data } = await axiosClient.get(`/core/workflows?${params}`);
      return data.data as Workflow[];
    },
  });
};

export const useCreateWorkflow = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (dto: Partial<Workflow>) =>
      axiosClient.post('/core/workflows', dto).then(r => r.data.data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['workflows'] }),
  });
};

export const useUpdateWorkflow = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...dto }: Partial<Workflow> & { id: string }) =>
      axiosClient.patch(`/core/workflows/${id}`, dto).then(r => r.data.data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['workflows'] }),
  });
};

export const useDeleteWorkflow = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) =>
      axiosClient.delete(`/core/workflows/${id}`).then(r => r.data.data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['workflows'] }),
  });
};
