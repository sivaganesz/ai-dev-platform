import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "@/app/layouts/main-layout";

const DashboardPage = lazy(() => import("@/modules/dashboard/pages/dashboard-page"));
const ProjectsPage = lazy(() => import("@/modules/projects/pages/projects-page"));
const WorkflowsPage = lazy(() => import("@/modules/workflows/pages/workflows-page"));

// AI Agents Module
const AgentsPage = lazy(() => import("@/modules/agents/pages/agents-page"));
const FrontendAgentPage = lazy(() => import("@/modules/agents/pages/frontend-agent"));
const BackendAgentPage = lazy(() => import("@/modules/agents/pages/backend-agent"));
const QAAgentPage = lazy(() => import("@/modules/agents/pages/qa-agent"));
const DevOpsAgentPage = lazy(() => import("@/modules/agents/pages/devops-agent"));
const UXAgentPage = lazy(() => import("@/modules/agents/pages/ux-agent"));

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
            path: "frontend",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <FrontendAgentPage />
              </Suspense>
            ),
          },
          {
            path: "backend",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <BackendAgentPage />
              </Suspense>
            ),
          },
          {
            path: "qa",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <QAAgentPage />
              </Suspense>
            ),
          },
          {
            path: "devops",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <DevOpsAgentPage />
              </Suspense>
            ),
          },
          {
            path: "ux",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <UXAgentPage />
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
