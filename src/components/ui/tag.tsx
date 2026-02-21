import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <Badge
      variant="secondary"
      className={cn(
        'font-mono-tight text-[12px] leading-none tracking-wide whitespace-nowrap rounded-full border font-normal',
        'bg-[var(--tag-bg)] border-[var(--tag-border)] text-[var(--tag-text)] hover:bg-[var(--tag-bg)]',
        className
      )}
    >
      {children}
    </Badge>
  );
}
