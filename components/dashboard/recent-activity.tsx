import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Facebook, Heart, Instagram, MessageCircle, Twitter } from "lucide-react"

export default function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: "like",
      user: "John Smith",
      action: "liked your post",
      time: "5m ago",
      platform: "Twitter",
      icon: Twitter,
      color: "text-blue-500",
    },
    {
      id: 2,
      type: "comment",
      user: "Sarah Johnson",
      action: "commented on your photo",
      time: "15m ago",
      platform: "Instagram",
      icon: Instagram,
      color: "text-pink-600",
    },
    {
      id: 3,
      type: "like",
      user: "Michael Brown",
      action: "liked your update",
      time: "1h ago",
      platform: "Facebook",
      icon: Facebook,
      color: "text-blue-700",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest interactions across your accounts</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={activity.user} />
                <AvatarFallback>
                  {activity.user
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col space-y-1">
                <p className="text-sm">
                  <span className="font-medium">{activity.user}</span> {activity.action}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{activity.time}</span>
                  <span className="flex items-center gap-1">
                    <activity.icon className={`h-3 w-3 ${activity.color}`} />
                    {activity.platform}
                  </span>
                </div>
              </div>
              <div className="ml-auto">
                {activity.type === "like" ? (
                  <Heart className="h-4 w-4 text-red-500" />
                ) : (
                  <MessageCircle className="h-4 w-4 text-blue-500" />
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
