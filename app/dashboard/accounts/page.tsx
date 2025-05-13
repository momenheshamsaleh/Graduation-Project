import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { ConnectedAccounts } from "@/components/dashboard/connected-accounts"

export const metadata: Metadata = {
  title: "Accounts | Social Media Manager",
  description: "Manage your connected social media accounts",
}

export default function AccountsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Connected Accounts</h1>
          <p className="text-muted-foreground">Manage all your connected social media accounts</p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Connect Account
        </Button>
      </div>
      <ConnectedAccounts />
    </div>
  )
}
