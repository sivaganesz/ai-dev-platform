
import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import type { DecisionAnalysis } from "@/../mock/core/governance/architectureDecisionAnalysisData"

interface ArchitectureBreakdownProps {
  analysis: DecisionAnalysis
}

export const ArchitectureBreakdown: React.FC<ArchitectureBreakdownProps> = ({ analysis }) => {
  const { oldModel, newModel, layers } = analysis.architectureBreakdown

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "ADDED": return <Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/20 border-green-500/20">ADDED</Badge>
      case "REMOVED": return <Badge variant="destructive">REMOVED</Badge>
      case "MODIFIED": return <Badge className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border-blue-500/20">MODIFIED</Badge>
      default: return <Badge variant="outline">STABLE</Badge>
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium text-muted-foreground uppercase">Current Architecture</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-muted/50 rounded-lg border border-dashed text-center min-h-[100px] flex items-center justify-center">
            <p className="font-semibold text-muted-foreground">{oldModel}</p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium text-primary uppercase">Proposed Architecture</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 text-center min-h-[100px] flex items-center justify-center">
            <p className="font-semibold text-primary">{newModel}</p>
          </div>
        </CardContent>
      </Card>
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle className="text-lg">Layer Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Layer</TableHead>
                <TableHead>Old State</TableHead>
                <TableHead>New State</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {layers.map((layer, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{layer.name}</TableCell>
                  <TableCell className="text-muted-foreground">{layer.oldValue}</TableCell>
                  <TableCell className="font-semibold text-primary">{layer.newValue}</TableCell>
                  <TableCell>{getStatusBadge(layer.status)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
