import styles from './BrandLogos.module.css';

const brands = [
  { name: "GUESS", style: "font-bold text-[#E31C45] text-3xl md:text-4xl" },
  { name: "HARLEY-DAVIDSON", style: "font-bold text-[#FF6600] text-2xl md:text-3xl" },
  { name: "NIKE", style: "font-bold text-[#1A1A1A] text-3xl md:text-4xl italic" },
  { name: "Dickies", style: "font-bold text-[#0055A4] text-3xl md:text-4xl" },
  { name: "THE NORTH FACE", style: "font-bold text-[#1A1A1A] text-2xl md:text-3xl" },
  { name: "Champion", style: "font-bold text-[#003399] text-3xl md:text-4xl italic" },
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
                <span className={`font-heading ${brand.style} whitespace-nowrap`}>
                  {brand.name}
                </span>
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