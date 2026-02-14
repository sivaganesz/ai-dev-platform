import { useQuery } from "@tanstack/react-query";
import { 
  securitySummary, 
  authControls, 
  mfaUsers, 
  activeSessions, 
  registeredDevices, 
  securityIncidents, 
  securityPolicies, 
  securityAuditLogs, 
  loginTrendData 
} from "@/../mock/core/settings/securityData";

export function useSecurityData() {
  return useQuery({
    queryKey: ["security-settings-data"],
    queryFn: async () => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      return {
        summary: securitySummary,
        authControls: authControls,
        mfaUsers: mfaUsers,
        sessions: activeSessions,
        devices: registeredDevices,
        incidents: securityIncidents,
        policies: securityPolicies,
        auditLogs: securityAuditLogs,
        loginTrend: loginTrendData
      };
    },
  });
}
