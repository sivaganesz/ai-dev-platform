
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { 
  Rocket, 
  Download, 
  RefreshCw, 
  Share2, 
  Monitor,
  Check
} from "lucide-react"
import type { DemoBuild } from "@/../mock/core/sandbox/demoBuildsData"
import { cn } from "@/lib/utils"

interface BuildActionsProps {
  build: DemoBuild | null
  onPreview: () => void
  onRebuild: (id: string) => void
}

export const BuildActions: React.FC<BuildActionsProps> = ({ build, onPreview, onRebuild }) => {
  const [copied, setCopied] = useState(false)

  const handleShare = () => {
    if (!build) return
    navigator.clipboard.writeText(build.shareLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = () => {
    // In a real app, this would trigger a file download
    alert("Download started: " + (build?.artifactLink || "artifact.zip"))
  }

  return (
    <div className="flex flex-wrap gap-3 p-4 bg-muted/20 border rounded-xl shadow-inner">
      <Button 
        className="gap-2 bg-primary hover:bg-primary/90 shadow-md transition-all active:scale-95"
        disabled={!build || build.status !== "SUCCESS"}
        onClick={onPreview}
      >
        <Monitor className="w-4 h-4" />
        Preview UI
      </Button>
      <Button 
        variant="outline" 
        className="gap-2 bg-background hover:bg-muted transition-all active:scale-95"
        disabled={!build || build.status !== "SUCCESS"}
        onClick={handleDownload}
      >
        <Download className="w-4 h-4" />
        Download Artifact
      </Button>
      <Button 
        variant="outline" 
        className="gap-2 bg-background hover:bg-muted transition-all active:scale-95"
        disabled={!build || build.status === "IN_PROGRESS"}
        onClick={() => build && onRebuild(build.id)}
      >
        <RefreshCw className={cn("w-4 h-4", build?.status === "IN_PROGRESS" && "animate-spin")} />
        Trigger Rebuild
      </Button>
      <Button 
        variant="outline" 
        className="gap-2 bg-background hover:bg-muted transition-all active:scale-95"
        disabled={!build}
        onClick={handleShare}
      >
        {copied ? <Check className="w-4 h-4 text-green-500" /> : <Share2 className="w-4 h-4" />}
        {copied ? "Link Copied" : "Share Build"}
      </Button>
    </div>
  )
}
