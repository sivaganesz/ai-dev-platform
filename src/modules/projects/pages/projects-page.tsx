import { useState } from "react";
import { useProjectsData } from "../hooks/use-projects-data";
import { ProjectFilter } from "../components/project-filter";
import { ProjectList } from "../components/project-list";
import { ProjectSummaryChart } from "../components/project-summary-chart";

export default function ProjectsPage() {
  const { data: projects, isLoading } = useProjectsData();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  if (isLoading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  const filteredProjects = projects?.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
                        p.owner.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "ALL" || p.status === statusFilter;
    return matchesSearch && matchesStatus;
  }) || [];

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="text-muted-foreground">Manage and track all enterprise AI projects.</p>
      </div>

      <ProjectFilter
        onSearchChange={setSearch}
        onStatusChange={setStatusFilter}
      />

      <div className="grid gap-6">
        <ProjectSummaryChart projects={projects || []} />
        <ProjectList projects={filteredProjects} />
      </div>
    </div>
  );
}
