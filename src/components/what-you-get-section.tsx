import Image from "next/image";

const ITEMS = [
  {
    title: "Focus on design and conversion",
    body: "Simple, beautiful and goal-oriented websites. Strategy meetings to ensure our visions are aligned.",
  },
  {
    title: "Custom-code",
    body: "In-house advanced custom code abilities to integrate any APIs. Webflow expertise is nice, but your project will no doubt benefit from the knowledge of a full stack developer.",
  },
  {
    title: "Close collaboration",
    body: "We will work together to craft the website that meets your needs. 100% of my attention on your project. No middleman. Your success is my success.",
  },
];

export function WhatYouGetSection() {
  return (
    <section className="relative mt-24 md:mx-20 md:mt-40">
      {/* On mobile the original shows the stairs marker straddling this
          section's top-left, bleeding off the viewport edge */}
      <Image
        src="/images/x-marker.png"
        alt=""
        aria-hidden
        width={492}
        height={471}
        className="absolute -top-24 -left-12 w-[172px] md:hidden"
      />
      <h2 className="text-3xl font-bold text-primary md:text-[36px]">
        What you get
      </h2>
      <div className="grid grid-cols-1 gap-x-[100px] gap-y-10 py-12 md:grid-cols-3 md:py-20">
        {ITEMS.map((item, i) => (
          <div key={item.title} className="contents">
            <div>
              <h3 className="font-bold text-primary">{item.title}</h3>
              <p className="mt-3 text-base leading-[26px] text-primary">
                {item.body}
              </p>
            </div>
            {i === 0 && (
              <Image
                src="/images/line-marker.png"
                alt=""
                aria-hidden
                width={240}
                height={41}
                className="w-[240px] md:hidden"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
