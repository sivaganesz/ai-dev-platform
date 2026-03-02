
import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { DecisionAnalysis } from "@/../mock/core/governance/architectureDecisionAnalysisData"
import { ArrowRight, Box, Cpu, Workflow, Cloud } from "lucide-react"

interface ExecutionImpactMapProps {
  analysis: DecisionAnalysis
}

export const ExecutionImpactMap: React.FC<ExecutionImpactMapProps> = ({ analysis }) => {
  const { nodes, edges } = analysis.executionImpactMap

  const getIcon = (type: string) => {
    switch (type) {
      case "DECISION": return <Box className="w-5 h-5 text-primary" />
      case "AGENT": return <Cpu className="w-5 h-5 text-blue-500" />
      case "WORKFLOW": return <Workflow className="w-5 h-5 text-purple-500" />
      case "DEPLOYMENT": return <Cloud className="w-5 h-5 text-green-500" />
      default: return null
    }
  }

  const getTypeStyles = (type: string) => {
    switch (type) {
      case "DECISION": return "bg-primary/10 border-primary text-primary"
      case "AGENT": return "bg-blue-500/10 border-blue-500 text-blue-500"
      case "WORKFLOW": return "bg-purple-500/10 border-purple-500 text-purple-500"
      case "DEPLOYMENT": return "bg-green-500/10 border-green-500 text-green-500"
      default: return ""
    }
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-lg">Execution Impact Map</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative p-8 overflow-x-auto">
          <div className="flex items-center justify-around min-w-[800px]">
            {nodes.map((node, index) => (
              <React.Fragment key={node.id}>
                <div className={`flex flex-col items-center p-4 rounded-xl border-2 ${getTypeStyles(node.type)} w-48 text-center shadow-sm`}>
                  <div className="mb-2 p-2 bg-background rounded-full">
                    {getIcon(node.type)}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider mb-1 opacity-70">{node.type}</span>
                  <span className="text-sm font-semibold">{node.label}</span>
                </div>
                {index < nodes.length - 1 && (
                  <div className="flex flex-col items-center justify-center px-4">
                    <ArrowRight className="w-6 h-6 text-muted-foreground animate-pulse" />
                    {edges.find(e => e.source === node.id)?.label && (
                      <span className="text-[10px] font-medium text-muted-foreground mt-1 whitespace-nowrap">
                        {edges.find(e => e.source === node.id)?.label}
                      </span>
                    )}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
