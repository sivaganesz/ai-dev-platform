
import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Loader2 } from "lucide-react"
import { useArchitectureDecisionAnalysis } from "../hooks/use-architecture-decision-analysis"
import { DecisionAnalysisHeader } from "../components/analysis/decision-analysis-header"
import { ArchitectureBreakdown } from "../components/analysis/architecture-breakdown"
import { ExecutionImpactMap } from "../components/analysis/execution-impact-map"
import { AgentImpactAnalysis } from "../components/analysis/agent-impact-analysis"
import { WorkflowImpactAnalysis } from "../components/analysis/workflow-impact-analysis"
import { DeploymentImpactAnalysis } from "../components/analysis/deployment-impact-analysis"
import { RiskPropagationGraph } from "../components/analysis/risk-propagation-graph"
import { CostImpactPanel } from "../components/analysis/cost-impact-panel"
import { SimulationTimeline } from "../components/analysis/simulation-timeline"

const ArchitectureDecisionAnalysisPage: React.FC = () => {
  const { decisionId } = useParams<{ decisionId: string }>()
  const navigate = useNavigate()
  const { decision, analysis, isLoading } = useArchitectureDecisionAnalysis(decisionId)

  if (isLoading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2">Loading analysis intelligence...</span>
      </div>
    )
  }

  if (!decision || !analysis) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Analysis Not Found</h2>
        <p className="text-muted-foreground mt-2">Could not find analysis data for ID: {decisionId}</p>
        <Button onClick={() => navigate(-1)} variant="outline" className="mt-4">
          Go Back
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex items-center gap-4 mb-2">
        <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to ADRs
        </Button>
      </div>

      {/* Row 1: Header */}
      <DecisionAnalysisHeader decision={decision} />

      {/* Row 2: Architecture Breakdown */}
      <ArchitectureBreakdown analysis={analysis} />

      {/* Row 3: Execution Impact Map */}
      <ExecutionImpactMap analysis={analysis} />

      {/* Row 4: Agent + Workflow Impact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AgentImpactAnalysis analysis={analysis} />
        <WorkflowImpactAnalysis analysis={analysis} />
      </div>

      {/* Row 5: Deployment Impact */}
      <DeploymentImpactAnalysis analysis={analysis} />

      {/* Row 6: Risk Graph + Cost Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RiskPropagationGraph analysis={analysis} />
        <CostImpactPanel analysis={analysis} />
      </div>

      {/* Row 7: Simulation Timeline */}
      <SimulationTimeline analysis={analysis} />
    </div>
  )
}

export default ArchitectureDecisionAnalysisPage
