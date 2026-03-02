"use client";

import Image from "next/image";
import {
  FaCalendarAlt,
  FaClock,
  FaDollarSign,
  FaMapMarkerAlt,
  FaRocket,
  FaGraduationCap,
  FaCheckCircle,
  FaBook,
} from "react-icons/fa";
import { programmeNotions } from "../constants/programme-contant";

export default function AboutSection() {
  return (
    <section
      id="details"
      className="py-24 px-4 bg-linear-to-b from-white to-gray-50"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-100 to-blue-50 text-[#0000ff] px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-200">
            <FaGraduationCap />
            DÉTAILS DE LA FORMATION
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Une formation d&apos;excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Programme intensif conçu pour vous transformer en développeur web
            professionnel
          </p>
        </div>

        {/* Grid avec images et infos formation */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Images côté gauche - 2 images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-[400px]">
                <Image
                  src="/images/personnes/116566.jpg"
                  alt="Formation pratique"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-[400px]">
                <Image
                  src="/images/personnes/120045.jpg"
                  alt="Environnement professionnel"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Infos formation côté droit */}
          <div>
            <div className="inline-block bg-linear-to-r from-[#ffa500] to-[#ff8c00] text-white px-5 py-2 rounded-full text-sm font-semibold mb-6">
              MASTER CLASS VIBE CODING
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              HTML, CSS, JavaScript & React avec L'IA
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                  <FaCalendarAlt className="text-[#0000ff] text-xl" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-base">
                    6 Séances - 2 Semaines
                  </p>
                  <p className="text-gray-600 text-sm">
                    Mercredi, Jeudi et Vendredi
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                  <FaClock className="text-[#0000ff] text-xl" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-base">
                    16h30 - 18h00
                  </p>
                  <p className="text-gray-600 text-sm">Sessions de 1h30</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center shrink-0">
                  <FaDollarSign className="text-[#ffa500] text-xl" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-base">10$ + 50$</p>
                  <p className="text-gray-600 text-sm">
                    Total: 60$ - Paiement flexible
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt className="text-green-600 text-xl" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-base">
                    Kinshasa, RDC
                  </p>
                  <p className="text-gray-600 text-sm">
                    Immeuble Start Bar, Appt 03
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    Réf : Barumbu Kambare Itaga
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-linear-to-r from-orange-50 to-orange-100 p-5 rounded-2xl border-2 border-orange-200 mb-8">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center shrink-0">
                <FaRocket className="text-white text-xl" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg">
                  Début: 18 mars 2026
                </p>
                <p className="text-orange-700 font-semibold">
                  ⚡ Places limitées - Inscrivez-vous vite !
                </p>
              </div>
            </div>

            <a
              href="/inscription"
              className="inline-flex items-center gap-2 bg-[#0000ff] hover:bg-[#0000cc] text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <FaCheckCircle />
              S'INSCRIRE MAINTENANT
            </a>
          </div>
        </div>

        {/* Nouvelle section - Programme détaillé en grid 4 colonnes */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-100 to-blue-50 text-[#0000ff] px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-200">
              <FaBook />
              PROGRAMME DÉTAILLÉ
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ce que vous allez apprendre
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un programme complet couvrant toutes les technologies essentielles
              du développement web moderne
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {programmeNotions.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-14 h-14 bg-linear-to-br from-[#0000ff] to-[#0000cc] rounded-xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bande défilante */}
        <div className="bg-linear-to-r from-[#0000ff] via-[#0000cc] to-[#0000ff] py-6 md:py-8 rounded-3xl overflow-hidden shadow-2xl">
          <div className="flex items-center gap-8 md:gap-16 animate-scroll whitespace-nowrap">
            <span className="text-white text-base md:text-2xl font-bold flex items-center gap-2 md:gap-3">
              <FaCheckCircle className="text-[#ffa500] text-sm md:text-base" />{" "}
              HTML5 & CSS3
            </span>
            <span className="text-white text-base md:text-2xl font-bold flex items-center gap-2 md:gap-3">
              <FaCheckCircle className="text-[#ffa500] text-sm md:text-base" />{" "}
              JAVASCRIPT ES6+
            </span>
            <span className="text-white text-base md:text-2xl font-bold flex items-center gap-2 md:gap-3">
              <FaCheckCircle className="text-[#ffa500] text-sm md:text-base" />{" "}
              REACT JS
            </span>
            <span className="text-white text-base md:text-2xl font-bold flex items-center gap-2 md:gap-3">
              <FaCheckCircle className="text-[#ffa500] text-sm md:text-base" />{" "}
              PROJETS RÉELS
            </span>
            <span className="text-white text-base md:text-2xl font-bold flex items-center gap-2 md:gap-3">
              <FaCheckCircle className="text-[#ffa500] text-sm md:text-base" />{" "}
              HTML5 & CSS3
            </span>
            <span className="text-white text-base md:text-2xl font-bold flex items-center gap-2 md:gap-3">
              <FaCheckCircle className="text-[#ffa500] text-sm md:text-base" />{" "}
              JAVASCRIPT ES6+
            </span>
            <span className="text-white text-base md:text-2xl font-bold flex items-center gap-2 md:gap-3">
              <FaCheckCircle className="text-[#ffa500] text-sm md:text-base" />{" "}
              REACT JS
            </span>
            <span className="text-white text-base md:text-2xl font-bold flex items-center gap-2 md:gap-3">
              <FaCheckCircle className="text-[#ffa500] text-sm md:text-base" />{" "}
              PROJETS RÉELS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
