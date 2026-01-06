import { MonthlySalesChart } from "@/components/charts/MonthlySalesChart"
import { UserGrowthChart } from "@/components/charts/UserGrowthChart"
import { SamplePieChart } from "@/components/charts/SamplePieChart"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import DashboardLayout from "../dashboard/layout"

export default function ChartsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <Card>
            <CardHeader>
                <CardTitle>Charts</CardTitle>
                <CardDescription>
                  A collection of charts powered by Recharts.
                </CardDescription>
            </CardHeader>
        </Card>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <MonthlySalesChart />
          <UserGrowthChart />
        </div>

        <SamplePieChart />
      </div>
    </DashboardLayout>
  )
}
