
import { useParams, useNavigate } from "react-router-dom"
import { useSeniorDeveloper, useSeniorDevelopersData } from "../hooks/use-senior-developers-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ShieldCheck, FileCode, MessageSquare, AlertTriangle } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export default function SeniorDeveloperDetailsPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data: developer, isLoading } = useSeniorDeveloper(id || "")
  const { activities, architectureDecisions, escalationQueue } = useSeniorDevelopersData()

  if (isLoading) return <div>Loading Profile...</div>
  if (!developer) return <div>Developer not found</div>

  const personalActivities = activities?.filter(a => a.handledBy === developer.id) || []
  const personalADRs = architectureDecisions?.filter(a => a.ownerId === developer.id) || []
  const personalEscalations = escalationQueue?.filter(e => e.assignedTo === developer.id) || []

  const trendData = [
    { name: 'Jan', approvals: 12, reviews: 25 },
    { name: 'Feb', approvals: 15, reviews: 30 },
    { name: 'Mar', approvals: 18, reviews: 28 },
    { name: 'Apr', approvals: developer.activeApprovals, reviews: developer.pendingReviews },
  ]

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Senior Developer Profile</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader className="text-center">
            <Avatar className="h-24 w-24 mx-auto border-4 border-primary/10">
              <AvatarImage src={developer.avatar} />
              <AvatarFallback>{developer.name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <CardTitle className="mt-4">{developer.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{developer.role}</p>
            <div className="flex justify-center gap-2 mt-2">
              <Badge variant="secondary">{developer.experienceYears}y Experience</Badge>
              <Badge variant="outline" className="border-green-500 text-green-700">Lvl 4 Authority</Badge>
            </div>
          </CardHeader>
          <CardContent className="grid gap-4 border-t pt-6">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Success Rate</span>
              <span className="font-bold text-green-600">{developer.successRate}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Approvals Handled</span>
              <span className="font-semibold">{developer.approvalsHandled}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Reviews Completed</span>
              <span className="font-semibold">{developer.reviewsCompleted}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">ADR Decisions</span>
              <span className="font-semibold">{developer.adrDecisions}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Governance Performance Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="approvals" stroke="#2563eb" strokeWidth={2} />
                  <Line type="monotone" dataKey="reviews" stroke="#16a34a" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-purple-500" />
              Architecture Decisions Led
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {personalADRs.map(adr => (
                <div key={adr.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{adr.title}</p>
                    <p className="text-xs text-muted-foreground">Project: {adr.projectId}</p>
                  </div>
                  <Badge variant="secondary">{adr.status}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              Escalations Managed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {personalEscalations.map(esc => (
                <div key={esc.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{esc.issueTitle}</p>
                    <p className="text-xs text-muted-foreground">Severity: {esc.severity}</p>
                  </div>
                  <Badge className={esc.status === 'OPEN' ? 'bg-orange-100 text-orange-800' : 'bg-green-100 text-green-800'}>
                    {esc.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Governance Audit Log</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {personalActivities.map(activity => (
              <div key={activity.id} className="flex items-center gap-4 p-3 border rounded-lg">
                <div className="p-2 rounded-full bg-muted">
                  {activity.type === 'APPROVAL' && <ShieldCheck className="h-4 w-4 text-green-500" />}
                  {activity.type === 'CODE_REVIEW' && <FileCode className="h-4 w-4 text-blue-500" />}
                  {activity.type === 'ADR' && <MessageSquare className="h-4 w-4 text-purple-500" />}
                  {activity.type === 'ESCALATION' && <AlertTriangle className="h-4 w-4 text-red-500" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.title}</p>
                  <p className="text-xs text-muted-foreground">{new Date(activity.timestamp).toLocaleString()}</p>
                </div>
                <Badge variant="outline">{activity.status}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
