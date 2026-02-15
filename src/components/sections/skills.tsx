import { skills } from '@/lib/data';
import { SectionLabel } from '@/components/ui/section-label';
import { Tag } from '@/components/ui/tag';
import { Card, CardContent } from '@/components/ui/card';

export function Skills() {
  return (
    <section id="skills" className="py-[60px]">
      <div className="max-w-content mx-auto px-6">
        <SectionLabel>Stack</SectionLabel>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
          {skills.map((group) => (
            <Card
              key={group.label}
              className="rounded-lg border-border bg-card shadow-none"
            >
              <CardContent className="p-[18px]">
                <div className="skill-label font-mono-tight text-[11px] uppercase tracking-[0.1em] text-muted-foreground mb-3 flex items-center gap-[7px]">
                  {group.label}
                </div>
                <div className="flex flex-wrap gap-[5px]">
                  {group.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
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
