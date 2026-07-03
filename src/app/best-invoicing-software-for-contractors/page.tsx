import type { Metadata } from "next";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Best Invoicing Software for Contractors (2026)",
  description:
    "An independent comparison of invoicing software built for contractors and trades businesses, based on published pricing, features, and verified user reviews.",
};

interface Tool {
  name: string;
  tagline: string;
  pricing: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  url: string;
}

const tools: Tool[] = [
  {
    name: "QuoteIQ",
    tagline: "All-in-one field service platform built specifically for the trades",
    pricing:
      "$29.99–$699/month, flat-rate tiers with no per-seat fees. 14-day free trial, no credit card required.",
    bestFor:
      "Home service contractors (1–50 employees) who want quoting, scheduling, payments, and client communication natively in one tool instead of stitching together separate apps.",
    pros: [
      "Every tier is flat-rate — no per-user pricing creep as your team grows",
      "MapMeasure Pro handles property measurements directly in the app",
      "4.7 stars across 4,100+ App Store and Google Play reviews",
      "AI Autopilot can build estimates and run mass invoicing from a plain-English prompt",
    ],
    cons: [
      "Newer platform than Jobber or Housecall Pro, so the third-party integration ecosystem is smaller",
      "Higher tiers ($299–$699/mo) are a jump if you only need basic invoicing",
    ],
    url: "https://admin-quoteiq.web.app/register?via=ajay",
  },
  {
    name: "Housecall Pro",
    tagline: "Residential-focused field service management with strong mobile UX",
    pricing:
      "Basic $59/mo (1 user), Essentials $149/mo (5 users), MAX $299/mo (+$35/mo per additional user).",
    bestFor:
      "Residential trades — HVAC, plumbing, electrical, cleaning — with 1–10 technicians who prioritize mobile invoicing and integrated payments over construction-specific features.",
    pros: [
      "4.7 stars across 2,700+ reviews, consistently praised for ease of use",
      "QuickBooks integration and GPS/time tracking included from the Essentials tier",
      "Polished mobile app for invoicing from the job site",
    ],
    cons: [
      "The most common complaint across review sites is cost creep — add-ons like Pipeline, Campaigns, and Voice push the real monthly bill well above the sticker price",
      "Lacks construction-specific tools: no assembly-based estimating, change order workflows, or phase-based job costing",
    ],
    url: "https://www.housecallpro.com/pricing/",
  },
  {
    name: "Jobber",
    tagline: "Polished scheduling and client communication for fast-moving service businesses",
    pricing:
      "$39/mo solo plan up to $599/mo for larger teams, plus $29/mo per added user and several paid add-ons (AI Receptionist $99/mo, Marketing Suite $79/mo).",
    bestFor:
      "Contractors running quick service calls or recurring residential maintenance who want something running in days, not weeks, and don't need deep trade-specific depth.",
    pros: [
      "Scheduling, quoting, and client communication are consistently rated the most polished in its price tier",
      "Good fit for recurring-service business models (lawn care, cleaning, pest control)",
    ],
    cons: [
      "Cost scales fast as you add trucks and staff — reviewers frequently flag paying for seats that barely get used",
      "The most consistent complaint in reviews is a lack of trade-specific depth for businesses like HVAC or plumbing that need more than generic scheduling",
    ],
    url: "https://www.getjobber.com/pricing/",
  },
  {
    name: "Zoho Invoice",
    tagline: "Free, no-catch invoicing for solo contractors and small operations",
    pricing:
      "Free plan covers up to $20,000 in annual invoiced revenue and 5 clients. Premium unlocks unlimited invoices/clients/users at $9/mo (billed annually) or $15/mo.",
    bestFor:
      "Solo contractors, freelancers, and very small operations who need clean, professional invoicing without paying for a full field-service platform.",
    pros: [
      "The free plan is a genuinely complete invoicing tool, not a crippled trial — unlimited invoicing, expense tracking, recurring invoices, and a client portal",
      "4.7 stars on both G2 (333 reviews) and Capterra (705 reviews)",
      "Multi-currency support and workflow automation once you outgrow the free tier",
    ],
    cons: [
      "No scheduling, dispatching, or job-site features — this is invoicing/accounting only, not a field service platform",
      "The $20,000/year revenue cap on the free plan means growing businesses will need to upgrade or switch",
    ],
    url: "https://www.zoho.com/us/invoice/pricing/",
  },
];

export default function ContractorInvoicingHub() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">
        Best Invoicing Software for Contractors (2026)
      </h1>
      <p className="mt-4 text-muted-foreground">
        We compared four invoicing and field-service tools built for
        contractors, based on published pricing, documented features, and
        verified reviews from G2, Capterra, and the App Store/Google Play —
        cross-checked across multiple sources rather than taken from a single
        vendor page. Pricing and features change, so treat exact numbers as a
        starting point and confirm on the provider&apos;s site before you buy.
      </p>
      <p className="mt-4 text-sm text-muted-foreground">
        Some links below are affiliate links — if you sign up through them we
        may earn a commission at no extra cost to you. See our{" "}
        <Link href="/affiliate-disclosure" className="underline underline-offset-4">
          affiliate disclosure
        </Link>{" "}
        for details. It doesn&apos;t change the ranking or what we say about
        each tool.
      </p>

      <div className="mt-10 space-y-8">
        {tools.map((tool) => (
          <Card key={tool.name}>
            <CardHeader>
              <CardTitle className="text-xl">{tool.name}</CardTitle>
              <CardDescription>{tool.tagline}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium">Pricing</h3>
                <p className="mt-1 text-sm text-muted-foreground">{tool.pricing}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium">Best for</h3>
                <p className="mt-1 text-sm text-muted-foreground">{tool.bestFor}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h3 className="text-sm font-medium">Strengths</h3>
                  <ul className="mt-1 list-disc space-y-1 pl-4 text-sm text-muted-foreground">
                    {tool.pros.map((pro) => (
                      <li key={pro}>{pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Watch out for</h3>
                  <ul className="mt-1 list-disc space-y-1 pl-4 text-sm text-muted-foreground">
                    {tool.cons.map((con) => (
                      <li key={con}>{con}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block text-sm font-medium underline underline-offset-4"
              >
                View current pricing on {tool.name}&apos;s site →
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="font-medium">How we put this together</h2>
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
