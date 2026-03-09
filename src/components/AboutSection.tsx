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
          {/* Image côté gauche */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <Image
                src="/images/personnes/75301.jpg"
                alt="Formation pratique"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Infos formation côté droit */}
          <div>
            <div className="inline-block bg-linear-to-r from-[#ffa500] to-[#ff8c00] text-white px-5 py-2 rounded-full text-sm font-semibold mb-6">
              MASTERCLASS SUR LA CRÉATION D'APPLICATIONS WEB ROBUSTES
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
                    3 Séances - 1 Semaine
                  </p>
                  <p className="text-gray-600 text-sm">
                    Jeudi, Samedi et Dimanche
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                  <FaClock className="text-[#0000ff] text-xl" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-base">
                    16h30 - 19h00
                  </p>
                  <p className="text-gray-600 text-sm">Sessions de 2h30</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center shrink-0">
                  <FaDollarSign className="text-[#ffa500] text-xl" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-base">5$ + 30$</p>
                  <p className="text-gray-600 text-sm">
                    Total: 35$ - Paiement flexible
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
                  Début: 26 mars 2026
                </p>
                <p className="text-orange-700 font-semibold">
                  ⚡ Places limitées - Inscrivez-vous vite !
                </p>
              </div>
            </div>

            <a
              href="/inscription"
              className="inline-flex items-center justify-center gap-2 bg-[#0000ff] hover:bg-[#0000cc] text-white px-6 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg transition-all duration-300 hover:scale-105 shadow-xl w-full sm:w-auto"
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

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
            {programmeNotions.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl md:rounded-2xl p-3 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 bg-linear-to-br from-[#0000ff] to-[#0000cc] rounded-lg md:rounded-xl flex items-center justify-center mb-2 md:mb-4">
                  <div className="text-lg md:text-2xl">{item.icon}</div>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-1 md:mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs md:text-base text-gray-600 leading-snug md:leading-relaxed">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
