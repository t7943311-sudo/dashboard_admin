"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartTooltipContent,
} from "@/components/ui/chart"
import { monthlySales } from '@/lib/data';

export function MonthlySalesChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Sales</CardTitle>
        <CardDescription>A line chart showing sales over the last 6 months.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
            <LineChart
                data={monthlySales}
                margin={{ top: 5, right: 10, left: -10, bottom: 0 }}
            >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value / 1000}k`} />
                <Tooltip
                  cursor={{ stroke: 'hsl(var(--border))', strokeWidth: 2, strokeDasharray: '3 3' }}
                  content={<ChartTooltipContent />}
                />
                <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    dot={{ r: 4, fill: 'hsl(var(--primary))' }}
                    activeDot={{ r: 6, fill: 'hsl(var(--primary))' }}
                />
            </LineChart>
            </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
