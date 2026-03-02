import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { BrandingConfig } from "@/../mock/core/settings/companyData";
import { Palette, Eye, Layout } from "lucide-react";

interface BrandingCustomizationProps {
  config: BrandingConfig;
}

export function BrandingCustomization({ config }: BrandingCustomizationProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-bold flex items-center gap-2">
          <Palette className="h-4 w-4 text-primary" />
          Branding & Identity Configuration
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Platform Display Name</label>
              <Input defaultValue={config.platformDisplayName} />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Primary Brand Color</label>
              <div className="flex gap-2">
                <div 
                  className="w-10 h-10 rounded border" 
                  style={{ backgroundColor: config.brandColor }} 
                />
                <Input defaultValue={config.brandColor} className="font-mono" />
              </div>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg border bg-muted/20">
              <div className="space-y-0.5">
                <p className="text-xs font-bold">Email Template Branding</p>
                <p className="text-[10px] text-muted-foreground">Include logo and colors in system emails</p>
              </div>
              <Button size="sm" variant={config.emailBranding ? "default" : "outline"} className="h-7 text-[9px] uppercase font-bold">
                {config.emailBranding ? "Enabled" : "Disabled"}
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
              <Eye className="h-3 w-3" /> Visual Preview
            </label>
            <div className="rounded-lg border bg-slate-900 p-4 aspect-video relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <Layout className="w-20 h-20 text-white" />
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-primary" />
                  <span className="text-[10px] font-bold text-white">{config.platformDisplayName}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-24 h-1 bg-primary rounded-full" />
                  <div className="w-16 h-1 bg-white/20 rounded-full" />
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-8 h-2 bg-white/10 rounded" />
                  <div className="w-8 h-2 bg-white/10 rounded" />
                </div>
              </div>
            </div>
            <p className="text-[9px] text-center text-muted-foreground">
              White-labeling applies to login, dashboard, and public demo build headers.
            </p>
          </div>
        </div>
        <Button size="sm" className="w-full">Update Platform Branding</Button>
      </CardContent>
    </Card>
  );
}
