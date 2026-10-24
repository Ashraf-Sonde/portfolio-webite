'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { trackEvent } from '@/lib/events';
import { navItems } from '@/constants';

export function Nav() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
    setTheme(saved);
    document.documentElement.className = saved;
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 640px)');
    function onChange() {
      if (mq.matches) setOpen(false);
    }
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.className = next;
    localStorage.setItem('theme', next);
    trackEvent({ name: 'theme_toggled', properties: { theme: next } });
  }

  function scrollTo(id: string) {
    const el = document.querySelector(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  function handleNavClick(item: (typeof navItems)[number]) {
    scrollTo(item.id);
    trackEvent({
      name: 'nav_section_clicked',
      properties: { section: item.section },
    });
    setOpen(false);
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
      <div className="max-w-content mx-auto px-6 lg:px-0 h-[52px] flex items-center justify-between font-mono-tight">
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
          {navItems.map((item) => (
            <Button
              key={item.section}
              variant="ghost"
              size="sm"
              onClick={() => handleNavClick(item)}
              className="hidden sm:flex text-[13px] text-muted-foreground hover:text-brand-ink hover:bg-transparent h-8 px-[10px] rounded-md"
            >
              {item.label}
            </Button>
          ))}
          <Button
            variant="secondary"
            size="icon"
            onClick={toggleTheme}
            className="ml-2 h-8 w-8 rounded-md text-[14px]"
            title="Toggle theme"
          >
            {theme === 'dark' ? '◑' : '◐'}
          </Button>
          <Button
            variant="secondary"
            size="icon"
            onClick={() => setOpen((value) => !value)}
            className="sm:hidden h-8 w-8 rounded-md"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span className="relative size-4">
              <Menu
                className={cn(
                  'absolute inset-0 transition-all duration-250 ease-out motion-reduce:transition-none',
                  open ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                )}
              />
              <X
                className={cn(
                  'absolute inset-0 transition-all duration-250 ease-out motion-reduce:transition-none',
                  open ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                )}
              />
            </span>
          </Button>
        </div>
      </div>

      <div
        id="mobile-nav"
        aria-hidden={!open}
        className={cn(
          'absolute inset-x-0 top-full z-[100] sm:hidden border border-border bg-white dark:bg-bg-card px-6 py-2 font-mono-tight m-4 rounded-lg shadow-lg transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-none',
          open
            ? 'opacity-100 translate-y-0'
            : 'pointer-events-none opacity-0 -translate-y-1'
        )}
      >
        {navItems.map((item) => (
          <Button
            key={item.section}
            variant="ghost"
            onClick={() => handleNavClick(item)}
            className="w-full justify-start text-[13px] text-muted-foreground hover:text-brand-ink hover:bg-transparent h-10 px-0 rounded-md"
          >
            {item.label}
          </Button>
        ))}
      </div>
    </nav>
  );
}
