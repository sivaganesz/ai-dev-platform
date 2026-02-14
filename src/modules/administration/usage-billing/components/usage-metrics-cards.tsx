import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { BillingSummary } from "@/../mock/core/administration/billingData";
import { Coins, Zap, Bot, CreditCard } from "lucide-react";

interface UsageMetricsCardsProps {
  summary: BillingSummary;
}

export function UsageMetricsCards({ summary }: UsageMetricsCardsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Tokens Consumed</CardTitle>
          <Coins className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{(summary.tokensUsed / 1000000).toFixed(1)}M</div>
          <p className="text-[10px] text-muted-foreground">{summary.month} usage</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Total Operational Cost</CardTitle>
          <CreditCard className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${summary.totalCost.toFixed(2)}</div>
          <p className="text-[10px] text-muted-foreground">Current month total</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">API Orchestration</CardTitle>
          <Zap className="h-4 w-4 text-yellow-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{summary.apiCalls.toLocaleString()}</div>
          <p className="text-[10px] text-muted-foreground">Total calls made</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Active Agents</CardTitle>
          <Bot className="h-4 w-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{summary.activeAgents}</div>
          <p className="text-[10px] text-muted-foreground">Contributing to cost</p>
        </CardContent>
      </Card>
    </div>
  );
}
