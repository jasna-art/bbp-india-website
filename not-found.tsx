import Link from "next/link";
import type { Metadata } from "next";
import { Eyebrow } from "@/components/eyebrow";
import { PrimaryCTA } from "@/components/primary-cta";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main id="main" className="container-bbp flex min-h-[80vh] flex-col justify-center py-32">
      <Eyebrow>404</Eyebrow>
      <h1 className="heading-serif text-h1 mt-8 max-w-[24ch] font-bold tracking-tight">
        This page isn't where it should be.
      </h1>
      <p className="heading-serif text-lede mt-8 max-w-reading italic text-muted">
        Either we moved it, or you took a wrong turn. Either way — here's the
        way back.
      </p>
      <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <PrimaryCTA href="/">Take me home</PrimaryCTA>
        <Link
          href="/connect"
          className="font-sans text-body font-semibold text-ink underline decoration-ink underline-offset-4 hover:text-muted"
        >
          Or talk to us instead
        </Link>
      </div>
    </main>
  );
}
