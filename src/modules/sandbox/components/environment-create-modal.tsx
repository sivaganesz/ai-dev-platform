
import React from "react"
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetDescription, 
  SheetFooter,
  SheetTrigger
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlusCircle } from "lucide-react"

export const EnvironmentCreateModal: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="gap-2">
          <PlusCircle className="w-4 h-4" />
          Create Environment
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="sm:max-w-[400px]">
        <SheetHeader>
          <SheetTitle>Create Sandbox Environment</SheetTitle>
          <SheetDescription>
            Deploy a new isolated environment for testing and simulation.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Environment Name</label>
            <Input placeholder="e.g. Beta Testing - V2" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Type</label>
            <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
              <option>Frontend</option>
              <option>Backend</option>
              <option>FullStack</option>
              <option>Microservice</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Owner</label>
            <Input placeholder="Senior Developer ID" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Link Agents (Optional)</label>
            <Input placeholder="Comma separated IDs (AG-001, AG-002)" />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit" className="w-full">Initialize Sandbox</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
