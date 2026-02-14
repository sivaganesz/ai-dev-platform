import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Users, ArrowRight } from "lucide-react";

export function TeamAssignmentPanel() {
  const assignments = [
    { team: "Frontend", agents: 3, projects: 5 },
    { team: "Backend", agents: 4, projects: 8 },
    { team: "DevOps", agents: 2, projects: 12 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-semibold">Operational Resource Mapping</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {assignments.map((item) => (
          <div key={item.team} className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer group">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-bold">{item.team} Team</span>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                  <Bot className="h-3 w-3" />
                  {item.agents} Agents
                </div>
                <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                  <Users className="h-3 w-3" />
                  {item.projects} Projects
                </div>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button variant="outline" className="w-full text-xs h-8">
          Manage Assignments
        </Button>
      </CardContent>
    </Card>
  );
}
