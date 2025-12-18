import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CaseStudy from "@/components/CaseStudy";
import TempleBarCaseStudy from "@/components/TempleBarCaseStudy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      {/* <Services /> */}
      <CaseStudy />
      <TempleBarCaseStudy />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
