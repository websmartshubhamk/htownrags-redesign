import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden lg:h-[80vh]">
      <Image
        src="/images/home/hero-banner.jpg"
        alt="H-Town Rags Vintage Clothing Collection"
        fill
        className="object-cover"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50" />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="mx-auto max-w-[1920px] px-6 text-center lg:px-12">
          <h1 className="mb-4 font-display text-5xl font-bold text-white drop-shadow-2xl lg:text-7xl">
            H-Town Rags
          </h1>
          <p className="mb-4 font-heading text-xl font-light text-white drop-shadow-lg lg:text-2xl">
            THE HEART OF VINTAGE & SECOND-HAND CLOTHING
          </p>
          <p className="mb-8 font-body text-lg text-white/90 drop-shadow-lg">
            Hand-picked vintage clothing from across the globe
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center rounded-md bg-[#2C7A7B] px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-[#2C7A7B]/90 hover:shadow-lg"
            >
              View Collection
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-md border-2 border-white bg-white/10 px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm transition-all hover:bg-white hover:text-primary-dark"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}