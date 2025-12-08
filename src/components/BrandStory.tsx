import Image from "next/image";
import Link from "next/link";

export default function BrandStory() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <div className="text-center">
          <h2 className="mb-6 font-display text-4xl font-bold text-primary-dark lg:text-5xl">
            H-TOWN RAGS
          </h2>
          <p className="mb-12 font-heading text-2xl font-light text-primary-red lg:text-3xl">
            THE HEART OF VINTAGE & SECOND-HAND CLOTHING
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h3 className="mb-6 font-heading text-2xl font-bold text-primary-dark">
              HAND-PICKED VINTAGE CLOTHING FROM ACROSS THE GLOBE
            </h3>
            <div className="space-y-4">
              <p className="font-body text-lg leading-relaxed text-neutral-warm">
                We hand-pick all of our stock for H-Town Rags, this ensures we get the highest quality 
                and most unique pieces. We source primarily from the UK, USA and Italy, however we have 
                clothing from all around the world!
              </p>
              <p className="font-body text-lg leading-relaxed text-neutral-warm">
                This means we always have a large variety of styles from different eras hanging on our rails. 
                We also work closely with our suppliers to ensure that we can get hold of in demand items.
              </p>
              <p className="font-body text-lg leading-relaxed text-neutral-warm">
                We have an extensive range of everything from Denim, Workwear, Womenswear, Sportswear, 
                Americana, Tees and Sweats, the list goes on…!
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-md bg-primary-red px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-primary-red/90 hover:shadow-lg"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-lg bg-neutral-100">
              <Image
                src="/images/gallery/store-photo-05.jpg"
                alt="H-Town Rags curated vintage collection"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}