import Link from "next/link";
import { ArrowRight, BadgeDollarSign, ShieldCheck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Grounded in real data, not vendor copy",
    body: "Every comparison is built from published pricing, documented features, and verified user reviews — cross-checked across multiple independent sources, not copied from a single vendor page.",
  },
  {
    icon: BadgeDollarSign,
    title: "No vendor pays for placement",
    body: "We earn a commission if you sign up through our links, and we tell you exactly when that's the case. It never changes the ranking.",
  },
  {
    icon: Wrench,
    title: "Built for the trades specifically",
    body: "Not generic freelancer advice — we look at deposits, job-site invoicing, and getting paid before you've left the driveway.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-24 h-96 bg-[radial-gradient(ellipse_at_top,_var(--color-secondary)_0%,_transparent_60%)] opacity-25"
        />
        <div className="relative mx-auto max-w-3xl px-6 pb-16 pt-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-muted-foreground shadow-sm">
            <ShieldCheck className="size-3.5 text-cta" aria-hidden="true" />
            Independent &amp; unsponsored rankings
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Invoicing software reviews for people who{" "}
            <span className="text-primary">swing a hammer</span>, not a
            keyboard.
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
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto grid max-w-5xl gap-x-10 gap-y-12 px-6 py-20 md:grid-cols-[1.3fr_1fr_1fr]">
          {trustPoints.map(({ icon: Icon, title, body }, index) => (
            <div
              key={title}
              className={
                index === 0
                  ? "border-t-2 border-primary pt-5"
                  : "border-t-2 border-border pt-5"
              }
            >
              <Icon className="size-5 text-primary" aria-hidden="true" />
              <h2 className="mt-4 text-lg font-semibold text-foreground">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-bold tracking-tight">Start here</h2>
        <div className="mt-6">
          <Link
            href="/best-invoicing-software-for-contractors"
            className="group flex items-center justify-between gap-6 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-brand-lg"
          >
            <div>
              <h3 className="font-semibold text-foreground">
                Best invoicing software for contractors (2026)
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Our full comparison of the top options for trades businesses,
                updated as pricing and features change.
              </p>
            </div>
            <ArrowRight
              className="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
