import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { PlatformActivity } from "../platformsData";
import { History, RefreshCw, GitPullRequest, GitCommit, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlatformActivityLogsProps {
  logs: PlatformActivity[];
}

export function PlatformActivityLogs({ logs }: PlatformActivityLogsProps) {
  const getIcon = (type: PlatformActivity['type']) => {
    switch (type) {
      case 'SYNC': return <RefreshCw className="h-4 w-4 text-blue-500" />;
      case 'PR_OPENED': return <GitPullRequest className="h-4 w-4 text-emerald-500" />;
      case 'PUSH': return <GitCommit className="h-4 w-4 text-purple-500" />;
      case 'CONNECTION_UPDATE': return <Settings className="h-4 w-4 text-orange-500" />;
    }
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <History className="h-5 w-5 text-primary" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden p-0">
        <ScrollArea className="h-[400px]">
          <div className="p-6 pt-0 space-y-6">
            {logs.map((log) => (
              <div key={log.id} className="flex gap-4 relative">
                <div className="mt-1">
                  <div className="bg-muted rounded-full p-2">
                    {getIcon(log.type)}
                  </div>
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {log.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{log.user}</span>
                    <span>•</span>
                    <span>{new Date(log.timestamp).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
