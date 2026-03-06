import { useState } from "react";
import { Plus } from "lucide-react";
import { useProjectsData, type Project } from "../hooks/use-projects-data";
import { ProjectFilter } from "../components/project-filter";
import { ProjectList } from "../components/project-list";
import { ProjectSummaryChart } from "../components/project-summary-chart";
import { CreateProjectModal } from "../components/create-project-modal";
import { EditProjectModal } from "../components/edit-project-modal";
import { DeleteProjectDialog } from "../components/delete-project-dialog";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  const { data: projects, isLoading } = useProjectsData();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [createOpen, setCreateOpen] = useState(false);
  const [editProject, setEditProject] = useState<Project | null>(null);
  const [deleteProject, setDeleteProject] = useState<Project | null>(null);

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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">Manage and track all enterprise AI projects.</p>
        </div>
        <Button onClick={() => setCreateOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
      </div>

      <ProjectFilter
        onSearchChange={setSearch}
        onStatusChange={setStatusFilter}
      />

      <div className="grid gap-6">
        <ProjectSummaryChart projects={projects || []} />
        <ProjectList
          projects={filteredProjects}
          onEdit={setEditProject}
          onDelete={setDeleteProject}
        />
      </div>

      <CreateProjectModal open={createOpen} onClose={() => setCreateOpen(false)} />
      {editProject && (
        <EditProjectModal
          open={!!editProject}
          onClose={() => setEditProject(null)}
          project={editProject}
        />
      )}
      {deleteProject && (
        <DeleteProjectDialog
          open={!!deleteProject}
          onClose={() => setDeleteProject(null)}
          project={deleteProject}
        />
      )}
    </div>
  );
}
