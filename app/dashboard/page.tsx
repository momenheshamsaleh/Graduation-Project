import type { Metadata } from "next"
import DashboardHeader from "@/components/dashboard/dashboard-header"
import AnalyticsOverview from "@/components/dashboard/analytics-overview"
import UpcomingPosts from "@/components/dashboard/upcoming-posts"
import AccountsOverview from "@/components/dashboard/accounts-overview"
import EngagementChart from "@/components/dashboard/engagement-chart"
import RecentActivity from "@/components/dashboard/recent-activity"

export const metadata: Metadata = {
  title: "Dashboard | Social Media Manager",
  description: "Manage all your social media accounts in one place",
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <DashboardHeader />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnalyticsOverview className="lg:col-span-2" />
        <UpcomingPosts />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <EngagementChart className="lg:col-span-2" />
        <div className="flex flex-col gap-6">
          <AccountsOverview />
          <RecentActivity />
        </div>
      </div>
    </div>
  )
}
