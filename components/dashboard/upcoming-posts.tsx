import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, Instagram, Linkedin, Twitter } from "lucide-react"

export default function UpcomingPosts() {
  const posts = [
    {
      id: 1,
      content: "Exciting news! We're launching our new product next week. Stay tuned for more details!",
      date: "May 15, 2025",
      time: "10:00 AM",
      platform: "Twitter",
      icon: Twitter,
      color: "text-blue-500",
    },
    {
      id: 2,
      content: "Check out our latest blog post on social media marketing strategies for 2025.",
      date: "May 16, 2025",
      time: "2:30 PM",
      platform: "LinkedIn",
      icon: Linkedin,
      color: "text-blue-700",
    },
    {
      id: 3,
      content: "Behind the scenes look at our team building event! #TeamSpirit #WorkCulture",
      date: "May 17, 2025",
      time: "12:00 PM",
      platform: "Instagram",
      icon: Instagram,
      color: "text-pink-600",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Posts</CardTitle>
        <CardDescription>Your scheduled content for the next few days</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="flex flex-col space-y-2 rounded-lg border p-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className={post.color}>
                      <post.icon className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <Badge variant="outline">{post.platform}</Badge>
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <CalendarDays className="mr-1 h-3 w-3" />
                  {post.date}
                  <Clock className="ml-2 mr-1 h-3 w-3" />
                  {post.time}
                </div>
              </div>
              <p className="text-sm">{post.content}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
