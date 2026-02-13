
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { seniorDevelopers } from "@/../mock/core/governance/seniorDevelopersData"
import type { ADR } from "@/../mock/core/governance/seniorDevelopersData"

interface ArchitectureDecisionsProps {
  decisions: ADR[]
}

export function ArchitectureDecisions({ decisions }: ArchitectureDecisionsProps) {
  const getStatusColor = (status: ADR['status']) => {
    switch (status) {
      case 'ACCEPTED': return 'bg-green-100 text-green-800'
      case 'PROPOSED': return 'bg-yellow-100 text-yellow-800'
      case 'DEPRECATED': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getOwnerName = (ownerId: string) => {
    return seniorDevelopers.find(dev => dev.id === ownerId)?.name || ownerId
  }

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Architecture Decisions (ADR)</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Decision Title</TableHead>
              <TableHead>Impacted Systems</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Owner</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {decisions.map((adr) => (
              <TableRow key={adr.id}>
                <TableCell className="font-medium">{adr.title}</TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {adr.impactedSystems.map(system => (
                      <Badge key={system} variant="outline" className="text-[10px]">
                        {system}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className={getStatusColor(adr.status)}>
                    {adr.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm">
                  {getOwnerName(adr.ownerId)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
