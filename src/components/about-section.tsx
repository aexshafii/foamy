import Image from "next/image";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function AboutSection() {
  return (
    <section className="my-20">
      <div className="grid grid-cols-1 gap-10 rounded-2xl bg-primary p-8 md:grid-cols-2 md:p-10">
        <div className="min-w-0">
          <h2 className="text-3xl font-bold text-primary-foreground md:text-[36px]">
            The team
          </h2>
          <p className="mt-4 font-bold text-primary-foreground">
            It&rsquo;s me, just me, for now&hellip;
          </p>
          <p className="mt-6 text-base leading-[26px] text-primary-foreground">
            Hey there 👋, I&rsquo;m Alex Shafii, a developer who&rsquo;s always
            looking to help entrepreneurs establish new products with a shiny
            new website.
          </p>
          <p className="mt-4 text-base leading-[26px] text-primary-foreground">
            I have over 5 years of experience working at or with startups.
            Built over 30 landing pages for companies of all sizes. Webflow
            Dev or full-custom code, I&rsquo;m your man.
          </p>
          <p className="mt-4 text-base leading-[26px] text-primary-foreground">
            I&rsquo;m based in Barcelona but move around every now and then.
            Also available in French and Spanish.
          </p>
          <p className="mt-4 text-base leading-[26px] text-primary-foreground">
            Get in touch if you have a project you think we should be working
            on together.
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="mt-10 h-14 w-full max-w-[24rem] text-base"
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
        <div className="flex items-end justify-center md:justify-end">
          <Image
            src="/images/alex-profile.webp"
            alt="Alex Shafii"
            width={802}
            height={782}
            className="w-full max-w-sm rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
