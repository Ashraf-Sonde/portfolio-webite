import { siteConfig } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Download, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Hero() {
  return (
    <section id="hero" className="py-[60px]">
      <div className="max-w-content mx-auto px-6">
        <Badge
          variant="secondary"
          className={cn(
            'status-dot fade-up font-mono-tight text-[11px] text-muted-foreground bg-card border border-border rounded-full px-3 py-[5px] tracking-[0.04em] mb-6 font-normal'
          )}
        >
          {siteConfig.status}
        </Badge>

        <div className="hero-eyebrow fade-up fade-up-1 font-mono-tight text-[12px] text-muted-foreground/80 tracking-[0.08em] mb-5 flex items-center gap-2">
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

        <div className="fade-up fade-up-2 font-mono-tight text-[14px] text-muted-foreground mb-6 leading-[1.5]">
          {siteConfig.tagline}
        </div>

        <p className="fade-up fade-up-3 text-[16px] text-muted-foreground max-w-[100%] text-justify leading-[1.7] mb-9">
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

        <div className="fade-up fade-up-4 flex gap-[10px] flex-wrap">
          <Button
            asChild
            className="font-mono-tight text-[12px] h-9 px-4 rounded-md"
          >
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-3.5 w-3.5 mr-1.5" />
              View GitHub
            </a>
          </Button>
          <Button
            variant="outline"
            asChild
            className="font-mono-tight text-[12px] h-9 px-4 rounded-md text-muted-foreground hover:text-foreground"
          >
            <a href={siteConfig.resume}>
              <Download className="h-3.5 w-3.5 mr-1.5" />
              Download Resume
            </a>
          </Button>
          <Button
            variant="outline"
            asChild
            className="font-mono-tight text-[12px] h-9 px-4 rounded-md text-muted-foreground hover:text-foreground"
          >
            <a href="#contact">
              <Mail className="h-3.5 w-3.5 mr-1.5" />
              Contact
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
