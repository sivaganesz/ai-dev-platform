import { useQuery } from "@tanstack/react-query";
import { projectsData, type Project } from "@/../mock/core/projects/projectsData";

export const useProjectsData = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      return new Promise<Project[]>((resolve) => 
        setTimeout(() => resolve(projectsData), 300)
      );
    },
  });
};
