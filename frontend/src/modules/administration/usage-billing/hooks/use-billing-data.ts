import { useQuery } from "@tanstack/react-query";
import { 
  billingSummary, 
  tokenUsageTrend, 
  costBreakdown, 
  agentCostAnalysis, 
  billingHistory 
} from "@/../mock/core/administration/billingData";

export function useBillingData() {
  return useQuery({
    queryKey: ["usage-billing-data"],
    queryFn: async () => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      return {
        summary: billingSummary,
        usageTrend: tokenUsageTrend,
        costBreakdown: costBreakdown,
        agentAnalysis: agentCostAnalysis,
        history: billingHistory
      };
    },
  });
}
