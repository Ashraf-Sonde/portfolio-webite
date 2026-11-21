'use client';

import { useEffect, useState } from 'react';
import { siteConfig } from '@/lib/data';
import Image from 'next/image';
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
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
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
    <section id="hero" className="py-8 sm:py-12">
      <div className="max-w-content mx-auto px-6 lg:px-0">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-12">
          {/* Profile image */}
          <div
            className="relative h-44 w-44 shrink-0 overflow-hidden rounded-[2rem]
            bg-[#E9ECF2] shadow-[0_12px_35px_rgba(15,23,42,0.08)]
            sm:h-48 sm:w-48 lg:h-[240px] lg:w-[240px]"
          >
            <Image
              src={siteConfig.profilePic}
              alt="Profile image"
              fill
              loading="lazy"
              sizes="(max-width: 640px) 176px, (max-width: 1024px) 192px, 240px"
              className="object-cover object-center scale-115"
            />
          </div>

          {/* Existing text content */}
          <div className="min-w-0 flex-1">
            <div className="fade-up fade-up-1 text-sm text-muted-foreground/80 tracking-[0.08em] mb-1 flex items-center gap-2">
              {siteConfig.title}
            </div>

            <h1
              className="fade-up fade-up-2 font-semibold tracking-[-0.03em] leading-[1.1] text-foreground"
              style={{ fontSize: 'clamp(36px, 4vw, 48px)' }}
            >
              <TextGenerateEffect
                duration={500}
                text={siteConfig.name.split(' ')[0]}
              />{' '}
              <span className="text-muted-foreground font-light">
                <TextGenerateEffect
                  duration={600}
                  text={siteConfig.name.split(' ')[1]}
                />
              </span>
            </h1>

            <div className="h-8 flex items-center text-sm sm:text-base text-balance text-brand-ink leading-normal">
              <span
                key={currentIndex}
                className="tagline-rotate-in block truncate"
                title={taglines[currentIndex]}
              >
                {taglines[currentIndex]}
              </span>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-6 sm:mt-10 w-full max-w-5xl">
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 z-1 w-16 bg-linear-to-r to-transparent sm:w-35" />
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 z-1 w-16 bg-linear-to-l to-transparent sm:w-35" />
          <div className="mx-auto w-full max-w-5xl overflow-hidden">
            <Marquee pauseOnHover duration={30} gap={2}>
              {skillLogos.map((logo, logoIndex) => (
                <div
                  key={`${logo.icon}-${logoIndex}`}
                  className="bg-muted flex size-16 shrink-0 items-center justify-center rounded-md"
                >
                  <img
                    src={logo.icon}
                    alt={logo.name}
                    loading="lazy"
                    className="size-10 object-contain grayscale"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
