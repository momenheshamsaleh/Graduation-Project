import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function AccountsOverview() {
  const accounts = [
    {
      platform: "Twitter",
      handle: "@yourcompany",
      followers: "8.2K",
      icon: Twitter,
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950",
    },
    {
      platform: "Instagram",
      handle: "@yourcompany",
      followers: "15.3K",
      icon: Instagram,
      color: "text-pink-600",
      bgColor: "bg-pink-50 dark:bg-pink-950",
    },
    {
      platform: "Facebook",
      handle: "Your Company",
      followers: "12.8K",
      icon: Facebook,
      color: "text-blue-700",
      bgColor: "bg-blue-50 dark:bg-blue-950",
    },
    {
      platform: "LinkedIn",
      handle: "Your Company",
      followers: "5.4K",
      icon: Linkedin,
      color: "text-blue-800",
      bgColor: "bg-blue-50 dark:bg-blue-950",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Connected Accounts</CardTitle>
        <CardDescription>Manage your social media accounts</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {accounts.map((account) => (
            <div key={account.platform} className="flex items-center justify-between rounded-lg border p-3">
              <div className="flex items-center gap-3">
                <div className={`rounded-full p-2 ${account.bgColor}`}>
                  <account.icon className={`h-4 w-4 ${account.color}`} />
                </div>
                <div>
                  <div className="font-medium">{account.platform}</div>
                  <div className="text-xs text-muted-foreground">{account.handle}</div>
                </div>
              </div>
              <Badge variant="secondary">{account.followers} followers</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
