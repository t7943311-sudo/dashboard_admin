"use client"

import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from 'recharts';
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
import { pieChartData } from '@/lib/data';

export function SamplePieChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Traffic Source</CardTitle>
        <CardDescription>A pie chart showing traffic sources.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip
                cursor={{ fill: 'hsl(var(--accent))', opacity: 0.3 }}
                content={<ChartTooltipContent />}
              />
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={120}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
