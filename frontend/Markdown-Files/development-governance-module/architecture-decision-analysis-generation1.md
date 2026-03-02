# Module: Development Governance
# Submodule: Architecture Decision Analysis
# Platform: Enterprise AI Development Platform

Generate a dedicated Architecture Decision Analysis Page that activates when a user clicks "Analyze →" in an ADR record.  

Requirements:

1. Route: /governance/architecture-decisions/analyze/:decisionId
2. Page must show:
   - Decision title, category, risk, impact score, approval status
   - Architecture breakdown: old vs proposed
   - Execution impact map: Decision → Agents → Workflows → Deployment
   - Agent impact analysis: affected agents, changes in execution, performance shift
   - Workflow impact analysis: modified stages, removed nodes
   - Deployment impact analysis: infra changes, pipeline updates, scaling, CI/CD adjustments
   - Risk propagation graph: shows risk spread with heatmap
   - Cost impact panel: estimated infra, compute, storage cost changes
   - Simulation timeline: rollout phases of the decision

3. Components to create:
   - decision-analysis-header.tsx
   - architecture-breakdown.tsx
   - execution-impact-map.tsx
   - agent-impact-analysis.tsx
   - workflow-impact-analysis.tsx
   - deployment-impact-analysis.tsx
   - risk-propagation-graph.tsx
   - cost-impact-panel.tsx
   - simulation-timeline.tsx

4. Mock data:
   - Use global shared IDs (decisionId, agentIds, workflowIds, pipelineIds)
   - Place in mock/core/governance/architectureDecisionAnalysisData.ts
   - Schema:

interface DecisionAnalysis {
  decisionId: string
  impactedAgents: string[]
  impactedWorkflows: string[]
  impactedProjects: string[]
  deploymentImpact: "LOW" | "MEDIUM" | "HIGH"
  infraChanges: string[]
  aiExecutionChanges: string[]
  estimatedCostImpact: number
  performanceImpactScore: number
  riskPropagationLevel: number
}

5. UI Layout:
   - Header row
   - Architecture breakdown row
   - Execution impact map row
   - Agent + Workflow impact row
   - Deployment impact row
   - Risk graph + cost panel row
   - Simulation timeline row
   - Enterprise styling (cards, gradients, flow connectors, heat colors)

6. Restrictions:
   - Visualization only, no real API or simulation
   - Mock intelligence rules for risk, infra changes, AI execution changes

7. Final output:
   - Fully interactive analysis page
   - Integrated with ADR table/cards
   - Mock graphs, panels, timelines ready for enterprise dashboard

End prompt.
