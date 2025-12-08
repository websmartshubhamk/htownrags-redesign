import Link from "next/link";

export default function NewsletterSignup() {
  return (
    <section className="bg-primary-dark py-16 text-white lg:py-24">
      <div className="mx-auto max-w-[800px] px-6 text-center lg:px-12">
        <h2 className="mb-4 font-display text-4xl font-bold lg:text-5xl">
          Stay In The Loop
        </h2>
        <p className="mb-8 font-heading text-xl font-light text-accent-gold">
          Get 10% off your first order
        </p>
        <p className="mb-8 font-body text-lg leading-relaxed text-neutral-300">
          Subscribe to our newsletter for the latest arrivals, exclusive offers, and vintage fashion 
          insights. New stock is posted daily on our social media too!
        </p>
        
        <form className="mx-auto mb-8 flex max-w-md flex-col gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-md border-0 bg-white/10 px-4 py-3 font-body text-white placeholder-neutral-300 backdrop-blur-sm focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-primary-red"
            required
          />
          <button
            type="submit"
            className="rounded-md bg-primary-red px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-primary-red/90 hover:shadow-lg"
          >
            Subscribe
          </button>
        </form>
        
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <p className="font-body text-sm text-neutral-400">
            Follow us for daily updates:
          </p>
          <div className="flex gap-3">
            <a 
              href="https://www.instagram.com/htownragsuk/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-primary-red"
              aria-label="Instagram"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
              </svg>
            </a>
            <a 
              href="https://www.facebook.com/htownrags/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-primary-red"
              aria-label="Facebook"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <p className="mt-6 font-body text-xs text-neutral-400">
          We respect your privacy. Unsubscribe at any time. 
          <Link href="/privacy" className="text-neutral-300 hover:text-white">
            Privacy Policy
          </Link>
        </p>
      </div>
    </section>
  );
}