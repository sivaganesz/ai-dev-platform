import { useState } from "react";
import { Plus } from "lucide-react";
import { useWorkflowsData, type Workflow } from "../hooks/use-workflows-data";
import { useProjectsData } from "@/modules/projects/hooks/use-projects-data";
import { WorkflowFilter } from "../components/workflow-filter";
import { WorkflowList } from "../components/workflow-list";
import { WorkflowStatusChart } from "../components/workflow-status-chart";
import { CreateWorkflowModal } from "../components/create-workflow-modal";
import { EditWorkflowModal } from "../components/edit-workflow-modal";
import { DeleteWorkflowDialog } from "../components/delete-workflow-dialog";
import { Button } from "@/components/ui/button";

export default function WorkflowsPage() {
  const { data: workflows, isLoading } = useWorkflowsData();
  const { data: projects = [] } = useProjectsData();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [projectFilter, setProjectFilter] = useState("ALL");
  const [createOpen, setCreateOpen] = useState(false);
  const [editWorkflow, setEditWorkflow] = useState<Workflow | null>(null);
  const [deleteWorkflow, setDeleteWorkflow] = useState<Workflow | null>(null);

  if (isLoading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  const filteredWorkflows = workflows?.filter((w) => {
    const matchesSearch = w.name.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "ALL" || w.status === statusFilter;
    const matchesProject = projectFilter === "ALL" || w.projectId === projectFilter;
    return matchesSearch && matchesStatus && matchesProject;
  }) || [];

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Workflows</h1>
          <p className="text-muted-foreground">Monitor and manage AI-driven automation pipelines.</p>
        </div>
        <Button onClick={() => setCreateOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          New Workflow
        </Button>
      </div>

      <WorkflowFilter
        projects={projects}
        onSearchChange={setSearch}
        onStatusChange={setStatusFilter}
        onProjectChange={setProjectFilter}
      />

      <div className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          <div className="md:col-span-1 lg:col-span-1">
            <WorkflowStatusChart workflows={workflows || []} />
          </div>
          <div className="md:col-span-2 lg:col-span-3 flex flex-col justify-center px-6">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Active Pipeline Stats</h3>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Active Tasks</p>
                  <p className="text-2xl font-bold">
                    {workflows?.reduce((acc, w) => acc + (w.status === 'RUNNING' ? (w.tasksCount - w.completedTasks) : 0), 0)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Failure Rate</p>
                  <p className="text-2xl font-bold text-red-500">
                    {workflows && workflows.length > 0
                      ? Math.round((workflows.filter(w => w.status === 'FAILED').length / workflows.length) * 100)
                      : 0}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <WorkflowList
          workflows={filteredWorkflows}
          projects={projects}
          onEdit={setEditWorkflow}
          onDelete={setDeleteWorkflow}
        />
      </div>

      <CreateWorkflowModal open={createOpen} onClose={() => setCreateOpen(false)} />
      {editWorkflow && (
        <EditWorkflowModal
          open={!!editWorkflow}
          onClose={() => setEditWorkflow(null)}
          workflow={editWorkflow}
        />
      )}
      {deleteWorkflow && (
        <DeleteWorkflowDialog
          open={!!deleteWorkflow}
          onClose={() => setDeleteWorkflow(null)}
          workflow={deleteWorkflow}
        />
      )}
    </div>
  );
}
