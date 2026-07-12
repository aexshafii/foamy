const FACTS = [
  { label: "Time?", value: "2-8 weeks" },
  { label: "Investment?", value: "Starts at $2500 USD" },
  // TODO: this date is stale (carried over from the original site) - confirm real availability.
  { label: "Availability?", value: "I have a spot starting October 15" },
];

export function PricingSection() {
  return (
    <section className="w-full py-10">
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
