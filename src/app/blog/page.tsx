import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - H-Town Rags | Vintage Fashion News, Style Tips & Updates",
  description: "Read the latest vintage fashion news, styling tips, brand spotlights and updates from H-Town Rags. Your source for vintage clothing insights.",
};

const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Vintage Denim: Levi's Edition",
    excerpt: "Discover the history and identification guide for authentic Levi's vintage denim pieces that we love at H-Town Rags.",
    date: "8th December 2025",
    category: "Style Guide",
    image: "/images/products/gallery/product-gallery-01.jpg",
    slug: "ultimate-guide-vintage-denim-levis"
  },
  {
    id: 2,
    title: "Sustainable Fashion: Why Vintage is the Future",
    excerpt: "Explore how choosing vintage clothing contributes to sustainable fashion and reduces environmental impact.",
    date: "5th December 2025", 
    category: "Sustainability",
    image: "/images/products/gallery/product-gallery-02.jpg",
    slug: "sustainable-fashion-vintage-future"
  },
  {
    id: 3,
    title: "Workwear Revival: Carhartt and Dickies Through the Decades",
    excerpt: "From construction sites to fashion runways, discover how workwear brands became style staples.",
    date: "2nd December 2025",
    category: "Brand Spotlight",
    image: "/images/products/gallery/product-gallery-03.jpg",
    slug: "workwear-revival-carhartt-dickies"
  },
  {
    id: 4,
    title: "How to Style Vintage Band Tees for Modern Looks",
    excerpt: "Transform your vintage band tees into contemporary outfits with these expert styling tips.",
    date: "28th November 2025",
    category: "Style Guide",
    image: "/images/products/gallery/product-gallery-04.jpg",
    slug: "style-vintage-band-tees-modern"
  },
  {
    id: 5,
    title: "The Story Behind Our Latest Finds",
    excerpt: "Take a behind-the-scenes look at our recent sourcing trip and the amazing pieces we discovered.",
    date: "25th November 2025",
    category: "Behind the Scenes",
    image: "/images/gallery/store-photo-06.jpg",
    slug: "story-behind-latest-finds"
  },
  {
    id: 6,
    title: "Winter Layering with Vintage Pieces",
    excerpt: "Master the art of layering vintage clothing to stay warm and stylish during the colder months.",
    date: "22nd November 2025",
    category: "Style Guide", 
    image: "/images/products/gallery/product-gallery-05.jpg",
    slug: "winter-layering-vintage-pieces"
  }
];

const categories = ["All", "Style Guide", "Brand Spotlight", "Sustainability", "Behind the Scenes"];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F0]">
      {/* Hero Section */}
      <section className="relative pt-[6rem] pb-16 lg:pt-[7rem] lg:pb-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <div className="text-center">
            <h1 className="mb-6 font-display text-4xl font-bold text-primary-dark sm:text-5xl lg:text-7xl">
              Blog
            </h1>
            <p className="mx-auto max-w-3xl font-heading text-lg leading-relaxed text-[#8B7355] sm:text-xl lg:text-2xl">
              Vintage fashion insights, styling tips, brand stories and updates from the 
              world of H-Town Rags.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`rounded-full px-6 py-2 font-heading text-sm font-medium uppercase tracking-wide transition-all ${
                  category === "All"
                    ? "bg-primary-red text-white"
                    : "bg-white text-primary-dark hover:bg-neutral-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <Link 
            href={`/blog/${blogPosts[0].slug}`}
            className="group block overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative aspect-[4/3] lg:aspect-auto">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 lg:p-12">
                <span className="mb-4 inline-block rounded-full bg-primary-red px-4 py-1 font-heading text-sm font-medium uppercase tracking-wide text-white">
                  Featured
                </span>
                <h2 className="mb-4 font-display text-3xl font-bold text-primary-dark lg:text-4xl">
                  {blogPosts[0].title}
                </h2>
                <p className="mb-6 font-body text-lg leading-relaxed text-[#8B7355]">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-[#64748B]">
                    <span className="font-medium">{blogPosts[0].category}</span> • {blogPosts[0].date}
                  </div>
                  <span className="font-heading text-sm font-medium uppercase tracking-wide text-primary-red group-hover:underline">
                    Read More →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <span className="mb-3 inline-block rounded-full bg-[#2C7A7B] px-3 py-1 font-heading text-xs font-medium uppercase tracking-wide text-white">
                    {post.category}
                  </span>
                  <h3 className="mb-3 font-heading text-xl font-bold text-primary-dark group-hover:text-primary-red transition-colors">
                    {post.title}
                  </h3>
                  <p className="mb-4 font-body text-sm leading-relaxed text-[#8B7355]">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-body text-xs text-[#64748B]">
                      {post.date}
                    </span>
                    <span className="font-heading text-xs font-medium uppercase tracking-wide text-primary-red group-hover:underline">
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-primary-dark py-16 text-white lg:py-24">
        <div className="mx-auto max-w-[800px] px-6 text-center lg:px-12">
          <h2 className="mb-6 font-display text-4xl font-bold lg:text-5xl">
            Stay Updated
          </h2>
          <p className="mb-8 font-body text-lg leading-relaxed text-neutral-300">
            Subscribe to our newsletter for the latest vintage fashion tips, new arrivals, 
            and exclusive insights from the H-Town Rags team.
          </p>
          <form className="mx-auto flex max-w-md gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-md border-0 bg-white/10 px-4 py-3 font-body text-white placeholder-neutral-300 backdrop-blur-sm focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-primary-red"
            />
            <button
              type="submit"
              className="rounded-md bg-primary-red px-6 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-primary-red/90 hover:shadow-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}