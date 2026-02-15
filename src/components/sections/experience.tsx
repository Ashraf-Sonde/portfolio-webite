import { experience } from '@/lib/data';
import { SectionLabel } from '@/components/ui/section-label';
import { AccordionCard } from '@/components/ui/accordion-card';
import { Card } from '@/components/ui/card';

export function Experience() {
  return (
    <section id="experience" className="py-[60px]">
      <div className="max-w-content mx-auto px-6">
        <SectionLabel>Work Experience</SectionLabel>

        <div className="space-y-9">
          {experience.map((company) => (
            <div key={company.company}>
              <div className="flex items-center gap-[10px] mb-4">
                <Card className="w-7 h-7 rounded-md flex items-center justify-center text-[12px] border border-border bg-card shadow-none p-0 min-w-[28px] min-h-[28px]">
                  {company.icon}
                </Card>
                <span className="text-[16px] font-semibold text-foreground">
                  {company.company}
                </span>
                {company.active && (
                  <span
                    className="w-[7px] h-[7px] rounded-full flex-shrink-0 bg-[var(--dot-active)]"
                    style={{
                      boxShadow: '0 0 6px var(--dot-active)',
                    }}
                    title="Currently employed"
                  />
                )}
              </div>

              {company.roles.map((role) => (
                <AccordionCard
                  key={role.title}
                  icon={role.icon}
                  title={role.title}
                  meta={`${role.type} · ${role.period}`}
                  bullets={role.bullets}
                  tags={role.tags}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
