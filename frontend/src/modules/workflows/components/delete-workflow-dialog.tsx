import { useDeleteWorkflow, type Workflow } from "../hooks/use-workflows-data";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface Props {
  open: boolean;
  onClose: () => void;
  workflow: Workflow;
}

export function DeleteWorkflowDialog({ open, onClose, workflow }: Props) {
  const deleteWorkflow = useDeleteWorkflow();

  const handleConfirm = () => {
    deleteWorkflow.mutate(workflow.id, { onSuccess: onClose });
  };

  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete &quot;{workflow.name}&quot;?</AlertDialogTitle>
          <AlertDialogDescription>
            This workflow will be permanently deleted. This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleConfirm}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            disabled={deleteWorkflow.isPending}
          >
            {deleteWorkflow.isPending ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
