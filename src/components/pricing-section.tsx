const FACTS = [
  { label: "Time?", value: "2-8 weeks" },
  { label: "Investment?", value: "Starts at $10,000 USD" },
  { label: "Availability?", value: "I have a spot starting November 1" },
];

export function PricingSection() {
  return (
    <section className="py-10 md:mx-20">
      <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
        {FACTS.map((fact) => (
          <div key={fact.label}>
            <p className="text-sm font-bold tracking-wide text-primary uppercase">
              {fact.label}
            </p>
            <p className="mt-2 text-primary/80 italic">{fact.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
