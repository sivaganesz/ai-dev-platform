import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "@/app/layouts/main-layout";

const DashboardPage = lazy(() => import("@/modules/dashboard/pages/dashboard-page"));
const ProjectsPage = lazy(() => import("@/modules/projects/pages/projects-page"));
const WorkflowsPage = lazy(() => import("@/modules/workflows/pages/workflows-page"));
const AgentsPage = lazy(() => import("@/modules/agents/pages/agents-overview-page"));
const AgentDetailsPage = lazy(() => import("@/modules/agents/pages/agent-details-page"));

const SeniorDevelopersPage = lazy(() => import("@/modules/governance/senior-developers/pages/senior-developers-page"));
const SeniorDeveloperDetailsPage = lazy(() => import("@/modules/governance/senior-developers/pages/senior-developer-details-page"));

const ApprovalsPage = lazy(() => import("@/modules/governance/approvals/pages/approvals-page"));
const ApprovalDetailsPage = lazy(() => import("@/modules/governance/approvals/pages/approval-details-page"));

const CodeReviewsPage = lazy(() => import("@/modules/governance/code-reviews/pages/code-reviews-page"));
const CodeReviewDetailsPage = lazy(() => import("@/modules/governance/code-reviews/pages/review-details-page"));

const ArchitectureDecisionsPage = lazy(() => import("@/modules/governance/architecture-decisions/pages/architecture-decisions-page"));
const ArchitectureDecisionDetailsPage = lazy(() => import("@/modules/governance/architecture-decisions/pages/decision-details-page"));
const ArchitectureDecisionAnalysisPage = lazy(() => import("@/modules/governance/architecture-decisions/pages/architecture-decision-analysis-page"));

const SandboxEnvironmentsPage = lazy(() => import("@/modules/sandbox/pages/sandbox-environments-page"));
const LiveUIPreviewsPage = lazy(() => import("@/modules/sandbox/pages/live-ui-previews-page"));
const DemoBuildsPage = lazy(() => import("@/modules/sandbox/pages/demo-builds-page"));

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
      {
        path: "governance",
        children: [
          {
            path: "senior-developers",
            children: [
              {
                index: true,
                element: (
                  <Suspense fallback={<div>Loading...</div>}>
                    <SeniorDevelopersPage />
                  </Suspense>
                ),
              },
              {
                path: ":id",
                element: (
                  <Suspense fallback={<div>Loading...</div>}>
                    <SeniorDeveloperDetailsPage />
                  </Suspense>
                ),
              },
            ],
          },
          {
            path: "approvals",
            children: [
              {
                index: true,
                element: (
                  <Suspense fallback={<div>Loading...</div>}>
                    <ApprovalsPage />
                  </Suspense>
                ),
              },
              {
                path: ":id",
                element: (
                  <Suspense fallback={<div>Loading...</div>}>
                    <ApprovalDetailsPage />
                  </Suspense>
                ),
              },
            ],
          },
          {
            path: "code-reviews",
            children: [
              {
                index: true,
                element: (
                  <Suspense fallback={<div>Loading...</div>}>
                    <CodeReviewsPage />
                  </Suspense>
                ),
              },
              {
                path: ":id",
                element: (
                  <Suspense fallback={<div>Loading...</div>}>
                    <CodeReviewDetailsPage />
                  </Suspense>
                ),
              },
            ],
          },
          {
            path: "architecture-decisions",
            children: [
              {
                index: true,
                element: (
                  <Suspense fallback={<div>Loading...</div>}>
                    <ArchitectureDecisionsPage />
                  </Suspense>
                ),
              },
              {
                path: ":id",
                element: (
                  <Suspense fallback={<div>Loading...</div>}>
                    <ArchitectureDecisionDetailsPage />
                  </Suspense>
                ),
              },
              {
                path: "analyze/:decisionId",
                element: (
                  <Suspense fallback={<div>Loading...</div>}>
                    <ArchitectureDecisionAnalysisPage />
                  </Suspense>
                ),
              },
            ],
          },
        ],
      },
      {
        path: "sandbox",
        children: [
          {
            path: "environments",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <SandboxEnvironmentsPage />
              </Suspense>
            ),
          },
          {
            path: "live-previews",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <LiveUIPreviewsPage />
              </Suspense>
            ),
          },
          {
            path: "builds",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <DemoBuildsPage />
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
