"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Facebook, Instagram, Linkedin, MoreHorizontal, Twitter } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ConnectedAccounts() {
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      platform: "Twitter",
      handle: "@yourcompany",
      connected: true,
      icon: Twitter,
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950",
      lastSync: "2 hours ago",
      permissions: ["Read", "Write", "Direct Messages"],
    },
    {
      id: 2,
      platform: "Instagram",
      handle: "@yourcompany",
      connected: true,
      icon: Instagram,
      color: "text-pink-600",
      bgColor: "bg-pink-50 dark:bg-pink-950",
      lastSync: "1 hour ago",
      permissions: ["Read", "Write", "Comments"],
    },
    {
      id: 3,
      platform: "Facebook",
      handle: "Your Company",
      connected: true,
      icon: Facebook,
      color: "text-blue-700",
      bgColor: "bg-blue-50 dark:bg-blue-950",
      lastSync: "3 hours ago",
      permissions: ["Read", "Write", "Page Management"],
    },
    {
      id: 4,
      platform: "LinkedIn",
      handle: "Your Company",
      connected: false,
      icon: Linkedin,
      color: "text-blue-800",
      bgColor: "bg-blue-50 dark:bg-blue-950",
      lastSync: "Never",
      permissions: [],
    },
  ])

  const toggleConnection = (id: number) => {
    setAccounts(
      accounts.map((account) => (account.id === id ? { ...account, connected: !account.connected } : account)),
    )
  }

  return (
    <div className="grid gap-6">
      {accounts.map((account) => (
        <Card key={account.id}>
          <CardContent className="p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className={`rounded-full p-3 ${account.bgColor}`}>
                  <account.icon className={`h-6 w-6 ${account.color}`} />
                </div>
                <div>
                  <h3 className="font-medium">{account.platform}</h3>
                  <p className="text-sm text-muted-foreground">{account.handle}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-end gap-1">
                  <div className="flex items-center">
                    <Badge variant={account.connected ? "default" : "outline"}>
                      {account.connected ? "Connected" : "Disconnected"}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">Last sync: {account.lastSync}</p>
                </div>
                <Switch checked={account.connected} onCheckedChange={() => toggleConnection(account.id)} />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">More options</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Options</DropdownMenuLabel>
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Refresh Token</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">Remove Account</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            {account.connected && (
              <div className="mt-4">
                <h4 className="mb-2 text-sm font-medium">Permissions</h4>
                <div className="flex flex-wrap gap-2">
                  {account.permissions.map((permission) => (
                    <Badge key={permission} variant="secondary">
                      {permission}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
