import Image from "next/image";

const LOGOS = [
  { name: "Dropbox", src: "/images/logo-dropbox.svg" },
  { name: "Aura", src: "/images/logo-aura.svg" },
  { name: "Vanta", src: "/images/logo-vanta.svg" },
  { name: "Forma", src: "/images/logo-forma.svg" },
  { name: "Primer", src: "/images/logo-primer.svg" },
];

export function TrustedBySection() {
  return (
    <section className="relative flex flex-col items-center">
      <Image
        src="/images/x-marker.png"
        alt=""
        aria-hidden
        width={492}
        height={471}
        className="absolute -top-6 left-0 w-24 md:-top-10 md:w-28"
      />
      <p className="text-primary">Trusted by:</p>
      <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-x-[8vw] gap-y-10 py-8 md:h-[200px] md:flex-nowrap md:py-0">
        {LOGOS.map((logo) => (
          <Image
            key={logo.name}
            src={logo.src}
            alt={logo.name}
            width={160}
            height={40}
            className="h-auto max-h-10 w-auto max-w-[10rem]"
          />
        ))}
      </div>
    </section>
  );
}
