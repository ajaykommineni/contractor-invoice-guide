import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">
        Terms of Service
      </h1>
      <div className="prose prose-neutral mt-6 max-w-none text-muted-foreground">
        <p>
          [PLACEHOLDER — standard terms covering acceptable use, disclaimer
          of warranties on the accuracy of comparisons, and limitation of
          liability go here. This is not legal advice — have this reviewed
          before launch.]
        </p>
      </div>
    </main>
  );
}
