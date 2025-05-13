import type { Metadata } from "next"
import { CalendarView } from "@/components/dashboard/calendar-view"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export const metadata: Metadata = {
  title: "Content Calendar | Social Media Manager",
  description: "Schedule and manage your social media posts",
}

export default function CalendarPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Content Calendar</h1>
          <p className="text-muted-foreground">Schedule and manage your social media posts across all platforms</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Post
        </Button>
      </div>
      <CalendarView />
    </div>
  )
}
