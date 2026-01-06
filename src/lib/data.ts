export const monthlySales = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 5000 },
  { name: 'Apr', sales: 4500 },
  { name: 'May', sales: 6000 },
  { name: 'Jun', sales: 5500 },
];

export const userGrowth = [
  { name: 'Jan', users: 120 },
  { name: 'Feb', users: 150 },
  { name: 'Mar', users: 170 },
  { name: 'Apr', users: 210 },
  { name: 'May', users: 250 },
  { name: 'Jun', users: 280 },
];

export const pieChartData = [
    { name: 'Desktop', value: 400, fill: 'hsl(var(--chart-1))' },
    { name: 'Mobile', value: 300, fill: 'hsl(var(--chart-2))' },
    { name: 'Tablet', value: 200, fill: 'hsl(var(--chart-3))' },
];

export const recentActivities = [
    { id: 1, user: 'Alex', action: 'added a new product', timestamp: '5m ago' },
    { id: 2, user: 'Maria', action: 'updated user roles', timestamp: '15m ago' },
    { id: 3, user: 'John', action: 'completed an order', timestamp: '1h ago' },
    { id: 4, user: 'Sarah', action: 'generated a sales report', timestamp: '3h ago' },
    { id: 5, user: 'Mike', action: 'changed his password', timestamp: '5h ago' },
];

export const usersData = [
    { id: 1, name: 'Jane Cooper', title: 'Regional Paradigm Technician', role: 'Admin', email: 'jane.cooper@example.com', status: 'Active', avatar: 'avatar-1' },
    { id: 2, name: 'Cody Fisher', title: 'Product Directives Officer', role: 'Owner', email: 'cody.fisher@example.com', status: 'Active', avatar: 'avatar-2' },
    { id: 3, name: 'Esther Howard', title: 'Forward Response Developer', role: 'Member', email: 'esther.howard@example.com', status: 'Inactive', avatar: 'avatar-3' },
    { id: 4, name: 'Jenny Wilson', title: 'Central Security Manager', role: 'Member', email: 'jenny.wilson@example.com', status: 'Active', avatar: 'avatar-4' },
    { id: 5, name: 'Kristin Watson', title: 'Lead Implementation Liaison', role: 'Admin', email: 'kristin.watson@example.com', status: 'Suspended', avatar: 'avatar-5' },
];

export type User = (typeof usersData)[0];
