import { useState } from "react";
import { useCicdData } from "../hooks/use-cicd-data";
import { PipelineCard } from "../components/pipeline-card";
import { PipelineExecutionTimeline } from "../components/pipeline-execution-timeline";
import { PipelineLogsPanel } from "../components/pipeline-logs-panel";
import type { Pipeline } from "../cicdData";
import { 
  Rocket, 
  CheckCircle2, 
  XCircle, 
  Search,
  Activity,
  Filter,
  RefreshCw
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function CicdPage() {
  const { pipelines, stats, isLoading } = useCicdData();
  const [selectedPipelineId, setSelectedPipelineId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const selectedPipeline = pipelines.find(p => p.id === selectedPipelineId) || null;

  const filteredPipelines = pipelines.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.repository.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return <div className="p-8">Loading pipelines...</div>;
  }

  return (
    <div className="flex flex-col gap-8 p-8">
      {/* Header & Stats */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">CI/CD Pipelines</h1>
            <p className="text-muted-foreground">Monitor and manage automated build, test, and deployment workflows.</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <RefreshCw className="mr-2 h-4 w-4" />
              Sync Status
            </Button>
            <Button>
              <Rocket className="mr-2 h-4 w-4" />
              New Pipeline
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <StatCard 
            title="Total Pipelines" 
            value={stats.totalPipelines} 
            icon={<Rocket className="h-4 w-4 text-blue-500" />} 
          />
          <StatCard 
            title="Avg Success Rate" 
            value={`${stats.successRate}%`} 
            icon={<CheckCircle2 className="h-4 w-4 text-emerald-500" />} 
          />
          <StatCard 
            title="Failed Builds" 
            value={stats.failedBuilds} 
            icon={<XCircle className="h-4 w-4 text-red-500" />} 
          />
          <StatCard 
            title="Active Runs" 
            value={stats.inProgress} 
            icon={<Activity className="h-4 w-4 text-orange-500 animate-pulse" />} 
          />
        </div>
      </div>

      <Separator />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Pipeline List */}
        <div className="lg:col-span-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Pipelines</h2>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search pipelines..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="grid gap-4">
            {filteredPipelines.map((pipeline) => (
              <PipelineCard
                key={pipeline.id}
                pipeline={pipeline}
                isSelected={selectedPipelineId === pipeline.id}
                onSelect={(p) => setSelectedPipelineId(p.id)}
              />
            ))}
          </div>
        </div>

        {/* Right Column: Details & Logs */}
        <div className="lg:col-span-2 space-y-8">
          <PipelineExecutionTimeline pipeline={selectedPipeline} />
          {selectedPipeline && <PipelineLogsPanel pipeline={selectedPipeline} />}
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon }: { title: string; value: string | number; icon: React.ReactNode }) {
  return (
    <div className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
      <div className="flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        {icon}
      </div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}
