
import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { DecisionAnalysis } from "@/../mock/core/governance/architectureDecisionAnalysisData"
import { DollarSign, TrendingUp, TrendingDown } from "lucide-react"

interface CostImpactPanelProps {
  analysis: DecisionAnalysis
}

export const CostImpactPanel: React.FC<CostImpactPanelProps> = ({ analysis }) => {
  const { costDetails, estimatedCostImpact } = analysis

  const formatCurrency = (val: number) => {
    const sign = val >= 0 ? "+" : ""
    return `${sign}$${Math.abs(val)}/mo`
  }

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-bold">Cost Impact Panel</CardTitle>
        <DollarSign className="w-5 h-5 text-green-500" />
      </CardHeader>
      <CardContent>
        <div className="space-y-6 mt-2">
          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
            <div>
              <p className="text-sm text-muted-foreground">Estimated Monthly Change</p>
              <h2 className={`text-2xl font-bold ${estimatedCostImpact >= 0 ? 'text-destructive' : 'text-green-500'}`}>
                {estimatedCostImpact > 0 ? '+' : ''}{estimatedCostImpact}%
              </h2>
            </div>
            {estimatedCostImpact >= 0 ? (
              <TrendingUp className="w-8 h-8 text-destructive opacity-50" />
            ) : (
              <TrendingDown className="w-8 h-8 text-green-500 opacity-50" />
            )}
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="flex justify-between items-center py-2 border-b border-dashed">
              <span className="text-sm text-muted-foreground">Infrastructure</span>
              <span className={`font-semibold ${costDetails.infra >= 0 ? 'text-destructive' : 'text-green-500'}`}>
                {formatCurrency(costDetails.infra)}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-dashed">
              <span className="text-sm text-muted-foreground">AI Compute</span>
              <span className={`font-semibold ${costDetails.compute >= 0 ? 'text-destructive' : 'text-green-500'}`}>
                {formatCurrency(costDetails.compute)}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-dashed">
              <span className="text-sm text-muted-foreground">Storage</span>
              <span className={`font-semibold ${costDetails.storage >= 0 ? 'text-destructive' : 'text-green-500'}`}>
                {formatCurrency(costDetails.storage)}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
