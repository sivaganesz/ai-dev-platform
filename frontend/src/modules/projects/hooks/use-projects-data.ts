import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axiosClient from '@/services/api/axios-client';

export const useProjectsData = (status?: string, search?: string) => {
  return useQuery({
    queryKey: ['projects', status, search],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (status && status !== 'ALL') params.set('status', status);
      if (search) params.set('search', search);
      const { data } = await axiosClient.get(`/core/projects?${params}`);
      return data.data as Project[];
    },
  });
};

export const useCreateProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (dto: Partial<Project>) =>
      axiosClient.post('/core/projects', dto).then(r => r.data.data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['projects'] }),
  });
};

export const useUpdateProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...dto }: Partial<Project> & { id: string }) =>
      axiosClient.patch(`/core/projects/${id}`, dto).then(r => r.data.data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['projects'] }),
  });
};

export const useDeleteProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) =>
      axiosClient.delete(`/core/projects/${id}`).then(r => r.data.data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['projects'] }),
  });
};

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'ACTIVE' | 'ON_HOLD' | 'COMPLETED';
  startDate: string;
  endDate: string;
  team: string[];
  owner: string;
  tasksCount: number;
  completedTasks: number;
}
