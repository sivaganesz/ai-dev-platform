import { useProfileData } from "../hooks/use-profile-data";
import { ProfileSummaryCard } from "../components/profile-summary-card";
import { PersonalInfoForm } from "../components/personal-info-form";
import { AgentInteractionPreferences } from "../components/agent-interaction-preferences";
import { NotificationPreferences } from "../components/notification-preferences";
import { ActivityTracePanel } from "../components/activity-trace-panel";
import { RoleAccessScope } from "../components/role-access-scope";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, UserCheck, Terminal, FileSearch } from "lucide-react";

export default function ProfilePage() {
  const { data, isLoading } = useProfileData();

  if (isLoading) {
    return <div className="flex items-center justify-center h-full">Loading profile context...</div>;
  }

  return (
    <div className="flex-1 space-y-6 p-4 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Identity & Profile</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Tasks Completed</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.stats.tasksCompleted}</div>
            <p className="text-[10px] text-muted-foreground">Across all agents</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Approvals Handled</CardTitle>
            <UserCheck className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.stats.approvalsHandled}</div>
            <p className="text-[10px] text-muted-foreground">Governance authority</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Prompts Executed</CardTitle>
            <Terminal className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.stats.promptsExecuted.toLocaleString()}</div>
            <p className="text-[10px] text-muted-foreground">Total AI interactions</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Reviews Performed</CardTitle>
            <FileSearch className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.stats.reviewsPerformed}</div>
            <p className="text-[10px] text-muted-foreground">Peer & Code reviews</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-6">
          <ProfileSummaryCard profile={data?.profile!} />
          <PersonalInfoForm profile={data?.profile!} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AgentInteractionPreferences preferences={data?.agentPrefs || []} />
            <NotificationPreferences preferences={data?.notifications || []} />
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <RoleAccessScope scopes={data?.access || []} />
          <ActivityTracePanel activities={data?.activity || []} />
        </div>
      </div>
    </div>
  );
}
