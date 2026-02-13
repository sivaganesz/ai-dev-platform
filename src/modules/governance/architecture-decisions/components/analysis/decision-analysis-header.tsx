
import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { ArchitectureDecision } from "@/../mock/core/governance/architectureDecisionsData"

interface DecisionAnalysisHeaderProps {
  decision: ArchitectureDecision
}

export const DecisionAnalysisHeader: React.FC<DecisionAnalysisHeaderProps> = ({ decision }) => {
  const getRiskColor = (level: string) => {
    switch (level) {
      case "CRITICAL": return "destructive"
      case "HIGH": return "destructive"
      case "MEDIUM": return "warning"
      case "LOW": return "secondary"
      default: return "outline"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "APPROVED": return "default"
      case "UNDER_REVIEW": return "secondary"
      case "REJECTED": return "destructive"
      default: return "outline"
    }
  }

  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-medium text-muted-foreground">{decision.id}</span>
              <Badge variant="outline">{decision.category}</Badge>
            </div>
            <h1 className="text-2xl font-bold">{decision.title}</h1>
            <p className="text-muted-foreground mt-1">{decision.description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="text-center px-4 py-2 bg-muted rounded-lg">
              <p className="text-xs text-muted-foreground uppercase font-semibold">Risk Level</p>
              <Badge variant={getRiskColor(decision.riskLevel) as any} className="mt-1">
                {decision.riskLevel}
              </Badge>
            </div>
            <div className="text-center px-4 py-2 bg-muted rounded-lg">
              <p className="text-xs text-muted-foreground uppercase font-semibold">Impact Score</p>
              <p className="text-lg font-bold text-primary">{decision.impactScore}/100</p>
            </div>
            <div className="text-center px-4 py-2 bg-muted rounded-lg">
              <p className="text-xs text-muted-foreground uppercase font-semibold">Status</p>
              <Badge variant={getStatusColor(decision.decisionStatus) as any} className="mt-1">
                {decision.decisionStatus}
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
