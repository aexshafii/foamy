// NOTE: the original site listed Dropbox/Aura/Vanta/Forma/Primer here as wordmarks
// with no real logo assets in the page source. Given the founder describes himself as
// a solo freelancer, this reads like unswapped Webflow template placeholder content.
// Rendered here as plain text pending confirmation of real client names.
const LOGOS = ["Dropbox", "āURA", "Vanta", "forma", "primer"];

export function TrustedBySection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10">
      <p className="text-center text-sm text-primary">Trusted by:</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
        {LOGOS.map((logo) => (
          <span
            key={logo}
            className="text-xl font-bold tracking-tight text-primary/70"
          >
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}
