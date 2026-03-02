"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Ajouter bordure et ombre après 100px de défilement
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ borderColor: "transparent", boxShadow: "none" }}
      animate={{
        borderColor: scrolled ? "rgba(229, 231, 235, 0.5)" : "transparent",
        boxShadow: scrolled
          ? "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"
          : "none",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 border-b"
    >
      <div className="container mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/logo/logo_noir.png"
            alt="Creative Concept"
            width={200}
            height={80}
            className="h-10 md:h-14 w-auto"
            priority
          />
        </Link>

        <Link
          href="/inscription"
          className="bg-[#0000ff] hover:bg-[#0000cc] text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg text-xs md:text-base"
        >
          S'inscrire maintenant
        </Link>
      </div>
    </motion.nav>
  );
}
