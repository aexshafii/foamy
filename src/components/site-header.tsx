import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="flex w-full items-center justify-between px-6 py-8 md:px-12">
      <Link href="/" className="font-wordmark text-[26px] text-primary">
        foamy
      </Link>
    </header>
  );
}
