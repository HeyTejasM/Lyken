import HomeHero from "@/features/home/components/HomeHero";
import BrandIntro from "@/features/home/components/BrandIntro";
import FeaturedProducts from "@/features/home/components/FeaturedProducts";

function HomePage() {
  return (
    <main>
      <HomeHero />
      <BrandIntro />
      <FeaturedProducts />
    </main>
  );
}

export default HomePage;
