
import { useQuery } from '@tanstack/react-query'
import { approvalRequests, approvalDecisions, approvalSLAs } from '@/../mock/core/governance/approvalsData'

export const useApprovalsData = () => {
  const { data: requests, isLoading: isLoadingRequests } = useQuery({
    queryKey: ['approval-requests'],
    queryFn: async () => {
      // Simulate API call
      return approvalRequests
    }
  })

  const { data: decisions, isLoading: isLoadingDecisions } = useQuery({
    queryKey: ['approval-decisions'],
    queryFn: async () => {
      return approvalDecisions
    }
  })

  const { data: slas, isLoading: isLoadingSLAs } = useQuery({
    queryKey: ['approval-slas'],
    queryFn: async () => {
      return approvalSLAs
    }
  })

  const metrics = {
    totalRequests: requests?.length || 0,
    pendingApprovals: requests?.filter(r => r.status === 'PENDING').length || 0,
    approvedToday: requests?.filter(r => r.status === 'APPROVED' && r.decidedAt?.startsWith('2024-03-22')).length || 0,
    escalations: requests?.filter(r => r.status === 'ESCALATED').length || 0,
  }

  const statusDistribution = [
    { name: 'Approved', value: requests?.filter(r => r.status === 'APPROVED').length || 0 },
    { name: 'Pending', value: requests?.filter(r => r.status === 'PENDING').length || 0 },
    { name: 'Rejected', value: requests?.filter(r => r.status === 'REJECTED').length || 0 },
    { name: 'Escalated', value: requests?.filter(r => r.status === 'ESCALATED').length || 0 },
  ]

  const typeDistribution = [
    { name: 'Workflow', value: requests?.filter(r => r.type === 'WORKFLOW').length || 0 },
    { name: 'Deployment', value: requests?.filter(r => r.type === 'DEPLOYMENT').length || 0 },
    { name: 'Architecture', value: requests?.filter(r => r.type === 'ARCHITECTURE').length || 0 },
    { name: 'Agent', value: requests?.filter(r => r.type === 'AGENT_EXECUTION').length || 0 },
    { name: 'Hotfix', value: requests?.filter(r => r.type === 'HOTFIX').length || 0 },
  ]

  const approverWorkload = [
    { name: 'Alex Rivera', approvals: 12 },
    { name: 'Sarah Chen', approvals: 8 },
    { name: 'Marcus Thorne', approvals: 15 },
    { name: 'Elena Rodriguez', approvals: 10 },
    { name: 'David Kim', approvals: 5 },
  ]

  return {
    requests,
    decisions,
    slas,
    metrics,
    statusDistribution,
    typeDistribution,
    approverWorkload,
    isLoading: isLoadingRequests || isLoadingDecisions || isLoadingSLAs
  }
}

export const useApprovalRequest = (id: string) => {
  return useQuery({
    queryKey: ['approval-request', id],
    queryFn: async () => {
      const request = approvalRequests.find(r => r.id === id)
      if (!request) throw new Error('Approval request not found')
      
      const requestDecisions = approvalDecisions.filter(d => d.approvalId === id)
      const requestSLA = approvalSLAs.find(s => s.approvalId === id)
      
      return { request, decisions: requestDecisions, sla: requestSLA }
    },
    enabled: !!id
  })
}
