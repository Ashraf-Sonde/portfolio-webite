import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <h2
      className={cn(
        'section-label font-mono-tight text-[12px] uppercase tracking-[0.12em]',
        'text-[var(--text-dim)] mb-8 flex items-center gap-[10px] font-normal',
        className
      )}
    >
      {children}
      <Separator className="flex-1" />
    </h2>
  );
}
