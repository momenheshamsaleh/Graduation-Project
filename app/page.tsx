import { redirect } from "next/navigation"

export default function Home() {
  // For demo purposes, redirect to dashboard
  // In a real app, this would be your landing page or login screen
  redirect("/dashboard")
}
