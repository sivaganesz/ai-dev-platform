import { useQuery } from '@tanstack/react-query';
import { cloudProvidersData } from '../cloudData';

export const useCloudData = () => {
  const { data: providers = [], isLoading } = useQuery({
    queryKey: ['cloud-providers'],
    queryFn: async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      return cloudProvidersData;
    }
  });

  const stats = {
    activeProviders: providers.length,
    totalEnvironments: providers.reduce((acc, p) => acc + p.environments.length, 0),
    avgUtilization: providers.length > 0 
      ? Math.round(providers.reduce((acc, p) => acc + (p.resourceUsage.cpu + p.resourceUsage.storage) / 2, 0) / providers.length)
      : 0,
  };

  return {
    providers,
    stats,
    isLoading
  };
};
