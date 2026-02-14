import { useCompanyData } from "../hooks/use-company-data";
import { CompanyProfileCard } from "../components/company-profile-card";
import { BrandingCustomization } from "../components/branding-customization";
import { OrgStructureMapping } from "../components/org-structure-mapping";
import { ComplianceGovernancePanel } from "../components/compliance-governance-panel";
import { InfrastructurePolicyPanel } from "../components/infrastructure-policy-panel";
import { AIGovernancePanel } from "../components/ai-governance-panel";
import { CompanyStatsCharts } from "../components/company-stats-charts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, ShieldCheck, Zap, Server } from "lucide-react";

export default function CompanyInfoPage() {
  const { data, isLoading } = useCompanyData();

  if (isLoading) {
    return <div className="flex items-center justify-center h-full">Synchronizing organization policy...</div>;
  }

  return (
    <div className="flex-1 space-y-6 p-4 pt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Building2 className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">Organization Profile</h2>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="h-8 px-4 text-xs font-bold">
            TIER: {data?.license.planType.toUpperCase()}
          </Badge>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Agent Credits</CardTitle>
            <Zap className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.license.agentCredits}</div>
            <p className="text-[10px] text-muted-foreground">Monthly execution cap</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Sandbox Pool</CardTitle>
            <Server className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.license.sandboxHours.toLocaleString()} Hrs</div>
            <p className="text-[10px] text-muted-foreground">Available cloud time</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Simulation Limit</CardTitle>
            <ShieldCheck className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.license.apiSimulationCalls}</div>
            <p className="text-[10px] text-muted-foreground">API mock capacity</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Departments</CardTitle>
            <Building2 className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.hierarchy.length} Units</div>
            <p className="text-[10px] text-muted-foreground">Mapped in hierarchy</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-9 space-y-6">
          <CompanyProfileCard profile={data?.profile!} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BrandingCustomization config={data?.branding!} />
            <OrgStructureMapping hierarchy={data?.hierarchy || []} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <ComplianceGovernancePanel settings={data?.compliance!} />
            </div>
            <div className="md:col-span-1">
              <InfrastructurePolicyPanel 
                deployments={data?.deployments || []} 
                strategies={data?.strategies || []} 
              />
            </div>
            <div className="md:col-span-1">
              <AIGovernancePanel defaults={data?.aiGov!} />
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-6">
          <CompanyStatsCharts 
            regionData={data?.stats.deploymentsByRegion || []} 
            teamUsageData={data?.stats.sandboxUsageByTeam || []} 
          />
        </div>
      </div>
    </div>
  );
}
