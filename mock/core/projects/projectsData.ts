export interface Project {
  id: string;
  name: string;
  status: "ACTIVE" | "COMPLETED" | "PENDING";
  createdAt: string;
  updatedAt: string;
}

export const projectsData: Project[] = [
  { id: "p1", name: "Alpha AI", status: "ACTIVE", createdAt: "2026-01-01", updatedAt: "2026-02-10" },
  { id: "p2", name: "Beta Dashboard", status: "COMPLETED", createdAt: "2025-12-01", updatedAt: "2026-01-15" },
  { id: "p3", name: "Gamma CRM", status: "PENDING", createdAt: "2026-02-01", updatedAt: "2026-02-05" },
  { id: "p4", name: "Delta Mobile", status: "ACTIVE", createdAt: "2026-01-15", updatedAt: "2026-02-12" },
  { id: "p5", name: "Epsilon Web", status: "ACTIVE", createdAt: "2026-01-20", updatedAt: "2026-02-11" },
];
