import { useNotificationsData } from "../hooks/use-notifications-data";
import { NotificationChannelCard } from "../components/notification-channel-card";
import { AlertLogsPanel } from "../components/alert-logs-panel";
import { NotificationRulesTable } from "../components/notification-rules-table";
import { CreateNotificationRuleModal } from "../components/create-notification-rule-modal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function NotificationsPage() {
  const { data, isLoading } = useNotificationsData();

  if (isLoading) {
    return <div className="flex items-center justify-center h-full">Loading notifications...</div>;
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Notification Systems</h2>
        <div className="flex items-center space-x-2">
          <CreateNotificationRuleModal />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Channels</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.stats.activeChannels}</div>
            <p className="text-xs text-muted-foreground">Connected notification platforms</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Alerts Sent Today</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.stats.alertsSentToday}</div>
            <p className="text-xs text-muted-foreground">+12% from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Failed Deliveries</CardTitle>
            <ShieldAlert className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.stats.failedDeliveries}</div>
            <p className="text-xs text-muted-foreground">Requires attention</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {data?.channels.map((channel) => (
          <NotificationChannelCard key={channel.id} channel={channel} />
        ))}
      </div>

      <Tabs defaultValue="rules" className="space-y-4">
        <TabsList>
          <TabsTrigger value="rules">Notification Rules</TabsTrigger>
          <TabsTrigger value="logs">Alert Logs</TabsTrigger>
        </TabsList>
        <TabsContent value="rules" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Event Mapping Rules</CardTitle>
            </CardHeader>
            <CardContent>
              <NotificationRulesTable rules={data?.rules || []} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="logs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recent Alert Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <AlertLogsPanel logs={data?.logs || []} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
