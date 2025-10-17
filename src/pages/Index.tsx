import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import DemoShowcase from "@/components/DemoShowcase";
import ProjectShowcase from "@/components/ProjectShowcase";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <HowItWorks />
      <DemoShowcase />
      <ProjectShowcase />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
