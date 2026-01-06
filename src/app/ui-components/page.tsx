import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Terminal } from "lucide-react"
import DashboardLayout from "../dashboard/layout"

export default function UiComponentsPage() {
  return (
    <DashboardLayout>
        <div className="space-y-8">
        <Card>
            <CardHeader>
            <CardTitle>UI Components</CardTitle>
            <CardDescription>A showcase of various UI components available in NovaAdmin.</CardDescription>
            </CardHeader>
        </Card>

        {/* Buttons */}
        <Card>
            <CardHeader>
            <CardTitle>Buttons</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            </CardContent>
        </Card>

        {/* Cards */}
        <Card>
            <CardHeader>
            <CardTitle>Cards</CardTitle>
            </CardHeader>
            <CardContent>
            <Card className="max-w-sm">
                <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>This is a card description.</CardDescription>
                </CardHeader>
                <CardContent>
                <p>This is the main content of the card. Use it to display information, forms, or any other content.</p>
                </CardContent>
                <CardFooter>
                <Button>Action</Button>
                </CardFooter>
            </Card>
            </CardContent>
        </Card>

        {/* Alerts */}
        <Card>
            <CardHeader>
            <CardTitle>Alerts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
            <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                This is a default alert component.
                </AlertDescription>
            </Alert>
            <Alert variant="destructive">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Error!</AlertTitle>
                <AlertDescription>
                This is a destructive alert component for errors.
                </AlertDescription>
            </Alert>
            </CardContent>
        </Card>

        {/* Badges */}
        <Card>
            <CardHeader>
            <CardTitle>Badges</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="warning">Warning</Badge>
            </CardContent>
        </Card>

        {/* Modals (Dialogs) */}
        <Card>
            <CardHeader>
            <CardTitle>Modals (Dialogs)</CardTitle>
            </CardHeader>
            <CardContent>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Open Modal</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                        Name
                        </Label>
                        <Input id="name" value="Admin User" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                        Username
                        </Label>
                        <Input id="username" value="@admin" className="col-span-3" />
                    </div>
                    </div>
                    <DialogFooter>
                    <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
                </Dialog>
            </CardContent>
        </Card>
        </div>
    </DashboardLayout>
  )
}
