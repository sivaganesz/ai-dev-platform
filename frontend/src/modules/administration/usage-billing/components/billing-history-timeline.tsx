import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { BillingEvent } from "@/../mock/core/administration/billingData";
import { FileText, CreditCard, AlertTriangle, ArrowUpRight } from "lucide-react";

interface BillingHistoryTimelineProps {
  history: BillingEvent[];
}

export function BillingHistoryTimeline({ history }: BillingHistoryTimelineProps) {
  const getEventIcon = (type: string) => {
    switch (type) {
      case 'INVOICE': return <FileText className="h-4 w-4 text-blue-500" />;
      case 'PAYMENT': return <CreditCard className="h-4 w-4 text-green-500" />;
      case 'LIMIT_REACHED': return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'QUOTA_INCREASE': return <ArrowUpRight className="h-4 w-4 text-primary" />;
      default: return <FileText className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-bold">Billing & Financial History</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {history.map((event) => (
          <div key={event.id} className="flex gap-4 group">
            <div className="flex flex-col items-center">
              <div className="p-2 rounded-full bg-muted group-hover:bg-muted/80 transition-colors">
                {getEventIcon(event.type)}
              </div>
              <div className="w-px flex-1 bg-muted mt-2" />
            </div>
            <div className="flex-1 pb-6 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold">{event.type.replace('_', ' ')}</span>
                <span className="text-[10px] text-muted-foreground">{new Date(event.date).toLocaleDateString()}</span>
              </div>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                {event.description}
              </p>
              {event.amount && (
                <Badge variant="secondary" className="text-[10px] mt-2">
                  Amount: ${event.amount.toFixed(2)}
                </Badge>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
