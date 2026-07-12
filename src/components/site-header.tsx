import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
      <Link href="/" className="font-wordmark text-2xl text-primary">
        foamy
      </Link>
    </header>
  );
}
