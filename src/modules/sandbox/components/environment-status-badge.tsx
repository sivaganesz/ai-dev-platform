
import React from "react"
import { Badge } from "@/components/ui/badge"

interface EnvironmentStatusBadgeProps {
  status: "ACTIVE" | "INACTIVE" | "FAILED"
}

export const EnvironmentStatusBadge: React.FC<EnvironmentStatusBadgeProps> = ({ status }) => {
  const getVariant = () => {
    switch (status) {
      case "ACTIVE": return "default" // Using default but ideally it would be success-like
      case "INACTIVE": return "secondary"
      case "FAILED": return "destructive"
      default: return "outline"
    }
  }

  const getStatusStyles = () => {
    switch (status) {
      case "ACTIVE": return "bg-green-100 text-green-800 hover:bg-green-100 border-green-200"
      case "INACTIVE": return "bg-slate-100 text-slate-800 hover:bg-slate-100 border-slate-200"
      case "FAILED": return "bg-red-100 text-red-800 hover:bg-red-100 border-red-200"
      default: return ""
    }
  }

  return (
    <Badge variant={getVariant() as any} className={getStatusStyles()}>
      {status}
    </Badge>
  )
}
