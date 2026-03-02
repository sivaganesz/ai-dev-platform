
import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import type { DecisionAnalysis } from "@/../mock/core/governance/architectureDecisionAnalysisData"
import { AlertTriangle } from "lucide-react"

interface RiskPropagationGraphProps {
  analysis: DecisionAnalysis
}

export const RiskPropagationGraph: React.FC<RiskPropagationGraphProps> = ({ analysis }) => {
  const getRiskColor = (score: number) => {
    if (score > 70) return "bg-destructive"
    if (score > 40) return "bg-warning"
    return "bg-green-500"
  }

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-bold">Risk Propagation Graph</CardTitle>
        <AlertTriangle className="w-5 h-5 text-destructive" />
      </CardHeader>
      <CardContent>
        <div className="space-y-6 mt-2">
          {analysis.riskPropagation.map((risk, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-sm font-semibold">{risk.entity}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{risk.connectionType}</p>
                </div>
                <span className="text-sm font-bold">{risk.riskScore}%</span>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all ${getRiskColor(risk.riskScore)}`}
                  style={{ width: `${risk.riskScore}%` }}
                />
              </div>
            </div>
          ))}
          <div className="pt-4 border-t">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Overall Propagation Level</span>
              <span className="text-xl font-bold text-destructive">{analysis.riskPropagationLevel}%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
