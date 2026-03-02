
import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { DecisionAnalysis } from "@/../mock/core/governance/architectureDecisionAnalysisData"
import { Cloud, Zap, Layers, RefreshCw } from "lucide-react"

interface DeploymentImpactAnalysisProps {
  analysis: DecisionAnalysis
}

export const DeploymentImpactAnalysis: React.FC<DeploymentImpactAnalysisProps> = ({ analysis }) => {
  const { deploymentDetails } = analysis

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-lg">Deployment Impact Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 border rounded-xl bg-background shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <Cloud className="w-4 h-4 text-blue-500" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-tight">Infra Changes</h3>
            </div>
            <ul className="space-y-2">
              {deploymentDetails.infraChanges.map((change, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  {change}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 border rounded-xl bg-background shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <Zap className="w-4 h-4 text-purple-500" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-tight">Pipeline Updates</h3>
            </div>
            <ul className="space-y-2">
              {deploymentDetails.pipelineUpdates.map((update, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                  {update}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 border rounded-xl bg-background shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 bg-orange-500/10 rounded-lg">
                <Layers className="w-4 h-4 text-orange-500" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-tight">Container Scaling</h3>
            </div>
            <p className="text-sm text-muted-foreground">{deploymentDetails.containerScaling}</p>
          </div>

          <div className="p-4 border rounded-xl bg-background shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <RefreshCw className="w-4 h-4 text-green-500" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-tight">CI/CD Adjustments</h3>
            </div>
            <p className="text-sm text-muted-foreground">{deploymentDetails.cicdAdjustments}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
