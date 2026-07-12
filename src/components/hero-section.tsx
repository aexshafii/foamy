import Image from "next/image";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="relative mt-4 pb-24 md:mt-20 md:pb-64">
      <div className="relative max-w-[55rem]">
        {/* Original .background_video: absolute, z -1, 60x50rem at top:-15rem left:15rem
            (mobile: 30x30rem at top:-10rem left:-3rem) */}
        <div className="absolute -top-44 -left-8 -z-10 h-[30rem] w-[30rem] md:-top-80 md:left-[25rem] md:h-[50rem] md:w-[70rem]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-contain"
          >
            {/* hvc1 (HEVC with alpha) must come first: Safari plays it with
                transparency, while VP9 webm renders a black background there */}
            <source
              src="/videos/green-blob.mp4"
              type='video/mp4; codecs="hvc1"'
            />
            <source src="/videos/green-blob.webm" type="video/webm" />
          </video>
        </div>
        <h1 className="mt-8 max-w-[50rem] text-[2rem] leading-10 font-bold text-primary md:mt-12 md:text-[46px] md:leading-[58px]">
          Captivating websites for startups that mean business
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-primary">
          Unlock your startup&rsquo;s full potential with custom websites
          engineered for high performance and maximum impact.
        </p>
        <Button
          size="lg"
          className="mt-8 h-16 w-full max-w-[522px] text-sm"
          nativeButton={false}
          render={
            <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" />
          }
        >
          Book a Discovery Call
        </Button>
      </div>
    </section>
  );
}
