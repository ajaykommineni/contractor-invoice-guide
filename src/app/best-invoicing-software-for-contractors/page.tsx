import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { QuickCompareTable } from "@/components/quick-compare-table";
import { PricingCalculator } from "@/components/pricing-calculator";
import { FaqSection } from "@/components/faq-section";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "Best Invoicing Software for Contractors (2026)",
  description:
    "An independent comparison of invoicing software built for contractors and trades businesses, based on published pricing, features, and verified user reviews.",
};

export default function ContractorInvoicingHub() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-muted-foreground shadow-sm">
        <ShieldCheck className="size-3.5 text-cta" aria-hidden="true" />
        Updated for 2026
      </span>
      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
        Best Invoicing Software for Contractors (2026)
      </h1>
      <p className="mt-4 max-w-3xl text-muted-foreground">
        We compared four invoicing and field-service tools built for
        contractors, based on published pricing, documented features, and
        verified reviews from G2, Capterra, and the App Store/Google Play —
        cross-checked across multiple sources rather than taken from a single
        vendor page. Pricing and features change, so treat exact numbers as a
        starting point and confirm on the provider&apos;s site before you buy.
      </p>
      <p className="mt-4 max-w-3xl text-sm text-muted-foreground">
        Some links below are affiliate links — if you sign up through them we
        may earn a commission at no extra cost to you. See our{" "}
        <Link href="/affiliate-disclosure" className="font-medium text-primary underline underline-offset-4">
          affiliate disclosure
        </Link>{" "}
        for details. It doesn&apos;t change the ranking or what we say about
        each tool.
      </p>

      <section className="mt-10">
        <h2 className="text-lg font-bold text-foreground">Quick compare</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Sort by price or rating, or filter to find a tool for your trade.
        </p>
        <div className="mt-4">
          <QuickCompareTable tools={tools} />
        </div>
      </section>

      <div className="mt-10 space-y-8">
        {tools.map((tool) => (
          <Card
            key={tool.slug}
            id={tool.slug}
            className={
              tool.highlight
                ? "scroll-mt-24 border-primary/30 shadow-brand ring-1 ring-primary/20"
                : "scroll-mt-24"
            }
          >
            <CardHeader>
              <div className="flex flex-wrap items-center gap-3">
                <CardTitle className="text-xl">{tool.name}</CardTitle>
                {tool.highlight && (
                  <span className="inline-flex items-center gap-1.5 border-l-2 border-cta bg-cta/10 py-1 pl-2 pr-3 text-xs font-semibold uppercase tracking-wide text-cta">
                    <Sparkles className="size-3" aria-hidden="true" />
                    Editor&apos;s pick
                  </span>
                )}
              </div>
              <CardDescription>{tool.tagline}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-foreground">Pricing</h3>
                <p className="mt-1 text-sm text-muted-foreground">{tool.pricing}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">Best for</h3>
                <p className="mt-1 text-sm text-muted-foreground">{tool.bestFor}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Strengths</h3>
                  <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                    {tool.pros.map((pro) => (
                      <li key={pro} className="flex gap-2">
                        <Check className="mt-0.5 size-4 shrink-0 text-cta" aria-hidden="true" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Watch out for</h3>
                  <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                    {tool.cons.map((con) => (
                      <li key={con} className="flex gap-2">
                        <X className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden="true" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant={tool.highlight ? "default" : "outline"} size="sm">
                  <a href={tool.url} target="_blank" rel="noopener noreferrer nofollow">
                    View current pricing on {tool.name}&apos;s site
                  </a>
                </Button>
                <Button asChild variant="ghost" size="sm">
                  <Link href={`/reviews/${tool.slug}`}>
                    Read the full review
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-lg font-bold text-foreground">Estimate your cost</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          A rough monthly estimate based on team size and each vendor&apos;s published pricing.
        </p>
        <div className="mt-4">
          <PricingCalculator tools={tools} />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-lg font-bold text-foreground">Frequently asked questions</h2>
        <div className="mt-4">
          <FaqSection />
        </div>
      </section>

      <div className="mt-12 rounded-2xl border border-border bg-muted/40 p-6">
        <h2 className="font-semibold text-foreground">How we put this together</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This comparison is based on publicly available pricing pages,
          product documentation, and aggregated user reviews from G2,
          Capterra, and app stores — not hands-on testing. We haven&apos;t
          personally run each of these tools day-to-day yet. We&apos;re
          upfront about that because we&apos;d rather tell you the real basis
          for a recommendation than dress up research as something it
          isn&apos;t.
        </p>
      </div>
    </main>
  );
}
