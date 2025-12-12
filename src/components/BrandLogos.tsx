import Image from 'next/image';
import styles from './BrandLogos.module.css';

const brands = [
  { name: "Guess", logo: "/images/brands/guess.png", width: 120, height: 60 },
  { name: "Harley Davidson", logo: "/images/brands/harley-davidson.png", width: 180, height: 60 },
  { name: "Nike", logo: "/images/brands/nike.png", width: 100, height: 60 },
  { name: "Dickies", logo: "/images/brands/dickies.png", width: 140, height: 60 },
  { name: "The North Face", logo: "/images/brands/north-face.png", width: 160, height: 60 },
  { name: "Champion", logo: "/images/brands/champion.png", width: 140, height: 60 },
];

export default function BrandLogos() {
  return (
    <section className="overflow-hidden bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1800px]">
        {/* Scrolling Brand Carousel */}
        <div className="relative">
          <div className={`${styles.scrollAnimation} space-x-16 lg:space-x-24`}>
            {[...brands, ...brands].map((brand, index) => (
              <div 
                key={`${brand.name}-${index}`}
                className="flex min-w-[180px] items-center justify-center md:min-w-[250px]"
              >
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={brand.width}
                  height={brand.height}
                  className="h-12 w-auto object-contain grayscale opacity-80 transition-all hover:grayscale-0 hover:opacity-100 md:h-16"
                  priority={index < 6}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Red divider line */}
        <div className="mx-6 mt-12 h-1 bg-[#E31C45] lg:mx-12" />
      </div>
    </section>
  );
}