"use client";

import { useMemo, useState } from "react";
import { ArrowDown, ArrowUp, ArrowUpDown, Search } from "lucide-react";
import type { Tool } from "@/data/tools";

interface QuickCompareTableProps {
  tools: Tool[];
}

type SortKey = "name" | "startingPrice" | "ratingValue";
type SortDirection = "asc" | "desc";

function formatPrice(tool: Tool): string {
  return tool.startingPrice === 0 ? "Free" : `$${tool.startingPrice.toFixed(2)}/mo`;
}

export function QuickCompareTable({ tools }: QuickCompareTableProps) {
  const [query, setQuery] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("startingPrice");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const matches = needle
      ? tools.filter(
          (tool) =>
            tool.name.toLowerCase().includes(needle) ||
            tool.bestFor.toLowerCase().includes(needle),
        )
      : tools;

    const sorted = [...matches].sort((a, b) => {
      let result = 0;
      if (sortKey === "name") {
        result = a.name.localeCompare(b.name);
      } else if (sortKey === "startingPrice") {
        result = a.startingPrice - b.startingPrice;
      } else {
        result = (a.ratingValue ?? 0) - (b.ratingValue ?? 0);
      }
      return sortDirection === "asc" ? result : -result;
    });

    return sorted;
  }, [tools, query, sortKey, sortDirection]);

  function handleSort(key: SortKey) {
    if (key === sortKey) {
      setSortDirection((current) => (current === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  }

  function SortIcon({ column }: { column: SortKey }) {
    if (column !== sortKey) {
      return <ArrowUpDown className="size-3.5 text-muted-foreground/60" aria-hidden="true" />;
    }
    return sortDirection === "asc" ? (
      <ArrowUp className="size-3.5 text-primary" aria-hidden="true" />
    ) : (
      <ArrowDown className="size-3.5 text-primary" aria-hidden="true" />
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      <div className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2">
        <Search className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Filter by name or best-for (e.g. HVAC, solo)"
          className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
          aria-label="Filter tools"
        />
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border text-xs uppercase tracking-wide text-muted-foreground">
              <th scope="col" className="py-2 pr-4">
                <button
                  type="button"
                  onClick={() => handleSort("name")}
                  className="flex cursor-pointer items-center gap-1 font-semibold hover:text-primary"
                >
                  Tool
                  <SortIcon column="name" />
                </button>
              </th>
              <th scope="col" className="py-2 pr-4">
                <button
                  type="button"
                  onClick={() => handleSort("startingPrice")}
                  className="flex cursor-pointer items-center gap-1 font-semibold hover:text-primary"
                >
                  Starting price
                  <SortIcon column="startingPrice" />
                </button>
              </th>
              <th scope="col" className="py-2 pr-4">
                Best for
              </th>
              <th scope="col" className="py-2">
                <button
                  type="button"
                  onClick={() => handleSort("ratingValue")}
                  className="flex cursor-pointer items-center gap-1 font-semibold hover:text-primary"
                >
                  Rating
                  <SortIcon column="ratingValue" />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((tool) => (
              <tr key={tool.slug} className="border-b border-border/60 last:border-0">
                <td className="py-3 pr-4 font-medium text-foreground">
                  <a href={`#${tool.slug}`} className="hover:text-primary hover:underline">
                    {tool.name}
                  </a>
                </td>
                <td className="py-3 pr-4 text-muted-foreground">{formatPrice(tool)}</td>
                <td className="py-3 pr-4 text-muted-foreground">{tool.shortBestFor}</td>
                <td className="py-3 text-muted-foreground">
                  {tool.ratingValue ? `${tool.ratingValue.toFixed(1)} / 5` : "—"}
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={4} className="py-6 text-center text-muted-foreground">
                  No tools match &quot;{query}&quot;.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
