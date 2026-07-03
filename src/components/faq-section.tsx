import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Do I need field service software, or just invoicing?",
    answer:
      "QuoteIQ, Housecall Pro, and Jobber are field service platforms — they handle scheduling, dispatch, and client communication in addition to invoicing. Zoho Invoice is invoicing/accounting only, with no scheduling or dispatch. If you're a solo operator who just needs to bill clients, Zoho Invoice's free tier is likely enough. If you're coordinating a crew and job sites, you probably want one of the field service platforms.",
  },
  {
    question: "Will these integrate with the accounting software I already use?",
    answer:
      "It depends on the tool and your accounting setup. QuoteIQ has native QuickBooks integration plus a public API. Housecall Pro syncs to QuickBooks Online and Desktop, but only one-way and only from the Essentials plan up — Basic can't connect at all. Jobber's QuickBooks Online sync works on the Connect and Grow plans, though some users report a small percentage of line items dropping during sync. Zoho Invoice integrates cleanly within the Zoho ecosystem (Books, CRM) but has limited options outside it.",
  },
  {
    question: "What's the cheapest way to get started?",
    answer:
      "Zoho Invoice's free plan is the lowest-cost option if you're invoicing only (capped at 5 clients and $20,000/year in invoiced revenue). If you need scheduling and dispatch too, QuoteIQ's Beginner tier at $29.99/mo is the least expensive of the field service platforms we compared.",
  },
  {
    question: "Do prices really stay flat as my crew grows?",
    answer:
      "Not for every tool. QuoteIQ's tiers are explicitly flat-rate regardless of team size. Housecall Pro and Jobber both charge more as you add users — Housecall Pro adds roughly $35/mo per additional user past its included seat count, and Jobber adds about $29/mo per added user. Use the calculator above to get a rough sense of how each one scales for your team size.",
  },
  {
    question: "How did you research this without hands-on testing?",
    answer:
      "We pulled from each vendor's published pricing and feature pages, plus aggregated user reviews on G2, Capterra, Software Advice, and the App Store/Google Play, cross-checking claims across multiple independent sources rather than relying on any single page. We link our sources on each tool's full review page. We haven't run each platform day-to-day ourselves yet, and we say so rather than imply otherwise.",
  },
];

export function FaqSection() {
  return (
    <div className="divide-y divide-border border-t border-border">
      {faqs.map((faq) => (
        <details key={faq.question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground marker:content-none">
            {faq.question}
            <ChevronDown
              className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180 group-open:text-primary"
              aria-hidden="true"
            />
          </summary>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
