
import NavigationBar from "@/components/NavigationBar";
import HeroSection from "@/components/HeroSection";
import PromptVaultSection from "@/components/PromptVaultSection";
import BonusWorkflowSection from "@/components/BonusWorkflowSection";
import BlogTeaserSection from "@/components/BlogTeaserSection";
import SmartBanner from "@/components/SmartBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <SmartBanner />
      <NavigationBar />
      <HeroSection />
      <PromptVaultSection />
      <BonusWorkflowSection />
      <BlogTeaserSection />
      <Footer />
    </div>
  );
};

export default Index;
