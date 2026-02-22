'use client';

import { useState } from 'react';
import { ChevronsUpDown, ChevronsDownUp } from 'lucide-react';
import { Tag } from './tag';
import { Card, CardContent } from '@/components/ui/card';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';

interface AccordionCardProps {
  icon: string;
  title: string;
  meta: string;
  defaultOpen?: boolean;
  bullets: string[];
  tags: string[];
}

export function ExperienceCard({
  icon,
  title,
  meta,
  defaultOpen = false,
  bullets,
  tags,
}: AccordionCardProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <Card className="rounded-lg border-border bg-card overflow-hidden my-3 last:mb-0 shadow-none">
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            className="w-full flex items-start justify-between px-5 py-4 gap-3 text-left h-auto hover:bg-accent/50 rounded-none"
          >
            <div className="w-[30px] h-[30px] rounded-md flex items-center justify-center text-[13px] flex-shrink-0 mt-[1px] border border-border bg-background">
              {icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[14px] font-semibold text-foreground mb-[3px]">
                {title}
              </div>
              <div className="text-[12px] text-muted-foreground flex items-center gap-2 flex-wrap">
                {meta}
              </div>
            </div>
            <div className="text-muted-foreground flex-shrink-0 w-4 h-4 flex items-center justify-center mt-[2px]">
              {open ? (
                <ChevronsDownUp className="h-4 w-4" />
              ) : (
                <ChevronsUpDown className="h-4 w-4" />
              )}
            </div>
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
          <CardContent className="px-5 pb-5 pt-0 border-t border-border/50">
            <ul className="list-none p-0 m-0 mt-4">
              {bullets.map((b, i) => (
                <li
                  key={i}
                  className="text-[14px] text-pretty text-muted-foreground leading-[1.7] pl-[18px] relative mb-[10px] last:mb-0"
                >
                  <span className="absolute left-0 top-0 text-muted-foreground/70">
                    ▸
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-[6px] mt-3">
              {tags.map((t) => (
                <Tag className="py-1 px-2" key={t}>
                  {t}
                </Tag>
              ))}
            </div>
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
}
