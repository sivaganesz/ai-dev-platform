import { useQuery } from '@tanstack/react-query';
import { cicdData } from '../cicdData';

export const useCicdData = () => {
  const { data: pipelines = [], isLoading } = useQuery({
    queryKey: ['cicd-pipelines'],
    queryFn: async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      return cicdData;
    }
  });

  const stats = {
    totalPipelines: pipelines.length,
    successRate: Math.round(pipelines.reduce((acc, p) => acc + p.successRate, 0) / pipelines.length) || 0,
    failedBuilds: pipelines.filter(p => p.status === 'FAILED').length,
    inProgress: pipelines.filter(p => p.status === 'IN_PROGRESS').length,
  };

  return {
    pipelines,
    stats,
    isLoading
  };
};
