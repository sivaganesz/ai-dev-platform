
import React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Box, 
  Cpu, 
  Workflow, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  Loader2,
  Terminal,
  ChevronRight
} from "lucide-react"
import type { DemoBuild } from "@/../mock/core/sandbox/demoBuildsData"
import { cn } from "@/lib/utils"

interface BuildCardProps {
  build: DemoBuild
  isSelected: boolean
  onSelect: (id: string) => void
}

export const BuildCard: React.FC<BuildCardProps> = ({ build, isSelected, onSelect }) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "SUCCESS": return <CheckCircle2 className="w-4 h-4 text-green-500" />
      case "FAILED": return <XCircle className="w-4 h-4 text-red-500" />
      case "IN_PROGRESS": return <Loader2 className="w-4 h-4 text-blue-500 animate-spin" />
      default: return null
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "SUCCESS": return <Badge className="bg-green-500/10 text-green-500 border-green-500/20 text-[10px]">SUCCESS</Badge>
      case "FAILED": return <Badge variant="destructive" className="text-[10px]">FAILED</Badge>
      case "IN_PROGRESS": return <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20 text-[10px]">BUILDING</Badge>
      default: return null
    }
  }

  return (
    <Card 
      className={cn(
        "cursor-pointer transition-all hover:border-primary/50",
        isSelected ? "border-primary ring-1 ring-primary/20" : "shadow-sm"
      )}
      onClick={() => onSelect(build.id)}
    >
      <CardHeader className="pb-3 bg-muted/5">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <CardTitle className="text-base font-bold">{build.name}</CardTitle>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-[10px] font-mono">{build.version}</Badge>
              <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">{build.id}</span>
            </div>
          </div>
          {getStatusBadge(build.status)}
        </div>
      </CardHeader>
      <CardContent className="py-4 space-y-3">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-muted-foreground uppercase flex items-center gap-1">
              <Cpu className="w-3 h-3" /> Agent
            </p>
            <p className="text-xs font-medium">{build.agentResponsible}</p>
          </div>
          <div className="space-y-1 text-right">
            <p className="text-[10px] font-bold text-muted-foreground uppercase flex items-center justify-end gap-1">
              <Workflow className="w-3 h-3" /> Workflow
            </p>
            <p className="text-xs font-medium">{build.linkedWorkflow}</p>
          </div>
        </div>

        <div className="pt-2 border-t border-dashed flex justify-between items-center text-[10px] text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>Updated: {new Date(build.updatedAt).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Box className="w-3 h-3" />
            <span>Sandbox: {build.sandboxId}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2 pb-2 bg-muted/5 flex justify-end">
        <Button variant="ghost" size="sm" className="h-7 text-[10px] gap-1 px-2">
          <Terminal className="w-3 h-3" />
          View Logs
          <ChevronRight className="w-3 h-3" />
        </Button>
      </CardFooter>
    </Card>
  )
}
