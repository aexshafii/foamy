import Image from "next/image";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="relative mt-32 pb-24 md:mt-20 md:pb-40">
      <div className="relative max-w-[55rem]">
        {/* Original .background_video: absolute, z -1, 60x50rem at top:-15rem left:15rem
            (mobile: 30x30rem at top:-10rem left:-3rem) */}
        <div className="absolute -top-40 -left-12 -z-10 h-[30rem] w-[30rem] md:-top-80 md:left-[25rem] md:h-[50rem] md:w-[70rem]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-contain"
          >
            <source src="/videos/green-blob.webm" type="video/webm" />
            <source
              src="/videos/green-blob.mp4"
              type='video/mp4; codecs="hvc1"'
            />
          </video>
        </div>
        <h1 className="mt-12 max-w-[50rem] text-[2rem] leading-10 font-bold text-primary md:text-[46px] md:leading-[58px]">
          Captivating websites for startups that mean business
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-primary">
          Unlock your startup&rsquo;s full potential with custom websites
          engineered for high performance and maximum impact.
        </p>
        <Button
          size="lg"
          className="mt-8 h-14 w-full max-w-[30rem] text-base"
          nativeButton={false}
          render={
            <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" />
          }
        >
          Book a Discovery Call
        </Button>
        <Image
          src="/images/line-marker.png"
          alt=""
          aria-hidden
          width={240}
          height={41}
          className="mt-10 w-32 md:mt-14"
        />
      </div>
    </section>
  );
}
