"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import { Inscription, PaymentStatus } from "@/src/types/incription";
import Pagination from "@/src/components/pagination/Pagination";
import InscriptionCard from "@/src/components/admin/InscriptionCard";
import AccessCard from "@/src/components/admin/AccessCard";
import { usePagination } from "@/src/hook/usePagination";
import { inscriptionService } from "@/src/services/inscriptionService";
import { downloadAccessCard } from "@/src/utils/downloadCard";
import toast from "react-hot-toast";
import Loading from "@/src/components/Loading";

const ITEMS_PER_PAGE = 9;

/**
 * Page d'administration pour gérer les demandes d'inscription
 *
 * Fonctionnalités :
 * - Visualiser toutes les inscriptions avec statistiques
 * - Rechercher par nom, email ou téléphone
 * - Marquer les paiements (inscription 10$ et participation 50$)
 * - Génération automatique de carte d'accès lors du paiement d'inscription
 * - Visualiser et envoyer les cartes via WhatsApp
 * - Pagination (9 inscriptions par page)
 */
export default function DemandesPage() {
  // États pour gérer les données et l'interface
  const [inscriptions, setInscriptions] = useState<Inscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedInscription, setSelectedInscription] =
    useState<Inscription | null>(null);
  const [showCardModal, setShowCardModal] = useState(false);

  // Charger les inscriptions au montage du composant
  useEffect(() => {
    fetchInscriptions();
  }, []);

  /**
   * Récupère toutes les inscriptions depuis Supabase
   * Triées par date de création (plus récentes en premier)
   */
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

  /**
   * Met à jour le statut de paiement d'une inscription
   *
   * Comportement spécial :
   * - Si paiement d'inscription (10$) → génère automatiquement la carte d'accès
   * - Si paiement de participation (50$) → met juste à jour le statut
   *
   * @param id - ID de l'inscription à mettre à jour
   * @param field - Champ à modifier (inscription_status ou participation_status)
   * @param status - Nouveau statut (paid ou unpaid)
   */
  const updatePaymentStatus = async (
    id: string,
    field: "inscription_status" | "participation_status",
    status: PaymentStatus,
  ) => {
    const loadingToast = toast.loading("Mise à jour en cours...");

    try {
      // Mise à jour du statut de paiement dans la base de données
      await inscriptionService.updatePaymentStatus(id, field, status);

      // Génération automatique de la carte si paiement d'inscription
      if (field === "inscription_status" && status === "paid") {
        toast.loading("Génération de la carte d'accès...", {
          id: loadingToast,
        });
        try {
          // Appel API pour générer le numéro de carte et le QR code
          await inscriptionService.generateCard(id);
          toast.success("Paiement confirmé et carte générée avec succès!", {
            id: loadingToast,
          });
        } catch (error) {
          console.error("Erreur génération carte:", error);
          // On affiche quand même un succès car le paiement est enregistré
          toast.success(
            "Paiement confirmé (erreur lors de la génération de la carte)",
            { id: loadingToast },
          );
        }
      } else {
        toast.success("Statut de paiement mis à jour avec succès!", {
          id: loadingToast,
        });
      }

      // Recharger les données pour afficher les changements
      fetchInscriptions();
    } catch (error) {
      console.error("Erreur:", error);
      toast.error("Erreur lors de la mise à jour du statut", {
        id: loadingToast,
      });
    }
  };

  /**
   * Ouvre le modal pour afficher la carte d'accès d'un participant
   * @param inscription - Données de l'inscription dont on veut voir la carte
   */
  const handleViewCard = (inscription: Inscription) => {
    setSelectedInscription(inscription);
    setShowCardModal(true);
  };

  /**
   * Télécharge la carte d'accès en format image PNG
   */
  const handleDownloadCard = async () => {
    if (!selectedInscription) return;

    const success = await downloadAccessCard(selectedInscription);

    if (success) {
      toast.success("Carte téléchargée avec succès!");
    } else {
      toast.error("Erreur lors du téléchargement de la carte");
    }
  };

  // Filtrage des inscriptions selon le terme de recherche
  // Recherche dans : nom, prénom, email, téléphone
  const filteredInscriptions = inscriptions.filter(
    (inscription) =>
      inscription.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inscription.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inscription.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inscription.telephone.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Hook de pagination pour afficher 9 inscriptions par page
  const {
    currentItems: paginatedInscriptions,
    totalPages,
    currentPage,
    setCurrentPage,
  } = usePagination(filteredInscriptions, ITEMS_PER_PAGE);

  // Affichage du loader pendant le chargement initial
  if (loading) {
    return <Loading message="Chargement des demandes..." />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header avec logo, titre et statistiques */}
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
            <div className="flex items-center gap-4">
              <Link
                href="/admin/paiements"
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors"
              >
                Paiements
              </Link>
              <Link
                href="/"
                className="flex items-center gap-2 text-[#0000ff] hover:text-[#0000cc] font-semibold transition-colors"
              >
                <FaArrowLeft />
                Retour
              </Link>
            </div>
          </div>

          {/* Statistiques : Total, Aujourd'hui, Cette semaine */}
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

          {/* Barre de recherche */}
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

        {/* Grille des cards d'inscription */}
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
                onViewCard={handleViewCard}
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

      {/* Modal pour afficher la carte d'accès */}
      {showCardModal && selectedInscription && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowCardModal(false)}
        >
          <div
            className="max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Carte d'Accès
                </h2>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleDownloadCard}
                    className="px-4 py-2 bg-[#0000ff] hover:bg-[#0000cc] text-white rounded-lg font-semibold transition-colors flex items-center gap-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Télécharger
                  </button>
                  <button
                    onClick={() => setShowCardModal(false)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>
              </div>
              <div id="access-card">
                <AccessCard inscription={selectedInscription} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
