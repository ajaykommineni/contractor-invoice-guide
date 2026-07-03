import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Plug, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { tools } from "@/data/tools";

interface ReviewPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: ReviewPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = tools.find((item) => item.slug === slug);
  if (!tool) {
    return { title: "Review not found" };
  }
  return {
    title: `${tool.name} Review (2026)`,
    description: tool.tagline,
  };
}

export default async function ToolReviewPage({ params }: ReviewPageProps) {
  const { slug } = await params;
  const tool = tools.find((item) => item.slug === slug);

  if (!tool) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/best-invoicing-software-for-contractors"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Back to the full comparison
      </Link>

      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
        {tool.name} Review (2026)
      </h1>
      <p className="mt-2 text-lg text-muted-foreground">{tool.tagline}</p>

      {tool.rating && (
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground shadow-sm">
          <Star className="size-4 text-cta" aria-hidden="true" />
          {tool.rating}
        </div>
      )}

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-sm font-semibold text-foreground">Pricing</h2>
            <p className="mt-1 text-sm text-muted-foreground">{tool.pricing}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-sm font-semibold text-foreground">Best for</h2>
            <p className="mt-1 text-sm text-muted-foreground">{tool.bestFor}</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div>
          <h2 className="text-sm font-semibold text-foreground">Strengths</h2>
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
          <h2 className="text-sm font-semibold text-foreground">Watch out for</h2>
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

      <section className="mt-10">
        <h2 className="text-lg font-bold text-foreground">A closer look</h2>
        <div className="mt-3 space-y-4 text-sm text-muted-foreground">
          {tool.deepDive.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="flex items-center gap-2 text-lg font-bold text-foreground">
          <Plug className="size-5 text-primary" aria-hidden="true" />
          Integrations
        </h2>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          {tool.integrations.map((integration) => (
            <li key={integration} className="flex gap-2">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
              <span>{integration}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-10 rounded-2xl border border-border bg-muted/40 p-6">
        <Button asChild variant={tool.highlight ? "default" : "outline"}>
          <a href={tool.url} target="_blank" rel="noopener noreferrer nofollow">
            View current pricing on {tool.name}&apos;s site
          </a>
        </Button>
        <p className="mt-3 text-xs text-muted-foreground">
          This link may be an affiliate link — see our{" "}
          <Link href="/affiliate-disclosure" className="underline underline-offset-4">
            affiliate disclosure
          </Link>
          .
        </p>
      </div>

      <section className="mt-10 border-t border-border pt-6">
        <h2 className="text-sm font-semibold text-foreground">Sources</h2>
        <ul className="mt-2 space-y-1 text-sm">
          {tool.sources.map((source) => (
            <li key={source.url}>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-primary underline underline-offset-4"
              >
                {source.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
