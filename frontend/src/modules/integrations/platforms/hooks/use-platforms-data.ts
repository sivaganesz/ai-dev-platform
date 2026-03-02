import { useQuery } from '@tanstack/react-query';
import { platformsData, platformsActivityLogs } from '../platformsData';

export const usePlatformsData = () => {
  const { data: platforms = [], isLoading: isLoadingPlatforms } = useQuery({
    queryKey: ['platforms'],
    queryFn: async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      return platformsData;
    }
  });

  const { data: activityLogs = [], isLoading: isLoadingLogs } = useQuery({
    queryKey: ['platforms-activity'],
    queryFn: async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      return platformsActivityLogs;
    }
  });

  const stats = {
    totalPlatforms: platforms.length,
    connectedPlatforms: platforms.filter(p => p.status === 'CONNECTED').length,
    activeRepositories: platforms.reduce((acc, p) => acc + p.repositories.length, 0),
  };

  return {
    platforms,
    activityLogs,
    stats,
    isLoading: isLoadingPlatforms || isLoadingLogs
  };
};
