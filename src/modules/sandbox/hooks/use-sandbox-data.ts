import { useState, useEffect } from "react"
import { sandboxEnvironments, sandboxActivities } from "@/../mock/core/sandbox/sandboxData"
import type { Sandbox, SandboxActivity } from "@/../mock/core/sandbox/sandboxData"

export const useSandboxData = () => {
  const [environments, setEnvironments] = useState<Sandbox[]>([])
  const [activities, setActivities] = useState<SandboxActivity[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API fetch
    const timer = setTimeout(() => {
      setEnvironments(sandboxEnvironments)
      setActivities(sandboxActivities)
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const metrics = {
    total: environments.length,
    active: environments.filter(e => e.status === "ACTIVE").length,
    inactive: environments.filter(e => e.status === "INACTIVE").length,
    failed: environments.filter(e => e.status === "FAILED").length,
    lastExecutedWorkflow: environments.length > 0 
      ? [...environments].sort((a, b) => new Date(b.lastExecuted).getTime() - new Date(a.lastExecuted).getTime())[0].linkedWorkflows[0]
      : "N/A"
  }

  const healthData = [
    { name: "Active", value: metrics.active, color: "#10b981" },
    { name: "Inactive", value: metrics.inactive, color: "#64748b" },
    { name: "Failed", value: metrics.failed, color: "#ef4444" },
  ]

  return { environments, activities, metrics, healthData, isLoading }
}
