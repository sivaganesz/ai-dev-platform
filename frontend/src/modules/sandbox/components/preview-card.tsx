
import React from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ExternalLink, 
  Clock, 
  Cpu, 
  Workflow, 
  Layers,
  Box,
  AlertCircle,
  PlayCircle,
  StopCircle
} from "lucide-react"
import type { LivePreview } from "@/../mock/core/sandbox/livePreviewsData"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface PreviewCardProps {
  preview: LivePreview
}

export const PreviewCard: React.FC<PreviewCardProps> = ({ preview }) => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "RUNNING":
        return <Badge className="bg-green-500/10 text-green-500 border-green-500/20 gap-1"><PlayCircle className="w-3 h-3" /> RUNNING</Badge>
      case "STOPPED":
        return <Badge variant="secondary" className="gap-1"><StopCircle className="w-3 h-3" /> STOPPED</Badge>
      case "ERROR":
        return <Badge variant="destructive" className="gap-1"><AlertCircle className="w-3 h-3" /> ERROR</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <Card className="group hover:border-primary/50 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
      <CardHeader className="pb-3 bg-muted/5">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">{preview.name}</CardTitle>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{preview.version}</span>
              <span className="text-[10px] text-muted-foreground">•</span>
              <span className="text-[10px] font-medium text-muted-foreground">{preview.id}</span>
            </div>
          </div>
          {getStatusBadge(preview.status)}
        </div>
      </CardHeader>
      <CardContent className="py-4 space-y-4 flex-1">
        <div className="grid grid-cols-1 gap-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground flex items-center gap-2">
              <Box className="w-4 h-4" /> Sandbox
            </span>
            <span className="font-medium">{preview.sandboxId}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground flex items-center gap-2">
              <Cpu className="w-4 h-4" /> Responsible Agent
            </span>
            <span className="font-medium">{preview.agentResponsible}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground flex items-center gap-2">
              <Workflow className="w-4 h-4" /> Linked Workflow
            </span>
            <span className="font-medium">{preview.linkedWorkflow}</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-4 border-t mt-auto">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            Last Updated:
          </span>
          <span className="font-medium text-foreground">
            {new Date(preview.lastUpdated).toLocaleString()}
          </span>
        </div>
      </CardContent>
      <CardFooter className="pt-3 border-t bg-muted/5">
        <Button 
          variant="outline" 
          className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
          onClick={() => window.open(preview.url, '_blank')}
          disabled={preview.status !== 'RUNNING'}
        >
          <ExternalLink className="w-4 h-4" />
          Live Preview URL
        </Button>
      </CardFooter>
    </Card>
  )
}
