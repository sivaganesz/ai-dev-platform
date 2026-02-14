import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import type { Platform } from "../platformsData";
import { GitBranch, Star, Lock, Globe } from "lucide-react";

interface RepositoryListProps {
  platform: Platform | null;
}

export function RepositoryList({ platform }: RepositoryListProps) {
  if (!platform) {
    return (
      <Card className="h-full flex items-center justify-center text-muted-foreground p-8">
        Select a platform to view repositories
      </Card>
    );
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <GitBranch className="h-5 w-5 text-primary" />
            Repositories in {platform.platformName}
          </CardTitle>
          <Badge variant="secondary">{platform.repositories.length} Total</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Repository Name</TableHead>
              <TableHead>Visibility</TableHead>
              <TableHead>Linked Project</TableHead>
              <TableHead className="text-right">Stats</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {platform.repositories.map((repo) => (
              <TableRow key={repo.id}>
                <TableCell className="font-medium">
                  <div className="flex flex-col">
                    <span>{repo.name}</span>
                    <span className="text-xs text-muted-foreground font-normal">
                      Last updated {new Date(repo.lastUpdate).toLocaleDateString()}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1.5 capitalize text-xs">
                    {repo.visibility === 'private' ? (
                      <Lock className="h-3 w-3" />
                    ) : (
                      <Globe className="h-3 w-3" />
                    )}
                    {repo.visibility}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="text-[10px] font-mono">
                    {repo.linkedProject}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3" /> {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitBranch className="h-3 w-3" /> {repo.forks}
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
