
import { useState, useEffect } from "react"
import { liveUIPreviews, previewVersionHistory, previewActivities } from "@/../mock/core/sandbox/livePreviewsData"
import type { LivePreview, PreviewVersion, PreviewActivity } from "@/../mock/core/sandbox/livePreviewsData"

export const useLivePreviewsData = () => {
  const [previews, setPreviews] = useState<LivePreview[]>([])
  const [versionHistory, setVersionHistory] = useState<PreviewVersion[]>([])
  const [activities, setActivities] = useState<PreviewActivity[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API fetch
    const timer = setTimeout(() => {
      setPreviews(liveUIPreviews)
      setVersionHistory(previewVersionHistory)
      setActivities(previewActivities)
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const metrics = {
    total: previews.length,
    running: previews.filter(p => p.status === "RUNNING").length,
    stopped: previews.filter(p => p.status === "STOPPED").length,
    error: previews.filter(p => p.status === "ERROR").length,
    lastUpdated: previews.length > 0 
      ? [...previews].sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime())[0]
      : null
  }

  return { previews, versionHistory, activities, metrics, isLoading }
}
