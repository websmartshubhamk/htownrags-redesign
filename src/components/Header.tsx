import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto max-w-[1920px]">
        <div className="flex items-center justify-between px-6 py-4 lg:px-12">
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/h-town-rags-logo.svg"
              alt="H-Town Rags"
              width={240}
              height={80}
              className="h-16 w-auto lg:h-20"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            <Link href="/" className="font-heading text-sm font-medium uppercase tracking-wide text-primary-dark transition-colors hover:text-primary-red">
              Home
            </Link>
            <Link href="/about" className="font-heading text-sm font-medium uppercase tracking-wide text-primary-dark transition-colors hover:text-primary-red">
              About
            </Link>
            <Link href="/brands" className="font-heading text-sm font-medium uppercase tracking-wide text-primary-dark transition-colors hover:text-primary-red">
              Brands
            </Link>
            <Link href="/gallery" className="font-heading text-sm font-medium uppercase tracking-wide text-primary-dark transition-colors hover:text-primary-red">
              Gallery
            </Link>
            <Link href="/blog" className="font-heading text-sm font-medium uppercase tracking-wide text-primary-dark transition-colors hover:text-primary-red">
              Blog
            </Link>
            <Link href="/contact" className="font-heading text-sm font-medium uppercase tracking-wide text-primary-dark transition-colors hover:text-primary-red">
              Contact
            </Link>
          </nav>

          <div className="flex items-center">
            <button className="p-2 text-primary-dark transition-colors hover:text-primary-red lg:hidden">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}