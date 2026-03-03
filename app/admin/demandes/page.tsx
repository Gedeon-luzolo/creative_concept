"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import { Inscription, PaymentStatus } from "@/src/types/incription";
import Pagination from "@/src/components/pagination/Pagination";
import InscriptionCard from "@/src/components/admin/InscriptionCard";
import { usePagination } from "@/src/hook/usePagination";
import { inscriptionService } from "@/src/services/inscriptionService";

const ITEMS_PER_PAGE = 9;

export default function DemandesPage() {
  const [inscriptions, setInscriptions] = useState<Inscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchInscriptions();
  }, []);

  const fetchInscriptions = async () => {
    try {
      const data = await inscriptionService.fetchAll();
      setInscriptions(data);
    } catch (error) {
      console.error("Erreur:", error);
    } finally {
      setLoading(false);
    }
  };

  const updatePaymentStatus = async (
    id: string,
    field: "inscription_status" | "participation_status",
    status: PaymentStatus,
  ) => {
    try {
      await inscriptionService.updatePaymentStatus(id, field, status);
      fetchInscriptions();
    } catch (error) {
      console.error("Erreur:", error);
      alert("Erreur lors de la mise à jour du statut");
    }
  };

  const filteredInscriptions = inscriptions.filter(
    (inscription) =>
      inscription.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inscription.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inscription.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inscription.telephone.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Utiliser le hook de pagination
  const {
    currentItems: paginatedInscriptions,
    totalPages,
    currentPage,
    setCurrentPage,
  } = usePagination(filteredInscriptions, ITEMS_PER_PAGE);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#0000ff] mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement des demandes...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container mx-auto max-w-7xl">
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
                Demandes d'Inscription
              </h1>
            </div>
            <Link
              href="/"
              className="flex items-center gap-2 text-[#0000ff] hover:text-[#0000cc] font-semibold transition-colors"
            >
              <FaArrowLeft />
              Retour
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 rounded-xl p-4">
              <p className="text-sm text-gray-600 mb-1">Total des demandes</p>
              <p className="text-3xl font-bold text-[#0000ff]">
                {inscriptions.length}
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-4">
              <p className="text-sm text-gray-600 mb-1">Aujourd'hui</p>
              <p className="text-3xl font-bold text-green-600">
                {
                  inscriptions.filter(
                    (i) =>
                      new Date(i.created_at).toDateString() ===
                      new Date().toDateString(),
                  ).length
                }
              </p>
            </div>
            <div className="bg-orange-50 rounded-xl p-4">
              <p className="text-sm text-gray-600 mb-1">Cette semaine</p>
              <p className="text-3xl font-bold text-[#ffa500]">
                {
                  inscriptions.filter((i) => {
                    const date = new Date(i.created_at);
                    const now = new Date();
                    const weekAgo = new Date(
                      now.getTime() - 7 * 24 * 60 * 60 * 1000,
                    );
                    return date >= weekAgo;
                  }).length
                }
              </p>
            </div>
          </div>

          {/* Search */}
          <div className="mt-6">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher par nom, email ou téléphone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#0000ff] transition-colors text-gray-900"
              />
            </div>
          </div>
        </div>

        {/* Pagination en haut */}
        {filteredInscriptions.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            totalItems={filteredInscriptions.length}
            itemsPerPage={ITEMS_PER_PAGE}
          />
        )}

        {/* Cards des inscriptions */}
        {filteredInscriptions.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <p className="text-gray-500 text-lg">
              {searchTerm
                ? "Aucune demande trouvée pour cette recherche"
                : "Aucune demande d'inscription pour le moment"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedInscriptions.map((inscription) => (
              <InscriptionCard
                key={inscription.id}
                inscription={inscription}
                onUpdatePayment={updatePaymentStatus}
              />
            ))}
          </div>
        )}

        {/* Pagination en bas */}
        {filteredInscriptions.length > 0 && (
          <div className="mt-6">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalItems={filteredInscriptions.length}
              itemsPerPage={ITEMS_PER_PAGE}
            />
          </div>
        )}
      </div>
    </div>
  );
}
