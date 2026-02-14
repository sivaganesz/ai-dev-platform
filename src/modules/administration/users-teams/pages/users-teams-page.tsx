import { useState } from "react";
import { useUsersData } from "../hooks/use-users-data";
import { UsersTable } from "../components/users-table";
import { TeamStructureTree } from "../components/team-structure-tree";
import { UserDetailsDrawer } from "../components/user-details-drawer";
import { TeamAssignmentPanel } from "../components/team-assignment-panel";
import { InviteUserModal } from "../components/invite-user-modal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { User } from "@/../mock/core/administration/usersData";
import { Users, Building2, UserPlus, ShieldAlert } from "lucide-react";

export default function UsersTeamsPage() {
  const { data, isLoading } = useUsersData();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  if (isLoading) {
    return <div className="flex items-center justify-center h-full">Synchronizing workforce data...</div>;
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Users className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">Identity & Teams</h2>
        </div>
        <InviteUserModal />
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Total Workforce</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.stats.totalUsers}</div>
            <p className="text-xs text-muted-foreground">Managed identities</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Active Teams</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.stats.activeTeams}</div>
            <p className="text-xs text-muted-foreground">Functional units</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Agent Supervisors</CardTitle>
            <ShieldAlert className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.stats.assignedAgents}</div>
            <p className="text-xs text-muted-foreground">Authorized personnel</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-yellow-500">Pending Invites</CardTitle>
            <UserPlus className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.stats.pendingInvites}</div>
            <p className="text-xs text-muted-foreground">Awaiting activation</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Platform Users</CardTitle>
            </CardHeader>
            <CardContent>
              <UsersTable 
                users={data?.users || []} 
                onSelectUser={setSelectedUser}
              />
            </CardContent>
          </Card>
        </div>
        <div className="space-y-6">
          <TeamStructureTree teams={data?.teams || []} />
          <TeamAssignmentPanel />
        </div>
      </div>

      <UserDetailsDrawer 
        user={selectedUser}
        isOpen={!!selectedUser}
        onClose={() => setSelectedUser(null)}
      />
    </div>
  );
}
