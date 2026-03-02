"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import {
  inscriptionSchema,
  type InscriptionFormData,
} from "@/src/utils/validation";

interface InscriptionFormProps {
  onSuccess: (data: InscriptionFormData) => void;
}

export default function InscriptionForm({ onSuccess }: InscriptionFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InscriptionFormData>({
    resolver: zodResolver(inscriptionSchema),
  });

  const onSubmit = async (data: InscriptionFormData) => {
    // Simuler l'envoi du formulaire (remplacer par un vrai appel API)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // TODO: Envoyer les données au backend
    console.log("Données du formulaire:", data);

    onSuccess(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Formulaire d'inscription
      </h2>

      {/* Nom et Prénom */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="nom"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Nom <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              id="nom"
              {...register("nom")}
              className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                errors.nom
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-200 focus:border-[#0000ff]"
              }`}
              placeholder="Votre nom"
            />
          </div>
          {errors.nom && (
            <p className="text-red-500 text-sm mt-1">{errors.nom.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="prenom"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Prénom <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              id="prenom"
              {...register("prenom")}
              className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                errors.prenom
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-200 focus:border-[#0000ff]"
              }`}
              placeholder="Votre prénom"
            />
          </div>
          {errors.prenom && (
            <p className="text-red-500 text-sm mt-1">{errors.prenom.message}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Email <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            id="email"
            {...register("email")}
            className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
              errors.email
                ? "border-red-500 focus:border-red-500"
                : "border-gray-200 focus:border-[#0000ff]"
            }`}
            placeholder="votre.email@exemple.com"
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Téléphone */}
      <div>
        <label
          htmlFor="telephone"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Numéro WhatsApp <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="tel"
            id="telephone"
            {...register("telephone")}
            className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
              errors.telephone
                ? "border-red-500 focus:border-red-500"
                : "border-gray-200 focus:border-[#0000ff]"
            }`}
            placeholder="+243 XXX XXX XXX"
          />
        </div>
        {errors.telephone && (
          <p className="text-red-500 text-sm mt-1">
            {errors.telephone.message}
          </p>
        )}
        <p className="text-sm text-gray-500 mt-1">
          Nous vous contacterons sur ce numéro
        </p>
      </div>

      <div className="relative">
        <label
          htmlFor="adresse"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Adresse complète <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            id="adresse"
            {...register("adresse")}
            className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
              errors.adresse
                ? "border-red-500 focus:border-red-500"
                : "border-gray-200 focus:border-[#0000ff]"
            }`}
            placeholder="Commune, Quartier, Avenue, N°..."
          />
        </div>
        {errors.adresse && (
          <p className="text-red-500 text-sm mt-1">{errors.adresse.message}</p>
        )}
        <p className="text-sm text-gray-500 mt-1">
          Formation à Kinshasa : Immeuble Start Bar, Appt 03
        </p>
      </div>

      {/* Motivation */}
      <div>
        <label
          htmlFor="motivation"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Pourquoi voulez-vous suivre cette formation ? (optionnel)
        </label>
        <textarea
          id="motivation"
          {...register("motivation")}
          rows={4}
          className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors resize-none ${
            errors.motivation
              ? "border-red-500 focus:border-red-500"
              : "border-gray-200 focus:border-[#0000ff]"
          }`}
          placeholder="Parlez-nous de vos objectifs..."
        />
        {errors.motivation && (
          <p className="text-red-500 text-sm mt-1">
            {errors.motivation.message}
          </p>
        )}
      </div>

      {/* Bouton Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#0000ff] hover:bg-[#0000cc] text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Envoi en cours...
          </span>
        ) : (
          "Soumettre mon inscription"
        )}
      </button>
    </form>
  );
}
