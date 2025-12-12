import Image from 'next/image';
import styles from './BrandLogos.module.css';

// Brand data with real logos where available, text for others
type BrandImage = {
  name: string;
  isImage: true;
  logo: string;
  width: number;
  height: number;
};

type BrandText = {
  name: string;
  isImage: false;
  text: string;
  style: string;
};

type Brand = BrandImage | BrandText;

const brands: Brand[] = [
  { 
    name: "Nike", 
    logo: "/images/brands/nike.png",
    isImage: true,
    width: 200,
    height: 72
  },
  { 
    name: "Dickies", 
    logo: "/images/brands/dickies.png",
    isImage: true,
    width: 160,
    height: 89
  },
  { 
    name: "The North Face", 
    isImage: false,
    text: "THE NORTH FACE",
    style: "font-bold text-3xl tracking-wide"
  },
  { 
    name: "Champion", 
    isImage: false,
    text: "Champion",
    style: "font-bold text-4xl italic"
  },
  { 
    name: "Guess", 
    isImage: false,
    text: "GUESS",
    style: "font-bold text-5xl tracking-wider"
  },
  { 
    name: "Harley Davidson", 
    logo: "/images/brands/harley-davidson.png",
    isImage: true,
    width: 200,
    height: 163
  },
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
                <div className="grayscale opacity-80 transition-all hover:grayscale-0 hover:opacity-100">
                  {brand.isImage ? (
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      width={brand.width}
                      height={brand.height}
                      className="h-12 w-auto object-contain md:h-16"
                      priority
                    />
                  ) : (
                    <span className={brand.style}>{brand.text}</span>
                  )}
                </div>
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