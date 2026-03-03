import GridOverlay from "@/components/landing/GridOverlay";
import ScrollObserver from "@/components/landing/ScrollObserver";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ProductsSection from "@/components/landing/ProductsSection";
import AboutSection from "@/components/landing/AboutSection";
import IngredientsSection from "@/components/landing/IngredientsSection";
import LeadFormSection from "@/components/landing/LeadFormSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <GridOverlay />
      <ScrollObserver />
      <Header />
      <main className="relative z-10 pt-20">
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <IngredientsSection />
        <LeadFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
