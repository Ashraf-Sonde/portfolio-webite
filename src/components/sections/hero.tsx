import { siteConfig } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Download, Mail, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Hero() {
  return (
    <section id="hero" className="py-[60px]">
      <div className="max-w-content mx-auto px-6">
        <Badge
          variant="secondary"
          className={cn(
            'status-dot fade-up  text-[12px] text-muted-foreground bg-card border border-border rounded-full px-3 py-[5px] tracking-[0.04em] mb-6 font-normal'
          )}
        >
          {siteConfig.status}
        </Badge>

        <div className="hero-eyebrow fade-up fade-up-1  text-[14px] text-muted-foreground/80 tracking-[0.08em] mb-5 flex items-center gap-2">
          {siteConfig.title}
        </div>

        <h1
          className="fade-up fade-up-2 font-semibold tracking-[-0.03em] leading-[1.1] mb-5 text-foreground"
          style={{ fontSize: 'clamp(36px, 6vw, 56px)' }}
        >
          {siteConfig.name.split(' ')[0]}{' '}
          <span className="text-muted-foreground font-light">
            {siteConfig.name.split(' ')[1]}
          </span>
        </h1>

        <div className="fade-up fade-up-2 text-base text-balance text-[--dot-active] mb-6 leading-[1.5]">
          {siteConfig.tagline}
        </div>

        <p className="fade-up fade-up-3 text-base text-pretty text-muted-foreground max-w-[100%] leading-[1.5] mb-9">
          I design systems that handle{' '}
          <strong className="text-foreground font-medium">
            millions of requests
          </strong>{' '}
          without blinking — with a sharp focus on{' '}
          <strong className="text-foreground font-medium">
            reliability, latency, and operational clarity
          </strong>
          . I write backend code that scales, and frontend code that
          doesn&apos;t embarrass it.
        </p>

        <div className="fade-up fade-up-4 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-[10px]">
          {/* Github btn */}
          <Button
            asChild
            className="font-mono-tight text-[12px] h-11 w-full sm:h-9 sm:w-auto sm:px-4 rounded-md justify-center"
          >
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-3.5 w-3.5 mr-1.5 shrink-0" />
              <span className="truncate">GitHub</span>
            </a>
          </Button>

          {/* LinkedIn btn */}
          <Button
            asChild
            className="font-mono-tight text-[12px] h-11 w-full sm:h-9 sm:w-auto sm:px-4 rounded-md justify-center bg-[#0d65c3] text-white hover:bg-[#0a54a0]"
          >
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <span className="mr-1.5 shrink-0">in</span>
              <span className="truncate">LinkedIn</span>
            </a>
          </Button>

          {/* Contact btn */}
          <Button
            asChild
            className="font-mono-tight text-[12px] h-11 w-full sm:h-9 sm:w-auto sm:px-4 rounded-md text-muted-foreground justify-center bg-amber-500 hover:bg-amber-500/90 text-black"
          >
            <a href="#contact" className="flex items-center justify-center">
              <Mail className="h-3.5 w-3.5 mr-1.5 shrink-0" />
              <span className="truncate">Contact</span>
            </a>
          </Button>

          {/* Resume btn */}
          <Button
            asChild
            className="font-mono-tight text-[12px] h-11 w-full sm:h-9 sm:w-auto sm:px-4 rounded-md text-muted-foreground justify-center bg-neutral-500 hover:bg-neutral-500/90 text-white"
          >
            <a
              href={siteConfig.resume}
              className="flex items-center justify-center"
            >
              <Download className="h-3.5 w-3.5 mr-1.5 shrink-0" />
              <span className="truncate">Resume</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
