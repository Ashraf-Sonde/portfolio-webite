import { siteConfig } from '@/lib/data';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-content mx-auto px-6 flex items-center justify-between gap-3 flex-wrap">
        <span className="font-mono-tight text-[11px] text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js &
          Tailwind.
        </span>
        <Button
          variant="link"
          className="font-mono-tight text-[11px] text-muted-foreground hover:text-foreground h-auto p-0 no-underline"
          asChild
        >
          <a href="#hero">↑ Back to top</a>
        </Button>
      </div>
    </footer>
  );
}
