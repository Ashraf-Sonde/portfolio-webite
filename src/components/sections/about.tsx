import { aboutStats } from '@/lib/data';
import { SectionLabel } from '@/components/ui/section-label';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  return (
    <section id="about" className="py-[60px]">
      <div className="max-w-content mx-auto px-6">
        <SectionLabel>About</SectionLabel>

        <p className="text-[15px] text-muted-foreground leading-[1.8] max-w-[100%] text-justify">
          I&apos;m a{' '}
          <strong className="text-foreground font-medium">
            backend-focused engineer with 7+ years of experience
          </strong>{' '}
          designing systems that are fast, predictable, and operationally
          simple. I&apos;ve spent most of that time on the server side —
          distributed services, API design, data pipelines, and the
          infrastructure that holds it all together.
        </p>

        <p className="text-[15px] text-muted-foreground leading-[1.8] max-w-[100%] text-justify mt-[1rem]">
          I understand{' '}
          <strong className="text-foreground font-medium">
            system design tradeoffs
          </strong>{' '}
          — when to use a message queue vs. a direct call, when eventual
          consistency is acceptable, and when it isn&apos;t. When frontend work
          is needed, I can deliver it without slowing the team down.
        </p>

        <div className="grid grid-cols-3 gap-px border border-border rounded-lg overflow-hidden mt-8 bg-border">
          {aboutStats.map((stat) => (
            <Card
              key={stat.label}
              className="rounded-none border-0 shadow-none bg-card"
            >
              <CardContent className="py-5 px-5 text-center p-6 pt-6">
                <span className="font-mono-tight text-[22px] font-semibold tracking-[-0.02em] text-foreground block">
                  {stat.number}
                </span>
                <div className="text-[11px] uppercase tracking-[0.08em] text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
