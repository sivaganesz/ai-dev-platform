
import React from "react"
import { useApiSimulationsData } from "../hooks/use-api-simulations-data"
import { ApiRequestCard } from "../components/api-request-card"
import { ApiResponsePanel } from "../components/api-response-panel"
import { ApiLogsPanel } from "../components/api-logs-panel"
import { CreateApiRequestModal } from "../components/create-api-request-modal"
import { SimulationStatsCard } from "../components/simulation-stats-card"
import { 
  Zap, 
  CheckCircle2, 
  XCircle, 
  Clock,
  Code2,
  Search,
  Filter
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function ApiSimulationsPage() {
  const { 
    simulations, 
    selectedSimulation, 
    setSelectedId, 
    metrics, 
    isLoading,
    addSimulation,
    triggerSimulation
  } = useApiSimulationsData()

  if (isLoading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6 space-y-8 h-[calc(100vh-4rem)] flex flex-col overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shrink-0 border-b pb-6">
        <div>
          <h1 className="text-3xl font-black tracking-tight flex items-center gap-2">
            <Code2 className="w-8 h-8 text-primary" />
            API Simulations
          </h1>
          <p className="text-muted-foreground mt-1 text-sm font-medium tracking-tight">Test and validate autonomous agent communication pipelines.</p>
        </div>
        <CreateApiRequestModal onSubmit={addSimulation} />
      </div>

      {/* Row 1: Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 shrink-0">
        <SimulationStatsCard 
          title="Total Simulations" 
          value={metrics.total} 
          icon={Zap} 
          colorClass="text-blue-500"
        />
        <SimulationStatsCard 
          title="Success Rate" 
          value={`${metrics.successRate}%`} 
          icon={CheckCircle2} 
          colorClass="text-green-500"
          description="Avg. pipeline health"
        />
        <SimulationStatsCard 
          title="Failed Requests" 
          value={metrics.failed} 
          icon={XCircle} 
          colorClass="text-red-500"
          description="Needs attention"
        />
        <SimulationStatsCard 
          title="Last Execution" 
          value={new Date(metrics.lastTimestamp).toLocaleTimeString()} 
          icon={Clock} 
          colorClass="text-purple-500"
          description="Real-time heartbeat"
        />
      </div>

      <div className="flex-1 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
          {/* Left Section: Request Grid (2/3) */}
          <div className="lg:col-span-8 flex flex-col gap-6 overflow-hidden">
            <div className="flex items-center justify-between shrink-0">
              <h2 className="text-xl font-bold flex items-center gap-2">
                Active Endpoints
                <span className="text-xs font-medium px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                  {simulations.length}
                </span>
              </h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="h-8 gap-2 text-xs">
                  <Search className="w-3.5 h-3.5" />
                  Search
                </Button>
                <Button variant="outline" size="sm" className="h-8 gap-2 text-xs">
                  <Filter className="w-3.5 h-3.5" />
                  Filter
                </Button>
              </div>
            </div>
            
            <ScrollArea className="flex-1 pr-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-6">
                {simulations.map((sim) => (
                  <ApiRequestCard 
                    key={sim.id} 
                    simulation={sim} 
                    isSelected={selectedSimulation?.id === sim.id}
                    onSelect={setSelectedId}
                    onTrigger={triggerSimulation}
                  />
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Right Section: Data & Logs (1/3) */}
          <div className="lg:col-span-4 h-full flex flex-col gap-6 overflow-hidden">
            <div className="flex-1 min-h-0">
              <ApiResponsePanel simulation={selectedSimulation} />
            </div>
            <div className="flex-1 min-h-0">
              <ApiLogsPanel simulation={selectedSimulation} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
