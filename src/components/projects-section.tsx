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
    <section className="relative mt-24 mb-96 md:mx-20 md:mt-40 md:mb-80">
      <Image
        src="/images/smile-marker.webp"
        alt=""
        aria-hidden
        width={815}
        height={900}
        className="absolute top-0 right-0 -z-10 w-40 md:-top-32 md:-right-24 md:w-[250px]"
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
        className="absolute -bottom-96 left-0 -z-10 w-[343px] md:-bottom-60 md:-left-12 md:w-[400px]"
      />
    </section>
  );
}
