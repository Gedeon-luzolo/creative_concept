import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendar,
  FaCheckCircle,
  FaTimesCircle,
  FaIdCard,
  FaDownload,
  FaWhatsapp,
} from "react-icons/fa";
import { Inscription, PaymentStatus } from "@/src/types/incription";
import { formatShortDate, formatTime } from "@/src/utils/format";

interface InscriptionCardProps {
  inscription: Inscription;
  onUpdatePayment: (
    id: string,
    field: "inscription_status" | "participation_status",
    status: PaymentStatus,
  ) => void;
  onViewCard: (inscription: Inscription) => void;
}

export default function InscriptionCard({
  inscription,
  onUpdatePayment,
  onViewCard,
}: InscriptionCardProps) {
  const hasCard = inscription.card_number !== null;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {/* Header avec avatar */}
      <div className="bg-linear-to-br from-[#0000ff] to-[#0000cc] p-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#0000ff] font-bold text-xl">
            {inscription.prenom.charAt(0)}
            {inscription.nom.charAt(0)}
          </div>
          <div className="flex-1">
            <h3 className="text-white font-bold text-lg">
              {inscription.prenom} {inscription.nom}
            </h3>
            <p className="text-blue-100 text-sm flex items-center gap-1">
              <FaCalendar className="text-xs" />
              {formatShortDate(inscription.created_at)} à{" "}
              {formatTime(inscription.created_at)}
            </p>
          </div>
        </div>
      </div>

      {/* Contenu */}
      <div className="p-6 space-y-4">
        {/* Contact */}
        <div className="space-y-2">
          <a
            href={`mailto:${inscription.email}`}
            className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#0000ff] transition-colors"
          >
            <FaEnvelope className="text-[#0000ff]" />
            <span className="truncate">{inscription.email}</span>
          </a>
          <a
            href={`https://wa.me/${inscription.telephone.replace(/\s/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-700 hover:text-green-600 transition-colors"
          >
            <FaPhone className="text-green-600" />
            {inscription.telephone}
          </a>
          <div className="flex items-start gap-2 text-sm text-gray-700">
            <FaMapMarkerAlt className="text-red-500 mt-1 shrink-0" />
            <span className="line-clamp-2">{inscription.adresse}</span>
          </div>
        </div>

        {/* Statuts de paiement */}
        <div className="space-y-3 pt-4 border-t border-gray-200">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-gray-600">Inscription (05$)</span>
              {inscription.inscription_status === "paid" ? (
                <span className="flex items-center gap-1 text-green-600 text-sm font-semibold">
                  <FaCheckCircle />
                  Payé
                </span>
              ) : (
                <span className="flex items-center gap-1 text-red-500 text-sm font-semibold">
                  <FaTimesCircle />
                  Non payé
                </span>
              )}
            </div>
            {inscription.inscription_payment_date && (
              <p className="text-xs text-gray-500 flex items-center gap-1">
                <FaCalendar className="text-gray-400" />
                {formatShortDate(inscription.inscription_payment_date)} à{" "}
                {formatTime(inscription.inscription_payment_date)}
              </p>
            )}
          </div>
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-gray-600">Participation (30$)</span>
              {inscription.participation_status === "paid" ? (
                <span className="flex items-center gap-1 text-green-600 text-sm font-semibold">
                  <FaCheckCircle />
                  Payé
                </span>
              ) : (
                <span className="flex items-center gap-1 text-red-500 text-sm font-semibold">
                  <FaTimesCircle />
                  Non payé
                </span>
              )}
            </div>
            {inscription.participation_payment_date && (
              <p className="text-xs text-gray-500 flex items-center gap-1">
                <FaCalendar className="text-gray-400" />
                {formatShortDate(inscription.participation_payment_date)} à{" "}
                {formatTime(inscription.participation_payment_date)}
              </p>
            )}
          </div>
          {hasCard && (
            <div className="flex items-center justify-between pt-2 border-t border-gray-100">
              <span className="text-sm text-gray-600">Carte N°</span>
              <span className="text-sm font-bold text-[#0000ff]">
                {inscription.card_number}
              </span>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="space-y-2 pt-4 border-t border-gray-200">
          {inscription.inscription_status === "unpaid" && (
            <button
              onClick={() =>
                onUpdatePayment(inscription.id, "inscription_status", "paid")
              }
              className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-semibold transition-colors"
            >
              Marquer inscription payée
            </button>
          )}
          {inscription.participation_status === "unpaid" && (
            <button
              onClick={() =>
                onUpdatePayment(inscription.id, "participation_status", "paid")
              }
              className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-semibold transition-colors"
            >
              Marquer participation payée
            </button>
          )}
          {hasCard && (
            <div className="flex gap-2">
              <button
                onClick={() => onViewCard(inscription)}
                className="flex-1 py-2 px-4 bg-[#0000ff] hover:bg-[#0000cc] text-white rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <FaIdCard />
                Voir carte
              </button>
              <a
                href={`https://wa.me/${inscription.telephone.replace(/\s/g, "")}?text=${encodeURIComponent(`Bonjour ${inscription.prenom}, voici votre carte d'accès pour la Master Class VIBE CODING!\n\nVous pouvez la consulter ici: ${inscription.qr_code_data}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-4 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <FaWhatsapp />
                Envoyer
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
