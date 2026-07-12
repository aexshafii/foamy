import Image from "next/image";

const PROJECTS = [
  {
    name: "Clay",
    href: "https://www.clay.com/",
    image: "/images/project-clay.webp",
    description:
      "Find, enrich and act on people and company data from any source - without a line of code.",
  },
  {
    name: "Aura",
    href: "https://www.aura.com/",
    image: "/images/project-aura.webp",
    description: "All-in-one, easy to use, online safety for the whole family.",
  },
  {
    name: "Mindbloom",
    href: "https://www.mindbloom.com/",
    image: "/images/project-mindbloom.webp",
    description: "Ketamine therapy for anxiety and depression.",
  },
  {
    name: "Givebutter",
    href: "https://givebutter.com/",
    image: "/images/project-givebutter.webp",
    description:
      "Modern and donor-friendly fundraising tools that anyone can start using in minutes.",
  },
];

export function ProjectsSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="relative rounded-2xl border border-primary/30 px-6 py-12 sm:px-10">
        <Image
          src="/images/smile-marker.webp"
          alt=""
          aria-hidden
          width={815}
          height={900}
          className="absolute -top-8 right-6 w-16 sm:w-20"
        />
        <h2 className="text-2xl font-bold text-primary">Projects</h2>
        <div className="mt-10 space-y-16">
          {PROJECTS.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2 sm:gap-10"
            >
              <div className="overflow-hidden rounded-lg border border-primary/20">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={3024}
                  height={1656}
                  className="h-auto w-full"
                />
              </div>
              <p className="text-sm text-primary">{project.description}</p>
            </a>
          ))}
        </div>
        <Image
          src="/images/sparkle-crosses.webp"
          alt=""
          aria-hidden
          width={1468}
          height={1512}
          className="mt-12 w-20 opacity-90"
        />
      </div>
    </section>
  );
}
