
import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { DecisionAnalysis } from "@/../mock/core/governance/architectureDecisionAnalysisData"
import { CheckCircle2, Circle, Clock } from "lucide-react"

interface SimulationTimelineProps {
  analysis: DecisionAnalysis
}

export const SimulationTimeline: React.FC<SimulationTimelineProps> = ({ analysis }) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "COMPLETED": return <CheckCircle2 className="w-5 h-5 text-green-500" />
      case "IN_PROGRESS": return <Clock className="w-5 h-5 text-blue-500 animate-spin" />
      default: return <Circle className="w-5 h-5 text-muted-foreground" />
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Simulation Rollout Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative mt-4 space-y-0">
          {analysis.simulationTimeline.map((item, index) => (
            <div key={index} className="flex gap-4 pb-8 last:pb-0 relative">
              {index !== analysis.simulationTimeline.length - 1 && (
                <div className="absolute left-[10px] top-6 bottom-0 w-0.5 bg-muted" />
              )}
              <div className="z-10 bg-background rounded-full">
                {getStatusIcon(item.status)}
              </div>
              <div className="flex-1 -mt-1">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-sm">{item.stage}</h4>
                  <span className="text-xs font-medium px-2 py-0.5 bg-muted rounded text-muted-foreground">
                    {item.duration}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                <div className="mt-2 flex items-center gap-2">
                   <span className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${
                     item.status === 'COMPLETED' ? 'bg-green-500/10 text-green-500' : 
                     item.status === 'IN_PROGRESS' ? 'bg-blue-500/10 text-blue-500' : 'bg-muted text-muted-foreground'
                   }`}>
                     {item.status.replace('_', ' ')}
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
