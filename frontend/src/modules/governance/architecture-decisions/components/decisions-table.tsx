
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"
import { seniorDevelopers } from "@/../mock/core/governance/seniorDevelopersData"
import type { ArchitectureDecision } from "@/../mock/core/governance/architectureDecisionsData"

interface DecisionsTableProps {
  decisions: ArchitectureDecision[]
}

export function DecisionsTable({ decisions }: DecisionsTableProps) {
  const navigate = useNavigate()

  const getStatusBadge = (status: ArchitectureDecision['decisionStatus']) => {
    switch (status) {
      case 'APPROVED': return <Badge className="bg-green-100 text-green-800">APPROVED</Badge>
      case 'PROPOSED': return <Badge className="bg-blue-100 text-blue-800">PROPOSED</Badge>
      case 'UNDER_REVIEW': return <Badge className="bg-yellow-100 text-yellow-800">UNDER REVIEW</Badge>
      case 'REJECTED': return <Badge className="bg-red-100 text-red-800">REJECTED</Badge>
    }
  }

  const getRiskBadge = (risk: ArchitectureDecision['riskLevel']) => {
    switch (risk) {
      case 'CRITICAL': return <Badge variant="destructive">CRITICAL</Badge>
      case 'HIGH': return <Badge variant="secondary" className="bg-red-100 text-red-800 border-red-200">HIGH</Badge>
      case 'MEDIUM': return <Badge variant="secondary" className="bg-orange-100 text-orange-800">MEDIUM</Badge>
      case 'LOW': return <Badge variant="outline">LOW</Badge>
    }
  }

  const getProposerName = (id: string) => {
    return seniorDevelopers.find(dev => dev.id === id)?.name || id
  }

  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Architecture Decision Records (ADR)</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Decision Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Project</TableHead>
              <TableHead>Proposed By</TableHead>
              <TableHead>Risk Level</TableHead>
              <TableHead>Impact</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {decisions.map((adr) => (
              <TableRow 
                key={adr.id} 
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => navigate(`/governance/architecture-decisions/${adr.id}`)}
              >
                <TableCell className="font-medium">{adr.title}</TableCell>
                <TableCell>
                  <span className="text-[10px] font-bold uppercase text-muted-foreground">{adr.category.replace('_', ' ')}</span>
                </TableCell>
                <TableCell>{adr.projectId}</TableCell>
                <TableCell className="text-sm">{getProposerName(adr.proposedBy)}</TableCell>
                <TableCell>{getRiskBadge(adr.riskLevel)}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-12 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${adr.impactScore}%` }} />
                    </div>
                    <span className="text-[10px] font-medium">{adr.impactScore}</span>
                  </div>
                </TableCell>
                <TableCell>{getStatusBadge(adr.decisionStatus)}</TableCell>
                <TableCell className="text-right">
                  <span 
                    className="text-xs text-primary font-medium hover:underline px-2 py-1 rounded hover:bg-primary/5"
                    onClick={(e) => {
                      e.stopPropagation()
                      navigate(`/governance/architecture-decisions/analyze/${adr.id}`)
                    }}
                  >
                    Analyze →
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
