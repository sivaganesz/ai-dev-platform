
import { useState, useEffect, useCallback } from "react"
import { apiSimulations as initialSimulations } from "../../../../mock/core/sandbox/apiSimulationsData"
import type { ApiSimulation, SimulationStatus } from "../../../../mock/core/sandbox/apiSimulationsData"

export const useApiSimulationsData = () => {
  const [simulations, setSimulations] = useState<ApiSimulation[]>([])
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setSimulations(initialSimulations)
      if (initialSimulations.length > 0) {
        setSelectedId(initialSimulations[0].id)
      }
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const selectedSimulation = simulations.find(s => s.id === selectedId) || null

  const metrics = {
    total: simulations.length,
    successRate: simulations.length > 0 
      ? Math.round((simulations.filter(s => s.status === "SUCCESS").length / simulations.length) * 100)
      : 0,
    failed: simulations.filter(s => s.status === "FAILED").length,
    lastTimestamp: simulations.length > 0
      ? [...simulations].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())[0].timestamp
      : "N/A"
  }

  const addSimulation = useCallback((newSim: ApiSimulation) => {
    setSimulations(prev => [newSim, ...prev])
    setSelectedId(newSim.id)
    
    // Simulate initial logs and progress
    setTimeout(() => {
      setSimulations(prev => prev.map(s => {
        if (s.id === newSim.id) {
          const finalStatus: SimulationStatus = Math.random() > 0.15 ? "SUCCESS" : "FAILED"
          return {
            ...s,
            status: finalStatus,
            logs: [...s.logs, `${new Date().toISOString()} - [INFO] Response status: ${finalStatus === "SUCCESS" ? "200 OK" : "500 Internal Error"}`],
            timestamp: new Date().toISOString()
          }
        }
        return s
      }))
    }, 3000)
  }, [])

  const triggerSimulation = useCallback((id: string) => {
    setSimulations(prev => prev.map(s => {
      if (s.id === id) {
        return {
          ...s,
          status: "IN_PROGRESS" as SimulationStatus,
          logs: [`${new Date().toISOString()} - [INFO] Simulation re-triggered`],
          timestamp: new Date().toISOString()
        }
      }
      return s
    }))

    setTimeout(() => {
      setSimulations(prev => prev.map(s => {
        if (s.id === id) {
          const finalStatus: SimulationStatus = Math.random() > 0.2 ? "SUCCESS" : "FAILED"
          return {
            ...s,
            status: finalStatus,
            logs: [...s.logs, `${new Date().toISOString()} - [INFO] Multi-stage validation complete`, `${new Date().toISOString()} - [INFO] Response status: ${finalStatus === "SUCCESS" ? "200 OK" : "400 Bad Request"}`],
            timestamp: new Date().toISOString()
          }
        }
        return s
      }))
    }, 4000)
  }, [])

  return {
    simulations,
    selectedSimulation,
    setSelectedId,
    metrics,
    isLoading,
    addSimulation,
    triggerSimulation
  }
}
