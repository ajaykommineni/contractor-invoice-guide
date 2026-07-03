import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
};

export default function AffiliateDisclosurePage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">
        Affiliate Disclosure
      </h1>
      <div className="prose prose-neutral mt-6 max-w-none text-muted-foreground">
        <p>
          Crew Invoice is reader-supported. When you click certain links on
          this site and sign up for a product, we may earn a commission from
          that company at no additional cost to you.
        </p>
        <p>
          This does not influence which products we recommend or how we rank
          them. Our research and opinions are our own, and we only recommend
          software we would genuinely suggest to a contractor asking us for
          advice.
        </p>
        <p>
          [PLACEHOLDER — replace with your finalized disclosure copy before
          launch. This page is a starting template, not legal advice.]
        </p>
      </div>
    </main>
  );
}
