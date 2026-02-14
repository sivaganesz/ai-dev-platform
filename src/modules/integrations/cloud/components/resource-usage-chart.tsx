import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Cpu, Database, Network } from "lucide-react";
import type { CloudProvider } from "../cloudData";

interface ResourceUsageChartProps {
  provider: CloudProvider | null;
}

export function ResourceUsageChart({ provider }: ResourceUsageChartProps) {
  if (!provider) {
    return (
      <Card className="h-full flex items-center justify-center text-muted-foreground p-8">
        Select a provider to view resource metrics
      </Card>
    );
  }

  const resources = [
    { label: 'CPU Usage', value: provider.resourceUsage.cpu, icon: <Cpu className="h-4 w-4" />, color: 'bg-blue-500' },
    { label: 'Storage', value: provider.resourceUsage.storage, icon: <Database className="h-4 w-4" />, color: 'bg-purple-500' },
    { label: 'Bandwidth', value: provider.resourceUsage.bandwidth, icon: <Network className="h-4 w-4" />, color: 'bg-orange-500' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Resource Utilization: {provider.provider}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {resources.map((res) => (
          <div key={res.label} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                {res.icon}
                {res.label}
              </div>
              <span className="font-semibold">{res.value}%</span>
            </div>
            <Progress value={res.value} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
