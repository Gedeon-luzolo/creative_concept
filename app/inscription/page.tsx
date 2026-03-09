"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaPhone } from "react-icons/fa";
import InscriptionForm from "@/src/components/inscription/InscriptionForm";
import SuccessDialog from "@/src/components/inscription/SuccessDialog";
import type { InscriptionFormData } from "@/src/utils/validation";

export default function InscriptionPage() {
  const [submittedData, setSubmittedData] =
    useState<InscriptionFormData | null>(null);

  const handleSuccess = (data: InscriptionFormData) => {
    setSubmittedData(data);
  };

  // Afficher le dialogue de succès si les données ont été soumises
  if (submittedData) {
    return <SuccessDialog data={submittedData} />;
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-white py-12 px-4">
      {/* Navbar */}
      <div className="container mx-auto max-w-7xl mb-8">
        <Link href="/">
          <Image
            src="/images/logo/logo_noir.png"
            alt="Creative Concept"
            width={150}
            height={50}
            className="h-12 w-auto"
          />
        </Link>
      </div>

      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#0000ff] hover:text-[#0000cc] mb-4 font-semibold transition-colors"
            >
              <FaArrowLeft />
              Retour à l'accueil
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Inscription à la Masterclass
            </h1>
          </div>

          {/* Grid 2 colonnes */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Colonne gauche - Informations */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Description principale */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Comment ça marche ?
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Remplissez le formulaire ci-contre avec vos informations.
                  Notre équipe vous contactera rapidement sur WhatsApp pour
                  finaliser votre inscription.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-[#0000ff] font-bold text-xl">
                        1
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        Soumettez le formulaire
                      </h3>
                      <p className="text-gray-600">
                        Remplissez vos informations personnelles et votre numéro
                        WhatsApp
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-green-600 font-bold text-xl">
                        2
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        Nous vous contactons
                      </h3>
                      <p className="text-gray-600">
                        Vous recevrez un message WhatsApp dans les 24h avec les
                        détails de paiement
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-[#ffa500] font-bold text-xl">
                        3
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        Paiement et carte d'accès
                      </h3>
                      <p className="text-gray-600">
                        Après paiement, votre carte d'accès sera créée et
                        envoyée
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Informations de contact */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="font-bold text-gray-900 mb-4 text-xl">
                  Besoin d'aide ?
                </h3>
                <p className="text-gray-600 mb-4">
                  Contactez-nous directement sur WhatsApp pour toute question
                </p>
                <a
                  href="https://wa.me/243815385446"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                >
                  <FaPhone />
                  +243 81 53 85 446
                </a>
              </div>
            </motion.div>

            {/* Colonne droite - Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 sticky top-24"
            >
              <InscriptionForm onSuccess={handleSuccess} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
