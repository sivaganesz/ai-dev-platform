import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { CompanyProfile } from "@/../mock/core/settings/companyData";
import { Building2, Globe, Mail, Users, Calendar, MapPin } from "lucide-react";

interface CompanyProfileCardProps {
  profile: CompanyProfile;
}

export function CompanyProfileCard({ profile }: CompanyProfileCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="h-2 bg-primary w-full" />
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 shadow-inner">
            <Building2 className="h-8 w-8 text-primary" />
          </div>
          <div>
            <CardTitle className="text-xl font-bold">{profile.name}</CardTitle>
            <p className="text-xs text-muted-foreground">{profile.legalName}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline">Edit Info</Button>
          <Button size="sm">Upload Logo</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs">
              <Globe className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="font-semibold uppercase tracking-wider text-[10px] text-muted-foreground w-20">Industry:</span>
              <span>{profile.industry}</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Users className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="font-semibold uppercase tracking-wider text-[10px] text-muted-foreground w-20">Size:</span>
              <span>{profile.size}</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs">
              <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="font-semibold uppercase tracking-wider text-[10px] text-muted-foreground w-20">HQ:</span>
              <span>{profile.hq}</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="font-semibold uppercase tracking-wider text-[10px] text-muted-foreground w-20">Founded:</span>
              <span>{profile.founded}</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs">
              <Globe className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="font-semibold uppercase tracking-wider text-[10px] text-muted-foreground w-20">Website:</span>
              <a href={profile.website} className="text-primary hover:underline">{profile.website}</a>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Mail className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="font-semibold uppercase tracking-wider text-[10px] text-muted-foreground w-20">Support:</span>
              <span>{profile.supportEmail}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
