"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Chart, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Area, AreaChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

export function AudienceInsights() {
  const genderData = [
    { name: "Male", value: 45, color: "#4f46e5" },
    { name: "Female", value: 52, color: "#ec4899" },
    { name: "Other", value: 3, color: "#10b981" },
  ]

  const ageData = [
    { name: "18-24", value: 15, color: "#4f46e5" },
    { name: "25-34", value: 40, color: "#06b6d4" },
    { name: "35-44", value: 25, color: "#10b981" },
    { name: "45-54", value: 12, color: "#f59e0b" },
    { name: "55+", value: 8, color: "#ef4444" },
  ]

  const growthData = [
    { date: "Jan", followers: 12000 },
    { date: "Feb", followers: 13200 },
    { date: "Mar", followers: 14800 },
    { date: "Apr", followers: 16500 },
    { date: "May", followers: 18200 },
    { date: "Jun", followers: 19800 },
    { date: "Jul", followers: 21500 },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Gender Distribution</CardTitle>
          <CardDescription>Breakdown by gender</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer className="h-[300px]">
            <Chart>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={genderData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {genderData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </Chart>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              {genderData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm">{item.name}</span>
                  <span className="text-sm font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Age Distribution</CardTitle>
          <CardDescription>Breakdown by age groups</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer className="h-[300px]">
            <Chart>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={ageData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {ageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </Chart>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              {ageData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm">{item.name}</span>
                  <span className="text-sm font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle>Audience Growth</CardTitle>
          <CardDescription>Follower growth over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer className="h-[350px]">
            <Chart>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={growthData}
                  margin={{
                    top: 20,
                    right: 0,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="date" className="text-sm text-muted-foreground" />
                  <YAxis className="text-sm text-muted-foreground" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area type="monotone" dataKey="followers" stroke="#4f46e5" fill="#4f46e5" fillOpacity={0.2} />
                </AreaChart>
              </ResponsiveContainer>
            </Chart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle>Audience Interests</CardTitle>
          <CardDescription>Top interests of your audience</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { category: "Technology", percentage: 65 },
              { category: "Marketing", percentage: 58 },
              { category: "Business", percentage: 52 },
              { category: "Design", percentage: 45 },
              { category: "Finance", percentage: 38 },
              { category: "Education", percentage: 32 },
            ].map((item) => (
              <div key={item.category} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{item.category}</span>
                  <span className="text-sm text-muted-foreground">{item.percentage}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-primary" style={{ width: `${item.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
