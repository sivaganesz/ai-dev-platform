
import React, { useState } from "react"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter,
  DialogTrigger
} from "@/components/ui/dialog"
import { PlusCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { ApiSimulation, HttpMethod } from "../../../../mock/core/sandbox/apiSimulationsData"

interface CreateApiRequestModalProps {
  onSubmit: (simulation: ApiSimulation) => void
}

export const CreateApiRequestModal: React.FC<CreateApiRequestModalProps> = ({ onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    sandbox: "SBX-101",
    agent: "AG-001",
    method: "GET" as HttpMethod,
    endpoint: "/api/v1/",
    payload: '{ "id": 1 }'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      let parsedPayload = {}
      try { parsedPayload = JSON.parse(formData.payload) } catch(e) {}

      const newSim: ApiSimulation = {
        id: `API-${Math.floor(Math.random() * 900) + 100}`,
        name: formData.name,
        linkedSandbox: formData.sandbox,
        linkedBuild: "DB-001",
        linkedWorkflow: "WF-2001",
        agentResponsible: formData.agent,
        method: formData.method,
        endpoint: formData.endpoint,
        requestPayload: parsedPayload,
        responsePayload: { success: true, timestamp: new Date().toISOString() },
        status: "IN_PROGRESS",
        logs: [`${new Date().toISOString()} - [INFO] Request pipeline initialized`],
        timestamp: new Date().toISOString()
      }

      onSubmit(newSim)
      setIsSubmitting(false)
      setIsOpen(false)
      setFormData({ name: "", sandbox: "SBX-101", agent: "AG-001", method: "GET", endpoint: "/api/v1/", payload: '{ "id": 1 }' })
    }, 1000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2 shadow-lg">
          <PlusCircle className="w-4 h-4" />
          New Simulation
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <PlusCircle className="w-5 h-5 text-primary" />
              Initialize API Simulation
            </DialogTitle>
            <DialogDescription>
              Define a mock request to test your agents and sandboxes.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-muted-foreground">Request Name</label>
              <Input 
                required 
                placeholder="e.g. Fetch Auth Token" 
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-muted-foreground">Method</label>
                <Select value={formData.method} onValueChange={(v: HttpMethod) => setFormData({...formData, method: v})}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="GET">GET</SelectItem>
                    <SelectItem value="POST">POST</SelectItem>
                    <SelectItem value="PUT">PUT</SelectItem>
                    <SelectItem value="PATCH">PATCH</SelectItem>
                    <SelectItem value="DELETE">DELETE</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-muted-foreground">Sandbox</label>
                <Select value={formData.sandbox} onValueChange={v => setFormData({...formData, sandbox: v})}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="SBX-101">SBX-101 (Alpha)</SelectItem>
                    <SelectItem value="SBX-102">SBX-102 (Beta)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-muted-foreground">Endpoint</label>
              <Input 
                required 
                placeholder="/api/v1/..." 
                value={formData.endpoint}
                onChange={e => setFormData({...formData, endpoint: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-muted-foreground">Request Payload (JSON)</label>
              <textarea 
                className="w-full h-24 p-3 bg-muted/50 rounded-md border text-xs font-mono focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.payload}
                onChange={e => setFormData({...formData, payload: e.target.value})}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Deploying...</> : "Start Simulation"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
