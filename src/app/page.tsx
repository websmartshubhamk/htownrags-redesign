import HeroSection from "@/components/HeroSection";
import FeaturedCategories from "@/components/FeaturedCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import BrandStory from "@/components/BrandStory";
import NewsletterSignup from "@/components/NewsletterSignup";
import StoreInfo from "@/components/StoreInfo";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCategories />
      <FeaturedProducts />
      <BrandStory />
      <NewsletterSignup />
      <StoreInfo />
    </>
  );
}