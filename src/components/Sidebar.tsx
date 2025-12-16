"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, CreditCard, Settings, LogOut, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { Button } from './ui/button';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-background/80 backdrop-blur-md transition-all flex flex-col p-6">
      <div className="flex items-center gap-2 mb-8 px-2">
        <Mail className="h-6 w-6" />
        <span className="text-xl font-bold">Unsub AI</span>
      </div>

      <nav className="flex flex-col gap-2 flex-1">
        <Link href="/dashboard">
          <Button
            variant={pathname === '/dashboard' ? 'secondary' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <Home size={18} />
            Dashboard
          </Button>
        </Link>
        <Link href="/pricing">
          <Button
            variant={pathname === '/pricing' ? 'secondary' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <CreditCard size={18} />
            Pricing
          </Button>
        </Link>
        <Button variant="ghost" className="w-full justify-start gap-2 opacity-50 cursor-not-allowed">
          <Settings size={18} />
          Settings
        </Button>
      </nav>

      <div className="mt-auto flex flex-col gap-4">
        <div className="flex items-center justify-between px-2 bg-muted/50 p-2 rounded-lg">
          <span className="text-sm font-medium">Theme</span>
          <ThemeToggle />
        </div>
        <div className="h-px bg-border" />
        <Link href="/">
          <Button variant="ghost" className="w-full justify-start gap-2 text-destructive hover:text-destructive hover:bg-destructive/10">
            <LogOut size={18} />
            Logout
          </Button>
        </Link>
      </div>
    </aside>
  );
}
