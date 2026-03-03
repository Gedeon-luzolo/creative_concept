import { supabase } from "@/src/lib/supabase";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  FaCheckCircle,
  FaEnvelope,
  FaPhone,
  FaCalendar,
  FaArrowLeft,
} from "react-icons/fa";
import { FORMATION_INFO, COMPANY_INFO } from "@/src/constants/contact";
import { formatShortDate } from "@/src/utils/format";

export default async function VerifyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: inscription, error } = await supabase
    .from("inscriptions")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !inscription) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-orange-50 py-6 sm:py-12 px-3 sm:px-4">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <Link href="/">
            <Image
              src="/images/logo/logo_noir.png"
              alt="Creative Concept"
              width={200}
              height={60}
              className="h-12 sm:h-16 w-auto mx-auto mb-3 sm:mb-4"
            />
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Vérification de Carte
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            {FORMATION_INFO.name}
          </p>
        </div>

        {/* Card de vérification */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
          {/* Status Header */}
          <div className="p-4 sm:p-6 text-center bg-linear-to-br from-green-500 to-green-600">
            <FaCheckCircle className="text-white text-4xl sm:text-5xl mx-auto mb-2 sm:mb-3" />
            <h2 className="text-white text-xl sm:text-2xl font-bold mb-1 sm:mb-2">
              Carte Valide
            </h2>
            <p className="text-white text-xs sm:text-sm">
              Cette carte d'accès est valide et active
            </p>
          </div>

          {/* Participant Info */}
          <div className="p-4 sm:p-8 space-y-4 sm:space-y-6">
            <div className="text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-linear-to-br from-[#0000ff] to-[#0000cc] rounded-full flex items-center justify-center text-white font-bold text-2xl sm:text-3xl mx-auto mb-3 sm:mb-4">
                {inscription.prenom.charAt(0)}
                {inscription.nom.charAt(0)}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {inscription.prenom} {inscription.nom}
              </h3>
              {inscription.card_number && (
                <p className="text-xs sm:text-sm text-gray-600 mb-4">
                  Carte N° {inscription.card_number}
                </p>
              )}
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6 space-y-3">
              <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">
                Informations de contact
              </h4>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-700">
                <FaEnvelope className="text-[#0000ff] shrink-0" />
                <span className="break-all">{inscription.email}</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-700">
                <FaPhone className="text-green-600 shrink-0" />
                <span>{inscription.telephone}</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-700">
                <FaCalendar className="text-gray-400 shrink-0" />
                <span>
                  Inscrit le {formatShortDate(inscription.created_at)}
                </span>
              </div>
            </div>

            {/* Formation Info */}
            <div className="bg-linear-to-br from-blue-50 to-orange-50 rounded-lg sm:rounded-xl p-4 sm:p-6 space-y-2">
              <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">
                Détails de la formation
              </h4>
              <div className="flex justify-between text-xs sm:text-sm gap-2">
                <span className="text-gray-600">Durée:</span>
                <span className="font-semibold text-gray-900 text-right">
                  {FORMATION_INFO.duration} ({FORMATION_INFO.sessions} sessions)
                </span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm gap-2">
                <span className="text-gray-600">Horaire:</span>
                <span className="font-semibold text-gray-900 text-right">
                  {FORMATION_INFO.schedule.time}
                </span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm gap-2">
                <span className="text-gray-600">Jours:</span>
                <span className="font-semibold text-gray-900 text-right">
                  {FORMATION_INFO.schedule.days.join(", ")}
                </span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm gap-2">
                <span className="text-gray-600">Début:</span>
                <span className="font-semibold text-gray-900 text-right">
                  {FORMATION_INFO.startDate}
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center pt-4 sm:pt-6 border-t border-gray-200">
              <p className="text-xs sm:text-sm text-gray-600 mb-2">
                {COMPANY_INFO.tagline}
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm sm:text-base text-[#0000ff] hover:text-[#0000cc] font-semibold transition-colors"
              >
                <FaArrowLeft />
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
