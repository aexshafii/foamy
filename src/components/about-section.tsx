import Image from "next/image";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function AboutSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10">
      <div className="grid grid-cols-1 gap-10 rounded-2xl bg-primary px-8 py-14 sm:grid-cols-2 sm:px-14">
        <div className="min-w-0">
          <h2 className="text-2xl font-bold text-primary-foreground">
            The team
          </h2>
          <p className="mt-2 font-bold text-primary-foreground">
            It&rsquo;s me, just me, for now&hellip;
          </p>
          <p className="mt-6 text-sm leading-relaxed text-primary-foreground/90">
            Hey there 👋, I&rsquo;m Alex Shafii, a developer who&rsquo;s always
            looking to help entrepreneurs establish new products with a shiny
            new website.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/90">
            I have over 5 years of experience working at or with startups.
            Built over 30 landing pages for companies of all sizes. Webflow
            Dev or full-custom code, I&rsquo;m your man.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/90">
            I&rsquo;m based in Barcelona but move around every now and then.
            Also available in French and Spanish.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/90">
            Get in touch if you have a project you think we should be working
            on together.
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="mt-8 h-12 w-full px-6 text-base sm:w-auto"
            nativeButton={false}
            render={
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            Book a Discovery Call
          </Button>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/images/alex-profile.webp"
            alt="Alex Shafii"
            width={802}
            height={782}
            className="w-full max-w-xs rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
