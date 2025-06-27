
import NavigationBar from "@/components/NavigationBar";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import ExploreSection from "@/components/ExploreSection";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      <NavigationBar />
      <Hero />
      <CTASection />
      <ExploreSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default Index;
