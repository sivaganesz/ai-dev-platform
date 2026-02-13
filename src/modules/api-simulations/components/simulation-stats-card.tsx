
import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { type LucideIcon } from "lucide-react"

interface SimulationStatsCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  description?: string
  colorClass?: string
}

export const SimulationStatsCard: React.FC<SimulationStatsCardProps> = ({ 
  title, 
  value, 
  icon: Icon, 
  description,
  colorClass = "text-primary"
}) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{title}</CardTitle>
        <Icon className={`h-4 w-4 ${colorClass}`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1 truncate">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
