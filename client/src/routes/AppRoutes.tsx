import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

import HomePage from "@/pages/HomePage";
import CollectionPage from "@/pages/CollectionPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import NotFoundPage from "@/pages/NotFoundPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <AnnouncementBar />
      <SiteHeader />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<CollectionPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <SiteFooter />
    </BrowserRouter>
  );
}

export default AppRoutes;