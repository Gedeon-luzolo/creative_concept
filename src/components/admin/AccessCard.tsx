import { useEffect, useRef } from "react";
import QRCode from "qrcode";
import { Inscription } from "@/src/types/incription";
import { FORMATION_INFO, COMPANY_INFO } from "@/src/constants/contact";

interface AccessCardProps {
  inscription: Inscription;
  onDownload?: () => void;
}

export default function AccessCard({ inscription }: AccessCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (canvasRef.current && inscription.qr_code_data) {
      QRCode.toCanvas(
        canvasRef.current,
        inscription.qr_code_data,
        {
          width: 90,
          margin: 1,
          color: {
            dark: "#0000ff",
            light: "#ffffff",
          },
        },
        (error) => {
          if (error) console.error("Erreur QR Code:", error);
        },
      );
    }
  }, [inscription.qr_code_data]);

  return (
    <div
      ref={cardRef}
      id="access-card"
      className="w-full max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border-4 border-[#0000ff]"
      style={{ aspectRatio: "148/210" }}
    >
      {/* Format portrait - Layout vertical */}
      <div className="flex flex-col">
        {/* Partie haute - Header avec logo et participant */}
        <div
          className="p-6 relative overflow-hidden"
          style={{
            background: "linear-gradient(to bottom right, #0000ff, #0000cc)",
          }}
        >
          {/* Image de fond */}
          <div className="absolute inset-0 opacity-20">
            <img
              src="/images/personnes/75301.jpg"
              alt="Background"
              className="w-full h-full object-cover"
              crossOrigin="anonymous"
            />
          </div>

          {/* Effets décoratifs */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-4 right-4 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 bg-[#ffa500] rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            {/* Logo */}
            <div className="text-center mb-4">
              <div className="bg-white p-3 rounded-lg inline-block mb-3">
                <img
                  src="/images/logo/logo_noir.png"
                  alt="Creative Concept"
                  width={140}
                  height={49}
                  className="h-10 w-auto"
                  crossOrigin="anonymous"
                />
              </div>
              <h2 className="text-white text-xl font-bold mb-1">
                BADGE D'ACCÈS
              </h2>
              <p className="text-blue-100 text-sm font-semibold">
                {FORMATION_INFO.name}
              </p>
            </div>

            {/* Participant */}
            <div className="text-center">
              <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center text-[#0000ff] font-bold text-3xl mx-auto mb-3 border-4 border-white shadow-lg">
                {inscription.prenom.charAt(0)}
                {inscription.nom.charAt(0)}
              </div>
              <h3 className="text-white text-lg font-bold mb-1">
                {inscription.prenom} {inscription.nom}
              </h3>
              <p className="text-blue-100 text-sm">{inscription.email}</p>
            </div>

            {/* Numéro de badge */}
            <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-2 text-center mt-4 border-2 border-[#0000ff] border-opacity-20">
              <p className="text-sm text-gray-600 font-semibold">
                {inscription.card_number}
              </p>
            </div>
          </div>
        </div>

        {/* Partie basse - Informations et QR Code */}
        <div className="p-6 relative">
          {/* Pattern de fond (texture) - Luminosité réduite */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230000ff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          ></div>

          {/* Contenu avec z-index pour être au-dessus du pattern */}
          <div className="relative z-10">
            {/* Layout avec QR Code à droite */}
            <div className="flex items-start justify-between gap-4">
              {/* Informations à gauche */}
              <div className="flex-1 space-y-4">
                {/* Informations formation */}
                <div
                  className="rounded-lg p-3 border border-blue-200"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #eff6ff, #fff7ed)",
                  }}
                >
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-gray-900">
                      {FORMATION_INFO.duration} • {FORMATION_INFO.sessions}{" "}
                      sessions
                    </p>
                    <p className="text-sm text-gray-600">
                      Début: {FORMATION_INFO.startDate}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="text-left">
                  <p className="text-sm text-[#0000ff] font-semibold">
                    www.creativeconcept.cd
                  </p>
                </div>
              </div>

              {/* QR Code à droite */}
              <div className="shrink-0">
                <div className="bg-white p-2 rounded-lg border-2 border-[#0000ff]">
                  <canvas ref={canvasRef} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
