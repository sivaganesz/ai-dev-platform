
import { useParams, useNavigate } from "react-router-dom"
import { useArchitectureDecision } from "../hooks/use-architecture-decisions-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ShieldCheck, MessageSquare, Workflow, User, Lightbulb, Scale, Zap, DollarSign } from "lucide-react"
import { seniorDevelopers } from "@/../mock/core/governance/seniorDevelopersData"
import { RiskAssessmentPanel } from "../components/risk-assessment-panel"

export default function DecisionDetailsPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data, isLoading } = useArchitectureDecision(id || "")

  if (isLoading) return <div>Loading Architectural Rationale...</div>
  if (!data || !data.decision) return <div>Decision record not found</div>

  const { decision, tech, risk } = data

  const getReviewerName = (id: string) => {
    return seniorDevelopers.find(dev => dev.id === id)?.name || id
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Architecture Decision Details</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <CardTitle>{decision.title}</CardTitle>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Badge variant="outline">{decision.id}</Badge>
                  <span>Category: {decision.category.replace('_', ' ')}</span>
                </div>
              </div>
              <Badge className={
                decision.decisionStatus === 'APPROVED' ? 'bg-green-100 text-green-800' : 
                decision.decisionStatus === 'REJECTED' ? 'bg-red-100 text-red-800' : 
                'bg-blue-100 text-blue-800'
              }>
                {decision.decisionStatus}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="grid gap-8">
            <div className="space-y-4">
              <h3 className="text-sm font-bold flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-primary" />
                Problem Description
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{decision.description}</p>
            </div>

            <div className="space-y-4 border-t pt-6">
              <h3 className="text-sm font-bold flex items-center gap-2 text-green-600">
                <Lightbulb className="h-4 w-4" />
                Architectural Rationale
              </h3>
              <div className="p-4 bg-green-50/50 border border-green-100 rounded-lg">
                <p className="text-sm italic">"{decision.rationale}"</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 border-t pt-6">
              <div className="space-y-4">
                <h3 className="text-sm font-bold">Rejected Alternatives</h3>
                <ul className="list-disc list-inside text-xs space-y-2 text-muted-foreground">
                  {decision.alternatives.map(alt => <li key={alt}>{alt}</li>)}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-bold">Tech Stack Impact</h3>
                <div className="grid gap-2">
                  {tech?.database && <Badge variant="secondary" className="justify-between">Database: <span>{tech.database}</span></Badge>}
                  {tech?.backend && <Badge variant="secondary" className="justify-between">Backend: <span>{tech.backend}</span></Badge>}
                  {tech?.infrastructure && <Badge variant="secondary" className="justify-between">Infrastructure: <span>{tech.infrastructure}</span></Badge>}
                  {tech?.aiFramework && <Badge variant="secondary" className="justify-between">AI Engine: <span>{tech.aiFramework}</span></Badge>}
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
                <Workflow className="h-4 w-4 text-primary" />
                Interconnected Governance
              </h3>
              <div className="flex gap-4">
                <Button variant="outline" className="text-xs h-8" onClick={() => navigate(`/projects`)}>
                  Project: {decision.projectId}
                </Button>
                {decision.workflowId && (
                  <Button variant="outline" className="text-xs h-8" onClick={() => navigate(`/workflows`)}>
                    Workflow: {decision.workflowId}
                  </Button>
                )}
                {decision.approvalId && (
                  <Button variant="outline" className="text-xs h-8" onClick={() => navigate(`/governance/approvals/${decision.approvalId}`)}>
                    Linked Approval: {decision.approvalId}
                  </Button>
                )}
                <Button 
                  variant="default" 
                  className="text-xs h-8 bg-blue-600 hover:bg-blue-700" 
                  onClick={() => navigate(`/governance/architecture-decisions/analyze/${decision.id}`)}
                >
                  Analyze Impact Deeply →
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-bold uppercase text-muted-foreground">Stakeholders</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-muted-foreground">PROPOSED BY</span>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <User className="h-3 w-3" /> {getReviewerName(decision.proposedBy)}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-muted-foreground">REVIEWED BY</span>
                <div className="flex flex-wrap gap-2">
                  {decision.reviewedBy.map(r => (
                    <Badge key={r} variant="outline" className="text-[10px]">{getReviewerName(r)}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <RiskAssessmentPanel data={risk} />

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-bold uppercase text-muted-foreground">Impact Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-primary">{decision.impactScore}</span>
                <span className="text-xs text-muted-foreground">/ 100</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 text-[10px] font-bold">
                <div className="flex items-center gap-1"><Scale className="h-3 w-3" /> SCALABILITY</div>
                <div className="flex items-center gap-1"><Zap className="h-3 w-3" /> PERFORMANCE</div>
                <div className="flex items-center gap-1"><ShieldCheck className="h-3 w-3" /> SECURITY</div>
                <div className="flex items-center gap-1"><DollarSign className="h-3 w-3" /> EFFICIENCY</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
