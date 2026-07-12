import Image from "next/image";

const STEPS = [
  {
    title: "01. Market Research",
    items: [
      "Conduct competitive analysis",
      "Determine best practices in the field",
      "Inform future decisions",
    ],
  },
  {
    title: "02. Strategy Meeting (yes, with you)",
    items: [
      "Identify website goals & objectives",
      "Review research and conclusions",
      "Determine content strategy",
      "Align on visual direction",
    ],
  },
  {
    title: "03. Website Design",
    items: ["Sitemap", "Wireframes", "Mockups"],
  },
  {
    title: "04. Website Development",
    items: ["Development with fully custom code or Webflow", "Delivery"],
  },
];

export function ProcessSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10">
      <div className="relative overflow-hidden rounded-2xl bg-primary px-8 py-14 sm:px-14">
        <Image
          src="/images/x-marker.png"
          alt=""
          aria-hidden
          width={492}
          height={471}
          className="absolute top-6 right-6 w-24 opacity-90 sm:w-32"
        />
        <h2 className="text-2xl font-bold text-primary-foreground">
          The process
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-12">
          {STEPS.map((step) => (
            <div key={step.title}>
              <h3 className="font-bold text-primary-foreground">
                {step.title}
              </h3>
              <ul className="mt-3 space-y-1 text-sm text-primary-foreground/90">
                {step.items.map((item) => (
                  <li key={item}>&ndash; {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
