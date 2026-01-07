import {
  Users,
  CreditCard,
  DollarSign,
  Package,
  Activity,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MonthlySalesChart } from '@/components/charts/MonthlySalesChart';
import { UserGrowthChart } from '@/components/charts/UserGrowthChart';
import { recentActivities } from '@/lib/data';

const statCards = [
  {
    title: 'Total Revenue',
    amount: '$45,231.89',
    change: '+20.1% from last month',
    icon: DollarSign,
  },
  {
    title: 'Users',
    amount: '+2350',
    change: '+180.1% from last month',
    icon: Users,
  },
  {
    title: 'Sales',
    amount: '+12,234',
    change: '+19% from last month',
    icon: CreditCard,
  },
  {
    title: 'Orders',
    amount: '573',
    change: '+201 since last hour',
    icon: Package,
  },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statCards.map((card, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
              <card.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.amount}</div>
              <p className="text-xs text-muted-foreground">{card.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-full lg:col-span-4">
            <MonthlySalesChart />
        </div>
        <div className="col-span-full lg:col-span-3">
            <UserGrowthChart />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Recent Activity
          </CardTitle>
          <CardDescription>
            An overview of recent activities in the system.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center gap-4">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={`https://picsum.photos/seed/${activity.id+15}/40/40`} alt="Avatar" data-ai-hint="person" />
                  <AvatarFallback>{activity.user.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm font-medium leading-none">
                    {activity.user}{' '}
                    <span className="text-muted-foreground font-normal">
                      {activity.action}
                    </span>
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {activity.timestamp}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
