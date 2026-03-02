
import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { DecisionAnalysis } from "@/../mock/core/governance/architectureDecisionAnalysisData"
import { Workflow, Settings } from "lucide-react"

interface WorkflowImpactAnalysisProps {
  analysis: DecisionAnalysis
}

export const WorkflowImpactAnalysis: React.FC<WorkflowImpactAnalysisProps> = ({ analysis }) => {
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
        <CardTitle className="text-lg font-bold">Workflow Impact Analysis</CardTitle>
        <Workflow className="w-5 h-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {analysis.impactedWorkflows.map((workflow) => (
            <div key={workflow.id} className="p-3 border rounded-lg bg-muted/30">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-semibold">{workflow.name}</p>
                  <p className="text-xs text-muted-foreground">{workflow.id}</p>
                </div>
                <Badge variant="outline" className={getImpactColor(workflow.impactLevel)}>
                  {workflow.impactLevel} IMPACT
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Settings className="w-3 h-3" />
                <span>{workflow.changeType}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
