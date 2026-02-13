
import { useQuery } from '@tanstack/react-query'
import { codeReviews, reviewComments, reviewDefects } from '@/../mock/core/governance/codeReviewsData'

export const useCodeReviewsData = () => {
  const { data: reviews, isLoading: isLoadingReviews } = useQuery({
    queryKey: ['code-reviews'],
    queryFn: async () => {
      return codeReviews
    }
  })

  const { data: comments, isLoading: isLoadingComments } = useQuery({
    queryKey: ['review-comments'],
    queryFn: async () => {
      return reviewComments
    }
  })

  const { data: defects, isLoading: isLoadingDefects } = useQuery({
    queryKey: ['review-defects'],
    queryFn: async () => {
      return reviewDefects
    }
  })

  const metrics = {
    totalReviews: reviews?.length || 0,
    pendingReviews: reviews?.filter(r => r.status === 'PENDING').length || 0,
    approvedReviews: reviews?.filter(r => r.status === 'APPROVED').length || 0,
    rejectedReviews: reviews?.filter(r => r.status === 'REJECTED').length || 0,
  }

  const statusDistribution = [
    { name: 'Approved', value: reviews?.filter(r => r.status === 'APPROVED').length || 0 },
    { name: 'Pending', value: reviews?.filter(r => r.status === 'PENDING').length || 0 },
    { name: 'Changes Requested', value: reviews?.filter(r => r.status === 'CHANGES_REQUESTED').length || 0 },
    { name: 'Rejected', value: reviews?.filter(r => r.status === 'REJECTED').length || 0 },
  ]

  const qualityScoreDistribution = [
    { name: 'Excellent (90-100)', value: reviews?.filter(r => r.qualityScore >= 90).length || 0 },
    { name: 'Good (75-89)', value: reviews?.filter(r => r.qualityScore >= 75 && r.qualityScore < 90).length || 0 },
    { name: 'Risky (50-74)', value: reviews?.filter(r => r.qualityScore >= 50 && r.qualityScore < 75).length || 0 },
    { name: 'Critical (<50)', value: reviews?.filter(r => r.qualityScore > 0 && r.qualityScore < 50).length || 0 },
  ]

  const defectDensityData = reviews?.map(r => ({
    name: r.id,
    defects: r.defectCount,
    score: r.qualityScore
  })) || []

  const aiVsHumanData = [
    { name: 'AI Agents', value: 75, reviews: 45 },
    { name: 'Human Developers', value: 25, reviews: 15 },
  ]

  const reviewerWorkload = [
    { name: 'Alex Rivera', reviews: 14 },
    { name: 'Sarah Chen', reviews: 22 },
    { name: 'Marcus Thorne', reviews: 18 },
    { name: 'Elena Rodriguez', reviews: 12 },
    { name: 'David Kim', reviews: 9 },
  ]

  return {
    reviews,
    comments,
    defects,
    metrics,
    statusDistribution,
    qualityScoreDistribution,
    defectDensityData,
    aiVsHumanData,
    reviewerWorkload,
    isLoading: isLoadingReviews || isLoadingComments || isLoadingDefects
  }
}

export const useCodeReview = (id: string) => {
  return useQuery({
    queryKey: ['code-review', id],
    queryFn: async () => {
      const review = codeReviews.find(r => r.id === id)
      if (!review) throw new Error('Code review not found')
      
      const comments = reviewComments.filter(c => c.reviewId === id)
      const defects = reviewDefects.filter(d => d.reviewId === id)
      
      return { review, comments, defects }
    },
    enabled: !!id
  })
}
