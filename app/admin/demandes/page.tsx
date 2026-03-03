"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/src/lib/supabase";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowLeft,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendar,
  FaSearch,
} from "react-icons/fa";
import { Inscription } from "@/src/types/incription";
import Pagination from "@/src/components/pagination/Pagination";
import { formatShortDate, formatTime } from "@/src/utils/format";
import { usePagination } from "@/src/hook/usePagination";

const ITEMS_PER_PAGE = 10;

export default function DemandesPage() {
  const [inscriptions, setInscriptions] = useState<Inscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchInscriptions();
  }, []);

  const fetchInscriptions = async () => {
    try {
      const { data, error } = await supabase
        .from("inscriptions")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      setInscriptions(data || []);
    } catch (error) {
      console.error("Erreur:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredInscriptions = inscriptions.filter(
    (inscription) =>
      inscription.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inscription.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inscription.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Utiliser le hook de pagination
  const {
    currentItems: paginatedInscriptions,
    totalPages,
    currentPage,
    startIndex,
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

        {/* Tableau des inscriptions */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {filteredInscriptions.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-gray-500 text-lg">
                {searchTerm
                  ? "Aucune demande trouvée pour cette recherche"
                  : "Aucune demande d'inscription pour le moment"}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Nom Complet
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Téléphone
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Adresse
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {paginatedInscriptions.map((inscription, index) => (
                    <tr
                      key={inscription.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">
                        {startIndex + index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-linear-to-br from-[#0000ff] to-[#0000cc] rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {inscription.prenom.charAt(0)}
                            {inscription.nom.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900">
                              {inscription.prenom} {inscription.nom}
                            </p>
                            {inscription.motivation && (
                              <p className="text-xs text-gray-500 max-w-xs truncate">
                                {inscription.motivation}
                              </p>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href={`mailto:${inscription.email}`}
                          className="text-sm text-gray-900 hover:text-[#0000ff] transition-colors flex items-center gap-2"
                        >
                          <FaEnvelope className="text-[#0000ff]" />
                          {inscription.email}
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <a
                          href={`https://wa.me/${inscription.telephone.replace(/\s/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-900 hover:text-green-600 transition-colors flex items-center gap-2"
                        >
                          <FaPhone className="text-green-600" />
                          {inscription.telephone}
                        </a>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-start gap-2 max-w-xs">
                          <FaMapMarkerAlt className="text-red-500 mt-1 text-xs shrink-0" />
                          <p className="text-sm text-gray-700 line-clamp-2">
                            {inscription.adresse}
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <FaCalendar className="text-gray-400 text-xs" />
                          <div>
                            <p className="font-semibold">
                              {formatShortDate(inscription.created_at)}
                            </p>
                            <p className="text-xs text-gray-500">
                              {formatTime(inscription.created_at)}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex gap-2">
                          <a
                            href={`https://wa.me/${inscription.telephone.replace(/\s/g, "")}?text=${encodeURIComponent(`Bonjour ${inscription.prenom}, merci pour votre inscription à la Master Class VIBE CODING!`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-lg transition-colors"
                            title="WhatsApp"
                          >
                            <FaPhone className="text-sm" />
                          </a>
                          <a
                            href={`mailto:${inscription.email}`}
                            className="p-2 bg-[#0000ff] hover:bg-[#0000cc] text-white rounded-lg transition-colors"
                            title="Email"
                          >
                            <FaEnvelope className="text-sm" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

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
