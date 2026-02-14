import { useBillingData } from "../hooks/use-billing-data";
import { UsageMetricsCards } from "../components/usage-metrics-cards";
import { TokenUsageChart } from "../components/token-usage-chart";
import { CostBreakdownTable } from "../components/cost-breakdown-table";
import { AgentCostAnalysis } from "../components/agent-cost-analysis";
import { BillingHistoryTimeline } from "../components/billing-history-timeline";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UsageBillingPage() {
  const { data, isLoading } = useBillingData();

  if (isLoading) {
    return <div className="flex items-center justify-center h-full text-sm font-mono">Calculating consumption & costs...</div>;
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Wallet className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">FinOps & Consumption</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Share Report
          </Button>
          <Button size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download Invoice
          </Button>
        </div>
      </div>

      <UsageMetricsCards summary={data?.summary!} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <TokenUsageChart data={data?.usageTrend || []} />
          
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Detailed Cost Allocation</CardTitle>
            </CardHeader>
            <CardContent>
              <CostBreakdownTable data={data?.costBreakdown || []} />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <AgentCostAnalysis agents={data?.agentAnalysis || []} />
          <BillingHistoryTimeline history={data?.history || []} />
        </div>
      </div>
    </div>
  );
}
