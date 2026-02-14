import { useQuery } from "@tanstack/react-query";
import { 
  companyProfile, 
  brandingConfig, 
  orgHierarchy, 
  complianceSettings, 
  deploymentPolicies, 
  environmentStrategies, 
  aiGovernanceDefaults, 
  licenseOverview, 
  companyStats 
} from "@/../mock/core/settings/companyData";

export function useCompanyData() {
  return useQuery({
    queryKey: ["company-info-data"],
    queryFn: async () => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      return {
        profile: companyProfile,
        branding: brandingConfig,
        hierarchy: orgHierarchy,
        compliance: complianceSettings,
        deployments: deploymentPolicies,
        strategies: environmentStrategies,
        aiGov: aiGovernanceDefaults,
        license: licenseOverview,
        stats: companyStats
      };
    },
  });
}
