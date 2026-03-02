import { useThemeData } from "../hooks/use-theme-data";
import { ThemeModeSelector } from "../components/theme-mode-selector";
import { AccentColorPicker } from "../components/accent-color-picker";
import { UIDensitySelector } from "../components/ui-density-selector";
import { VisualizationStylePanel } from "../components/visualization-style-panel";
import { CodeLogDisplayConfig } from "../components/code-log-display-config";
import { PreviewSimulatorPanel } from "../components/preview-simulator-panel";
import { Button } from "@/components/ui/button";
import { Palette, Save, RotateCcw, BadgeCheck } from "lucide-react";

export default function ThemePreferencesPage() {
  const { data, isLoading } = useThemeData();

  if (isLoading) {
    return <div className="flex items-center justify-center h-full">Synchronizing visual preferences...</div>;
  }

  const s = data?.settings;

  return (
    <div className="flex-1 space-y-6 p-4 pt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Palette className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">Visual Experience</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset Defaults
          </Button>
          <Button size="sm">
            <Save className="mr-2 h-4 w-4" />
            Apply Preferences
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column - Core Styles */}
        <div className="lg:col-span-4 space-y-6">
          <ThemeModeSelector selected={s?.themeMode || 'dark'} onSelect={() => {}} />
          <AccentColorPicker 
            primary={s?.primaryColor || '#6366f1'} 
            accent={s?.accentColor || '#06b6d4'} 
            hover={s?.hoverColor || '#93c5fd'} 
          />
          <UIDensitySelector selected={s?.uiDensity || 'dense'} />
        </div>

        {/* Center Column - Specific Visualizations */}
        <div className="lg:col-span-5 space-y-6">
          <VisualizationStylePanel />
          <CodeLogDisplayConfig />
          
          <div className="flex items-center gap-4 p-4 rounded-lg border bg-primary/5 border-primary/20">
            <BadgeCheck className="h-6 w-6 text-primary" />
            <div className="flex-1">
              <p className="text-sm font-bold">Organization Branding Sync</p>
              <p className="text-[11px] text-muted-foreground">Your theme is currently synchronized with Cognation AI Labs global guidelines.</p>
            </div>
            <Button size="sm" variant="ghost" className="text-primary font-bold text-xs underline">Detatch</Button>
          </div>
        </div>

        {/* Right Column - Preview */}
        <div className="lg:col-span-3">
          <PreviewSimulatorPanel />
        </div>
      </div>
    </div>
  );
}
