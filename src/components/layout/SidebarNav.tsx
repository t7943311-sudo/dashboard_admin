'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Table,
  ClipboardList,
  Component,
  Settings,
  LogOut,
  User,
  ShieldCheck,
  AlertTriangle,
  ChevronRight,
} from 'lucide-react';
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from '@/components/ui/sidebar';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { cn } from '@/lib/utils';

const mainMenuItems = [
  { href: '/', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/users', label: 'Users', icon: Users },
  { href: '/charts', label: 'Charts', icon: BarChart3 },
  { href: '/tables', label: 'Tables', icon: Table },
  { href: '/forms', label: 'Forms', icon: ClipboardList },
  { href: '/ui-components', label: 'UI Components', icon: Component },
];

const settingsMenuItem = { href: '/settings', label: 'Settings', icon: Settings };

export function SidebarNav() {
  const pathname = usePathname();
  
  const isActive = (href: string) => {
    if (href === '/') return pathname === href;
    return pathname.startsWith(href);
  }

  const CollapsibleMenuItem = ({
    icon: Icon,
    label,
    children,
    subLinks = [],
  }: {
    icon: React.ElementType,
    label: string,
    children: React.ReactNode,
    subLinks?: string[],
  }) => {
    const isParentActive = subLinks.some(link => isActive(link));
    const [isOpen, setIsOpen] = useState(isParentActive);

    React.useEffect(() => {
        if(isParentActive) {
            setIsOpen(true);
        }
    }, [isParentActive]);

    return (
      <Collapsible asChild open={isOpen} onOpenChange={setIsOpen}>
        <SidebarMenuItem className="w-full">
          <CollapsibleTrigger asChild>
            <SidebarMenuButton tooltip={label} isActive={isParentActive && !isOpen} className="w-full">
              <Icon className="h-4 w-4" />
              <span>{label}</span>
              <ChevronRight className={cn("ml-auto h-4 w-4 transition-transform", isOpen && "rotate-90")} />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              {children}
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    )
  }

  return (
    <div className="flex flex-col justify-between h-full">
        <SidebarMenu>
          {mainMenuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href}>
                <SidebarMenuButton
                  isActive={isActive(item.href)}
                  tooltip={item.label}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
          
          <div className='px-3 py-2 text-xs font-semibold text-muted-foreground/80 tracking-wider'>PAGES</div>

          <SidebarMenuItem>
            <Link href="/user-profile">
              <SidebarMenuButton isActive={isActive('/user-profile')} tooltip="User Profile">
                <User className="h-4 w-4" />
                <span>User Profile</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
          
          <CollapsibleMenuItem icon={ShieldCheck} label="Authentication" subLinks={['/login', '/register', '/forgot-password']}>
            <SidebarMenuSubItem>
              <Link href="/login"><SidebarMenuSubButton isActive={isActive('/login')}>Login</SidebarMenuSubButton></Link>
            </SidebarMenuSubItem>
            <SidebarMenuSubItem>
              <Link href="/register"><SidebarMenuSubButton isActive={isActive('/register')}>Register</SidebarMenuSubButton></Link>
            </SidebarMenuSubItem>
            <SidebarMenuSubItem>
              <Link href="/forgot-password"><SidebarMenuSubButton isActive={isActive('/forgot-password')}>Forgot Password</SidebarMenuSubButton></Link>
            </SidebarMenuSubItem>
          </CollapsibleMenuItem>

          <CollapsibleMenuItem icon={AlertTriangle} label="Error Pages" subLinks={['/error-404', '/error-500']}>
            <SidebarMenuSubItem>
              <Link href="/error-404"><SidebarMenuSubButton isActive={isActive('/error-404')}>404 Not Found</SidebarMenuSubButton></Link>
            </SidebarMenuSubItem>
            <SidebarMenuSubItem>
              <Link href="/error-500"><SidebarMenuSubButton isActive={isActive('/error-500')}>500 Server Error</SidebarMenuSubButton></Link>
            </SidebarMenuSubItem>
          </CollapsibleMenuItem>
        </SidebarMenu>

        <SidebarMenu>
            <SidebarMenuItem>
              <Link href={settingsMenuItem.href}>
                  <SidebarMenuButton
                  isActive={pathname === settingsMenuItem.href}
                  tooltip={settingsMenuItem.label}
                  >
                  <settingsMenuItem.icon className="h-4 w-4" />
                  <span>{settingsMenuItem.label}</span>
                  </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <Link href="/login">
                    <SidebarMenuButton tooltip="Logout">
                        <LogOut className="h-4 w-4" />
                        <span>Logout</span>
                    </SidebarMenuButton>
                </Link>
            </SidebarMenuItem>
        </SidebarMenu>
    </div>
  );
}
