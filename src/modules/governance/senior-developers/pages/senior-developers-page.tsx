
import { useSeniorDevelopersData } from "../hooks/use-senior-developers-data"
import { GovernanceMetrics } from "../components/governance-metrics"
import { SeniorDevCard } from "../components/senior-dev-card"
import { ApprovalWorkloadChart } from "../components/approval-workload-chart"
import { ReviewDistributionChart } from "../components/review-distribution-chart"
import { ArchitectureDecisions } from "../components/architecture-decisions"
import { EscalationQueue } from "../components/escalation-queue"
import { RecentGovernanceActivities } from "../components/recent-governance-activities"

export default function SeniorDevelopersPage() {
  const { 
    developers, 
    activities, 
    escalationQueue, 
    architectureDecisions, 
    metrics, 
    reviewDistribution, 
    approvalWorkload,
    isLoading 
  } = useSeniorDevelopersData()

  if (isLoading) return <div>Loading Governance Layer...</div>

  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Senior Developers Governance</h1>
        <p className="text-muted-foreground">Technical authority, approvals, and architecture oversight.</p>
      </div>

      <GovernanceMetrics metrics={metrics} />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {developers?.map((dev) => (
          <SeniorDevCard key={dev.id} developer={dev} />
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <ApprovalWorkloadChart data={approvalWorkload} />
        <ReviewDistributionChart data={reviewDistribution} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <ArchitectureDecisions decisions={architectureDecisions || []} />
        <EscalationQueue escalations={escalationQueue || []} />
      </div>

      <RecentGovernanceActivities activities={activities || []} />
    </div>
  )
}
