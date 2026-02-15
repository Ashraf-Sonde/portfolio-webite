'use client';

import { useEffect, useState } from 'react';
import { siteConfig } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Nav() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const saved = (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
    setTheme(saved);
    document.documentElement.className = saved;
  }, []);

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.className = next;
    localStorage.setItem('theme', next);
  }

  function scrollTo(id: string) {
    const el = document.querySelector(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  return (
    <nav
      className="sticky top-0 z-[100] border-b border-border"
      style={{
        background: 'color-mix(in srgb, var(--bg) 85%, transparent)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div className="max-w-content mx-auto px-6 md:px-0 h-[52px] flex items-center justify-between font-mono-tight">
        <Button
          variant="ghost"
          onClick={() => scrollTo('#hero')}
          className={cn(
            'font-mono-tight text-[13px] tracking-[0.02em] text-muted-foreground hover:text-foreground h-auto px-0 hover:bg-transparent'
          )}
        >
          <span className="text-foreground">{siteConfig.initials}</span>
          {' · '}
          {siteConfig.domain}
        </Button>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollTo('#about')}
            className="hidden sm:flex text-[13px] text-muted-foreground hover:text-foreground h-8 px-[10px] rounded-md"
          >
            About
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollTo('#experience')}
            className="hidden sm:flex text-[13px] text-muted-foreground hover:text-foreground h-8 px-[10px] rounded-md"
          >
            Work
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollTo('#projects')}
            className="hidden sm:flex text-[13px] text-muted-foreground hover:text-foreground h-8 px-[10px] rounded-md"
          >
            Projects
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollTo('#contact')}
            className="hidden sm:flex text-[13px] text-muted-foreground hover:text-foreground h-8 px-[10px] rounded-md"
          >
            Contact
          </Button>
          <Button
            variant="secondary"
            size="icon"
            onClick={toggleTheme}
            className="ml-2 h-8 w-8 rounded-md text-[14px]"
            title="Toggle theme"
          >
            {theme === 'dark' ? '◑' : '◐'}
          </Button>
        </div>
      </div>
    </nav>
  );
}
