
import { useState, useEffect, useCallback } from "react"
import { demoBuilds as initialBuilds } from "@/../mock/core/sandbox/demoBuildsData"
import type { DemoBuild, BuildStatus } from "@/../mock/core/sandbox/demoBuildsData"

export const useDemoBuildsData = () => {
  const [builds, setBuilds] = useState<DemoBuild[]>([])
  const [selectedBuildId, setSelectedBuildId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setBuilds(initialBuilds)
      if (initialBuilds.length > 0) {
        setSelectedBuildId(initialBuilds[0].id)
      }
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const selectedBuild = builds.find(b => b.id === selectedBuildId) || null

  const metrics = {
    total: builds.length,
    success: builds.filter(b => b.status === "SUCCESS").length,
    failed: builds.filter(b => b.status === "FAILED").length,
    inProgress: builds.filter(b => b.status === "IN_PROGRESS").length,
    successRate: builds.length > 0 
      ? Math.round((builds.filter(b => b.status === "SUCCESS").length / builds.length) * 100) 
      : 0,
    lastUpdated: builds.length > 0 
      ? [...builds].sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())[0]
      : null
  }

  const addBuild = useCallback((newBuild: DemoBuild) => {
    setBuilds(prev => [newBuild, ...prev])
    setSelectedBuildId(newBuild.id)
    
    // Simulate multi-stage build progress
    const stages = [
      "Dependency resolution complete",
      "Compiling UI components...",
      "Running semantic analysis",
      "Optimizing build chunks",
      "Build completed successfully"
    ]

    stages.forEach((stage, index) => {
      setTimeout(() => {
        setBuilds(prev => prev.map(b => {
          if (b.id === newBuild.id) {
            const isLast = index === stages.length - 1
            return {
              ...b,
              logs: [...b.logs, `${new Date().toISOString()} - [INFO] ${stage}`],
              status: isLast ? ("SUCCESS" as BuildStatus) : ("IN_PROGRESS" as BuildStatus),
              updatedAt: new Date().toISOString()
            }
          }
          return b
        }))
      }, (index + 1) * 2000)
    })
  }, [])

  const triggerRebuild = useCallback((id: string) => {
    setBuilds(prev => prev.map(b => {
      if (b.id === id) {
        return {
          ...b,
          status: "IN_PROGRESS" as BuildStatus,
          updatedAt: new Date().toISOString(),
          logs: [`${new Date().toISOString()} - [INFO] Rebuild sequence initiated`]
        }
      }
      return b
    }))

    // Simulate logs update
    setTimeout(() => {
      setBuilds(prev => prev.map(b => {
        if (b.id === id) {
          return {
            ...b,
            logs: [...b.logs, `${new Date().toISOString()} - [INFO] Clean-up complete. Starting fresh build...`]
          }
        }
        return b
      }))
    }, 2000)

    setTimeout(() => {
      setBuilds(prev => prev.map(b => {
        if (b.id === id) {
          const finalStatus: BuildStatus = Math.random() > 0.1 ? "SUCCESS" : "FAILED"
          return {
            ...b,
            status: finalStatus,
            logs: [...b.logs, `${new Date().toISOString()} - [INFO] ${finalStatus === "SUCCESS" ? "Rebuild successful" : "Rebuild failed during bundling"}`],
            updatedAt: new Date().toISOString()
          }
        }
        return b
      }))
    }, 7000)
  }, [])

  const deleteBuild = useCallback((id: string) => {
    setBuilds(prev => prev.filter(b => b.id !== id))
    if (selectedBuildId === id) {
      setSelectedBuildId(null)
    }
  }, [selectedBuildId])

  return { 
    builds, 
    selectedBuild, 
    setSelectedBuildId, 
    metrics, 
    isLoading,
    addBuild,
    triggerRebuild,
    deleteBuild
  }
}
