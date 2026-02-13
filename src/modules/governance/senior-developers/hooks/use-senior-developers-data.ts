
import { useQuery } from '@tanstack/react-query'
import { seniorDevelopers, governanceActivities, escalations, adrs } from '@/../mock/core/governance/seniorDevelopersData'

export const useSeniorDevelopersData = () => {
  const { data: developers, isLoading: isLoadingDevelopers } = useQuery({
    queryKey: ['senior-developers'],
    queryFn: async () => {
      // Simulate API call
      return seniorDevelopers
    }
  })

  const { data: activities, isLoading: isLoadingActivities } = useQuery({
    queryKey: ['governance-activities'],
    queryFn: async () => {
      return governanceActivities
    }
  })

  const { data: escalationQueue, isLoading: isLoadingEscalations } = useQuery({
    queryKey: ['escalations'],
    queryFn: async () => {
      return escalations
    }
  })

  const { data: architectureDecisions, isLoading: isLoadingADRs } = useQuery({
    queryKey: ['adrs'],
    queryFn: async () => {
      return adrs
    }
  })

  const metrics = {
    totalSeniorDevs: developers?.length || 0,
    activeApprovals: developers?.reduce((acc, dev) => acc + dev.activeApprovals, 0) || 0,
    pendingReviews: developers?.reduce((acc, dev) => acc + dev.pendingReviews, 0) || 0,
    adrDecisionsThisMonth: 12, // Mocked aggregation
  }

  const reviewDistribution = [
    { name: 'Frontend', value: 35 },
    { name: 'Backend', value: 45 },
    { name: 'AI', value: 15 },
    { name: 'DevOps', value: 5 },
  ]

  const approvalWorkload = developers?.map(dev => ({
    name: dev.name,
    activeApprovals: dev.activeApprovals
  })) || []

  return {
    developers,
    activities,
    escalationQueue,
    architectureDecisions,
    metrics,
    reviewDistribution,
    approvalWorkload,
    isLoading: isLoadingDevelopers || isLoadingActivities || isLoadingEscalations || isLoadingADRs
  }
}

export const useSeniorDeveloper = (id: string) => {
  return useQuery({
    queryKey: ['senior-developer', id],
    queryFn: async () => {
      const developer = seniorDevelopers.find(d => d.id === id)
      if (!developer) throw new Error('Developer not found')
      return developer
    },
    enabled: !!id
  })
}
