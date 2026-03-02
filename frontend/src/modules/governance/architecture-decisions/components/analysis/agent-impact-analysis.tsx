
import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { DecisionAnalysis } from "@/../mock/core/governance/architectureDecisionAnalysisData"
import { Cpu, AlertCircle } from "lucide-react"

interface AgentImpactAnalysisProps {
  analysis: DecisionAnalysis
}

export const AgentImpactAnalysis: React.FC<AgentImpactAnalysisProps> = ({ analysis }) => {
  const getImpactColor = (level: string) => {
    switch (level) {
      case "HIGH": return "text-destructive"
      case "MEDIUM": return "text-warning"
      case "LOW": return "text-blue-500"
      default: return ""
    }
  }

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-bold">Agent Impact Analysis</CardTitle>
        <Cpu className="w-5 h-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {analysis.impactedAgents.map((agent) => (
            <div key={agent.id} className="p-3 border rounded-lg bg-muted/30">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-semibold">{agent.name}</p>
                  <p className="text-xs text-muted-foreground">{agent.id}</p>
                </div>
                <Badge variant="outline" className={getImpactColor(agent.impactLevel)}>
                  {agent.impactLevel} IMPACT
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <AlertCircle className="w-3 h-3" />
                <span>{agent.changeType}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
