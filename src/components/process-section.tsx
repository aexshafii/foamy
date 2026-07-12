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
    <section className="relative mt-24 mb-32 md:mt-40 md:mb-80">
      <Image
        src="/images/wave-marker.png"
        alt=""
        aria-hidden
        width={1821}
        height={958}
        className="absolute -top-24 right-[10%] hidden w-[34rem] md:block"
      />
      <div className="relative rounded-2xl bg-primary p-8 pb-16 md:pb-20">
        <h2 className="text-3xl font-bold text-primary-foreground md:text-[36px]">
          The process
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-20 md:gap-y-14">
          {STEPS.map((step) => (
            <div key={step.title}>
              <h3 className="text-xl font-bold text-primary-foreground">
                {step.title}
              </h3>
              <ul className="mt-4 space-y-1 text-base leading-[26px] text-primary-foreground">
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
