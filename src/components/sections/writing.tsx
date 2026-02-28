import { writingTopics } from '@/lib/data';
import { SectionLabel } from '@/components/ui/section-label';
import { Tag } from '@/components/ui/tag';
import { Card, CardContent } from '@/components/ui/card';

export function Writing() {
  return (
    <section id="writing" className="py-[60px]">
      <div className="max-w-content mx-auto px-6">
        <SectionLabel>Writing</SectionLabel>

        <Card className="border border-dashed border-border rounded-lg shadow-none">
          <CardContent className="p-9 text-center">
            <div className=" text-[12px] text-muted-foreground/80 mb-2">
              // Coming Soon
            </div>
            <p className="text-[14px] text-muted-foreground max-w-[380px] mx-auto mb-5 leading-[1.6]">
              Writing about distributed systems, backend architecture, and
              engineering tradeoffs. Articles dropping soon.
            </p>
            <div className="flex flex-wrap gap-[6px] justify-center">
              {writingTopics.map((t) => (
                <Tag className="py-1 px-2" key={t}>
                  {t}
                </Tag>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
