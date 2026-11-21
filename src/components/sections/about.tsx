'use client';

import { useEffect, useRef, useState } from 'react';
import { aboutStats } from '@/lib/data';
import { SectionLabel } from '@/components/ui/section-label';
import { Card, CardContent } from '@/components/ui/card';
import { CountingNumber } from '@/components/ui/counting-number';

export function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsInView, setStatsInView] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.75 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-8 py-12">
      <div className="max-w-content mx-auto px-6 lg:px-0">
        <SectionLabel>About</SectionLabel>

        <p className="text-sm sm:text-base text-muted-foreground leading-[1.5] max-w-full">
          I design and lead{' '}
          <strong className="text-foreground font-medium">
            high-scale systems
          </strong>{' '}
          with a focus on reliability, latency, and operational clarity —
          translating{' '}
          <strong className="text-foreground font-medium">
            technical decisions into measurable business outcomes
          </strong>
          . I take end-to-end ownership of products, ensuring{' '}
          <strong className="text-foreground font-medium">
            engineering excellence
          </strong>{' '}
          drives real impact.
        </p>

        <p className="text-sm sm:text-base text-justify text-muted-foreground leading-[1.5] max-w-full mt-4">
          I understand{' '}
          <strong className="text-foreground font-medium">
            system design tradeoffs
          </strong>{' '}
          — when to use a message queue vs. a direct call, when eventual
          consistency is acceptable, and when it isn&apos;t. When frontend work
          is needed, I can deliver it without slowing the team down.
        </p>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px border border-border rounded-lg overflow-hidden mt-8 bg-border"
        >
          {aboutStats.map((stat) => (
            <Card
              key={stat.label}
              className="rounded-none border-0 shadow-none bg-card select-none"
            >
              <CardContent className="py-5 px-5 text-center p-6 pt-6">
                <span className="text-[22px] font-semibold tracking-[-0.02em] text-brand block">
                  {statsInView ? <CountingNumber value={stat.number} /> : 0}+
                </span>
                <div className="text-[12px] uppercase tracking-[0.08em] text-muted-foreground mt-1">
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
