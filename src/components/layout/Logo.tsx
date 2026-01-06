import { PanelsTopLeft } from 'lucide-react';
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function NovaAdminLogo({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center gap-2", className)} {...props}>
      <PanelsTopLeft className="h-6 w-6 text-primary" />
      <span className="text-xl font-bold font-headline">NovaAdmin</span>
    </div>
  );
}
