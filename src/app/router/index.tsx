import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "@/app/layouts/main-layout";

const DashboardPage = lazy(() => import("@/modules/dashboard/pages/dashboard-page"));
const ProjectsPage = lazy(() => import("@/modules/projects/pages/projects-page"));
const WorkflowsPage = lazy(() => import("@/modules/workflows/pages/workflows-page"));
const AgentsPage = lazy(() => import("@/modules/agents/pages/agents-overview-page"));
const AgentDetailsPage = lazy(() => import("@/modules/agents/pages/agent-details-page"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <DashboardPage />
          </Suspense>
        ),
      },
      {
        path: "projects",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProjectsPage />
          </Suspense>
        ),
      },
      {
        path: "workflows",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <WorkflowsPage />
          </Suspense>
        ),
      },
      {
        path: "agents",
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <AgentsPage />
              </Suspense>
            ),
          },
          {
            path: ":agentType",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <AgentDetailsPage />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
