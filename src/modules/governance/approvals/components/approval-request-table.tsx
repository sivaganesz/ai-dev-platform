
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"
import { AlertCircle } from "lucide-react"
import { seniorDevelopers } from "@/../mock/core/governance/seniorDevelopersData"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Note: Using interfaces from seniorDevelopersData for interconnection
import type { ApprovalRequest as LocalApprovalRequest, ApprovalSLA as LocalApprovalSLA } from "@/../mock/core/governance/approvalsData"

interface ApprovalRequestTableProps {
  requests: LocalApprovalRequest[]
  slas: LocalApprovalSLA[]
}

export function ApprovalRequestTable({ requests, slas }: ApprovalRequestTableProps) {
  const navigate = useNavigate()

  const getStatusBadge = (status: LocalApprovalRequest['status']) => {
    switch (status) {
      case 'APPROVED': return <Badge className="bg-green-100 text-green-800 border-green-200">APPROVED</Badge>
      case 'PENDING': return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">PENDING</Badge>
      case 'REJECTED': return <Badge className="bg-red-100 text-red-800 border-red-200">REJECTED</Badge>
      case 'ESCALATED': return <Badge className="bg-purple-100 text-purple-800 border-purple-200">ESCALATED</Badge>
    }
  }

  const getPriorityBadge = (priority: LocalApprovalRequest['priority']) => {
    switch (priority) {
      case 'HIGH': return <Badge variant="destructive">HIGH</Badge>
      case 'MEDIUM': return <Badge variant="secondary" className="bg-orange-100 text-orange-800">MEDIUM</Badge>
      case 'LOW': return <Badge variant="outline">LOW</Badge>
    }
  }

  const getApproverName = (id: string) => {
    return seniorDevelopers.find(dev => dev.id === id)?.name || id
  }

  const isBreached = (id: string) => {
    return slas.find(s => s.approvalId === id)?.breached || false
  }

  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Approval Governance Queue</CardTitle>
      </CardHeader>
      <CardContent>
        <TooltipProvider>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Request Title</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Project</TableHead>
                <TableHead>Assigned To</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requests.map((request) => (
                <TableRow 
                  key={request.id} 
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() => navigate(`/governance/approvals/${request.id}`)}
                >
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      {request.title}
                      {isBreached(request.id) && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <AlertCircle className="h-4 w-4 text-red-500" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>SLA Breached</p>
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-[10px]">{request.type}</Badge>
                  </TableCell>
                  <TableCell>{request.projectId}</TableCell>
                  <TableCell className="text-sm">{getApproverName(request.assignedTo)}</TableCell>
                  <TableCell>{getPriorityBadge(request.priority)}</TableCell>
                  <TableCell>{getStatusBadge(request.status)}</TableCell>
                  <TableCell className="text-xs text-muted-foreground">
                    {new Date(request.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-right">
                    <span className="text-xs text-primary font-medium">Review →</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TooltipProvider>
      </CardContent>
    </Card>
  )
}
