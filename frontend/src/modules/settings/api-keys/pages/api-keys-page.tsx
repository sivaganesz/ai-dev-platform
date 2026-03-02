import { useAPIKeysData } from "../hooks/use-api-keys-data";
import { APIKeysTable } from "../components/api-keys-table";
import { APIKeysOverview } from "../components/api-keys-overview";
import { KeyScopeClassification } from "../components/key-scope-classification";
import { GenerateKeyModal } from "../components/generate-key-modal";
import { KeySecurityPolicies } from "../components/key-security-policies";
import { KeyUsageAnalytics } from "../components/key-usage-analytics";
import { KeyActivityLogs } from "../components/key-activity-logs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Key, ShieldCheck, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function APIKeysPage() {
  const { data, isLoading } = useAPIKeysData();

  if (isLoading) {
    return <div className="flex items-center justify-center h-full text-sm font-mono">Authenticating credentials...</div>;
  }

  return (
    <div className="flex-1 space-y-6 p-4 pt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Key className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">API Key Management</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export Registry
          </Button>
          <GenerateKeyModal />
        </div>
      </div>

      <APIKeysOverview summary={data?.summary!} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-9 space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-bold">Credential Registry</CardTitle>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="text-[10px] uppercase font-bold text-muted-foreground">All</Button>
                <Button variant="ghost" size="sm" className="text-[10px] uppercase font-bold text-muted-foreground">Prod</Button>
                <Button variant="ghost" size="sm" className="text-[10px] uppercase font-bold text-muted-foreground">Sandbox</Button>
              </div>
            </CardHeader>
            <CardContent>
              <APIKeysTable keys={data?.keys || []} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-bold">Execution & Access Trace</CardTitle>
            </CardHeader>
            <CardContent>
              <KeyActivityLogs logs={data?.logs || []} />
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-3 space-y-6">
          <KeyScopeClassification scopes={data?.scopes || []} />
          <KeySecurityPolicies />
          <KeyUsageAnalytics data={data?.usageTrend || []} />
          
          <div className="p-4 rounded-lg border bg-yellow-500/5 border-yellow-500/20 flex flex-col items-center text-center space-y-2">
            <ShieldCheck className="h-8 w-8 text-yellow-500" />
            <p className="text-[11px] font-bold">Enterprise Security Standard</p>
            <p className="text-[10px] text-muted-foreground leading-relaxed">
              Automated rotation is enforced for all Production environment keys every 90 days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
