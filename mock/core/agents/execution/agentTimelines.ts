export interface ExecutionTimelineEntry {
  id: string;
  stageName: string;
  duration: string;
  status: "SUCCESS" | "FAILURE";
  timestamp: string;
  errorDetails?: string;
}

export const agentTimelines: Record<string, ExecutionTimelineEntry[]> = {
  "AG-001": [
    { id: "tl-1", stageName: "UI Implementation", duration: "45m", status: "SUCCESS", timestamp: "2026-02-13T10:00:00Z" },
    { id: "tl-2", stageName: "UX Design Review", duration: "30m", status: "SUCCESS", timestamp: "2026-02-13T09:00:00Z" },
    { id: "tl-3", stageName: "API Integration", duration: "15m", status: "FAILURE", timestamp: "2026-02-12T16:00:00Z", errorDetails: "Endpoint unreachable" },
  ],
  "AG-002": [
    { id: "tl-4", stageName: "API Development", duration: "1h 20m", status: "SUCCESS", timestamp: "2026-02-13T11:30:00Z" },
    { id: "tl-5", stageName: "Auth Schema Design", duration: "40m", status: "SUCCESS", timestamp: "2026-02-13T10:30:00Z" },
  ],
  "AG-003": [
    { id: "tl-6", stageName: "Automation Suite Generation", duration: "25m", status: "SUCCESS", timestamp: "2026-02-13T12:00:00Z" },
    { id: "tl-7", stageName: "Build Acceptance", duration: "10m", status: "SUCCESS", timestamp: "2026-02-13T11:15:00Z" },
  ],
  "AG-004": [
    { id: "tl-8", stageName: "Cloud Infra Setup", duration: "15m", status: "SUCCESS", timestamp: "2026-02-12T17:00:00Z" },
    { id: "tl-9", stageName: "Docker Containerization", duration: "12m", status: "SUCCESS", timestamp: "2026-02-12T16:45:00Z" },
  ],
  "AG-005": [
    { id: "tl-10", stageName: "User Research Analysis", duration: "2h", status: "SUCCESS", timestamp: "2026-02-13T08:30:00Z" },
    { id: "tl-11", stageName: "Product Briefing", duration: "30m", status: "SUCCESS", timestamp: "2026-02-13T08:00:00Z" },
  ]
};
