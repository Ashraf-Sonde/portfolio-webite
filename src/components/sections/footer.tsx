import { siteConfig } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Copyright, MoveUp } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-content mx-auto px-6 flex items-center justify-between gap-3 flex-wrap">
        <span className="font-mono-tight text-[11px] text-muted-foreground flex items-center justify-center gap-1">
         <Copyright className="h-3 w-3" /> <span>Copyright {new Date().getFullYear()} {siteConfig.name}.</span>
        </span>
        <Button
          variant="link"
          className="text-[11px] text-muted-foreground hover:text-foreground h-auto p-0 no-underline"
          asChild
        >
          <a href="#hero" className='font-mono-tight'><MoveUp className="h-2 w-3 mr-1" /> Back to top</a>
        </Button>
      </div>
    </footer>
  );
}
