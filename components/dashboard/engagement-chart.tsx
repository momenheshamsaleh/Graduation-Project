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
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"

interface EngagementChartProps {
  className?: string
}

export default function EngagementChart({ className }: EngagementChartProps) {
  const data = [
    { date: "May 1", twitter: 2400, instagram: 4000, facebook: 2400, linkedin: 1800 },
    { date: "May 2", twitter: 1398, instagram: 3000, facebook: 2210, linkedin: 1600 },
    { date: "May 3", twitter: 9800, instagram: 2000, facebook: 2290, linkedin: 1700 },
    { date: "May 4", twitter: 3908, instagram: 2780, facebook: 3908, linkedin: 1500 },
    { date: "May 5", twitter: 4800, instagram: 1890, facebook: 2500, linkedin: 2100 },
    { date: "May 6", twitter: 3800, instagram: 2390, facebook: 3300, linkedin: 1900 },
    { date: "May 7", twitter: 4300, instagram: 3490, facebook: 3100, linkedin: 2300 },
  ]

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Engagement Trends</CardTitle>
        <CardDescription>Engagement metrics across all platforms</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="h-[300px]">
          <ChartLegend className="justify-center gap-8">
            <ChartLegendItem name="Twitter" color="#1DA1F2" />
            <ChartLegendItem name="Instagram" color="#E1306C" />
            <ChartLegendItem name="Facebook" color="#4267B2" />
            <ChartLegendItem name="LinkedIn" color="#0077B5" />
          </ChartLegend>
          <Chart>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
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
                <Area type="monotone" dataKey="twitter" stackId="1" stroke="#1DA1F2" fill="#1DA1F2" fillOpacity={0.2} />
                <Area
                  type="monotone"
                  dataKey="instagram"
                  stackId="2"
                  stroke="#E1306C"
                  fill="#E1306C"
                  fillOpacity={0.2}
                />
                <Area
                  type="monotone"
                  dataKey="facebook"
                  stackId="3"
                  stroke="#4267B2"
                  fill="#4267B2"
                  fillOpacity={0.2}
                />
                <Area
                  type="monotone"
                  dataKey="linkedin"
                  stackId="4"
                  stroke="#0077B5"
                  fill="#0077B5"
                  fillOpacity={0.2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </Chart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
