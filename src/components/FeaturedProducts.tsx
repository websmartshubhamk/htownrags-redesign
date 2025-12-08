import Image from "next/image";
import Link from "next/link";

const featuredProducts = [
  {
    id: 1,
    name: "Vintage Denim Jacket",
    price: "£75",
    image: "/images/products/product-06.png",
    badge: "New",
  },
  {
    id: 2,
    name: "Classic Band Tee",
    price: "£45",
    image: "/images/products/product-07.png",
    badge: null,
  },
  {
    id: 3,
    name: "Retro Sportswear",
    price: "£65",
    image: "/images/products/product-08.png",
    badge: "Sale",
  },
  {
    id: 4,
    name: "Workwear Shirt",
    price: "£55",
    image: "/images/products/product-09.png",
    badge: null,
  },
  {
    id: 5,
    name: "Vintage Leather Jacket",
    price: "£125",
    image: "/images/products/product-10.png",
    badge: "New",
  },
  {
    id: 6,
    name: "USA Vintage Tee",
    price: "£35",
    image: "/images/products/product-11.png",
    badge: null,
  },
  {
    id: 7,
    name: "Designer Sweater",
    price: "£85",
    image: "/images/products/product-12.png",
    badge: null,
  },
  {
    id: 8,
    name: "Retro Track Jacket",
    price: "£95",
    image: "/images/products/product-13.png",
    badge: "Sale",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1920px] px-6 lg:px-12">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold text-primary-dark lg:text-5xl">
            Featured Products
          </h2>
          <p className="font-heading text-lg text-neutral-cool">
            Hand-picked vintage pieces, updated weekly
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group relative overflow-hidden rounded-lg bg-white transition-all hover:shadow-xl"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {product.badge && (
                  <span className={`absolute left-4 top-4 rounded-full px-3 py-1 font-heading text-xs font-semibold uppercase tracking-wide ${
                    product.badge === 'New' ? 'bg-accent-teal text-white' : 'bg-primary-red text-white'
                  }`}>
                    {product.badge}
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-2 bg-white/90 p-4 backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-dark text-white transition-colors hover:bg-primary-red">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-dark text-white transition-colors hover:bg-primary-red">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="mb-2 font-heading text-sm font-medium uppercase tracking-wide text-primary-dark">
                  {product.name}
                </h3>
                <p className="font-accent text-xl text-primary-red">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}