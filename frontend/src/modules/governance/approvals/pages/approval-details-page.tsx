
import { useParams, useNavigate } from "react-router-dom"
import { useApprovalRequest } from "../hooks/use-approvals-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, Clock, ShieldCheck, AlertCircle, MessageSquare, Workflow, Box, User } from "lucide-react"
import { seniorDevelopers } from "@/../mock/core/governance/seniorDevelopersData"

export default function ApprovalDetailsPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data, isLoading } = useApprovalRequest(id || "")

  if (isLoading) return <div>Loading Approval Context...</div>
  if (!data || !data.request) return <div>Approval request not found</div>

  const { request, decisions, sla } = data

  const getApproverName = (id: string) => {
    return seniorDevelopers.find(dev => dev.id === id)?.name || id
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Approval Request Details</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{request.title}</CardTitle>
              <Badge variant={request.priority === 'HIGH' ? 'destructive' : 'secondary'}>
                {request.priority} PRIORITY
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Request ID</span>
                <span className="font-mono">{request.id}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Type</span>
                <Badge variant="outline" className="w-fit">{request.type}</Badge>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Project</span>
                <span>{request.projectId}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Requested By</span>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span>{request.requestedBy}</span>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Governance Impact
              </h3>
              <div className="p-4 bg-muted/30 rounded-lg border">
                <p className="text-sm">
                  {request.type === 'DEPLOYMENT' && "This approval gates the release pipeline to the production environment. No deployment can proceed without sign-off."}
                  {request.type === 'WORKFLOW' && "Agent execution for this workflow is suspended until technical authority verifies the logic."}
                  {request.type === 'ARCHITECTURE' && "System design implementation is blocked. This decision impacts future scalability and tech debt."}
                  {request.type === 'AGENT_EXECUTION' && "Autonomous agent is requesting elevated permissions for a sensitive task."}
                  {request.type === 'HOTFIX' && "Emergency system modification. Bypass standard CI/CD checks requires immediate architect verification."}
                </p>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
                <Workflow className="h-4 w-4 text-primary" />
                Linked Context
              </h3>
              <div className="flex flex-wrap gap-4">
                {request.workflowId && (
                  <Badge variant="secondary" className="flex gap-2 p-2">
                    <Workflow className="h-3 w-3" />
                    Workflow: {request.workflowId}
                  </Badge>
                )}
                {request.agentId && (
                  <Badge variant="secondary" className="flex gap-2 p-2">
                    <Box className="h-3 w-3" />
                    Agent: {request.agentId}
                  </Badge>
                )}
                {request.deploymentId && (
                  <Badge variant="secondary" className="flex gap-2 p-2">
                    <Box className="h-3 w-3" />
                    Deployment: {request.deploymentId}
                  </Badge>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Decision Control</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs text-muted-foreground font-bold uppercase">Current Status</span>
              <Badge 
                className={`w-full justify-center text-sm py-1 ${
                  request.status === 'APPROVED' ? 'bg-green-100 text-green-800' : 
                  request.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}
              >
                {request.status}
              </Badge>
            </div>

            <div className="flex flex-col gap-2 border-t pt-4">
              <span className="text-xs text-muted-foreground font-bold uppercase">Assigned Approver</span>
              <div className="flex items-center gap-3 p-2 border rounded bg-muted/10">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  {getApproverName(request.assignedTo).substring(0, 1)}
                </div>
                <span className="text-sm font-medium">{getApproverName(request.assignedTo)}</span>
              </div>
            </div>

            {sla && (
              <div className={`flex flex-col gap-2 border-t pt-4 ${sla.breached ? 'text-red-600' : ''}`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase">SLA Tracking</span>
                  {sla.breached && <AlertCircle className="h-4 w-4" />}
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex flex-col border p-2 rounded">
                    <span className="text-muted-foreground">Expected</span>
                    <span className="font-bold">{sla.expectedHours}h</span>
                  </div>
                  <div className="flex flex-col border p-2 rounded">
                    <span className="text-muted-foreground">Actual</span>
                    <span className="font-bold">{sla.actualHours}h</span>
                  </div>
                </div>
              </div>
            )}

            <div className="border-t pt-4 space-y-2">
              <Button className="w-full bg-green-600 hover:bg-green-700" disabled={request.status !== 'PENDING'}>
                Approve Request
              </Button>
              <Button variant="outline" className="w-full text-red-600 border-red-200 hover:bg-red-50" disabled={request.status !== 'PENDING'}>
                Reject Request
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Decision History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {decisions.length > 0 ? (
              decisions.map(decision => (
                <div key={decision.id} className="p-4 border rounded-lg bg-muted/20">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm">{getApproverName(decision.approverId)}</span>
                      <Badge className={decision.decision === 'APPROVED' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                        {decision.decision}
                      </Badge>
                    </div>
                    <span className="text-[10px] text-muted-foreground">
                      {new Date(decision.timestamp).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground italic">"{decision.comment}"</p>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-muted-foreground flex flex-col items-center gap-2">
                <Clock className="h-8 w-8 opacity-20" />
                <p>No decisions have been rendered yet.</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
