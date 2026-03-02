
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useNavigate } from "react-router-dom"
import type { SeniorDeveloper } from "@/../mock/core/governance/seniorDevelopersData"

interface SeniorDevCardProps {
  developer: SeniorDeveloper
}

export function SeniorDevCard({ developer }: SeniorDevCardProps) {
  const navigate = useNavigate()

  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center gap-4 pb-4">
        <Avatar className="h-12 w-12 border">
          <AvatarImage src={developer.avatar} alt={developer.name} />
          <AvatarFallback>{developer.name.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold leading-none">{developer.name}</h3>
          <p className="text-sm text-muted-foreground">{developer.role}</p>
        </div>
        <Badge variant="outline" className="ml-auto">
          {developer.experienceYears}y Exp
        </Badge>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex flex-col gap-1">
            <span className="text-muted-foreground">Approvals</span>
            <span className="font-medium">{developer.approvalsHandled}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-muted-foreground">Reviews</span>
            <span className="font-medium">{developer.reviewsCompleted}</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Success Rate</span>
            <span className="font-medium">{developer.successRate}%</span>
          </div>
          <Progress value={developer.successRate} className="h-2" />
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          variant="secondary" 
          className="w-full"
          onClick={() => navigate(`/governance/senior-developers/${developer.id}`)}
        >
          View Governance Profile
        </Button>
      </CardFooter>
    </Card>
  )
}
