export interface ToolSource {
  label: string;
  url: string;
}

export interface Tool {
  slug: string;
  name: string;
  tagline: string;
  pricing: string;
  startingPrice: number;
  bestFor: string;
  shortBestFor: string;
  pros: string[];
  cons: string[];
  url: string;
  highlight?: boolean;
  rating?: string;
  ratingValue?: number;
  integrations: string[];
  deepDive: string[];
  sources: ToolSource[];
}

export const tools: Tool[] = [
  {
    slug: "quoteiq",
    name: "QuoteIQ",
    tagline: "All-in-one field service platform built specifically for the trades",
    highlight: true,
    pricing:
      "$29.99–$699/month, flat-rate tiers with no per-seat fees. 14-day free trial, no credit card required.",
    startingPrice: 29.99,
    bestFor:
      "Home service contractors (1–50 employees) who want quoting, scheduling, payments, and client communication natively in one tool instead of stitching together separate apps.",
    shortBestFor: "Home service crews wanting an all-in-one tool",
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
    rating: "4.7 / 5 across 4,100+ App Store and Google Play reviews",
    ratingValue: 4.7,
    integrations: [
      "QuickBooks (accounting sync)",
      "Built-in AI receptionist, estimating, and invoicing — most workflows don't need a third-party add-on",
      "Public API for custom integrations",
    ],
    deepDive: [
      "QuoteIQ's pitch is that it replaces a stack of point tools rather than integrating with them: AI Autopilot drafts estimates and can run mass invoicing from a plain-English prompt, a 24/7 AI receptionist answers and qualifies calls, and MapMeasure Pro does property measurements from inside the app instead of a separate tool.",
      "Published tiers start at $29.99/mo (Beginner) and step up through Pro ($98.99), Elite ($189.99), and Max ($349.99), with everything flat-rate rather than priced per seat — the tradeoff other vendors make once a crew grows past a few users.",
      "Because most of the platform is built in-house, you get fewer integration headaches out of the box, but also less flexibility if you're already committed to accounting or CRM software beyond QuickBooks — there's a public API, but the pre-built third-party integration list is thinner than Jobber's or Housecall Pro's.",
    ],
    sources: [
      { label: "QuoteIQ — Features", url: "https://myquoteiq.com/features/" },
      { label: "GetApp — QuoteIQ pricing & reviews", url: "https://www.getapp.com/operations-management-software/a/quoteiq/" },
      { label: "Capterra — QuoteIQ", url: "https://www.capterra.com/p/10030635/QuoteIQ/" },
      { label: "Contractor ToolStack — QuoteIQ review", url: "https://contractortoolstack.com/software/quoteiq/" },
    ],
  },
  {
    slug: "housecall-pro",
    name: "Housecall Pro",
    tagline: "Residential-focused field service management with strong mobile UX",
    pricing:
      "Basic $59/mo (1 user), Essentials $149/mo (5 users), MAX $299/mo (+$35/mo per additional user).",
    startingPrice: 59,
    bestFor:
      "Residential trades — HVAC, plumbing, electrical, cleaning — with 1–10 technicians who prioritize mobile invoicing and integrated payments over construction-specific features.",
    shortBestFor: "Residential trades (HVAC, plumbing, electrical)",
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
    rating: "4.7 / 5 across 2,700+ reviews (independent reviewers place it closer to 7.2/10 once cost and support complaints are weighted in)",
    ratingValue: 4.7,
    integrations: [
      "QuickBooks Online & Desktop — sync is one-way, from Housecall Pro to QuickBooks, and requires the Essentials plan or higher",
      "Google Calendar, Zapier, CallRail, Gusto, Meta for Business",
      "~27 native integrations total",
    ],
    deepDive: [
      "The Basic plan ($59/mo) can't connect to QuickBooks at all — that requires jumping to Essentials ($149–189/mo), a roughly 139% price increase that also unlocks GPS tracking and the estimate builder. Budget for that jump if accounting sync matters to you from day one.",
      "Reviews are genuinely mixed rather than uniformly positive: aggregated app-store ratings sit around 4.7, but independent reviewers scoring the full package (cost, support responsiveness, reliability) land closer to 7.2/10. The gap mostly comes down to plan-gated support and reports of system lag when managing multiple jobs at once.",
      "The mobile app is a strength on iOS but reviewers flag rougher performance on Android, where the Google Play rating sits at 3.3/5 — worth checking directly if your crew is Android-first.",
    ],
    sources: [
      { label: "FieldCamp — Housecall Pro review (7.2/10)", url: "https://fieldcamp.ai/reviews/housecall-pro/" },
      { label: "FieldPromax — Housecall Pro alternatives & pricing", url: "https://www.fieldpromax.com/blog/top-five-housecall-pro-alternatives" },
      { label: "Software Advice — Housecall Pro vs QuickBooks", url: "https://www.softwareadvice.com/construction/housecall-profile/vs/quickbooks-pro/" },
      { label: "Capterra — Housecall Pro", url: "https://www.capterra.com/p/140363/HouseCall-Pro/" },
    ],
  },
  {
    slug: "jobber",
    name: "Jobber",
    tagline: "Polished scheduling and client communication for fast-moving service businesses",
    pricing:
      "$39/mo solo plan up to $599/mo for larger teams, plus $29/mo per added user and several paid add-ons (AI Receptionist $99/mo, Marketing Suite $79/mo).",
    startingPrice: 39,
    bestFor:
      "Contractors running quick service calls or recurring residential maintenance who want something running in days, not weeks, and don't need deep trade-specific depth.",
    shortBestFor: "Recurring-service businesses (lawn care, cleaning)",
    pros: [
      "Scheduling, quoting, and client communication are consistently rated the most polished in its price tier",
      "Good fit for recurring-service business models (lawn care, cleaning, pest control)",
    ],
    cons: [
      "Cost scales fast as you add trucks and staff — reviewers frequently flag paying for seats that barely get used",
      "The most consistent complaint in reviews is a lack of trade-specific depth for businesses like HVAC or plumbing that need more than generic scheduling",
    ],
    url: "https://www.getjobber.com/pricing/",
    integrations: [
      "QuickBooks Online (Connect and Grow plans) — syncs clients, products/services, timesheets, invoices, payments, refunds, tips, and payouts",
      "Stripe for online and in-field payments; CompanyCam for job-site photos",
      "Phone and form-tracking attribution is not native and needs a third-party tool",
    ],
    deepDive: [
      "Jobber shipped Offline Mode in January 2026, directly addressing one of the longest-standing complaints about the platform losing data or functionality in low-signal areas.",
      "The QuickBooks sync is useful but not flawless: users report roughly 2% of line items dropping during sync, with auto-sync occasionally breaking and needing manual reconciliation. Treat it as a strong integration, not a fully hands-off one.",
      "The most consistent theme across reviews is a sense of being funneled toward upgrades — missing features are frequently addressed with \"upgrade to a higher plan\" rather than a fix, and some reviewers describe the pricing as carrying hidden fees. A widely-upvoted Reddit thread on the topic (66 upvotes, 83 comments) echoes that same complaint pattern.",
      "Day-to-day, some reviewers find the interface has more screens and menu layers than a quick job update should require — for example, confirmation emails can't list the specific services scheduled for a visit, a small but frequently-cited gap.",
    ],
    sources: [
      { label: "Trustpilot — Jobber reviews", url: "https://www.trustpilot.com/review/getjobber.com" },
      { label: "Capterra — Jobber reviews", url: "https://www.capterra.com/p/127994/Jobber/reviews/" },
      { label: "G2 — Jobber reviews", url: "https://www.g2.com/products/jobber/reviews" },
      { label: "BuildBite — Jobber pricing & feature review", url: "https://buildbite.com/insights/jobber-pricing-and-feature-review" },
    ],
  },
  {
    slug: "zoho-invoice",
    name: "Zoho Invoice",
    tagline: "Free, no-catch invoicing for solo contractors and small operations",
    pricing:
      "Free plan covers up to $20,000 in annual invoiced revenue and 5 clients. Premium unlocks unlimited invoices/clients/users at $9/mo (billed annually) or $15/mo.",
    startingPrice: 0,
    bestFor:
      "Solo contractors, freelancers, and very small operations who need clean, professional invoicing without paying for a full field-service platform.",
    shortBestFor: "Solo contractors who just need invoicing",
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
    rating: "4.7 / 5 on both G2 (333 reviews) and Capterra (705 reviews)",
    ratingValue: 4.7,
    integrations: [
      "Zoho ecosystem: Zoho Books, Zoho CRM, and other Zoho apps",
      "Stripe and PayPal for online payments",
      "Limited outside the Zoho ecosystem — no native Zoho Inventory integration, and third-party connections are restricted",
    ],
    deepDive: [
      "Reviewers consistently point to the same three things: affordable pricing (including a genuinely usable free tier), a complete-enough feature set for straightforward invoicing, and responsive customer support.",
      "The real limitation shows up once you look outside the Zoho ecosystem. Integration options are thin for businesses that already run a non-Zoho CRM, inventory system, or field-service tool — expect manual data entry or a third-party connector to bridge the gap rather than a native integration.",
      "Invoice template customization is also comparatively limited on layout and branding flexibility compared to dedicated design-first invoicing tools, and some reviewers note a steeper learning curve once you move past basic invoicing into the more advanced automation features.",
    ],
    sources: [
      { label: "GetApp — Zoho Invoice pricing & reviews", url: "https://www.getapp.com/finance-accounting-software/a/zoho-invoice/" },
      { label: "G2 — Zoho Invoice reviews", url: "https://www.g2.com/products/zoho-invoice/reviews" },
      { label: "Capterra — Zoho Invoice reviews", url: "https://www.capterra.com/p/163114/Zoho-Invoice/reviews/" },
      { label: "ITQlick — Zoho Invoice review", url: "https://www.itqlick.com/zoho-invoice" },
    ],
  },
];
