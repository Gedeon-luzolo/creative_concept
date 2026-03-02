"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaCheckCircle, FaArrowLeft } from "react-icons/fa";
import type { InscriptionFormData } from "@/src/utils/validation";

interface SuccessDialogProps {
  data: InscriptionFormData;
}

export default function SuccessDialog({ data }: SuccessDialogProps) {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <FaCheckCircle className="text-green-500 text-5xl" />
        </motion.div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Inscription réussie !
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Merci{" "}
          <span className="font-semibold text-[#0000ff]">{data.prenom}</span>{" "}
          pour votre inscription à la Master Class VIBE CODING.
        </p>

        <div className="bg-blue-50 rounded-2xl p-6 mb-8">
          <h2 className="font-bold text-gray-900 mb-3 text-lg">
            Prochaines étapes :
          </h2>
          <div className="space-y-3 text-left">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#0000ff] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">1</span>
              </div>
              <p className="text-gray-700">
                Notre équipe vous contactera sur WhatsApp au{" "}
                <span className="font-semibold">{data.telephone}</span>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#0000ff] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">2</span>
              </div>
              <p className="text-gray-700">
                Vous recevrez les instructions pour le paiement (10$ inscription
                + 50$ formation)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#0000ff] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">3</span>
              </div>
              <p className="text-gray-700">
                Après paiement, votre carte d'accès sera créée et envoyée
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#0000ff] hover:bg-[#0000cc] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <FaArrowLeft />
            Retour à l'accueil
          </Link>
          <a
            href="https://wa.me/243815385446"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Nous contacter
          </a>
        </div>
      </motion.div>
    </div>
  );
}
