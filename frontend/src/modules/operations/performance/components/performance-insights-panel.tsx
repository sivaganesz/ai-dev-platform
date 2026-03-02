import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { PerformanceInsight } from "@/../mock/core/operations/performanceData";
import { Lightbulb, AlertCircle, TrendingUp, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PerformanceInsightsPanelProps {
  insights: PerformanceInsight[];
}

export function PerformanceInsightsPanel({ insights }: PerformanceInsightsPanelProps) {
  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'BOTTLENECK': return <AlertCircle className="h-4 w-4 text-red-500" />;
      case 'OPTIMIZATION': return <Lightbulb className="h-4 w-4 text-yellow-500" />;
      case 'SUCCESS': return <TrendingUp className="h-4 w-4 text-green-500" />;
      default: return <Lightbulb className="h-4 w-4 text-blue-500" />;
    }
  };

  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <TrendingUp className="h-4 w-4" />
          Performance Optimization Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-3">
          {insights.map((insight) => (
            <div 
              key={insight.id} 
              className={cn(
                "p-4 rounded-lg border bg-card relative overflow-hidden group hover:border-primary transition-colors",
                insight.type === 'BOTTLENECK' && "border-red-500/20 bg-red-500/[0.02]"
              )}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="p-2 rounded-full bg-muted/50">
                  {getInsightIcon(insight.type)}
                </div>
                <Badge variant={insight.impact === 'HIGH' ? 'destructive' : 'outline'} className="text-[10px]">
                  {insight.impact} IMPACT
                </Badge>
              </div>
              <h4 className="text-xs font-bold mb-1">{insight.title}</h4>
              <p className="text-[11px] text-muted-foreground leading-relaxed mb-4">
                {insight.description}
              </p>
              <button className="flex items-center gap-1 text-[10px] font-bold text-primary hover:underline">
                View Resolution Guide <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
