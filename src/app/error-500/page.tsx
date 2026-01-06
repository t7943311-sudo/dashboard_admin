import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NovaAdminLogo } from "@/components/layout/Logo"
import { ServerCrash } from "lucide-react"

export default function Error500Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-background">
      <NovaAdminLogo className="mb-8" />
      <ServerCrash className="h-24 w-24 text-destructive animate-bounce" />
      <h1 className="mt-6 text-6xl md:text-8xl font-black text-destructive">500</h1>
      <h2 className="mt-4 text-2xl md:text-4xl font-bold text-foreground">Internal Server Error</h2>
      <p className="mt-2 text-md md:text-lg text-muted-foreground max-w-md">
        Sorry, something went wrong on our servers. Please try again or go back to the dashboard.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Go back to Dashboard</Link>
      </Button>
    </div>
  )
}
