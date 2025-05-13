"use client"

import { useState } from "react"
import { addDays, format, startOfToday } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function CalendarView() {
  const [date, setDate] = useState<Date | undefined>(startOfToday())

  // Sample scheduled posts data
  const scheduledPosts = [
    {
      id: 1,
      date: addDays(startOfToday(), 2),
      platform: "Twitter",
      content: "Exciting news! We're launching our new product next week. Stay tuned for more details!",
      time: "10:00 AM",
      icon: Twitter,
      color: "text-blue-500 bg-blue-100 dark:bg-blue-900",
    },
    {
      id: 2,
      date: addDays(startOfToday(), 3),
      platform: "LinkedIn",
      content: "Check out our latest blog post on social media marketing strategies for 2025.",
      time: "2:30 PM",
      icon: Linkedin,
      color: "text-blue-700 bg-blue-100 dark:bg-blue-900",
    },
    {
      id: 3,
      date: addDays(startOfToday(), 5),
      platform: "Instagram",
      content: "Behind the scenes look at our team building event! #TeamSpirit #WorkCulture",
      time: "12:00 PM",
      icon: Instagram,
      color: "text-pink-600 bg-pink-100 dark:bg-pink-900",
    },
    {
      id: 4,
      date: addDays(startOfToday(), 5),
      platform: "Facebook",
      content: "We're hiring! Check out our careers page for open positions.",
      time: "3:00 PM",
      icon: Facebook,
      color: "text-blue-700 bg-blue-100 dark:bg-blue-900",
    },
  ]

  // Function to get posts for a specific date
  const getPostsForDate = (date: Date | undefined) => {
    if (!date) return []
    return scheduledPosts.filter((post) => format(post.date, "yyyy-MM-dd") === format(date, "yyyy-MM-dd"))
  }

  // Function to highlight dates with posts
  const highlightedDays = scheduledPosts.map((post) => post.date)

  return (
    <div className="grid gap-6 md:grid-cols-[350px_1fr]">
      <Card>
        <CardContent className="p-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
            modifiers={{ highlighted: highlightedDays }}
            modifiersStyles={{
              highlighted: { fontWeight: "bold", backgroundColor: "hsl(var(--primary) / 0.1)" },
            }}
          />
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">{date ? format(date, "MMMM d, yyyy") : "Select a date"}</h3>
            <div className="mt-4 space-y-4">
              {getPostsForDate(date).length > 0 ? (
                getPostsForDate(date).map((post) => (
                  <div key={post.id} className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`rounded-full p-2 ${post.color}`}>
                          <post.icon className="h-4 w-4" />
                        </div>
                        <Badge variant="outline">{post.platform}</Badge>
                      </div>
                      <span className="text-sm text-muted-foreground">{post.time}</span>
                    </div>
                    <p className="mt-3 text-sm">{post.content}</p>
                  </div>
                ))
              ) : (
                <div className="flex h-40 items-center justify-center text-muted-foreground">
                  {date ? "No posts scheduled for this date" : "Select a date to view scheduled posts"}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
