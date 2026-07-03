import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Contractor Invoice Guide
        </Link>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/best-invoicing-software-for-contractors" className="hover:text-foreground">
            Best Invoicing Software
          </Link>
        </nav>
      </div>
    </header>
  );
}
