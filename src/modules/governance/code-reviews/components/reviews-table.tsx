
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"
import { seniorDevelopers } from "@/../mock/core/governance/seniorDevelopersData"
import type { CodeReview } from "@/../mock/core/governance/codeReviewsData"

interface ReviewsTableProps {
  reviews: CodeReview[]
}

export function ReviewsTable({ reviews }: ReviewsTableProps) {
  const navigate = useNavigate()

  const getStatusBadge = (status: CodeReview['status']) => {
    switch (status) {
      case 'APPROVED': return <Badge className="bg-green-100 text-green-800 border-green-200">APPROVED</Badge>
      case 'PENDING': return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">PENDING</Badge>
      case 'CHANGES_REQUESTED': return <Badge className="bg-orange-100 text-orange-800 border-orange-200">CHANGES</Badge>
      case 'REJECTED': return <Badge className="bg-red-100 text-red-800 border-red-200">REJECTED</Badge>
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600'
    if (score >= 75) return 'text-blue-600'
    if (score >= 50) return 'text-orange-600'
    return 'text-red-600'
  }

  const getReviewerName = (id: string) => {
    return seniorDevelopers.find(dev => dev.id === id)?.name || id
  }

  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Code Quality Reviews</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Review Title</TableHead>
              <TableHead>Project / Workflow</TableHead>
              <TableHead>Agent / Dev</TableHead>
              <TableHead>Reviewer</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reviews.map((review) => (
              <TableRow 
                key={review.id} 
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => navigate(`/governance/code-reviews/${review.id}`)}
              >
                <TableCell className="font-medium">{review.title}</TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold">{review.projectId}</span>
                    <span className="text-[10px] text-muted-foreground">{review.workflowId}</span>
                  </div>
                </TableCell>
                <TableCell className="text-sm">{review.agentId || "Human"}</TableCell>
                <TableCell className="text-sm">{getReviewerName(review.reviewerId)}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="text-[10px]">{review.reviewType}</Badge>
                </TableCell>
                <TableCell>
                  <span className={`font-bold ${getScoreColor(review.qualityScore)}`}>
                    {review.qualityScore > 0 ? `${review.qualityScore}%` : 'N/A'}
                  </span>
                </TableCell>
                <TableCell>{getStatusBadge(review.status)}</TableCell>
                <TableCell className="text-right">
                  <span className="text-xs text-primary font-medium">Inspect →</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
