import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Denim",
    description: "Classic jeans from Levi&apos;s, Lee & Wrangler",
    image: "/images/products/gallery/product-gallery-01.jpg",
    href: "/brands#denim"
  },
  {
    name: "Workwear",
    description: "Heritage Carhartt & Dickies pieces",
    image: "/images/products/gallery/product-gallery-02.jpg", 
    href: "/brands#workwear"
  },
  {
    name: "Sportswear",
    description: "Vintage Nike, Adidas & athletic wear",
    image: "/images/products/gallery/product-gallery-03.jpg",
    href: "/brands#sportswear"
  },
  {
    name: "Band Tees",
    description: "Authentic vintage band merchandise",
    image: "/images/products/gallery/product-gallery-04.jpg",
    href: "/brands#band-tees"
  },
  {
    name: "USA Vintage",
    description: "Authentic American vintage clothing",
    image: "/images/products/gallery/product-gallery-05.jpg",
    href: "/brands#usa-vintage"
  },
  {
    name: "New Arrivals", 
    description: "Fresh stock added daily",
    image: "/images/products/gallery/product-gallery-06.jpg",
    href: "/gallery"
  }
];

export default function FeaturedCategories() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold text-primary-dark lg:text-5xl">
            Browse by Category
          </h2>
          <p className="font-heading text-lg text-neutral-cool">
            Discover our carefully curated vintage collections
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="group relative overflow-hidden rounded-lg bg-neutral-100 transition-all hover:shadow-xl"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="mb-2 font-heading text-xl font-bold uppercase tracking-wide text-white">
                    {category.name}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-neutral-200">
                    {category.description}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}