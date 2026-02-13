
import React from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { EnvironmentStatusBadge } from "./environment-status-badge"
import type { Sandbox } from "@/../mock/core/sandbox/sandboxData"
import { 
  Cpu, 
  Workflow, 
  Play, 
  Copy, 
  Trash2, 
  Clock, 
  ChevronRight,
  CheckCircle2,
  Info,
  Shield,
  Activity,
  HardDrive
} from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

interface SandboxCardProps {
  sandbox: Sandbox
}

export const SandboxCard: React.FC<SandboxCardProps> = ({ sandbox }) => {
  return (
    <Sheet>
      <Card className="group hover:border-primary/50 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
        <CardHeader className="pb-3 bg-muted/5">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">{sandbox.name}</CardTitle>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{sandbox.type}</span>
                <span className="text-[10px] text-muted-foreground">•</span>
                <span className="text-[10px] font-medium text-muted-foreground">{sandbox.id}</span>
              </div>
            </div>
            <EnvironmentStatusBadge status={sandbox.status} />
          </div>
        </CardHeader>
        <CardContent className="py-4 space-y-4 flex-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-tight flex items-center gap-1">
                <Cpu className="w-3 h-3" /> Linked Agents
              </p>
              <div className="flex -space-x-2 overflow-hidden">
                <TooltipProvider>
                  {sandbox.linkedAgents.map((agent, i) => (
                    <Tooltip key={agent}>
                      <TooltipTrigger asChild>
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full border-2 border-background bg-primary/10 text-primary text-[8px] font-bold cursor-default">
                          {agent.split('-')[1] || agent.slice(-3)}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-[10px]">{agent}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </TooltipProvider>
              </div>
            </div>

            <div className="space-y-1.5 text-right">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-tight flex items-center justify-end gap-1">
                <Workflow className="w-3 h-3" /> Workflows
              </p>
              <p className="text-sm font-bold text-foreground">
                {sandbox.linkedWorkflows.length} Active
              </p>
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-dashed">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-tight flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Recent Tasks
            </p>
            <div className="space-y-1">
              {sandbox.recentTasks.length > 0 ? (
                sandbox.recentTasks.map((task, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <ChevronRight className="w-3 h-3 text-primary/50" />
                    <span className="truncate">{task}</span>
                  </div>
                ))
              ) : (
                <p className="text-xs italic text-muted-foreground">No recent tasks</p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-2 border-t mt-auto">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              Last Executed:
            </span>
            <span className="font-medium text-foreground">
              {new Date(sandbox.lastExecuted).toLocaleDateString()}
            </span>
          </div>
        </CardContent>
        <CardFooter className="pt-3 border-t bg-muted/5 flex flex-col gap-2">
          <div className="flex w-full gap-2">
            <Button variant="default" size="sm" className="flex-1 gap-1 h-8 bg-primary hover:bg-primary/90">
              <Play className="w-3 h-3 fill-current" />
              Run
            </Button>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="flex-1 gap-1 h-8">
                <Info className="w-3 h-3" />
                Details
              </Button>
            </SheetTrigger>
          </div>
          <div className="flex w-full gap-2">
            <Button variant="ghost" size="sm" className="flex-1 h-8 gap-1 text-[10px] font-bold uppercase">
              <Copy className="w-3 h-3" />
              Clone
            </Button>
            <Button variant="ghost" size="sm" className="flex-1 h-8 gap-1 text-[10px] font-bold uppercase text-destructive hover:text-destructive hover:bg-destructive/5">
              <Trash2 className="w-3 h-3" />
              Delete
            </Button>
          </div>
        </CardFooter>
      </Card>

      <SheetContent side="right" className="sm:max-w-[500px]">
        <SheetHeader>
          <div className="flex justify-between items-center pr-6">
            <SheetTitle className="text-2xl font-bold">{sandbox.name}</SheetTitle>
            <EnvironmentStatusBadge status={sandbox.status} />
          </div>
          <SheetDescription>
            Detailed configuration and execution state for this sandbox.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-8 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-muted/50 border space-y-1">
              <p className="text-[10px] font-bold uppercase text-muted-foreground">Environment ID</p>
              <p className="font-mono text-sm">{sandbox.id}</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50 border space-y-1">
              <p className="text-[10px] font-bold uppercase text-muted-foreground">Type</p>
              <p className="font-semibold text-sm">{sandbox.type}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              Governance & Execution
            </h4>
            <div className="grid gap-2 text-sm">
              <div className="flex justify-between py-1 border-b border-dashed">
                <span className="text-muted-foreground">Linked Workflows</span>
                <span className="font-medium">{sandbox.linkedWorkflows.join(', ')}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-dashed">
                <span className="text-muted-foreground">Last Heartbeat</span>
                <span className="font-medium">{new Date(sandbox.lastExecuted).toLocaleString()}</span>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h4 className="text-sm font-bold flex items-center gap-2">
              <Cpu className="w-4 h-4 text-primary" />
              Connected Agents
            </h4>
            <div className="flex flex-wrap gap-2">
              {sandbox.linkedAgents.map(agentId => (
                <div key={agentId} className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold">
                  {agentId}
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h4 className="text-sm font-bold flex items-center gap-2">
              <Activity className="w-4 h-4 text-primary" />
              Real-time Metrics (Simulated)
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="text-[10px] uppercase font-bold text-muted-foreground">Uptime</p>
                  <p className="text-sm font-bold">99.98%</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <HardDrive className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="text-[10px] uppercase font-bold text-muted-foreground">Storage</p>
                  <p className="text-sm font-bold">1.2 GB / 10 GB</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 flex gap-3">
            <Button className="flex-1">Restart Instance</Button>
            <Button variant="outline" className="flex-1">Purge Logs</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
