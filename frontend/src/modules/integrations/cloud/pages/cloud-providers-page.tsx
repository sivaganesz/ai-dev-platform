import { useState } from "react";
import { useCloudData } from "../hooks/use-cloud-data";
import { CloudProviderCard } from "../components/cloud-provider-card";
import { ResourceUsageChart } from "../components/resource-usage-chart";
import { EnvironmentList } from "../components/environment-list";
import type { CloudProvider } from "../cloudData";
import { 
  Cloud, 
  Server, 
  Activity,
  Plus,
  ShieldCheck,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function CloudProvidersPage() {
  const { providers, stats, isLoading } = useCloudData();
  const [selectedProviderId, setSelectedProviderId] = useState<string | null>(null);

  const selectedProvider = providers.find(p => p.id === selectedProviderId) || null;

  if (isLoading) {
    return <div className="p-8">Loading infrastructure data...</div>;
  }

  return (
    <div className="flex flex-col gap-8 p-8">
      {/* Header & Stats */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">Cloud Providers</h1>
            <p className="text-muted-foreground">Manage multi-cloud infrastructure and deployment environments.</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Connect Provider
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <StatCard 
            title="Active Providers" 
            value={stats.activeProviders} 
            icon={<Cloud className="h-4 w-4 text-blue-500" />} 
            description="Linked cloud accounts"
          />
          <StatCard 
            title="Total Environments" 
            value={stats.totalEnvironments} 
            icon={<Server className="h-4 w-4 text-emerald-500" />} 
            description="Active clusters and nodes"
          />
          <StatCard 
            title="Resource Utilization" 
            value={`${stats.avgUtilization}%`} 
            icon={<Activity className="h-4 w-4 text-orange-500" />} 
            description="Average across providers"
          />
        </div>
      </div>

      <Separator />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Provider Cards */}
        <div className="lg:col-span-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              Infrastructure
            </h2>
          </div>
          
          <div className="grid gap-4">
            {providers.map((provider) => (
              <CloudProviderCard
                key={provider.id}
                provider={provider}
                isSelected={selectedProviderId === provider.id}
                onSelect={(p) => setSelectedProviderId(p.id)}
              />
            ))}
          </div>
          
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Zap className="h-5 w-5 text-primary mt-1" />
                <div className="space-y-1">
                  <p className="text-sm font-medium">Quick Deploy</p>
                  <p className="text-xs text-muted-foreground">
                    Connect more providers to enable global low-latency deployments for your demo builds.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Resource Details & Environments */}
        <div className="lg:col-span-2 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-8">
            <ResourceUsageChart provider={selectedProvider} />
            <EnvironmentList provider={selectedProvider} />
          </div>
          
          {!selectedProvider && (
            <div className="flex flex-col items-center justify-center p-12 border-2 border-dashed rounded-xl opacity-50">
              <Cloud className="h-12 w-12 mb-4" />
              <p className="text-lg font-medium">Select a provider to view detailed infrastructure metrics</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import { Card, CardContent } from "@/components/ui/card";

function StatCard({ title, value, icon, description }: { title: string; value: string | number; icon: React.ReactNode; description: string }) {
  return (
    <Card className="bg-card/50 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex items-center justify-between space-y-0 pb-2">
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          {icon}
        </div>
        <div className="flex flex-col">
          <div className="text-2xl font-bold text-white">{value}</div>
          <p className="text-[10px] text-muted-foreground mt-1">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
