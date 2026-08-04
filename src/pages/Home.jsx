import { useEffect, useState } from "react";
import Navigation from "@/components/cyber-bushido/Navigation";
import HeroSection from "@/components/cyber-bushido/HeroSection";
import WorkGrid from "@/components/cyber-bushido/WorkGrid";
import CaseStudy from "@/components/cyber-bushido/CaseStudy";
import ContactSection from "@/components/cyber-bushido/ContactSection";
import Footer from "@/components/cyber-bushido/Footer";

export default function Home() {
  const [sheathed, setSheathed] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setSheathed(false), 950);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative bg-obsidian">
      {sheathed && (
        <div className="fixed inset-0 z-[100] pointer-events-none">
          <div className="absolute inset-0 bg-crimson origin-top animate-sheath" />
          <div className="absolute inset-0 bg-obsidian origin-top animate-sheath animate-sheath-delay" />
        </div>
      )}
      <Navigation />
      <main>
        <HeroSection />
        <WorkGrid />
        <CaseStudy />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}