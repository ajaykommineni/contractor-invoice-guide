import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">
        Privacy Policy
      </h1>
      <div className="prose prose-neutral mt-6 max-w-none text-muted-foreground">
        <p>
          This placeholder outlines the sections a real privacy policy for
          this site will need to cover: what data we collect (analytics,
          cookies), how affiliate links and tracking cookies work, third-party
          services used (analytics, ad networks), and how visitors can
          contact us about their data.
        </p>
        <p>
          [PLACEHOLDER — this is not legal advice. Generate the final policy
          with a proper privacy policy generator or legal counsel before this
          site goes live, especially once real analytics/ad tools are added.]
        </p>
      </div>
    </main>
  );
}
