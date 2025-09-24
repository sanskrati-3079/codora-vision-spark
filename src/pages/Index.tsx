import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Team from "@/components/Team"; // ✅ Already imported
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <div id="hero">
          <HeroSection />
        </div>

        <div id="about">
          <AboutSection />
        </div>

        <div id="services">
          <ServicesSection />
        </div>

        <div id="products">
          <ProductsSection />
        </div>

        <div id="testimonials">
          <TestimonialsSection />
        </div>

        <div id="team">
          <Team />
        </div>

        <div id="contact">
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
