'use client';

import { useEffect, useState } from 'react';
import { siteConfig } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Github, Download, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { trackEvent } from '@/lib/events';
import { Marquee } from '@/components/ui/marquee';
import { skills } from '@/lib/data';

const TAGLINE_INTERVAL_MS = 3000;

const skillLogos = skills.flatMap((group) => group.tags);

const taglines = Array.isArray(siteConfig.tagline)
  ? siteConfig.tagline
  : [siteConfig.tagline];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotate tagline every 3 seconds
  useEffect(() => {
    if (taglines.length <= 1) return;
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % taglines.length);
    }, TAGLINE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" className="py-[60px]">
      <div className="max-w-content mx-auto px-6 lg:px-0">
        <Badge
          variant="outline"
          className={cn(
            'status-dot fade-up text-[12px] text-brand-ink border border-brand bg-brand-soft rounded-full px-3 py-[5px] tracking-[0.04em] mb-6 font-normal select-none'
          )}
        >
          {siteConfig.status}
        </Badge>

        <div className="hero-eyebrow fade-up fade-up-1  text-[14px] text-muted-foreground/80 tracking-[0.08em] mb-5 flex items-center gap-2">
          {siteConfig.title}
        </div>

        <h1
          className="fade-up fade-up-2 font-semibold tracking-[-0.03em] leading-[1.1] text-foreground"
          style={{ fontSize: 'clamp(36px, 6vw, 56px)' }}
        >
          {siteConfig.name.split(' ')[0]}{' '}
          <span className="text-muted-foreground font-light">
            {siteConfig.name.split(' ')[1]}
          </span>
        </h1>

        <div className="h-12.5 flex items-center text-base text-balance text-brand-ink mb-8 leading-[1.5]">
          <span
            key={currentIndex}
            className="tagline-rotate-in block truncate"
            title={taglines[currentIndex]}
          >
            {taglines[currentIndex]}
          </span>
        </div>

        <p className="fade-up fade-up-3 text-base text-justify text-muted-foreground max-w-[100%] leading-[1.5] mb-9">
          I design and lead{' '}
          <strong className="text-foreground font-medium hero-emphasis">
            high-scale systems
          </strong>{' '}
          with a focus on reliability, latency, and operational clarity — translating{' '}
          <strong className="text-foreground font-medium hero-emphasis">
            technical decisions into measurable business outcomes
          </strong>
          . I take end-to-end ownership of products, ensuring{' '}
          <strong className="text-foreground font-medium hero-emphasis">
            engineering excellence
          </strong>{' '}
          drives real impact.
        </p>

        <div className='relative mx-auto mt-10 mb-10 w-full max-w-5xl'>
          <div className='from-background pointer-events-none absolute inset-y-0 left-0 z-1 w-16 bg-linear-to-r to-transparent sm:w-35' />
          <div className='from-background pointer-events-none absolute inset-y-0 right-0 z-1 w-16 bg-linear-to-l to-transparent sm:w-35' />
          <div className='mx-auto w-full max-w-5xl overflow-hidden'>
            <Marquee pauseOnHover duration={25} gap={2}>
              {skillLogos.map((logo, logoIndex) => (
                <div
                  key={`${logo.icon}-${logoIndex}`}
                  className='bg-muted flex size-16 shrink-0 items-center justify-center rounded-md'
                >
                  <img src={logo.icon} alt={logo.name} loading='lazy' className='size-10 object-contain grayscale' />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
