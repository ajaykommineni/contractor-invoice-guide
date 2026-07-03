import Link from "next/link";
import { ArrowLeft, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-6 py-16 text-center">
      <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Wrench className="size-6" aria-hidden="true" />
      </span>
      <h1 className="mt-6 text-3xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-3 text-muted-foreground">
        This page doesn&apos;t exist, or the link that got you here is out of date.
        Nothing&apos;s broken on our end that we know of — let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link href="/">
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to homepage
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/best-invoicing-software-for-contractors">
            See the software comparison
          </Link>
        </Button>
      </div>
    </main>
  );
}
