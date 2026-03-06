import { WorkflowCard } from "./workflow-card";
import { type Workflow } from "../hooks/use-workflows-data";

interface WorkflowListProps {
  workflows: Workflow[];
  projects: { id: string; name: string }[];
  onEdit?: (workflow: Workflow) => void;
  onDelete?: (workflow: Workflow) => void;
}

export function WorkflowList({ workflows, projects, onEdit, onDelete }: WorkflowListProps) {
  if (workflows.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
        <p>No workflows found matching your filters.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {workflows.map((workflow) => (
        <WorkflowCard
          key={workflow.id}
          workflow={workflow}
          projectName={projects.find(p => p.id === workflow.projectId)?.name}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
