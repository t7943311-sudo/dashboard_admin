import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NovaAdminLogo } from "@/components/layout/Logo"

export default function Error404Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-background">
      <NovaAdminLogo className="mb-8" />
      <h1 className="text-6xl md:text-8xl font-black text-primary animate-pulse">404</h1>
      <h2 className="mt-4 text-2xl md:text-4xl font-bold text-foreground">Page Not Found</h2>
      <p className="mt-2 text-md md:text-lg text-muted-foreground max-w-md">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Go back to Dashboard</Link>
      </Button>
    </div>
  )
}
