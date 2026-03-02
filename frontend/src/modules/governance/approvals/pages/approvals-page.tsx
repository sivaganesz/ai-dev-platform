
import { useApprovalsData } from "../hooks/use-approvals-data"
import { ApprovalMetrics } from "../components/approval-metrics"
import { ApprovalRequestTable } from "../components/approval-request-table"
import { ApprovalStatusChart } from "../components/approval-status-chart"
import { ApprovalTypeDistribution } from "../components/approval-type-distribution"
import { PendingApprovalsQueue } from "../components/pending-approvals-queue"
import { ApproverWorkload } from "../components/approver-workload"
import { ApprovalTimeline } from "../components/approval-timeline"

export default function ApprovalsPage() {
  const { 
    requests, 
    decisions, 
    slas, 
    metrics, 
    statusDistribution, 
    typeDistribution, 
    approverWorkload,
    isLoading 
  } = useApprovalsData()

  if (isLoading) return <div>Loading Governance Control Gates...</div>

  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Approval Governance</h1>
        <p className="text-muted-foreground">Execution gatekeeper and authority control layer.</p>
      </div>

      <ApprovalMetrics metrics={metrics} />

      <ApprovalRequestTable requests={requests || []} slas={slas || []} />

      <div className="grid gap-6 md:grid-cols-2">
        <ApprovalStatusChart data={statusDistribution} />
        <ApprovalTypeDistribution data={typeDistribution} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <PendingApprovalsQueue requests={requests || []} slas={slas || []} />
        <ApproverWorkload data={approverWorkload} />
      </div>

      <ApprovalTimeline requests={requests || []} decisions={decisions || []} />
    </div>
  )
}
