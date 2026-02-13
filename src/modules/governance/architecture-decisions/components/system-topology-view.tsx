
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Server, Bot, Workflow, ArrowRight, ShieldCheck } from "lucide-react"

export function SystemTopologyView() {
  return (
    <Card className="col-span-full lg:col-span-2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Global System Topology</CardTitle>
          <Badge variant="outline" className="text-[10px] text-green-600 border-green-200 bg-green-50">LIVE MODEL</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative flex flex-col md:flex-row items-center justify-around gap-12 py-12 bg-muted/10 rounded-xl border border-dashed">
          {/* AI Agents Layer */}
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 rounded-full bg-blue-100 border-2 border-blue-500 shadow-lg shadow-blue-200">
              <Bot className="h-8 w-8 text-blue-600" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider">Inference Agents</span>
            <div className="flex gap-1">
              <div className="h-1 w-4 bg-blue-400 rounded-full" />
              <div className="h-1 w-4 bg-blue-400 rounded-full" />
              <div className="h-1 w-4 bg-blue-400 rounded-full" />
            </div>
          </div>

          <ArrowRight className="hidden md:block h-6 w-6 text-muted-foreground opacity-30" />

          {/* Workflow Orchestration */}
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 rounded-full bg-purple-100 border-2 border-purple-500 shadow-lg shadow-purple-200">
              <Workflow className="h-8 w-8 text-purple-600" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider">Orchestration Layer</span>
            <Badge variant="secondary" className="text-[8px]">KAFKA / EVENT-DRIVEN</Badge>
          </div>

          <ArrowRight className="hidden md:block h-6 w-6 text-muted-foreground opacity-30" />

          {/* Backend Services */}
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 rounded-full bg-green-100 border-2 border-green-500 shadow-lg shadow-green-200">
              <Server className="h-8 w-8 text-green-600" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider">Core API Services</span>
            <Badge variant="secondary" className="text-[8px]">GO / GRPX</Badge>
          </div>

          <ArrowRight className="hidden md:block h-6 w-6 text-muted-foreground opacity-30" />

          {/* Data Persistence */}
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 rounded-full bg-orange-100 border-2 border-orange-500 shadow-lg shadow-orange-200">
              <Database className="h-8 w-8 text-orange-600" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider">Data Persistence</span>
            <div className="flex flex-col gap-1 items-center">
              <span className="text-[8px] font-mono">PINECONE (Vector)</span>
              <span className="text-[8px] font-mono">POSTGRES (Relational)</span>
            </div>
          </div>

          {/* Security Gate Overlay */}
          <div className="absolute top-4 right-4 flex items-center gap-2 bg-background p-2 rounded border shadow-sm">
            <ShieldCheck className="h-4 w-4 text-green-600" />
            <span className="text-[10px] font-bold">SECURITY ENFORCED</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
