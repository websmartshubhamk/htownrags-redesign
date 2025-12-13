import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - H-Town Rags Vintage Clothing | Hitchin's Premier Vintage Store",
  description: "Learn about H-Town Rags' story, founded by Rob Hague and Charlotte Oaten in Hitchin. Discover our passion for vintage clothing, music, culture and community.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full overflow-hidden lg:h-[70vh]">
        <Image
          src="/images/about/hero-image.jpg"
          alt="H-Town Rags Store Interior"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto max-w-[1200px] px-6 text-center lg:px-12">
            <h1 className="mb-6 font-display text-5xl font-bold text-white drop-shadow-2xl lg:text-7xl">
              About Us
            </h1>
            <div className="mx-auto max-w-4xl">
              <p className="mb-8 font-heading text-2xl font-light leading-relaxed text-white drop-shadow-lg lg:text-3xl">
                H-TOWN RAGS WAS BORN OUT OF A LOVE OF VINTAGE CLOTHING, MUSIC AND CULTURE, COMMUNITY IS AT THE HEART OF EVERYTHING WE DO.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-8">
                <h2 className="mb-6 font-display text-4xl font-bold text-[#1A1A1A]">
                  Our Story
                </h2>
                <p className="font-body text-lg leading-relaxed text-[#8B7355]">
                  The business was started by Rob Hague, after selling online for some years he was presented 
                  with the opportunity of a retail space. The business started to grow and Charlotte Oaten 
                  joined shortly after. Naturally, working together, far more becomes possible!
                </p>
                <p className="mt-4 font-body text-lg leading-relaxed text-[#8B7355]">
                  As the business has grown, so has the team, they are absolutely what makes H-Town Rags so 
                  special. Each member of staff is just as passionate about the business, its stock, providing 
                  seamless customer service and creating the most friendly atmosphere. The Rags crew are amazing!
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="/images/gallery/store-photo-01.jpg"
                  alt="H-Town Rags store interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet The Team Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <h2 className="mb-16 text-center font-display text-4xl font-bold text-[#1A1A1A] lg:text-5xl">
            Meet The Team
          </h2>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Rob's Section */}
            <div className="text-center lg:text-left">
              <div className="mb-8 flex justify-center lg:justify-start">
                <div className="aspect-square w-48 overflow-hidden rounded-full bg-gray-100">
                  <Image
                    src="/images/gallery/store-photo-02.jpg"
                    alt="Rob Hague - Founder"
                    fill
                    className="object-cover"
                    sizes="192px"
                  />
                </div>
              </div>
              <h3 className="mb-2 font-heading text-2xl font-bold text-[#1A1A1A]">
                Rob Hague
              </h3>
              <p className="mb-4 font-heading text-lg font-medium text-[#E31C45]">
                Founder & Co-Owner
              </p>
              <p className="font-body text-lg leading-relaxed text-[#8B7355]">
                Rob&apos;s love of music, culture and clothing began at a very early age when he discovered 
                punk rock and he never strayed far from his interests in his career. Rob went on to work 
                for many years with heritage brand clothing in the original Millets store and his own 
                vintage store, the original &apos;Our Favourite Shop&apos; and also worked for several years in 
                the music industry drumming for bands and touring the world.
              </p>
            </div>

            {/* Charlotte's Section */}
            <div className="text-center lg:text-left">
              <div className="mb-8 flex justify-center lg:justify-start">
                <div className="aspect-square w-48 overflow-hidden rounded-full bg-gray-100">
                  <Image
                    src="/images/gallery/store-photo-03.jpg"
                    alt="Charlotte Oaten - Co-Owner"
                    fill
                    className="object-cover"
                    sizes="192px"
                  />
                </div>
              </div>
              <h3 className="mb-2 font-heading text-2xl font-bold text-[#1A1A1A]">
                Charlotte Oaten
              </h3>
              <p className="mb-4 font-heading text-lg font-medium text-[#E31C45]">
                Co-Owner & Creative Director
              </p>
              <p className="font-body text-lg leading-relaxed text-[#8B7355]">
                Charlotte has previously worked in styling, luxury fashion and retail and saw the 
                opportunity to translate the positive aspects of these environments into H-Town Rags. 
                Everything from spotting quality garments and fabrics, to seeing the importance of a 
                light, bright and organised environment to shop, also caring and paying attention to 
                each item of clothing, no matter the value. Charlotte loves meeting new people and 
                believes strongly in making sure that every single person that comes through the door 
                feels welcome and part of the Rags community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-[#1A1A1A] py-16 text-white lg:py-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <div className="text-center">
            <h2 className="mb-6 font-display text-4xl font-bold lg:text-5xl">
              H-TOWN RAGS
            </h2>
            <p className="mb-8 font-heading text-xl font-light text-[#D4A574] lg:text-2xl">
              THE HEART OF VINTAGE & SECOND-HAND CLOTHING
            </p>
            <div className="mx-auto max-w-4xl">
              <h3 className="mb-6 font-heading text-2xl font-semibold text-[#E31C45]">
                HAND-PICKED VINTAGE CLOTHING FROM ACROSS THE GLOBE
              </h3>
              <p className="font-body text-lg leading-relaxed text-[#D1D5DB]">
                We hand-pick all of our stock for H-Town Rags, this ensures we get the highest quality 
                and most unique pieces. We source primarily from the UK, USA and Italy, however we have 
                clothing from all around the world! This means we always have a large variety of styles 
                from different eras hanging on our rails.
              </p>
              <p className="mt-4 font-body text-lg leading-relaxed text-[#D1D5DB]">
                We also work closely with our suppliers to ensure that we can get hold of in demand items. 
                We have an extensive range of everything from Denim, Workwear, Womenswear, Sportswear, 
                Americana, Tees and Sweats, the list goes on…!
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}