"use client";

import { useMemo, useState } from "react";
import { Calculator, Info } from "lucide-react";
import type { Tool } from "@/data/tools";

interface PricingCalculatorProps {
  tools: Tool[];
}

interface Estimate {
  amount: string;
  note: string;
}

function estimateFor(slug: string, teamSize: number): Estimate {
  switch (slug) {
    case "quoteiq":
      return {
        amount: "$29.99–$349.99/mo",
        note: "Flat-rate by feature tier — QuoteIQ doesn't charge per seat, so team size doesn't change the price.",
      };
    case "housecall-pro": {
      if (teamSize <= 1) {
        return { amount: "$59/mo", note: "Basic plan (1 user) — no QuickBooks sync on this tier." };
      }
      if (teamSize <= 5) {
        return { amount: "$149/mo", note: "Essentials plan (up to 5 users), includes QuickBooks sync." };
      }
      const overage = 299 + 35 * (teamSize - 5);
      return {
        amount: `~$${overage}/mo`,
        note: "MAX plan + $35/user overage beyond 5 seats. Housecall Pro doesn't publish the MAX tier's base seat count, so this assumes 5 — confirm the exact figure with them.",
      };
    }
    case "jobber": {
      if (teamSize <= 1) {
        return { amount: "$39/mo", note: "Solo plan (1 user)." };
      }
      const floor = 39 + 29 * (teamSize - 1);
      return {
        amount: `~$${floor}/mo+`,
        note: "Floor estimate ($39 base + $29/added user). Jobber's published multi-user base plans scale up to $599/mo depending on feature tier, so your actual quote may run higher — confirm with Jobber.",
      };
    }
    case "zoho-invoice":
      return {
        amount: "$0–$15/mo",
        note: "Priced by client count and annual revenue, not team size. Free covers ≤5 clients and $20k/yr revenue; Premium ($9–15/mo) removes those caps.",
      };
    default:
      return { amount: "Contact vendor", note: "" };
  }
}

export function PricingCalculator({ tools }: PricingCalculatorProps) {
  const [teamSize, setTeamSize] = useState(3);

  const estimates = useMemo(
    () => tools.map((tool) => ({ tool, estimate: estimateFor(tool.slug, teamSize) })),
    [tools, teamSize],
  );

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Calculator className="size-4" aria-hidden="true" />
        </span>
        <h3 className="font-semibold text-foreground">Estimate your monthly cost</h3>
      </div>

      <label htmlFor="team-size" className="mt-5 block text-sm font-medium text-foreground">
        Team size: <span className="text-primary">{teamSize}</span> {teamSize === 1 ? "person" : "people"}
      </label>
      <input
        id="team-size"
        type="range"
        min={1}
        max={25}
        value={teamSize}
        onChange={(event) => setTeamSize(Number(event.target.value))}
        className="mt-2 w-full accent-primary"
      />

      <ul className="mt-6 space-y-4">
        {estimates.map(({ tool, estimate }) => (
          <li key={tool.slug} className="border-t border-border pt-4 first:border-0 first:pt-0">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="font-medium text-foreground">{tool.name}</span>
              <span className="font-semibold text-primary">{estimate.amount}</span>
            </div>
            {estimate.note && (
              <p className="mt-1 flex gap-1.5 text-xs text-muted-foreground">
                <Info className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                <span>{estimate.note}</span>
              </p>
            )}
          </li>
        ))}
      </ul>

      <p className="mt-6 text-xs text-muted-foreground">
        These are estimates built from each vendor&apos;s published pricing pages, not quotes. Some
        vendors don&apos;t publish exact per-seat breakpoints for every tier — where we had to
        extrapolate, we say so above. Always confirm the final number directly with the vendor
        before you buy.
      </p>
    </div>
  );
}
