import { useState } from "react";
import { usePlatformsData } from "../hooks/use-platforms-data";
import { PlatformCard } from "../components/platform-card";
import { RepositoryList } from "../components/repository-list";
import { PlatformActivityLogs } from "../components/platform-activity-logs";
import { ConnectPlatformModal } from "../components/connect-platform-modal";
import type { Platform } from "../platformsData";
import { 
  Cloud, 
  CheckCircle2, 
  GitBranch, 
  LayoutGrid, 
  List,
  Search
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Component, type ErrorInfo, type ReactNode } from "react";

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean; error: Error | null }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("PlatformsPage Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 flex flex-col items-center justify-center min-h-[400px] border-2 border-dashed rounded-xl m-8">
          <h2 className="text-2xl font-bold text-destructive mb-4">Something went wrong</h2>
          <pre className="p-4 bg-muted rounded-md text-xs overflow-auto max-w-full mb-4">
            {this.state.error?.message}
          </pre>
          <Button onClick={() => window.location.reload()}>Reload Page</Button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function PlatformsPage() {
  return (
    <ErrorBoundary>
      <PlatformsContent />
    </ErrorBoundary>
  );
}

function PlatformsContent() {
  const { platforms, activityLogs, stats, isLoading } = usePlatformsData();
  const [selectedPlatformId, setSelectedPlatformId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const selectedPlatform = platforms.find(p => p.id === selectedPlatformId) || null;

  const filteredPlatforms = platforms.filter(p => 
    p.platformName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.organization.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return <div className="p-8">Loading platforms...</div>;
  }

  return (
    <div className="flex flex-col gap-8 p-8">
      {/* Header & Stats */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Platforms Integration</h1>
            <p className="text-muted-foreground">Manage your external code platforms and repository intelligence.</p>
          </div>
          <ConnectPlatformModal />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <StatCard 
            title="Total Platforms" 
            value={stats.totalPlatforms} 
            icon={<Cloud className="h-4 w-4 text-blue-500" />} 
          />
          <StatCard 
            title="Connected" 
            value={stats.connectedPlatforms} 
            icon={<CheckCircle2 className="h-4 w-4 text-emerald-500" />} 
          />
          <StatCard 
            title="Active Repositories" 
            value={stats.activeRepositories} 
            icon={<GitBranch className="h-4 w-4 text-purple-500" />} 
          />
        </div>
      </div>

      <Separator />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Platform List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Configured Platforms</h2>
            <div className="flex items-center gap-2">
              <div className="relative w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search platforms..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex border rounded-md">
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-none bg-muted">
                  <LayoutGrid className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-none border-l">
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {filteredPlatforms.map((platform) => (
              <PlatformCard
                key={platform.id}
                platform={platform}
                isSelected={selectedPlatformId === platform.id}
                onSelect={(p) => setSelectedPlatformId(p.id)}
              />
            ))}
          </div>

          {/* Repository List Section */}
          <div className="mt-8">
            <RepositoryList platform={selectedPlatform} />
          </div>
        </div>

        {/* Right Column: Activity Logs */}
        <div className="space-y-6">
          <PlatformActivityLogs logs={activityLogs} />
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon }: { title: string; value: number; icon: React.ReactNode }) {
  return (
    <div className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
      <div className="flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className="text-sm font-medium">{title}</h3>
        {icon}
      </div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}
