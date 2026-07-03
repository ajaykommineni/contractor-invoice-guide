import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Contractor Invoice Guide.</p>
        <div className="flex gap-6">
          <Link href="/affiliate-disclosure" className="transition-colors hover:text-primary">
            Affiliate Disclosure
          </Link>
          <Link href="/privacy-policy" className="transition-colors hover:text-primary">
            Privacy Policy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-primary">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
