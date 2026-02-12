export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Enterprise AI Dev Platform</h1>
      <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <h2 className="text-xl font-semibold mb-2">System Initialized</h2>
        <p className="text-muted-foreground">
          Waiting for module generation via Markdown instructions.
        </p>
      </div>
    </div>
  );
}
