import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import CustomCursor from "@/components/cyber-bushido/CustomCursor";
import ScanLines from "@/components/cyber-bushido/ScanLines";
import NavRail from "@/components/cyber-bushido/NavRail";
import TheGate from "@/components/cyber-bushido/TheGate";
import ThePath from "@/components/cyber-bushido/ThePath";
import TheDojo from "@/components/cyber-bushido/TheDojo";
import TheCode from "@/components/cyber-bushido/TheCode";
import Footer from "@/components/cyber-bushido/Footer";

export default function Home() {
  const [entered, setEntered] = useState(null); // null = unknown, true/false

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
          <Main key="main" />
        )}
      </AnimatePresence>
    </div>
  );
}

function Main() {
  return (
    <div className="relative bg-void animate-mist">
      <NavRail />
      <main>
        <ThePath />
        <TheDojo />
        <TheCode />
      </main>
      <Footer />
    </div>
  );
}