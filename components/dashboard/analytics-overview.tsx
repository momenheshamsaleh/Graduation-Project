import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, TrendingUp, Users, Eye, MessageSquare } from "lucide-react"

interface AnalyticsOverviewProps {
  className?: string
}

export default function AnalyticsOverview({ className }: AnalyticsOverviewProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Analytics Overview</CardTitle>
        <CardDescription>Your social media performance at a glance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-muted-foreground">Impressions</span>
                  <span className="text-2xl font-bold">24.8K</span>
                </div>
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <Eye className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-green-600">
                <ArrowUpRight className="mr-1 h-4 w-4" />
                <span>12.5%</span>
                <span className="ml-1 text-muted-foreground">vs last period</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-muted-foreground">Engagement</span>
                  <span className="text-2xl font-bold">8.2K</span>
                </div>
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <MessageSquare className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-green-600">
                <ArrowUpRight className="mr-1 h-4 w-4" />
                <span>8.3%</span>
                <span className="ml-1 text-muted-foreground">vs last period</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-muted-foreground">Followers</span>
                  <span className="text-2xl font-bold">12.5K</span>
                </div>
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <Users className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-green-600">
                <ArrowUpRight className="mr-1 h-4 w-4" />
                <span>4.2%</span>
                <span className="ml-1 text-muted-foreground">vs last period</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-muted-foreground">Growth</span>
                  <span className="text-2xl font-bold">+5.3%</span>
                </div>
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <TrendingUp className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-green-600">
                <ArrowUpRight className="mr-1 h-4 w-4" />
                <span>2.1%</span>
                <span className="ml-1 text-muted-foreground">vs last period</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  )
}
