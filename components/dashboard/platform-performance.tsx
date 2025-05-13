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
import { Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function PlatformPerformance() {
  const platformData = [
    { name: "Twitter", value: 35, color: "#1DA1F2", icon: Twitter },
    { name: "Instagram", value: 40, color: "#E1306C", icon: Instagram },
    { name: "Facebook", value: 15, color: "#4267B2", icon: Facebook },
    { name: "LinkedIn", value: 10, color: "#0077B5", icon: Linkedin },
  ]

  const engagementData = [
    { platform: "Twitter", likes: 4000, comments: 2400, shares: 1800 },
    { platform: "Instagram", likes: 5000, comments: 3000, shares: 1200 },
    { platform: "Facebook", likes: 2500, comments: 1500, shares: 800 },
    { platform: "LinkedIn", likes: 1800, comments: 1000, shares: 600 },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Engagement by Platform</CardTitle>
          <CardDescription>Breakdown of engagement metrics across platforms</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer className="h-[350px]">
            <ChartLegend className="justify-center gap-8">
              <ChartLegendItem name="Likes" color="#4f46e5" />
              <ChartLegendItem name="Comments" color="#06b6d4" />
              <ChartLegendItem name="Shares" color="#10b981" />
            </ChartLegend>
            <Chart>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={engagementData}
                  margin={{
                    top: 20,
                    right: 0,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="platform" className="text-sm text-muted-foreground" />
                  <YAxis className="text-sm text-muted-foreground" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="likes" fill="#4f46e5" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="comments" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="shares" fill="#10b981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Chart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Audience Distribution</CardTitle>
          <CardDescription>Followers across platforms</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer className="h-[300px]">
            <Chart>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={platformData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {platformData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </Chart>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              {platformData.map((platform) => (
                <div key={platform.name} className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: platform.color }} />
                  <span className="text-sm">{platform.name}</span>
                  <span className="text-sm font-medium">{platform.value}%</span>
                </div>
              ))}
            </div>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle>Platform Performance</CardTitle>
          <CardDescription>Detailed metrics for each platform</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {platformData.map((platform) => (
              <Card key={platform.name}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full p-2" style={{ backgroundColor: `${platform.color}20` }}>
                      <platform.icon className="h-5 w-5" style={{ color: platform.color }} />
                    </div>
                    <span className="font-medium">{platform.name}</span>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Impressions</span>
                      <span className="font-medium">24.8K</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Engagement</span>
                      <span className="font-medium">8.2K</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">CTR</span>
                      <span className="font-medium">3.6%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Growth</span>
                      <span className="font-medium text-green-600">+5.3%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
