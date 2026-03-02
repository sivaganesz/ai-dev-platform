import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Braces, ArrowRightLeft } from "lucide-react"
import type { ApiSimulation } from "../../../../mock/core/sandbox/apiSimulationsData"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ApiResponsePanelProps {
  simulation: ApiSimulation | null
}

export const ApiResponsePanel: React.FC<ApiResponsePanelProps> = ({ simulation }) => {
  if (!simulation) {
    return (
      <Card className="h-full border-dashed border-2">
        <CardContent className="flex flex-col items-center justify-center h-[300px] text-muted-foreground">
          <Braces className="w-12 h-12 opacity-10 mb-4" />
          <p className="font-medium">Select a request to view payloads</p>
          <p className="text-xs opacity-60">JSON data will be formatted here</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="h-full flex flex-col shadow-md">
      <CardHeader className="pb-3 border-b bg-muted/10">
        <div className="flex items-center gap-2">
          <ArrowRightLeft className="w-4 h-4 text-primary" />
          <CardTitle className="text-sm font-bold uppercase tracking-tight">Data Intelligence</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-0 flex-1">
        <Tabs defaultValue="response" className="w-full h-full flex flex-col">
          <TabsList className="w-full justify-start px-4 h-10 bg-muted/5 border-b rounded-none">
            <TabsTrigger value="request" className="text-[10px] uppercase font-bold tracking-wider h-8">Request Payload</TabsTrigger>
            <TabsTrigger value="response" className="text-[10px] uppercase font-bold tracking-wider h-8">Response Data</TabsTrigger>
          </TabsList>
          
          <div className="flex-1 min-h-0 bg-zinc-950">
            <TabsContent value="request" className="m-0 h-full">
              <ScrollArea className="h-[250px] w-full p-4">
                <pre className="text-[11px] font-mono text-zinc-300 leading-relaxed">
                  {JSON.stringify(simulation.requestPayload, null, 2)}
                </pre>
              </ScrollArea>
            </TabsContent>
            <TabsContent value="response" className="m-0 h-full">
              <ScrollArea className="h-[250px] w-full p-4">
                <pre className="text-[11px] font-mono text-green-400 leading-relaxed">
                  {JSON.stringify(simulation.responsePayload, null, 2)}
                </pre>
              </ScrollArea>
            </TabsContent>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  )
}
