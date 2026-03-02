import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import type { UserProfile } from "@/../mock/core/settings/profileData";
import { MapPin, Briefcase, Building2, Clock, Mail } from "lucide-react";

interface ProfileSummaryCardProps {
  profile: UserProfile;
}

export function ProfileSummaryCard({ profile }: ProfileSummaryCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="h-24 bg-primary/10 w-full" />
      <CardContent className="relative pt-0 -mt-12">
        <div className="flex flex-col md:flex-row items-end gap-4 mb-6">
          <Avatar className="h-24 w-24 border-4 border-background shadow-lg">
            <AvatarImage src={profile.avatar} />
            <AvatarFallback className="text-2xl">{profile.firstName[0]}{profile.lastName[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1 pb-2">
            <h2 className="text-2xl font-bold">{profile.firstName} {profile.lastName}</h2>
            <div className="flex flex-wrap gap-2 mt-1">
              <Badge variant="secondary" className="text-[10px] h-5">{profile.role}</Badge>
              <Badge variant="outline" className="text-[10px] h-5">{profile.roleTier}</Badge>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Mail className="h-3.5 w-3.5" />
            {profile.email}
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Building2 className="h-3.5 w-3.5" />
            {profile.department}
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Briefcase className="h-3.5 w-3.5" />
            Reports to {profile.manager}
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            {profile.timezone}
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            Last login: {new Date(profile.lastLogin).toLocaleString()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
