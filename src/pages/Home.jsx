import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import CustomCursor from "@/components/cyber-bushido/CustomCursor";
import ScanLines from "@/components/cyber-bushido/ScanLines";
import NavRail from "@/components/cyber-bushido/NavRail";
import TopNav from "@/components/cyber-bushido/TopNav";
import TheGate from "@/components/cyber-bushido/TheGate";
import ThePath from "@/components/cyber-bushido/ThePath";
import TheDojo from "@/components/cyber-bushido/TheDojo";
import TheCode from "@/components/cyber-bushido/TheCode";
import Footer from "@/components/cyber-bushido/Footer";

export default function Home() {
  const { lang } = useLang();
  const [entered, setEntered] = useState(null);

  useEffect(() => {
    try {
      setEntered(localStorage.getItem("cb_entered") === "1");
    } catch (e) {
      setEntered(false);
    }
  }, []);

  const handleEnter = () => setEntered(true);

  return (
    <div className="relative bg-void">
      <CustomCursor />
      <ScanLines />

      <AnimatePresence mode="wait">
        {entered === false ? (
          <TheGate key="gate" onEnter={handleEnter} />
        ) : (
          <Main key="main" lang={lang} />
        )}
      </AnimatePresence>
    </div>
  );
}

function Main({ lang }) {
  return (
    <motion.div
      key={lang}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      id="top"
      className="relative bg-void"
    >
      <TopNav />
      <NavRail />
      <main>
        <ThePath />
        <TheDojo />
        <TheCode />
      </main>
      <Footer />
    </motion.div>
  );
}