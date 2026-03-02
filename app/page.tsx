"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import SplashScreen from "@/src/components/SplashScreen";
import Navbar from "@/src/components/Navbar";
import HeroSection from "@/src/components/HeroSection";
import AboutSection from "@/src/components/AboutSection";
import MasterClassSection from "@/src/components/MasterClassSection";
import CTASection from "@/src/components/CTASection";
import Footer from "@/src/components/Footer";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Prevent scrolling during splash screen
    if (showSplash) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showSplash]);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      </AnimatePresence>

      {!showSplash && (
        <>
          <Navbar />
          <div className="min-h-screen bg-white text-gray-900">
            <HeroSection />
            <AboutSection />
            <MasterClassSection />
            <CTASection />
            <Footer />
          </div>
        </>
      )}
    </>
  );
}
