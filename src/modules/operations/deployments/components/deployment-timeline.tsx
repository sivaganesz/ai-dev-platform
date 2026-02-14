import type { DeploymentEvent } from "@/../mock/core/operations/deploymentsData";
import { CheckCircle2, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

interface DeploymentTimelineProps {
  events: DeploymentEvent[];
}

export function DeploymentTimeline({ events }: DeploymentTimelineProps) {
  const stages: ('Build' | 'Deploy' | 'Verify' | 'Release')[] = ['Build', 'Deploy', 'Verify', 'Release'];

  return (
    <div className="relative flex justify-between w-full py-8">
      {/* Connector Line */}
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-muted -translate-y-1/2 z-0" />
      
      {stages.map((stage) => {
        const event = events.find(e => e.stage === stage);
        const isCompleted = event?.status === 'COMPLETED';
        const isInProgress = event?.status === 'IN_PROGRESS';
        const isFailed = event?.status === 'FAILED';

        return (
          <div key={stage} className="relative z-10 flex flex-col items-center gap-2 bg-background px-2">
            <div className={cn(
              "p-1 rounded-full",
              isCompleted ? "text-green-500" : 
              isFailed ? "text-red-500" : 
              isInProgress ? "text-blue-500 animate-pulse" : 
              "text-muted-foreground"
            )}>
              {isCompleted ? <CheckCircle2 className="h-6 w-6" /> : 
               isFailed ? <Circle className="h-6 w-6 fill-red-500" /> :
               <Circle className="h-6 w-6" />}
            </div>
            <div className="text-center">
              <p className="text-xs font-semibold">{stage}</p>
              {event && (
                <p className="text-[10px] text-muted-foreground">
                  {new Date(event.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
