
import { useArchitectureDecisionsData } from "../hooks/use-architecture-decisions-data"
import { DecisionMetrics } from "../components/decision-metrics"
import { DecisionsTable } from "../components/decisions-table"
import { DecisionStatusChart } from "../components/decision-status-chart"
import { ArchitectureImpactChart } from "../components/architecture-impact-chart"
import { TechStackDistribution } from "../components/tech-stack-distribution"
import { RiskAssessmentPanel } from "../components/risk-assessment-panel"
import { SystemTopologyView } from "../components/system-topology-view"
import { DecisionTimeline } from "../components/decision-timeline"
import { AdrCard } from "../components/adr-card"

export default function ArchitectureDecisionsPage() {
  const { 
    decisions, 
    statusDistribution, 
    impactData, 
    techStackDistribution, 
    metrics, 
    isLoading 
  } = useArchitectureDecisionsData()

  if (isLoading) return <div>Loading Architectural Intelligence...</div>

  const highImpactDecisions = decisions?.filter(d => d.impactScore > 80).slice(0, 3) || []

  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Architecture Governance</h1>
        <p className="text-muted-foreground">Strategic system design, scalability, and technical authority.</p>
      </div>

      <DecisionMetrics metrics={metrics} />

      <div className="grid gap-6 md:grid-cols-3">
        {highImpactDecisions.map(decision => (
          <AdrCard key={decision.id} decision={decision} />
        ))}
      </div>

      <DecisionsTable decisions={decisions || []} />

      <div className="grid gap-6 md:grid-cols-2">
        <DecisionStatusChart data={statusDistribution} />
        <ArchitectureImpactChart data={impactData} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <TechStackDistribution data={techStackDistribution} />
        <RiskAssessmentPanel />
      </div>

      <SystemTopologyView />

      <DecisionTimeline decisions={decisions || []} />
    </div>
  )
}
