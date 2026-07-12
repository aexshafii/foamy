export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto w-full max-w-6xl px-6 py-10">
      <p className="text-center text-sm text-primary/70">
        {year} © FOAMY Ltd.
      </p>
    </footer>
  );
}
