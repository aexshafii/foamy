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
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="relative inline-block">
        <h2 className="text-3xl font-bold text-primary">What you get</h2>
        <Image
          src="/images/wave-marker.png"
          alt=""
          aria-hidden
          width={1821}
          height={958}
          className="absolute top-full left-0 -mt-2 w-32"
        />
      </div>
      <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
        {ITEMS.map((item) => (
          <div key={item.title}>
            <h3 className="font-bold text-primary">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-primary">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
