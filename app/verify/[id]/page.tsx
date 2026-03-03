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
  params: { id: string };
}) {
  const { data: inscription, error } = await supabase
    .from("inscriptions")
    .select("*")
    .eq("id", params.id)
    .single();

  if (error || !inscription) {
    notFound();
  }

  const isFullyPaid =
    inscription.inscription_status === "paid" &&
    inscription.participation_status === "paid";

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-orange-50 py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/">
            <Image
              src="/images/logo/logo_noir.png"
              alt="Creative Concept"
              width={200}
              height={60}
              className="h-16 w-auto mx-auto mb-4"
            />
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Vérification de Carte
          </h1>
          <p className="text-gray-600">{FORMATION_INFO.name}</p>
        </div>

        {/* Card de vérification */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Status Header */}
          <div
            className={`p-6 text-center ${
              isFullyPaid
                ? "bg-linear-to-br from-green-500 to-green-600"
                : "bg-linear-to-br from-orange-500 to-orange-600"
            }`}
          >
            <FaCheckCircle className="text-white text-5xl mx-auto mb-3" />
            <h2 className="text-white text-2xl font-bold mb-2">
              {isFullyPaid ? "Carte Valide" : "Paiement Incomplet"}
            </h2>
            <p className="text-white text-sm">
              {isFullyPaid
                ? "Cette carte d'accès est valide et active"
                : "Les paiements ne sont pas encore complets"}
            </p>
          </div>

          {/* Participant Info */}
          <div className="p-8 space-y-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-linear-to-br from-[#0000ff] to-[#0000cc] rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-4">
                {inscription.prenom.charAt(0)}
                {inscription.nom.charAt(0)}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {inscription.prenom} {inscription.nom}
              </h3>
              {inscription.card_number && (
                <p className="text-sm text-gray-600 mb-4">
                  Carte N° {inscription.card_number}
                </p>
              )}
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 rounded-xl p-6 space-y-3">
              <h4 className="font-semibold text-gray-900 mb-3">
                Informations de contact
              </h4>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <FaEnvelope className="text-[#0000ff]" />
                <span>{inscription.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <FaPhone className="text-green-600" />
                <span>{inscription.telephone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <FaCalendar className="text-gray-400" />
                <span>
                  Inscrit le {formatShortDate(inscription.created_at)}
                </span>
              </div>
            </div>

            {/* Payment Status */}
            <div className="bg-gray-50 rounded-xl p-6 space-y-3">
              <h4 className="font-semibold text-gray-900 mb-3">
                Statut des paiements
              </h4>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700">
                  Frais d'inscription (10$)
                </span>
                <span
                  className={`text-sm font-semibold ${
                    inscription.inscription_status === "paid"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {inscription.inscription_status === "paid"
                    ? "✓ Payé"
                    : "✗ Non payé"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700">
                  Frais de participation (50$)
                </span>
                <span
                  className={`text-sm font-semibold ${
                    inscription.participation_status === "paid"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {inscription.participation_status === "paid"
                    ? "✓ Payé"
                    : "✗ Non payé"}
                </span>
              </div>
            </div>

            {/* Formation Info */}
            <div className="bg-linear-to-br from-blue-50 to-orange-50 rounded-xl p-6 space-y-2">
              <h4 className="font-semibold text-gray-900 mb-3">
                Détails de la formation
              </h4>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Durée:</span>
                <span className="font-semibold text-gray-900">
                  {FORMATION_INFO.duration} ({FORMATION_INFO.sessions} sessions)
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Horaire:</span>
                <span className="font-semibold text-gray-900">
                  {FORMATION_INFO.schedule.time}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Jours:</span>
                <span className="font-semibold text-gray-900">
                  {FORMATION_INFO.schedule.days.join(", ")}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Début:</span>
                <span className="font-semibold text-gray-900">
                  {FORMATION_INFO.startDate}
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-2">
                {COMPANY_INFO.tagline}
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[#0000ff] hover:text-[#0000cc] font-semibold transition-colors"
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
