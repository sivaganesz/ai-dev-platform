import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Team } from "@/../mock/core/administration/usersData";
import { Users, ChevronRight, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface TeamStructureTreeProps {
  teams: Team[];
}

export function TeamStructureTree({ teams }: TeamStructureTreeProps) {
  const rootTeams = teams.filter(t => !t.parentTeamId);

  const renderTeam = (team: Team, depth = 0) => {
    const children = teams.filter(t => t.parentTeamId === team.id);
    
    return (
      <div key={team.id} className="space-y-1">
        <div 
          className={cn(
            "flex items-center justify-between p-2 rounded-md hover:bg-muted/50 cursor-pointer group transition-colors",
            depth === 0 ? "bg-muted/30" : ""
          )}
          style={{ marginLeft: `${depth * 1.5}rem` }}
        >
          <div className="flex items-center gap-2">
            {children.length > 0 ? (
              <ChevronRight className="h-3 w-3 text-muted-foreground group-hover:rotate-90 transition-transform" />
            ) : (
              <div className="w-3" />
            )}
            <Building2 className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">{team.name}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Users className="h-3 w-3" />
            {team.memberCount}
          </div>
        </div>
        {children.map(child => renderTeam(child, depth + 1))}
      </div>
    );
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-semibold flex items-center gap-2">
          <Building2 className="h-4 w-4" />
          Organizational Hierarchy
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-2 py-2">
          {rootTeams.map(team => renderTeam(team))}
        </div>
      </CardContent>
    </Card>
  );
}
