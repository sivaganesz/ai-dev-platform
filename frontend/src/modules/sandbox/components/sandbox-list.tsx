import React from "react"
import { SandboxCard } from "./sandbox-card"
import type { Sandbox } from "@/../mock/core/sandbox/sandboxData"

interface SandboxListProps {
  environments: Sandbox[]
}

export const SandboxList: React.FC<SandboxListProps> = ({ environments }) => {
  if (environments.length === 0) {
    return (
      <div className="text-center py-20 border-2 border-dashed rounded-xl col-span-full">
        <p className="text-muted-foreground">No sandbox environments found. Create one to get started.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {environments.map((env) => (
        <SandboxCard key={env.id} sandbox={env} />
      ))}
    </div>
  )
}
