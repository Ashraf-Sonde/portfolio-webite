import { skills } from '@/lib/data';
import { SectionLabel } from '@/components/ui/section-label';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Boxes,
  Braces,
  Cloud,
  Component,
  Cpu,
  Database,
  LucideIcon,
  Network,
  PanelsTopLeft,
  Server,
  Workflow,
} from 'lucide-react';

const lucideIcons: Record<string, LucideIcon> = {
  Workflow,
  Network,
  Component,
};

function renderTechIcon(icon: string, name: string) {
  if (icon.startsWith('https') || icon.startsWith('/')) {
    const isMonochrome =
      name === 'Next.js' || name === 'Shadcn/UI' || name === 'AWS' || name === 'Cursor';
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={icon}
        alt={name}
        className={
          isMonochrome
            ? 'h-4 w-4 object-contain dark:invert'
            : 'h-4 w-4 object-contain'
        }
        loading="lazy"
      />
    );
  }
  const Icon = lucideIcons[icon] ?? Cpu;
  return <Icon className="h-4 w-4" aria-hidden="true" />;
}

function categoryIcon(label: string) {
  if (label === 'Backend') return Server;
  if (label === 'Frontend') return PanelsTopLeft;
  if (label === 'Database') return Database;
  if (label === 'Cloud / Infra') return Cloud;
  if (label === 'Automation / AI Tools') return Workflow;
  return Boxes;
}

export function Skills() {
  return (
    <section id="skills" className="py-[60px]">
      <div className="max-w-content mx-auto px-6">
        <SectionLabel>Stack</SectionLabel>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {skills.map((group) => (
            <Card
              key={group.label}
              className="rounded-xl border-border bg-card/90 shadow-none backdrop-blur-sm"
            >
              <CardContent className="p-4">
                <div className="font-mono-tight text-[12px] uppercase tracking-[0.1em] text-muted-foreground mb-3 flex items-center gap-2">
                  {(() => {
                    const Icon = categoryIcon(group.label);
                    return <Icon className="h-4 w-4" aria-hidden="true" />;
                  })()}
                  {group.label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.tags.map((t) => (
                    <Button
                      key={t.name}
                      asChild
                      variant="outline"
                      className="h-8 rounded-lg border-border/80 bg-background/50 px-2 text-sm font-normal text-foreground hover:bg-accent/40 hover:text-foreground"
                    >
                      <a
                        href={t.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${t.name} technology page`}
                        title={t.name}
                      >
                        <span className="mr-1.5">{renderTechIcon(t.icon, t.name)}</span>
                        <span>{t.name}</span>
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
