"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Image de fond avec incrustation réduite */}
      <div className="absolute inset-0">
        <Image
          src="/images/personnes/woman_debout.png"
          alt="Formation VIBE CODING"
          fill
          className="object-cover object-center opacity-10"
          priority
        />
        {/* Overlay blanc pour réduire l'incrustation */}
        <div className="absolute inset-0 bg-white/80"></div>
      </div>

      {/* Decorative background */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 via-transparent to-yellow-50/50"></div>
      <div className="absolute top-20 right-0 w-125 h-125 bg-[#0000ff]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-[#ffa500]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image principale - À gauche sur desktop, en haut sur mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/personnes/woman_debout.png"
                alt="Formation VIBE CODING - Creative Concept"
                width={700}
                height={900}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-linear-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">130+</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Étudiants</p>
                  <p className="font-bold text-gray-900">Déjà formés</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contenu texte - À droite sur desktop, en bas sur mobile */}
          <div className="order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="bg-[#0000ff] text-white px-4 py-2 rounded-lg text-sm font-semibold">
                NOUVELLE SESSION
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-gray-900"
            >
              Master Class
              <br />
              <span className="text-[#0000ff]">VIBE CODING</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Transformez-vous en développeur web professionnel en seulement 2
              semaines. Apprenez HTML, CSS, JavaScript et React JS avec des
              projets concrets.
            </motion.p>

            {/* Key points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4 mb-10"
            >
              {[
                "6 séances intensives sur 2 semaines",
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
                <p className="font-bold text-gray-900">18 mars 2026</p>
              </div>
              <div className="border-l border-gray-300 pl-6">
                <p className="text-gray-500 mb-1">Durée</p>
                <p className="font-bold text-gray-900">2 semaines</p>
              </div>
              <div className="border-l border-gray-300 pl-6">
                <p className="text-gray-500 mb-1">Investissement</p>
                <p className="font-bold text-gray-900">60$ total</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
