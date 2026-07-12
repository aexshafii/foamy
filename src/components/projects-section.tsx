import Image from "next/image";
import { cn } from "@/lib/utils";

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
    <section className="relative mt-24 mb-32 md:mt-40 md:mb-80">
      <Image
        src="/images/smile-marker.webp"
        alt=""
        aria-hidden
        width={815}
        height={900}
        className="absolute -top-16 right-12 w-24 md:-top-20 md:w-32"
      />
      <div className="rounded-2xl border border-primary p-8">
        <h2 className="text-3xl font-bold text-primary md:text-[36px]">
          Projects (feat. Finsweet)
        </h2>
        <div className="my-10 space-y-16 md:my-20 md:space-y-[8.5rem]">
          {PROJECTS.map((project, i) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="grid grid-cols-1 items-center gap-x-12 gap-y-6 md:grid-cols-2"
            >
              <div
                className={cn(
                  "overflow-hidden rounded-lg border border-primary",
                  i % 2 === 1 && "md:order-2"
                )}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width={3024}
                  height={1656}
                  className="h-auto w-full"
                />
              </div>
              <p className="text-base leading-[26px] text-primary">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </div>
      <Image
        src="/images/sparkle-crosses.webp"
        alt=""
        aria-hidden
        width={1468}
        height={1512}
        className="absolute -bottom-32 left-4 w-28 md:-bottom-56 md:w-40"
      />
    </section>
  );
}
