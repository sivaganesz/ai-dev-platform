
import { useQuery } from '@tanstack/react-query'
import { architectureDecisions, techStackDecisions, riskAssessments } from '@/../mock/core/governance/architectureDecisionsData'

export const useArchitectureDecisionsData = () => {
  const { data: decisions, isLoading: isLoadingDecisions } = useQuery({
    queryKey: ['architecture-decisions'],
    queryFn: async () => {
      return architectureDecisions
    }
  })

  const { data: techStack, isLoading: isLoadingTech } = useQuery({
    queryKey: ['tech-stack-decisions'],
    queryFn: async () => {
      return techStackDecisions
    }
  })

  const { data: risks, isLoading: isLoadingRisks } = useQuery({
    queryKey: ['risk-assessments'],
    queryFn: async () => {
      return riskAssessments
    }
  })

  const metrics = {
    totalDecisions: decisions?.length || 0,
    approved: decisions?.filter(d => d.decisionStatus === 'APPROVED').length || 0,
    underReview: decisions?.filter(d => d.decisionStatus === 'UNDER_REVIEW').length || 0,
    highRisk: decisions?.filter(d => d.riskLevel === 'HIGH' || d.riskLevel === 'CRITICAL').length || 0,
  }

  const statusDistribution = [
    { name: 'Proposed', value: decisions?.filter(d => d.decisionStatus === 'PROPOSED').length || 0 },
    { name: 'Under Review', value: decisions?.filter(d => d.decisionStatus === 'UNDER_REVIEW').length || 0 },
    { name: 'Approved', value: decisions?.filter(d => d.decisionStatus === 'APPROVED').length || 0 },
    { name: 'Rejected', value: decisions?.filter(d => d.decisionStatus === 'REJECTED').length || 0 },
  ]

  const impactData = [
    { name: 'System', score: 85 },
    { name: 'Workflow', score: 60 },
    { name: 'Deployment', score: 45 },
    { name: 'Security', score: 90 },
  ]

  const techStackDistribution = [
    { name: 'Postgres', count: 12 },
    { name: 'Pinecone', count: 4 },
    { name: 'Redis', count: 8 },
    { name: 'Node.js', count: 15 },
    { name: 'Go', count: 5 },
  ]

  return {
    decisions,
    techStack,
    risks,
    metrics,
    statusDistribution,
    impactData,
    techStackDistribution,
    isLoading: isLoadingDecisions || isLoadingTech || isLoadingRisks
  }
}

export const useArchitectureDecision = (id: string) => {
  return useQuery({
    queryKey: ['architecture-decision', id],
    queryFn: async () => {
      const decision = architectureDecisions.find(d => d.id === id)
      if (!decision) throw new Error('Architecture decision not found')
      
      const tech = techStackDecisions.find(t => t.decisionId === id)
      const risk = riskAssessments.find(r => r.decisionId === id)
      
      return { decision, tech, risk }
    },
    enabled: !!id
  })
}
