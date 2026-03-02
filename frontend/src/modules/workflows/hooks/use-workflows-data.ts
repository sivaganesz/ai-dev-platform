import { useQuery } from "@tanstack/react-query";
import { workflowsData, type Workflow } from "@/../mock/core/workflows/workflowsData";

export const useWorkflowsData = () => {
  return useQuery({
    queryKey: ["workflows"],
    queryFn: async () => {
      return new Promise<Workflow[]>((resolve) => 
        setTimeout(() => resolve(workflowsData), 300)
      );
    },
  });
};
