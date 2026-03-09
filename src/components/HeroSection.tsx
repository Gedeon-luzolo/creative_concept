"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 via-transparent to-yellow-50/50"></div>
      <div className="absolute top-20 right-0 w-125 h-125 bg-[#0000ff]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-[#ffa500]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu texte - En haut sur mobile (order-1), à gauche sur desktop */}
          <div className="order-1 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="bg-[#0000ff] text-white px-4 py-2 rounded-lg text-sm font-semibold">
                MASTER CLASS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-extrabold mb-6 leading-tight"
            >
              <span className="block text-3xl md:text-4xl lg:text-5xl text-gray-900">
                Maîtrise la création
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl text-[#0000ff] my-2">
                des applications web robustes
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl text-[#0000ff]">
                avec l'IA
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Construis des applications web professionnelles dès le jour 1. 3
              séances intensives avec l'IA pour créer ce que tu imagines.
            </motion.p>

            {/* Key points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4 mb-10"
            >
              {[
                "3 séances intensives sur 1 semaine",
                "Projets réels et portfolio professionnel",
                "Déploiement gratuit de votre application",
              ].map((text, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700">{text}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link
                href="/inscription"
                className="group bg-[#0000ff] hover:bg-[#0000cc] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl flex items-center gap-2"
              >
                S'inscrire maintenant
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  ></path>
                </svg>
              </Link>
              <a
                href="#details"
                className="group bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border-2 border-gray-200 hover:border-[#0000ff] flex items-center gap-2"
              >
                <FaPlay className="text-[#0000ff]" />
                En savoir plus
              </a>
            </motion.div>

            {/* Info rapide */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap gap-6 text-sm"
            >
              <div>
                <p className="text-gray-500 mb-1">Début</p>
                <p className="font-bold text-gray-900">26 mars 2026</p>
              </div>
              <div className="border-l border-gray-300 pl-6">
                <p className="text-gray-500 mb-1">Durée</p>
                <p className="font-bold text-gray-900">1 semaine</p>
              </div>
              <div className="border-l border-gray-300 pl-6">
                <p className="text-gray-500 mb-1">Investissement</p>
                <p className="font-bold text-gray-900">35$ total</p>
              </div>
            </motion.div>
          </div>

          {/* Image principale - En bas sur mobile (order-2), à droite sur desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 lg:order-2"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/personnes/woman_debout.png"
                alt="Formation Création d'Applications Web Robustes - Creative Concept"
                width={700}
                height={900}
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
