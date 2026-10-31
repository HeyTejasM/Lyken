import AnnouncementBar from "@/components/layout/AnnouncementBar";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

import HomeHero from "@/features/home/components/HomeHero";
import BrandIntro from "@/features/home/components/BrandIntro";
import FeaturedProducts from "@/features/home/components/FeaturedProducts";

function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />

      <main>
        <HomeHero />
        <BrandIntro />
        <FeaturedProducts />
      </main>

      <SiteFooter />
    </>
  );
}

export default HomePage;