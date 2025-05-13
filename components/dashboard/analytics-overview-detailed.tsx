"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Chart,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendItem,
} from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"

export function AnalyticsOverviewDetailed() {
  const data = [
    { name: "Jan", impressions: 4000, engagement: 2400, followers: 1200 },
    { name: "Feb", impressions: 3000, engagement: 1398, followers: 1300 },
    { name: "Mar", impressions: 2000, engagement: 9800, followers: 1400 },
    { name: "Apr", impressions: 2780, engagement: 3908, followers: 1500 },
    { name: "May", impressions: 1890, engagement: 4800, followers: 1700 },
    { name: "Jun", impressions: 2390, engagement: 3800, followers: 1800 },
    { name: "Jul", impressions: 3490, engagement: 4300, followers: 2000 },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle>Performance Metrics</CardTitle>
          <CardDescription>Monthly performance across all platforms</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer className="h-[350px]">
            <ChartLegend className="justify-center gap-8">
              <ChartLegendItem name="Impressions" color="#4f46e5" />
              <ChartLegendItem name="Engagement" color="#06b6d4" />
              <ChartLegendItem name="Followers" color="#10b981" />
            </ChartLegend>
            <Chart>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data}
                  margin={{
                    top: 20,
                    right: 0,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="name" className="text-sm text-muted-foreground" />
                  <YAxis className="text-sm text-muted-foreground" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="impressions" fill="#4f46e5" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="engagement" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="followers" fill="#10b981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Chart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Top Performing Content</CardTitle>
          <CardDescription>Content with highest engagement</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg border p-3">
                <div className="h-12 w-12 shrink-0 rounded-md bg-muted" />
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium">Product announcement post</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>8.5K impressions</span>
                    <span>•</span>
                    <span>2.3K engagements</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Audience Demographics</CardTitle>
          <CardDescription>Breakdown of your audience</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span>Age Groups</span>
                <span className="text-muted-foreground">% of audience</span>
              </div>
              <div className="space-y-2">
                {[
                  { group: "18-24", percentage: 15 },
                  { group: "25-34", percentage: 40 },
                  { group: "35-44", percentage: 25 },
                  { group: "45-54", percentage: 12 },
                  { group: "55+", percentage: 8 },
                ].map((item) => (
                  <div key={item.group} className="flex items-center gap-2">
                    <div className="w-24 text-sm">{item.group}</div>
                    <div className="flex-1">
                      <div className="h-2 rounded-full bg-muted">
                        <div className="h-2 rounded-full bg-primary" style={{ width: `${item.percentage}%` }} />
                      </div>
                    </div>
                    <div className="w-10 text-right text-sm">{item.percentage}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Geographic Distribution</CardTitle>
          <CardDescription>Where your audience is located</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { country: "United States", percentage: 45 },
              { country: "United Kingdom", percentage: 15 },
              { country: "Canada", percentage: 12 },
              { country: "Australia", percentage: 8 },
              { country: "Germany", percentage: 6 },
              { country: "Other", percentage: 14 },
            ].map((item) => (
              <div key={item.country} className="flex items-center justify-between">
                <span className="text-sm">{item.country}</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-16 rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary" style={{ width: `${item.percentage}%` }} />
                  </div>
                  <span className="text-sm text-muted-foreground">{item.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
