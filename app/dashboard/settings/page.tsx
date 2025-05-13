import type { Metadata } from "next"
import { Separator } from "@/components/ui/separator"
import { DashboardSettings } from "@/components/dashboard/dashboard-settings"

export const metadata: Metadata = {
  title: "Settings | Social Media Manager",
  description: "Customize your dashboard and account settings",
}

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and dashboard preferences</p>
      </div>
      <Separator />
      <DashboardSettings />
    </div>
  )
}
