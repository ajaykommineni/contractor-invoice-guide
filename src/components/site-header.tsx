import Link from "next/link";
import { Receipt } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-foreground"
        >
          <span className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-brand">
            <Receipt className="size-4" aria-hidden="true" />
          </span>
          Crew Invoice
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link
            href="/best-invoicing-software-for-contractors"
            className="transition-colors hover:text-primary"
          >
            Best Invoicing Software
          </Link>
        </nav>
      </div>
    </header>
  );
}
