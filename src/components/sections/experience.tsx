import { experience } from '@/lib/data';
import { SectionLabel } from '@/components/ui/section-label';
import { ExperienceCard } from '@/components/ui/experience-card';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { getIcon } from '@/lib/utils';

// Experience section component
export function Experience() {
  return (
    <section id="experience" className="py-[60px]">
      <div className="max-w-content mx-auto px-6">
        <SectionLabel>Work Experience</SectionLabel>

        <div className="space-y-9">
          {experience.map((company, companyIndex) => (
            <div key={company.company}>
              <div className="flex items-center gap-[10px] mb-4">
                <Card className="w-9 h-9 rounded-md flex items-center justify-center text-[12px] border border-border bg-card shadow-none p-0 min-w-[28px] min-h-[28px]">
                  <Image
                    src={company.icon}
                    alt={company.company}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
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

              {company.roles.map((role, roleIndex) => (
                <ExperienceCard
                  key={role.title}
                  icon={getIcon(role.icon)}
                  title={role.title}
                  meta={`${role.type} · ${role.period}`}
                  defaultOpen={companyIndex === 0 && roleIndex === 0}
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
