import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto max-w-2xl px-6 py-28 text-center md:py-40">
      <p className="chapter">404</p>
      <h1 className="display mt-8 text-4xl">Page not found.</h1>
      <p className="mt-6 text-sm leading-[1.8] text-[var(--stone)]">
        That path is not on this staging site.
      </p>
      <div className="mt-10">
        <Link href="/" className="link-rule text-sm">
          Back to home
        </Link>
      </div>
    </main>
  );
}
