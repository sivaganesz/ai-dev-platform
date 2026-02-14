import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { UserProfile } from "@/../mock/core/settings/profileData";
import { User, Phone, Mail, Building2, UserCircle } from "lucide-react";

interface PersonalInfoFormProps {
  profile: UserProfile;
}

export function PersonalInfoForm({ profile }: PersonalInfoFormProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-bold flex items-center gap-2">
          <UserCircle className="h-4 w-4 text-primary" />
          Personal Information
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">First Name</label>
            <Input defaultValue={profile.firstName} />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Last Name</label>
            <Input defaultValue={profile.lastName} />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Work Email</label>
            <div className="relative">
              <Mail className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input defaultValue={profile.email} className="pl-9" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input defaultValue={profile.phone} className="pl-9" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Job Title</label>
            <div className="relative">
              <User className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input defaultValue={profile.jobTitle} className="pl-9" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Department</label>
            <div className="relative">
              <Building2 className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input defaultValue={profile.department} className="pl-9" />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button size="sm">Save Changes</Button>
          <Button size="sm" variant="outline">Reset</Button>
          <Button size="sm" variant="ghost" className="text-primary text-[10px] font-bold ml-auto">
            Request Role Update
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
