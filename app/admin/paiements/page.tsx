"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaDollarSign, FaMoneyBillWave } from "react-icons/fa";
import { paymentService, PaymentStats } from "@/src/services/paymentService";
import Loading from "@/src/components/Loading";

/**
 * Page d'administration pour visualiser les paiements en caisse
 *
 * Affiche:
 * - Total en caisse
 * - Revenus des inscriptions (5$ chacune)
 * - Revenus des participations (30$ chacune)
 */
export default function PaiementsPage() {
  const [stats, setStats] = useState<PaymentStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const data = await paymentService.getPaymentStats();
      setStats(data);
    } catch (error) {
      console.error("Erreur:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading message="Chargement des statistiques..." />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Image
                  src="/images/logo/logo_noir.png"
                  alt="Creative Concept"
                  width={150}
                  height={50}
                  className="h-10 w-auto"
                />
              </Link>
              <div className="h-8 w-px bg-gray-300"></div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Gestion des Paiements
              </h1>
            </div>
            <Link
              href="/admin/demandes"
              className="flex items-center gap-2 text-[#0000ff] hover:text-[#0000cc] font-semibold transition-colors"
            >
              <FaArrowLeft />
              Retour
            </Link>
          </div>
        </div>

        {/* Statistiques de paiement */}
        {stats && (
          <div className="space-y-6">
            {/* Total en caisse */}
            <div className="bg-linear-to-br from-green-500 to-green-600 rounded-2xl shadow-lg p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white bg-opacity-20 p-4 rounded-xl">
                  <FaDollarSign className="text-4xl" />
                </div>
                <div>
                  <p className="text-green-100 text-sm font-semibold">
                    Total en Caisse
                  </p>
                  <h2 className="text-5xl font-bold">${stats.totalRevenue}</h2>
                </div>
              </div>
              <p className="text-green-100 text-sm">
                Montant total collecté pour la formation
              </p>
            </div>

            {/* Détails par type de paiement */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inscriptions */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <FaMoneyBillWave className="text-2xl text-[#0000ff]" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-semibold">
                      Frais d'Inscription
                    </p>
                    <h3 className="text-3xl font-bold text-[#0000ff]">
                      ${stats.inscriptionRevenue}
                    </h3>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Inscriptions payées:</span>
                    <span className="font-semibold text-gray-900">
                      {stats.paidInscriptions}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Montant unitaire:</span>
                    <span className="font-semibold text-gray-900">$5</span>
                  </div>
                </div>
              </div>

              {/* Participations */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-orange-100 p-3 rounded-xl">
                    <FaMoneyBillWave className="text-2xl text-[#ffa500]" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-semibold">
                      Frais de Participation
                    </p>
                    <h3 className="text-3xl font-bold text-[#ffa500]">
                      ${stats.participationRevenue}
                    </h3>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Participations payées:
                    </span>
                    <span className="font-semibold text-gray-900">
                      {stats.paidParticipations}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Montant unitaire:</span>
                    <span className="font-semibold text-gray-900">$30</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Résumé */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Résumé des Paiements
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">
                    Inscriptions ({stats.paidInscriptions} × $5)
                  </span>
                  <span className="text-lg font-bold text-[#0000ff]">
                    ${stats.inscriptionRevenue}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">
                    Participations ({stats.paidParticipations} × $30)
                  </span>
                  <span className="text-lg font-bold text-[#ffa500]">
                    ${stats.participationRevenue}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 bg-gray-50 rounded-lg px-4">
                  <span className="text-gray-900 font-bold text-lg">
                    Total en Caisse
                  </span>
                  <span className="text-2xl font-bold text-green-600">
                    ${stats.totalRevenue}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
