"use client"

import Link from "next/link";
import Image from "next/image";
import { FaHome, FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Logo */}
        <div className="mb-8 mt-4">
          <Link href="/">
            <Image
              src="/images/logo/logo_noir.png"
              alt="Creative Concept"
              width={200}
              height={80}
              className="h-16 w-auto mx-auto"
            />
          </Link>
        </div>

        {/* 404 */}
        <div className="mb-4">
          <h1 className="text-9xl font-extrabold text-[#0000ff] mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Page introuvable
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>

        {/* Illustration */}
        <div className="mb-6">
          <div className="relative w-64 h-64 mx-auto">
            <div className="absolute inset-0 bg-linear-to-br from-[#0000ff]/10 to-[#ffa500]/10 rounded-full blur-3xl"></div>
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="text-9xl">🤔</div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#0000ff] hover:bg-[#0000cc] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <FaHome />
            Retour à l'accueil
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border-2 border-gray-200 hover:border-[#0000ff]"
          >
            <FaArrowLeft />
            Page précédente
          </button>
        </div>

        {/* Liens utiles */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">Liens utiles :</p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link
              href="/inscription"
              className="text-[#0000ff] hover:text-[#0000cc] font-semibold transition-colors"
            >
              Inscription Master Class
            </Link>
            <span className="text-gray-300">•</span>
            <a
              href="https://wa.me/243815385446"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0000ff] hover:text-[#0000cc] font-semibold transition-colors"
            >
              Nous contacter
            </a>
            <span className="text-gray-300">•</span>
            <a
              href="mailto:creativeconcept082@gmail.com"
              className="text-[#0000ff] hover:text-[#0000cc] font-semibold transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
