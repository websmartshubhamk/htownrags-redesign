import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery - H-Town Rags | Vintage Clothing Collection & Store Photos",
  description: "Browse our gallery showcasing the best vintage clothing pieces and behind-the-scenes at our Hitchin store. See our curated collection in action.",
};

const productGallery = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  src: `/images/products/gallery/product-gallery-${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `Vintage clothing piece ${i + 1}`,
  category: i < 6 ? 'Denim' : i < 12 ? 'Sportswear' : 'Workwear'
}));

const storeGallery = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  src: `/images/gallery/store-photo-${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `H-Town Rags store ${i + 1}`,
}));

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full overflow-hidden lg:h-[600px]">
        <Image
          src="/images/gallery/store-photo-08.jpg"
          alt="H-Town Rags Gallery"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto max-w-[1200px] px-6 text-center lg:px-12">
            <h1 className="mb-6 font-display text-5xl font-bold text-white drop-shadow-2xl lg:text-7xl">
              Gallery
            </h1>
            <p className="mx-auto max-w-3xl font-heading text-xl leading-relaxed text-white drop-shadow-lg lg:text-2xl">
              Explore our carefully curated collection of vintage clothing and get a behind-the-scenes 
              look at our Hitchin store.
            </p>
          </div>
        </div>
      </section>

      {/* Product Gallery Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <h2 className="mb-12 text-center font-display text-4xl font-bold text-primary-dark lg:text-5xl">
            Our Collection
          </h2>
          
          {/* Category Filter Buttons */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-primary-red px-6 py-2 font-heading text-sm font-medium uppercase tracking-wide text-white transition-all hover:bg-primary-red/90">
              All
            </button>
            <button className="rounded-full bg-white px-6 py-2 font-heading text-sm font-medium uppercase tracking-wide text-primary-dark transition-all hover:bg-neutral-100">
              Denim
            </button>
            <button className="rounded-full bg-white px-6 py-2 font-heading text-sm font-medium uppercase tracking-wide text-primary-dark transition-all hover:bg-neutral-100">
              Sportswear
            </button>
            <button className="rounded-full bg-white px-6 py-2 font-heading text-sm font-medium uppercase tracking-wide text-primary-dark transition-all hover:bg-neutral-100">
              Workwear
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {productGallery.map((item) => (
              <div 
                key={item.id}
                className="group relative aspect-square overflow-hidden rounded-lg bg-neutral-100 cursor-pointer"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="rounded-full bg-white/90 px-3 py-1 font-heading text-xs font-medium uppercase tracking-wide text-primary-dark backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Gallery Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <h2 className="mb-12 text-center font-display text-4xl font-bold text-primary-dark lg:text-5xl">
            Inside H-Town Rags
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {storeGallery.map((item) => (
              <div 
                key={item.id}
                className="group relative overflow-hidden rounded-lg bg-neutral-100"
                style={{ aspectRatio: item.id % 3 === 0 ? '3/4' : '4/3' }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="bg-primary-dark py-16 text-white lg:py-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <h2 className="mb-6 font-display text-4xl font-bold lg:text-5xl">
                Visit Our Store
              </h2>
              <p className="mb-8 font-body text-lg leading-relaxed text-neutral-300">
                Experience H-Town Rags in person at our Hitchin location. Browse our full collection, 
                discover unique pieces, and meet our passionate team who are always happy to help you 
                find the perfect vintage piece.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 text-primary-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-heading text-lg font-medium">Our Location</p>
                    <p className="text-neutral-300">
                      The Carling Building<br />
                      Coopers Yard<br />
                      Hitchin, Hertfordshire SG5 1AR
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 text-primary-red" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <div>
                    <p className="font-heading text-lg font-medium">Phone</p>
                    <a href="tel:01462453189" className="text-neutral-300 hover:text-white">
                      01462 453189
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-lg">
                <Image
                  src="/images/gallery/store-photo-05.jpg"
                  alt="H-Town Rags storefront"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media CTA */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[800px] px-6 text-center lg:px-12">
          <h2 className="mb-6 font-display text-4xl font-bold text-primary-dark">
            Follow Our Journey
          </h2>
          <p className="mb-8 font-body text-lg leading-relaxed text-neutral-warm">
            Stay up to date with our latest arrivals and behind-the-scenes content by following 
            us on social media. New pieces arrive daily!
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://instagram.com/htownrags"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-primary-red px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-primary-red/90 hover:shadow-lg"
            >
              Follow on Instagram
            </a>
            <a
              href="https://facebook.com/htownrags"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border-2 border-primary-dark bg-transparent px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-primary-dark transition-all hover:bg-primary-dark hover:text-white"
            >
              Follow on Facebook
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}