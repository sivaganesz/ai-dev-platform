import { useState } from "react";
import { useRolesData } from "../hooks/use-roles-data";
import { RolesTable } from "../components/roles-table";
import { PermissionMatrix } from "../components/permission-matrix";
import { RoleDetailsPanel } from "../components/role-details-panel";
import { CreateRoleModal } from "../components/create-role-modal";
import { Shield, Lock, Settings } from "lucide-react";
import type { Role } from "@/../mock/core/administration/rolesData";

export default function RolesPermissionsPage() {
  const { data, isLoading } = useRolesData();
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  if (isLoading) {
    return <div className="flex items-center justify-center h-full">Loading access governance...</div>;
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">Access Governance</h2>
        </div>
        <div className="flex items-center gap-2">
          <CreateRoleModal />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-4">
            <h3 className="text-sm font-bold flex items-center gap-2 uppercase tracking-widest text-muted-foreground">
              <Settings className="h-4 w-4" />
              Role Management
            </h3>
            <RolesTable 
              roles={data?.roles || []} 
              onSelectRole={setSelectedRole} 
              selectedRoleId={selectedRole?.id}
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold flex items-center gap-2 uppercase tracking-widest text-muted-foreground">
              <Lock className="h-4 w-4" />
              Permission Resolution
            </h3>
            <PermissionMatrix 
              modules={data?.modules || []} 
              actions={data?.actions || []} 
            />
          </div>
        </div>

        <div className="space-y-6">
          <RoleDetailsPanel role={selectedRole} />
        </div>
      </div>
    </div>
  );
}
