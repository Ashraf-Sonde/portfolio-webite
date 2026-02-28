'use client';

import { useState } from 'react';
import {
  ChevronsUpDown,
  ChevronsDownUp,
  Github,
  Crop,
  Link,
} from 'lucide-react';
import { Tag } from './tag';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export interface Screenshot {
  src: string;
  caption: string;
}

interface ProjectCardProps {
  icon: string;
  title: string;
  tagline: string;
  defaultOpen?: boolean;
  github: string;
  website?: string;
  bullets: string[];
  tags: string[];
  screenshots: Screenshot[];
  onOpenLightbox: (title: string, images: Screenshot[]) => void;
}

export function ProjectCard({
  icon,
  title,
  tagline,
  defaultOpen = false,
  github,
  website,
  bullets,
  tags,
  screenshots,
  onOpenLightbox,
}: ProjectCardProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <Card
        className={cn(
          'rounded-lg border-border bg-card overflow-hidden transition-colors shadow-none',
          'hover:border-muted-foreground/40'
        )}
      >
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            className="w-full flex items-start justify-between px-5 py-4 pb-[14px] gap-3 text-left h-auto hover:bg-accent/50 rounded-none"
          >
            <div className="w-9 h-9 rounded-md flex items-center justify-center flex-shrink-0 border border-border bg-background">
              <Image
                src={icon}
                alt={icon}
                width={24}
                height={24}
                className="object-contain p-1"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[14px] font-semibold text-foreground mb-1">
                {title}
              </div>
              <div className="text-[12px] text-pretty text-muted-foreground leading-[1.5]">
                {tagline}
              </div>
            </div>
            <div className="flex items-center gap-[6px] flex-shrink-0 pt-[2px]">
              {website && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-muted-foreground hover:text-foreground rounded-md"
                  asChild
                >
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    aria-label="Visit website"
                  >
                    <Link className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
              )}
              {github && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-muted-foreground hover:text-foreground rounded-md"
                  asChild
                >
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    aria-label="Visit GitHub repository"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
              )}
              <div className="text-muted-foreground w-4 h-4 flex items-center justify-center">
                {open ? (
                  <ChevronsDownUp className="h-4 w-4" />
                ) : (
                  <ChevronsUpDown className="h-4 w-4" />
                )}
              </div>
            </div>
          </Button>
        </CollapsibleTrigger>

        <CollapsibleContent className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
          <CardContent className="px-5 py-[14px] pb-4 pt-4 border-t border-border/50">
            <ul className="list-none p-0 m-0">
              {bullets.map((b, i) => (
                <li
                  key={i}
                  className="text-[14px] text-justify text-foreground leading-[1.7] pl-[18px] relative mb-[10px] last:mb-0"
                >
                  <span className="absolute left-0 top-0 text-muted-foreground/70">
                    ▸
                  </span>
                  <span
                    className="font-mono-tight"
                    dangerouslySetInnerHTML={{ __html: b }}
                  />
                </li>
              ))}
            </ul>
          </CardContent>
        </CollapsibleContent>

        <CardFooter className="px-5 py-3 pb-4 border-t border-border/50 flex flex-col items-start gap-[10px]">
          <div className="flex flex-wrap gap-[6px]">
            {tags.map((t) => (
              <Tag className="py-1 px-2" key={t}>
                {t}
              </Tag>
            ))}
          </div>
          {screenshots.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              className="text-[12px] text-muted-foreground hover:text-foreground h-7 px-[10px] rounded-md"
              onClick={() => onOpenLightbox(title, screenshots)}
            >
              <Crop className="h-3 w-3 mr-1.5" />
              View Screenshots ({screenshots.length})
            </Button>
          )}
        </CardFooter>
      </Card>
    </Collapsible>
  );
}
