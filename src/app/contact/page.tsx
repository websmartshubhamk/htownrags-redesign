import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - H-Town Rags | Get in Touch with Our Hitchin Store",
  description: "Contact H-Town Rags vintage clothing store in Hitchin. Visit us at The Carling Building, Coopers Yard or call 01462 453189. We're here to help!",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-primary-cream">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <div className="text-center">
            <h1 className="mb-6 font-display text-5xl font-bold text-primary-dark lg:text-7xl">
              Contact Us
            </h1>
            <p className="mx-auto max-w-3xl font-heading text-xl leading-relaxed text-neutral-warm lg:text-2xl">
              We'd love to hear from you! Whether you have questions about our stock, 
              need styling advice, or want to visit our store.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Details */}
            <div>
              <h2 className="mb-8 font-display text-4xl font-bold text-primary-dark">
                Get in Touch
              </h2>
              
              <div className="space-y-8">
                {/* Store Location */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-red">
                    <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 font-heading text-xl font-bold text-primary-dark">
                      Visit Our Store
                    </h3>
                    <address className="not-italic font-body text-lg leading-relaxed text-neutral-warm">
                      The Carling Building<br />
                      Coopers Yard<br />
                      Hitchin, Hertfordshire<br />
                      SG5 1AR
                    </address>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-teal">
                    <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 font-heading text-xl font-bold text-primary-dark">
                      Call Us
                    </h3>
                    <a 
                      href="tel:01462453189"
                      className="font-body text-lg text-neutral-warm transition-colors hover:text-primary-red"
                    >
                      01462 453189
                    </a>
                    <p className="mt-1 font-body text-sm text-neutral-cool">
                      Monday - Saturday: 10:00 - 17:00<br />
                      Sunday: 11:00 - 16:00
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-gold">
                    <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 font-heading text-xl font-bold text-primary-dark">
                      Email Us
                    </h3>
                    <a 
                      href="mailto:team@htownragsvintageclothing.co.uk"
                      className="break-all font-body text-lg text-neutral-warm transition-colors hover:text-primary-red"
                    >
                      team@htownragsvintageclothing.co.uk
                    </a>
                    <p className="mt-1 font-body text-sm text-neutral-cool">
                      We aim to respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-warm">
                    <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 font-heading text-xl font-bold text-primary-dark">
                      Follow Us
                    </h3>
                    <div className="flex gap-3">
                      <a 
                        href="https://instagram.com/htownrags" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-body text-lg text-neutral-warm transition-colors hover:text-primary-red"
                      >
                        Instagram
                      </a>
                      <span className="text-neutral-cool">•</span>
                      <a 
                        href="https://facebook.com/htownrags" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-body text-lg text-neutral-warm transition-colors hover:text-primary-red"
                      >
                        Facebook
                      </a>
                    </div>
                    <p className="mt-1 font-body text-sm text-neutral-cool">
                      Daily updates with new arrivals
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <h2 className="mb-6 font-display text-3xl font-bold text-primary-dark">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-heading text-sm font-medium text-primary-dark">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-md border border-neutral-300 px-4 py-3 font-body transition-colors focus:border-primary-red focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-heading text-sm font-medium text-primary-dark">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-md border border-neutral-300 px-4 py-3 font-body transition-colors focus:border-primary-red focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block font-heading text-sm font-medium text-primary-dark">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-md border border-neutral-300 px-4 py-3 font-body transition-colors focus:border-primary-red focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-heading text-sm font-medium text-primary-dark">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-md border border-neutral-300 px-4 py-3 font-body transition-colors focus:border-primary-red focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-heading text-sm font-medium text-primary-dark">
                    Subject *
                  </label>
                  <select
                    required
                    className="w-full rounded-md border border-neutral-300 px-4 py-3 font-body transition-colors focus:border-primary-red focus:outline-none"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Enquiry</option>
                    <option value="stock">Stock Enquiry</option>
                    <option value="styling">Styling Advice</option>
                    <option value="wholesale">Wholesale Enquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block font-heading text-sm font-medium text-primary-dark">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full rounded-md border border-neutral-300 px-4 py-3 font-body transition-colors focus:border-primary-red focus:outline-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-primary-red px-6 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-primary-red/90 hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Store Photos */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <h2 className="mb-12 text-center font-display text-4xl font-bold text-primary-dark">
            Visit Our Hitchin Store
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-lg bg-neutral-100">
                <Image
                  src={`/images/gallery/store-photo-0${i + 1}.jpg`}
                  alt={`H-Town Rags store interior ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <h2 className="mb-12 text-center font-display text-4xl font-bold text-primary-dark">
            Find Us in Hitchin
          </h2>
          <div className="overflow-hidden rounded-lg">
            <div className="aspect-video bg-neutral-200 flex items-center justify-center">
              <p className="font-heading text-lg text-neutral-600">
                Interactive map would be embedded here
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="mb-4 font-body text-lg text-neutral-warm">
              We're located in the heart of Hitchin's historic town centre, just a short walk from the train station.
            </p>
            <a
              href="https://maps.google.com/?q=The+Carling+Building+Coopers+Yard+Hitchin+SG5+1AR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-accent-teal px-6 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-accent-teal/90 hover:shadow-lg"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}