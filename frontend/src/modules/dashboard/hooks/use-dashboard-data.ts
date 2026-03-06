import { useQuery } from '@tanstack/react-query';
import axiosClient from '@/services/api/axios-client';

export function useDashboardData() {
  return useQuery({
    queryKey: ['dashboard-data'],
    queryFn: async () => {
      const { data } = await axiosClient.get('/core/dashboard');
      return data.data;
    },
  });
}
