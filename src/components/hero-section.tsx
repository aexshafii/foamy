import Image from "next/image";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 pt-6 pb-20 md:grid-cols-2 md:gap-6">
      <div className="order-2 min-w-0 md:order-1">
        <h1 className="text-4xl leading-tight font-bold text-primary sm:text-5xl">
          Captivating websites for startups that mean business
        </h1>
        <p className="mt-6 max-w-md text-lg text-primary">
          Unlock your startup&rsquo;s full potential with custom websites
          engineered for high performance and maximum impact.
        </p>
        <Button
          size="lg"
          className="mt-8 h-12 px-6 text-base"
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
          className="mt-16 hidden w-40 md:block"
        />
      </div>
      <div className="order-1 flex min-w-0 justify-center md:order-2 md:justify-end">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full min-w-0 max-w-md"
        >
          <source src="/videos/green-blob.webm" type="video/webm" />
          <source
            src="/videos/green-blob.mp4"
            type='video/mp4; codecs="hvc1"'
          />
        </video>
      </div>
    </section>
  );
}
