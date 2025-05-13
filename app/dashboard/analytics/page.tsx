import type { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnalyticsOverviewDetailed } from "@/components/dashboard/analytics-overview-detailed"
import { PlatformPerformance } from "@/components/dashboard/platform-performance"
import { AudienceInsights } from "@/components/dashboard/audience-insights"

export const metadata: Metadata = {
  title: "Analytics | Social Media Manager",
  description: "View detailed analytics for your social media accounts",
}

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground">Comprehensive analytics and insights for all your social media accounts</p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="platforms">Platforms</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="mt-6">
          <AnalyticsOverviewDetailed />
        </TabsContent>
        <TabsContent value="platforms" className="mt-6">
          <PlatformPerformance />
        </TabsContent>
        <TabsContent value="audience" className="mt-6">
          <AudienceInsights />
        </TabsContent>
      </Tabs>
    </div>
  )
}
