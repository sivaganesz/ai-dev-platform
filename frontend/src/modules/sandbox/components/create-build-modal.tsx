
import React, { useState } from "react"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog"
import { PlusCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { DemoBuild } from "@/../mock/core/sandbox/demoBuildsData"
import { v4 as uuidv4 } from "uuid"

interface CreateBuildModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (build: DemoBuild) => void
}

export const CreateBuildModal: React.FC<CreateBuildModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    sandboxId: "SBX-101",
    agentId: "AG-001",
    workflowId: "WF-2001",
    version: "v1.0.0"
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate creation delay
    setTimeout(() => {
      const newBuild: DemoBuild = {
        id: `DB-${Math.floor(Math.random() * 900) + 100}`,
        name: formData.name,
        sandboxId: formData.sandboxId,
        agentResponsible: formData.agentId,
        linkedWorkflow: formData.workflowId,
        version: formData.version,
        status: "IN_PROGRESS",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        previewUrl: `https://sandbox.ai-platform.com/preview/${uuidv4().slice(0,8)}`,
        artifactLink: "/downloads/build.zip",
        shareLink: `https://ai-platform.demo/${uuidv4().slice(0,8)}`,
        logs: [`${new Date().toISOString()} - [INFO] Build initialized`]
      }

      onSubmit(newBuild)
      setIsSubmitting(false)
      onClose()
      setFormData({ name: "", sandboxId: "SBX-101", agentId: "AG-001", workflowId: "WF-2001", version: "v1.0.0" })
    }, 1000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[450px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <div className="flex items-center gap-2">
              <PlusCircle className="w-5 h-5 text-primary" />
              <DialogTitle>Initialize Demo Build</DialogTitle>
            </div>
            <DialogDescription>
              Configure and trigger a new immutable demo artifact.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Build Name</label>
              <Input 
                required
                placeholder="e.g. Q1 Stakeholder Demo" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Target Sandbox</label>
                <Select value={formData.sandboxId} onValueChange={(v) => setFormData({...formData, sandboxId: v})}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="SBX-101">SBX-101 (Alpha)</SelectItem>
                    <SelectItem value="SBX-102">SBX-102 (Beta)</SelectItem>
                    <SelectItem value="SBX-103">SBX-103 (Dev)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Version</label>
                <Input 
                  placeholder="v1.0.0" 
                  value={formData.version}
                  onChange={(e) => setFormData({...formData, version: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Responsible Agent</label>
              <Select value={formData.agentId} onValueChange={(v) => setFormData({...formData, agentId: v})}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="AG-001">Frontend Architect (AG-001)</SelectItem>
                  <SelectItem value="AG-002">Backend Lead (AG-002)</SelectItem>
                  <SelectItem value="AG-004">UX Specialist (AG-004)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose} disabled={isSubmitting}>Cancel</Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Starting...</> : "Start Build Pipeline"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
