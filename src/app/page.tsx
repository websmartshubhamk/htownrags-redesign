import HeroSection from "@/components/HeroSection";
import FeaturedCategories from "@/components/FeaturedCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import BrandLogos from "@/components/BrandLogos";
import BrandStory from "@/components/BrandStory";
import NewsletterSignup from "@/components/NewsletterSignup";
import StoreInfo from "@/components/StoreInfo";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandLogos />
      <FeaturedCategories />
      <FeaturedProducts />
      <BrandStory />
      <NewsletterSignup />
      <StoreInfo />
    </>
  );
}