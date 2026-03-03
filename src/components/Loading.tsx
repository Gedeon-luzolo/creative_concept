interface LoadingProps {
  message?: string;
}

/**
 * Composant de chargement réutilisable
 * Affiche un spinner animé avec un message optionnel
 */
export default function Loading({ message = "Chargement..." }: LoadingProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#0000ff] mx-auto mb-4"></div>
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  );
}
