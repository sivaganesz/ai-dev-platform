
import React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { ArchitectureDecision } from "@/../mock/core/governance/architectureDecisionsData"
import { useNavigate } from "react-router-dom"
import { ShieldCheck, ArrowRight, AlertTriangle, Activity } from "lucide-react"

interface AdrCardProps {
  decision: ArchitectureDecision
}

export const AdrCard: React.FC<AdrCardProps> = ({ decision }) => {
  const navigate = useNavigate()

  const getRiskColor = (level: string) => {
    switch (level) {
      case "CRITICAL": return "destructive"
      case "HIGH": return "destructive"
      case "MEDIUM": return "warning"
      case "LOW": return "secondary"
      default: return "outline"
    }
  }

  return (
    <Card 
      className="group hover:border-primary/50 transition-all cursor-pointer"
      onClick={() => navigate(`/governance/architecture-decisions/${decision.id}`)}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className="text-[10px]">{decision.id}</Badge>
          <Badge variant={getRiskColor(decision.riskLevel) as any}>{decision.riskLevel}</Badge>
        </div>
        <CardTitle className="text-base group-hover:text-primary transition-colors">{decision.title}</CardTitle>
        <span className="text-[10px] font-bold uppercase text-muted-foreground">{decision.category.replace('_', ' ')}</span>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm text-muted-foreground line-clamp-2 min-h-[40px]">
          {decision.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] text-muted-foreground uppercase font-bold">Impact Score</span>
            <div className="flex items-center gap-1.5">
              <Activity className="w-3 h-3 text-primary" />
              <span className="text-sm font-bold">{decision.impactScore}/100</span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-muted-foreground uppercase font-bold">Status</span>
            <Badge variant="secondary" className="text-[10px] h-5">{decision.decisionStatus}</Badge>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2 border-t bg-muted/5 group-hover:bg-primary/5 transition-colors">
        <Button 
          variant="ghost" 
          size="sm" 
          className="w-full justify-between text-xs hover:bg-transparent p-0 h-auto"
          onClick={(e) => {
            e.stopPropagation()
            navigate(`/governance/architecture-decisions/analyze/${decision.id}`)
          }}
        >
          <span className="flex items-center gap-1 text-primary">
            <ShieldCheck className="w-3 h-3" />
            Analyze Deeply
          </span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardFooter>
    </Card>
  )
}
