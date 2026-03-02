import { useState } from "react";
import { useDeploymentsData } from "../hooks/use-deployments-data";
import { DeploymentCard } from "../components/deployment-card";
import { EnvironmentStatusTable } from "../components/environment-status-table";
import { DeploymentDetailsDrawer } from "../components/deployment-details-drawer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Deployment } from "@/../mock/core/operations/deploymentsData";
import { 
  Rocket, 
  CheckCircle2, 
  AlertCircle, 
  RotateCcw
} from "lucide-react";

export default function DeploymentsPage() {
  const { data, isLoading } = useDeploymentsData();
  const [selectedDeployment, setSelectedDeployment] = useState<Deployment | null>(null);

  if (isLoading) {
    return <div className="flex items-center justify-center h-full">Loading deployments...</div>;
  }

  const selectedEvents = data?.events.filter(e => e.deploymentId === selectedDeployment?.id) || [];

  return (
    <div className="flex-1 space-y-4 p-4 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Deployments</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Deployments</CardTitle>
            <Rocket className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.stats.totalDeployments}</div>
            <p className="text-xs text-muted-foreground">All time releases</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.stats.successRate}%</div>
            <p className="text-xs text-muted-foreground">+0.4% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Failed Releases</CardTitle>
            <AlertCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.stats.failedReleases}</div>
            <p className="text-xs text-muted-foreground">Requires investigation</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rollbacks</CardTitle>
            <RotateCcw className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.stats.rollbacks}</div>
            <p className="text-xs text-muted-foreground">Recent version reverts</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="overview">Recent Deployments</TabsTrigger>
            <TabsTrigger value="environments">Environments</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            {data?.deployments.map((deployment) => (
              <DeploymentCard 
                key={deployment.id} 
                deployment={deployment} 
                onClick={setSelectedDeployment}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="environments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Environment Health</CardTitle>
            </CardHeader>
            <CardContent>
              <EnvironmentStatusTable data={data?.environmentHealth || []} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <DeploymentDetailsDrawer 
        deployment={selectedDeployment}
        events={selectedEvents}
        isOpen={!!selectedDeployment}
        onClose={() => setSelectedDeployment(null)}
      />
    </div>
  );
}
