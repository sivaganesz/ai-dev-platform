import React from "react"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog"
import { 
  Monitor, 
  ExternalLink, 
  RefreshCw, 
  LayoutDashboard, 
  Users, 
  Settings, 
  Bell, 
  Search,
  Zap,
  Activity,
  BarChart3,
  Server
} from "lucide-react"
import { Button } from "@/components/ui/button"
import type { DemoBuild } from "@/../mock/core/sandbox/demoBuildsData"
import { Badge } from "@/components/ui/badge"

interface BuildPreviewModalProps {
  build: DemoBuild | null
  isOpen: boolean
  onClose: () => void
}

export const BuildPreviewModal: React.FC<BuildPreviewModalProps> = ({ build, isOpen, onClose }) => {
  if (!build) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[1100px] h-[85vh] flex flex-col p-0 overflow-hidden">
        <DialogHeader className="p-4 border-b bg-muted/5 flex-row items-center justify-between space-y-0 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Monitor className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <DialogTitle className="text-lg font-bold">{build.name}</DialogTitle>
                <Badge variant="outline" className="font-mono text-[10px]">{build.version}</Badge>
              </div>
              <DialogDescription className="text-[11px]">
                Sandboxed Instance: <span className="font-mono">{build.id}</span> • Pipeline Source: {build.linkedWorkflow}
              </DialogDescription>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="h-8 gap-2 text-xs">
              <RefreshCw className="w-3.5 h-3.5" />
              Hot Reload
            </Button>
            <Button size="sm" className="h-8 gap-2 text-xs" onClick={() => window.open(build.previewUrl, '_blank')}>
              <ExternalLink className="w-3.5 h-3.5" />
              Open Live
            </Button>
          </div>
        </DialogHeader>

        <div className="flex-1 bg-zinc-200 p-4 overflow-hidden flex flex-col">
          {/* Browser Chrome */}
          <div className="flex-1 bg-white rounded-xl shadow-2xl border border-zinc-300 flex flex-col overflow-hidden">
            <div className="h-10 bg-zinc-100 border-b flex items-center px-4 gap-4 shrink-0">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 flex items-center gap-2 bg-white rounded-md border border-zinc-200 px-3 py-1 text-[11px] text-zinc-400 font-mono overflow-hidden">
                <div className="w-3 h-3 rounded-full bg-green-500 shrink-0" />
                <span className="truncate">{build.previewUrl}</span>
              </div>
              <div className="flex gap-2 text-zinc-400">
                <Search className="w-3.5 h-3.5" />
                <Settings className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Mock Application UI Content */}
            <div className="flex-1 flex overflow-hidden">
              {/* App Sidebar */}
              <div className="w-48 bg-zinc-900 text-zinc-400 p-4 flex flex-col gap-6 shrink-0">
                <div className="flex items-center gap-2 text-white font-bold text-sm mb-2">
                  <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white fill-current" />
                  </div>
                  <span>AI Portal</span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-3 px-3 py-2 bg-white/10 text-white rounded-lg text-xs">
                    <LayoutDashboard className="w-4 h-4" /> Dashboard
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 hover:text-white transition-colors text-xs cursor-pointer">
                    <Users className="w-4 h-4" /> User Base
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 hover:text-white transition-colors text-xs cursor-pointer">
                    <Activity className="w-4 h-4" /> Node Status
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 hover:text-white transition-colors text-xs cursor-pointer">
                    <BarChart3 className="w-4 h-4" /> Analytics
                  </div>
                </div>
                <div className="mt-auto pt-4 border-t border-white/5 space-y-1">
                   <div className="flex items-center gap-3 px-3 py-2 text-xs"><Server className="w-4 h-4" /> Clusters</div>
                   <div className="flex items-center gap-3 px-3 py-2 text-xs"><Bell className="w-4 h-4" /> Alerts</div>
                </div>
              </div>

              {/* App Main Body */}
              <div className="flex-1 bg-zinc-50 overflow-y-auto p-6">
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <h2 className="text-xl font-black text-zinc-900 tracking-tight">System Overview</h2>
                    <p className="text-xs text-zinc-500">Welcome back, system monitoring is active.</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-8 w-24 bg-zinc-200 rounded animate-pulse" />
                    <div className="h-8 w-8 bg-zinc-200 rounded-full animate-pulse" />
                  </div>
                </div>

                {/* Stat Cards */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="p-4 bg-white rounded-xl border border-zinc-200 shadow-sm">
                      <div className="w-8 h-8 bg-zinc-100 rounded-lg mb-3" />
                      <div className="h-4 w-2/3 bg-zinc-100 rounded mb-2" />
                      <div className="h-6 w-1/3 bg-zinc-200 rounded" />
                    </div>
                  ))}
                </div>

                {/* "Content" area */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-white rounded-xl border border-zinc-200 shadow-sm h-64 flex flex-col">
                    <div className="flex justify-between mb-6">
                      <div className="h-4 w-1/2 bg-zinc-100 rounded" />
                      <div className="h-4 w-1/4 bg-zinc-100 rounded" />
                    </div>
                    <div className="flex-1 flex items-end gap-2 px-2">
                      {[40, 70, 45, 90, 65, 80, 30, 50, 95, 60].map((h, i) => (
                        <div key={i} className="flex-1 bg-primary/20 rounded-t-sm transition-all hover:bg-primary" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                  <div className="p-6 bg-white rounded-xl border border-zinc-200 shadow-sm h-64 space-y-4">
                    <div className="h-4 w-1/3 bg-zinc-100 rounded" />
                    <div className="space-y-3">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-zinc-100" />
                          <div className="flex-1 space-y-1">
                            <div className="h-2 w-1/2 bg-zinc-100 rounded" />
                            <div className="h-2 w-1/4 bg-zinc-50 rounded" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-12 bg-white rounded-xl border border-zinc-200 border-dashed flex flex-col items-center text-center">
                   <div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center mb-4">
                      <LayoutDashboard className="w-6 h-6 text-zinc-300" />
                   </div>
                   <p className="text-sm font-medium text-zinc-400">Additional modules loading from {build.sandboxId}...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
