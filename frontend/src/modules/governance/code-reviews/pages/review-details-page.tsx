
import { useParams, useNavigate } from "react-router-dom"
import { useCodeReview } from "../hooks/use-code-reviews-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ShieldCheck, MessageSquare, Workflow, User, ShieldAlert, BarChart3, Fingerprint } from "lucide-react"
import { seniorDevelopers } from "@/../mock/core/governance/seniorDevelopersData"
import { Progress } from "@/components/ui/progress"

export default function ReviewDetailsPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data, isLoading } = useCodeReview(id || "")

  if (isLoading) return <div>Loading Quality Intelligence...</div>
  if (!data || !data.review) return <div>Review not found</div>

  const { review, comments, defects } = data

  const getReviewerName = (id: string) => {
    return seniorDevelopers.find(dev => dev.id === id)?.name || id
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600'
    if (score >= 75) return 'text-blue-600'
    if (score >= 50) return 'text-orange-600'
    return 'text-red-600'
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Code Review Intelligence</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <CardTitle>{review.title}</CardTitle>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Badge variant="outline">{review.id}</Badge>
                  <span>Project: {review.projectId}</span>
                  <span>•</span>
                  <span>Workflow: {review.workflowId}</span>
                </div>
              </div>
              <Badge variant={review.status === 'APPROVED' ? 'default' : 'secondary'}>
                {review.status.replace('_', ' ')}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Type</span>
                <span>{review.reviewType}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Reviewer</span>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span>{getReviewerName(review.reviewerId)}</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Contributor</span>
                <div className="flex items-center gap-2">
                  <Fingerprint className="h-4 w-4 text-muted-foreground" />
                  <span>{review.agentId || "Human Developer"}</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Created At</span>
                <span>{new Date(review.createdAt).toLocaleString()}</span>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Governance Gate Impact
              </h3>
              <div className="p-4 bg-muted/30 rounded-lg border">
                <p className="text-sm">
                  {review.status === 'APPROVED' && "Code quality standards met. Approval chain has been initiated for deployment."}
                  {review.status === 'CHANGES_REQUESTED' && "Structural or logic issues detected. Re-execution of agent task required before next review cycle."}
                  {review.status === 'REJECTED' && "Critical policy violations detected. This contribution is blocked from entering the release stream."}
                  {review.status === 'PENDING' && "Technical authority is currently evaluating architecture compliance and security risk."}
                </p>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
                <Workflow className="h-4 w-4 text-primary" />
                Linked Approvals
              </h3>
              {review.approvalId ? (
                <Button variant="outline" className="w-fit" onClick={() => navigate(`/governance/approvals/${review.approvalId}`)}>
                  View Approval: {review.approvalId}
                </Button>
              ) : (
                <p className="text-xs text-muted-foreground">No approval request linked yet.</p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Quality Metrics</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="text-center space-y-2">
              <span className="text-xs text-muted-foreground font-bold uppercase">Aggregated Score</span>
              <div className={`text-5xl font-bold ${getScoreColor(review.qualityScore)}`}>
                {review.qualityScore}%
              </div>
              <Progress value={review.qualityScore} className="h-2" />
            </div>

            <div className="grid grid-cols-2 gap-4 border-t pt-6">
              <div className="flex flex-col gap-1">
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Defects</span>
                <span className="text-2xl font-bold text-red-600">{review.defectCount}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Risk Level</span>
                <Badge variant={review.qualityScore < 75 ? "destructive" : "outline"} className="w-fit">
                  {review.qualityScore >= 90 ? "LOW" : review.qualityScore >= 75 ? "MEDIUM" : "HIGH"}
                </Badge>
              </div>
            </div>

            <div className="border-t pt-6 space-y-4">
              <h4 className="text-xs font-bold uppercase text-muted-foreground flex items-center gap-2">
                <BarChart3 className="h-3.5 w-3.5" /> Defect Breakdown
              </h4>
              <div className="space-y-3">
                {defects.map(d => (
                  <div key={d.type} className="space-y-1">
                    <div className="flex justify-between text-[10px]">
                      <span>{d.type}</span>
                      <span className="font-bold">{d.count} issues</span>
                    </div>
                    <Progress value={(d.count / (review.defectCount || 1)) * 100} className="h-1" />
                  </div>
                ))}
                {defects.length === 0 && <p className="text-xs text-muted-foreground">No defects detected.</p>}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Reviewer Observations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {comments.length > 0 ? (
              comments.map(comment => (
                <div key={comment.id} className="p-4 border rounded-lg bg-muted/20 flex gap-4">
                  <div className={`mt-1 h-2 w-2 rounded-full shrink-0 ${
                    comment.severity === 'HIGH' ? 'bg-red-500' : 
                    comment.severity === 'MEDIUM' ? 'bg-orange-500' : 'bg-blue-500'
                  }`} />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm">{getReviewerName(comment.reviewer)}</span>
                        <Badge variant="outline" className="text-[8px] h-4">{comment.severity} SEVERITY</Badge>
                      </div>
                      <span className="text-[10px] text-muted-foreground">
                        {new Date(comment.timestamp).toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm italic">"{comment.comment}"</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-muted-foreground flex flex-col items-center gap-2">
                <ShieldAlert className="h-8 w-8 opacity-20" />
                <p>No critical observations recorded.</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
