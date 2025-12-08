import Image from "next/image";
import Link from "next/link";

export default function StoreInfo() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2 className="mb-6 font-display text-4xl font-bold text-primary-dark lg:text-5xl">
              Visit Our Store
            </h2>
            <p className="mb-8 font-heading text-xl text-neutral-warm">
              Experience H-Town Rags in person at our Hitchin location
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-red">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 font-heading text-lg font-bold text-primary-dark">
                    Our Location
                  </h3>
                  <address className="not-italic font-body leading-relaxed text-neutral-warm">
                    The Carling Building<br />
                    Coopers Yard<br />
                    Hitchin, Hertfordshire<br />
                    SG5 1AR
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-teal">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2L3 7v11a1 1 0 001 1h3v-6h6v6h3a1 1 0 001-1V7l-7-5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 font-heading text-lg font-bold text-primary-dark">
                    Opening Hours
                  </h3>
                  <div className="font-body leading-relaxed text-neutral-warm">
                    <p>Monday - Saturday: 10:00 - 17:00</p>
                    <p>Sunday: 11:00 - 16:00</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-gold">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 font-heading text-lg font-bold text-primary-dark">
                    Get In Touch
                  </h3>
                  <div className="font-body leading-relaxed text-neutral-warm">
                    <p>
                      <a href="tel:01462453189" className="hover:text-primary-red transition-colors">
                        01462 453189
                      </a>
                    </p>
                    <p>
                      <a 
                        href="mailto:team@htownragsvintageclothing.co.uk" 
                        className="break-all hover:text-primary-red transition-colors"
                      >
                        team@htownragsvintageclothing.co.uk
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary-red px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-primary-red/90 hover:shadow-lg"
              >
                Contact Us
              </Link>
              <a
                href="https://maps.google.com/?q=The+Carling+Building+Coopers+Yard+Hitchin+SG5+1AR"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border-2 border-primary-dark bg-transparent px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-primary-dark transition-all hover:bg-primary-dark hover:text-white"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-lg bg-neutral-100">
              <Image
                src="/images/gallery/store-photo-07.jpg"
                alt="H-Town Rags Hitchin store exterior"
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