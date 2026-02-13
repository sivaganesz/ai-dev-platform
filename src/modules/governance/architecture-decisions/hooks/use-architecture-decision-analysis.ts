
import { useState, useEffect } from "react"
import { architectureDecisions } from "@/../mock/core/governance/architectureDecisionsData"
import type { ArchitectureDecision } from "@/../mock/core/governance/architectureDecisionsData"
import { architectureDecisionAnalysis } from "@/../mock/core/governance/architectureDecisionAnalysisData"
import type { DecisionAnalysis } from "@/../mock/core/governance/architectureDecisionAnalysisData"

export const useArchitectureDecisionAnalysis = (decisionId: string | undefined) => {
  const [decision, setDecision] = useState<ArchitectureDecision | null>(null)
  const [analysis, setAnalysis] = useState<DecisionAnalysis | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!decisionId) return

    setIsLoading(true)
    // Simulate API fetch
    const timer = setTimeout(() => {
      const foundDecision = architectureDecisions.find(d => d.id === decisionId)
      const foundAnalysis = architectureDecisionAnalysis[decisionId]
      
      setDecision(foundDecision || null)
      setAnalysis(foundAnalysis || null)
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [decisionId])

  return { decision, analysis, isLoading }
}
