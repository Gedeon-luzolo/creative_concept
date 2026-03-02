"use client";

import { motion } from "framer-motion";
import { FaExclamationCircle, FaTimes } from "react-icons/fa";

interface ErrorDialogProps {
  message: string;
  onClose: () => void;
}

export default function ErrorDialog({ message, onClose }: ErrorDialogProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center px-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-6 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <FaTimes className="text-xl" />
        </button>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0">
            <FaExclamationCircle className="text-red-500 text-2xl" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Erreur d'inscription
            </h3>
            <p className="text-gray-600 leading-relaxed">{message}</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition-colors"
        >
          Fermer
        </button>
      </motion.div>
    </div>
  );
}
