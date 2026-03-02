
import { useCodeReviewsData } from "../hooks/use-code-reviews-data"
import { ReviewMetrics } from "../components/review-metrics"
import { ReviewsTable } from "../components/reviews-table"
import { ReviewStatusChart } from "../components/review-status-chart"
import { ReviewQualityScore } from "../components/review-quality-score"
import { DefectDensityChart } from "../components/defect-density-chart"
import { AiVsHumanReviews } from "../components/ai-vs-human-reviews"
import { ReviewerWorkload } from "../components/reviewer-workload"
import { ReviewTimeline } from "../components/review-timeline"

export default function CodeReviewsPage() {
  const { 
    reviews, 
    comments, 
    metrics, 
    statusDistribution, 
    qualityScoreDistribution, 
    defectDensityData, 
    aiVsHumanData, 
    reviewerWorkload,
    isLoading 
  } = useCodeReviewsData()

  if (isLoading) return <div>Loading Code Quality Layer...</div>

  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Code Review Governance</h1>
        <p className="text-muted-foreground">Technical validation, security checks, and quality assurance.</p>
      </div>

      <ReviewMetrics metrics={metrics} />

      <ReviewsTable reviews={reviews || []} />

      <div className="grid gap-6 md:grid-cols-2">
        <ReviewStatusChart data={statusDistribution} />
        <ReviewQualityScore data={qualityScoreDistribution} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <DefectDensityChart data={defectDensityData} />
        <AiVsHumanReviews data={aiVsHumanData} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <ReviewerWorkload data={reviewerWorkload} />
        <ReviewTimeline reviews={reviews || []} comments={comments || []} />
      </div>
    </div>
  )
}
