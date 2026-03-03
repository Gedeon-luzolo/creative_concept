import { useState, useEffect } from "react";

export const usePagination = <T>(items: T[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Réinitialiser à la page 1 quand la liste change (ex. recherche)
  useEffect(() => {
    setCurrentPage(1);
  }, [items.length]);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  return {
    currentItems,
    totalPages,
    currentPage,
    startIndex, // On l'ajoute ici pour éviter les variables locales dans les composants
    setCurrentPage,
    handlePreviousPage,
    handleNextPage,
  };
};
