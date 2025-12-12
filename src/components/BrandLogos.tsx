import styles from './BrandLogos.module.css';

// Brand SVG components for reliable display
const NikeLogo = () => (
  <svg className="h-12 w-auto md:h-16" viewBox="0 0 60 21" fill="currentColor">
    <path d="M58.96 6.95c-.35-.83-1.04-1.46-1.88-1.76a3.79 3.79 0 0 0-2.35-.05c-1.93.48-3.71 1.3-5.47 2.18l-26.3 13.17c-2.6 1.3-5.45 2.72-8.68 2.57-1.3-.06-2.52-.46-3.4-1.35-.89-.9-1.23-2.1-1.18-3.35.05-1.24.41-2.46.9-3.6a25.4 25.4 0 0 1 3.96-6.42C19.84 2.53 27.58-1.38 36.1.48c.96.21 1.95.55 2.74 1.16.4.3.74.68.94 1.13.2.45.25.96.1 1.44-.3.95-1.23 1.6-2.17 1.9-1.89.62-3.86.58-5.8.42a67.32 67.32 0 0 0-16.75.75c-.41.07-.9.18-1.09.57-.1.19-.09.41 0 .6.08.2.25.34.44.42.38.17.8.18 1.21.13 1.64-.2 3.25-.57 4.86-.93 10.15-2.26 20.54-4.52 31.18-4.23 2.66.07 5.35.33 7.88 1.18 1.27.42 2.48 1.02 3.49 1.88.5.43.95.92 1.27 1.5.32.57.5 1.22.48 1.87z"/>
  </svg>
);

const DickiesLogo = () => (
  <svg className="h-12 w-auto md:h-16" viewBox="0 0 200 60" fill="currentColor">
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="font-bold text-4xl">Dickies</text>
  </svg>
);

const NorthFaceLogo = () => (
  <svg className="h-12 w-auto md:h-16" viewBox="0 0 200 60" fill="currentColor">
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="font-bold text-2xl">THE NORTH FACE</text>
  </svg>
);

const ChampionLogo = () => (
  <svg className="h-12 w-auto md:h-16" viewBox="0 0 200 60" fill="currentColor">
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="font-bold text-3xl italic">Champion</text>
  </svg>
);

const GuessLogo = () => (
  <svg className="h-12 w-auto md:h-16" viewBox="0 0 200 60" fill="currentColor">
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="font-bold text-4xl">GUESS</text>
  </svg>
);

const HarleyLogo = () => (
  <svg className="h-12 w-auto md:h-16" viewBox="0 0 240 60" fill="currentColor">
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="font-bold text-2xl">HARLEY-DAVIDSON</text>
  </svg>
);

const brands = [
  { name: "Guess", Logo: GuessLogo },
  { name: "Harley Davidson", Logo: HarleyLogo },
  { name: "Nike", Logo: NikeLogo },
  { name: "Dickies", Logo: DickiesLogo },
  { name: "The North Face", Logo: NorthFaceLogo },
  { name: "Champion", Logo: ChampionLogo },
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
                  <brand.Logo />
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