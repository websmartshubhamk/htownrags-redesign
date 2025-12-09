import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Brands - H-Town Rags | Vintage Clothing from Top Brands",
  description: "Discover our collection of vintage clothing from premium brands including Levi's, Nike, Adidas, Carhartt, Ralph Lauren, Burberry and many more.",
};

const brandCategories = [
  {
    title: "Denim Legends",
    brands: ["Levi's", "Lee", "Wrangler"],
    description: "Classic denim from the most iconic brands in history"
  },
  {
    title: "Workwear Heritage", 
    brands: ["Carhartt", "Dickies"],
    description: "Authentic workwear built to last generations"
  },
  {
    title: "Lifestyle & Culture",
    brands: ["Harley Davidson", "Ed Hardy"],
    description: "Brands that defined subcultures and movements"
  },
  {
    title: "Sportswear Icons",
    brands: ["Nike", "Adidas", "Reebok", "Puma"],
    description: "Athletic wear from the world's most recognised brands"
  },
  {
    title: "Luxury Fashion",
    brands: ["D&G", "Burberry", "Cavalli"],
    description: "High-end designer pieces at vintage prices"
  },
  {
    title: "Streetwear Classics",
    brands: ["True Religion", "Fubu", "Evisu"],
    description: "Street culture and urban fashion essentials"
  },
  {
    title: "Outdoor Adventure",
    brands: ["North Face", "Fjällräven"],
    description: "Technical outdoor gear with vintage charm"
  },
  {
    title: "Preppy Essentials",
    brands: ["Fred Perry", "Lacoste", "Ralph Lauren"],
    description: "Timeless preppy style and sophisticated classics"
  }
];

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F0]">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full overflow-hidden lg:h-[600px]">
        <Image
          src="/images/products/gallery/product-gallery-02.jpg"
          alt="Vintage Brand Collection"
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
              Our Brands
            </h1>
            <p className="mx-auto max-w-3xl font-heading text-xl leading-relaxed text-white drop-shadow-lg lg:text-2xl">
              At H-Town Rags, we stock a wide range of second hand vintage clothing from some 
              of the most sought after brands.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Categories */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {brandCategories.map((category, index) => (
              <div 
                key={index}
                className="overflow-hidden rounded-lg bg-white p-8 shadow-lg transition-all hover:shadow-xl"
              >
                <h2 className="mb-4 font-display text-2xl font-bold text-primary-dark lg:text-3xl">
                  {category.title}
                </h2>
                <p className="mb-6 font-body text-lg text-[#8B7355]">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {category.brands.map((brand, brandIndex) => (
                    <span 
                      key={brandIndex}
                      className="rounded-full bg-primary-red px-4 py-2 font-heading text-sm font-medium uppercase tracking-wide text-white"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stock Rotation Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <h2 className="mb-6 font-display text-4xl font-bold text-primary-dark lg:text-5xl">
                Stock Rotation
              </h2>
              <p className="mb-8 font-heading text-2xl font-light text-primary-red">
                FRESH STOCK GOING OUT EACH AND EVERY DAY
              </p>
              <div className="space-y-4">
                <p className="font-body text-lg leading-relaxed text-[#8B7355]">
                  We believe in refreshing our stock regularly, new stock is prepared daily to ensure 
                  that however frequently you visit us, there will always be something new to see!
                </p>
                <p className="font-body text-lg leading-relaxed text-[#8B7355]">
                  Week to week, season to season, our stock is kept up to date, but as you are aware, 
                  it&apos;s always sunny somewhere, so if you need an Aloha shirt in December, we can help you!
                </p>
                <p className="font-body text-lg leading-relaxed text-[#8B7355]">
                  New stock is posted daily on our social media, so be sure to give us a follow.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-lg bg-neutral-100">
                <Image
                  src="/images/gallery/store-photo-04.jpg"
                  alt="Fresh stock at H-Town Rags"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brands Gallery */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <h2 className="mb-12 text-center font-display text-4xl font-bold text-primary-dark">
            And Many More...
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="group relative aspect-square overflow-hidden rounded-lg bg-neutral-100">
                <Image
                  src={`/images/products/gallery/product-gallery-${String(i + 1).padStart(2, '0')}.jpg`}
                  alt={`Vintage brand clothing ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-dark py-16 text-white lg:py-24">
        <div className="mx-auto max-w-[800px] px-6 text-center lg:px-12">
          <h2 className="mb-6 font-display text-4xl font-bold lg:text-5xl">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="mb-8 font-body text-lg leading-relaxed text-neutral-300">
            We&apos;re always sourcing new pieces and working with our suppliers to get in-demand items. 
            Get in touch and let us know what you&apos;re after!
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary-red px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-primary-red/90 hover:shadow-lg"
            >
              Contact Us
            </a>
            <a
              href="/gallery"
              className="inline-flex items-center justify-center rounded-md border-2 border-white bg-white/10 px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm transition-all hover:bg-white hover:text-primary-dark"
            >
              View Gallery
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}