export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full px-6 pt-8 pb-20">
      <p className="text-center font-bold text-primary">
        {year} © FOAMY Ltd.
      </p>
    </footer>
  );
}
