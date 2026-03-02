export interface TaskTrend {
  date: string;
  frontend: number;
  backend: number;
  qa: number;
  devops: number;
  ux: number;
}

export const taskTrendData: TaskTrend[] = [
  { date: "2026-02-07", frontend: 8, backend: 6, qa: 10, devops: 2, ux: 5 },
  { date: "2026-02-08", frontend: 12, backend: 9, qa: 15, devops: 3, ux: 7 },
  { date: "2026-02-09", frontend: 10, backend: 11, qa: 13, devops: 4, ux: 6 },
  { date: "2026-02-10", frontend: 15, backend: 14, qa: 18, devops: 5, ux: 9 },
  { date: "2026-02-11", frontend: 14, backend: 12, qa: 16, devops: 4, ux: 8 },
  { date: "2026-02-12", frontend: 18, backend: 15, qa: 20, devops: 6, ux: 10 },
  { date: "2026-02-13", frontend: 20, backend: 18, qa: 22, devops: 7, ux: 12 },
];
