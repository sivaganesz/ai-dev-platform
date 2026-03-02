
import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Terminal, 
  Copy, 
  PlayCircle, 
  Clock, 
  Link2,
  Box,
  Cpu
} from "lucide-react"
import type { ApiSimulation } from "../../../../mock/core/sandbox/apiSimulationsData"
import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface ApiRequestCardProps {
  simulation: ApiSimulation
  isSelected: boolean
  onSelect: (id: string) => void
  onTrigger: (id: string) => void
}

export const ApiRequestCard: React.FC<ApiRequestCardProps> = ({ 
  simulation, 
  isSelected, 
  onSelect,
  onTrigger
}) => {
  const getMethodColor = (method: string) => {
    switch (method) {
      case "GET": return "text-blue-500 bg-blue-500/10 border-blue-500/20"
      case "POST": return "text-green-500 bg-green-500/10 border-green-500/20"
      case "PUT": return "text-yellow-500 bg-yellow-500/10 border-yellow-500/20"
      case "DELETE": return "text-red-500 bg-red-500/10 border-red-200"
      default: return "text-muted-foreground bg-muted"
    }
  }

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation()
    navigator.clipboard.writeText(simulation.endpoint)
    alert("Endpoint copied to clipboard")
  }

  return (
    <Card 
      className={cn(
        "cursor-pointer transition-all hover:border-primary/50",
        isSelected ? "border-primary ring-1 ring-primary/20 bg-primary/5" : "shadow-sm"
      )}
      onClick={() => onSelect(simulation.id)}
    >
      <CardHeader className="pb-3 border-b border-dashed">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <CardTitle className="text-base font-bold truncate pr-2">{simulation.name}</CardTitle>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className={cn("text-[10px] font-mono font-bold", getMethodColor(simulation.method))}>
                {simulation.method}
              </Badge>
              <span className="text-[10px] text-muted-foreground font-mono truncate max-w-[150px]">
                {simulation.endpoint}
              </span>
            </div>
          </div>
          <Badge variant={simulation.status === "SUCCESS" ? "default" : simulation.status === "FAILED" ? "destructive" : "secondary"} className="text-[10px]">
            {simulation.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="py-4 space-y-3">
        <div className="grid grid-cols-2 gap-2 text-[11px]">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Box className="w-3.5 h-3.5" />
            <span className="truncate">{simulation.linkedSandbox}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground justify-end">
            <Cpu className="w-3.5 h-3.5" />
            <span className="truncate">{simulation.agentResponsible}</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 pt-2">
          <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
            <Clock className="w-3 h-3" />
            {new Date(simulation.timestamp).toLocaleTimeString()}
          </div>
          <div className="flex gap-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-7 w-7 hover:text-primary"
                    onClick={handleCopy}
                  >
                    <Link2 className="w-3.5 h-3.5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent><p>Copy Endpoint</p></TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-7 w-7 hover:text-primary"
                    onClick={(e) => { e.stopPropagation(); onTrigger(simulation.id); }}
                    disabled={simulation.status === "IN_PROGRESS"}
                  >
                    <PlayCircle className={cn("w-3.5 h-3.5", simulation.status === "IN_PROGRESS" && "animate-spin")} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent><p>Trigger Simulation</p></TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-7 w-7 hover:text-primary">
                    <Terminal className="w-3.5 h-3.5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent><p>View Logs</p></TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
