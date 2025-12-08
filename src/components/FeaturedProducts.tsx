import Image from "next/image";

const featuredProducts = [
  {
    id: 1,
    name: "Vintage Denim Jacket",
    image: "/images/products/product-06.png",
    badge: "New",
  },
  {
    id: 2,
    name: "Classic Band Tee",
    image: "/images/products/product-07.png",
    badge: null,
  },
  {
    id: 3,
    name: "Retro Sportswear",
    image: "/images/products/product-08.png",
    badge: "Featured",
  },
  {
    id: 4,
    name: "Workwear Shirt",
    image: "/images/products/product-09.png",
    badge: null,
  },
  {
    id: 5,
    name: "Vintage Leather Jacket",
    image: "/images/products/product-10.png",
    badge: "New",
  },
  {
    id: 6,
    name: "USA Vintage Tee",
    image: "/images/products/product-11.png",
    badge: null,
  },
  {
    id: 7,
    name: "Designer Sweater",
    image: "/images/products/product-12.png",
    badge: null,
  },
  {
    id: 8,
    name: "Retro Track Jacket",
    image: "/images/products/product-13.png",
    badge: "Featured",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1920px] px-6 lg:px-12">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold text-[#1A1A1A] lg:text-5xl">
            Featured Products
          </h2>
          <p className="font-heading text-lg text-[#64748B]">
            Hand-picked vintage pieces, updated weekly
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
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
                    product.badge === 'New' ? 'bg-[#2C7A7B] text-white' : 'bg-[#E31C45] text-white'
                  }`}>
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-heading text-sm font-medium uppercase tracking-wide text-[#1A1A1A]">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}