import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <section className="mx-auto max-w-3xl px-6 pb-16 pt-20 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Invoicing software reviews for people who swing a hammer, not a keyboard.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground text-balance">
          We dig through real pricing, features, and verified user reviews so
          you don&apos;t have to — no vendor marketing copy, no sponsored
          rankings.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/best-invoicing-software-for-contractors">
              See the best options
            </Link>
          </Button>
        </div>
      </section>

      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 sm:grid-cols-3">
          <div>
            <h2 className="font-medium">Grounded in real data, not vendor copy</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Every comparison is built from published pricing, documented
              features, and verified user reviews — cross-checked across
              multiple independent sources, not copied from a single vendor
              page.
            </p>
          </div>
          <div>
            <h2 className="font-medium">No vendor pays for placement</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We earn a commission if you sign up through our links, and we
              tell you exactly when that&apos;s the case. It never changes the
              ranking.
            </p>
          </div>
          <div>
            <h2 className="font-medium">Built for the trades specifically</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Not generic freelancer advice — we look at deposits, job-site
              invoicing, and getting paid before you&apos;ve left the driveway.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">
          Start here
        </h2>
        <div className="mt-6">
          <Link
            href="/best-invoicing-software-for-contractors"
            className="block rounded-xl border border-border p-6 transition-colors hover:border-foreground/30"
          >
            <h3 className="font-medium">
              Best invoicing software for contractors (2026)
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Our full comparison of the top options for trades businesses,
              updated as pricing and features change.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
