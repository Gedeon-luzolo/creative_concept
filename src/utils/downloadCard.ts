import { Inscription } from "@/src/types/incription";

/**
 * Télécharge la carte d'accès en format image PNG
 * Utilise html-to-image qui supporte mieux les CSS modernes (Tailwind v4)
 * 
 * @param inscription - Données de l'inscription pour nommer le fichier
 * @param elementId - ID de l'élément HTML à capturer (par défaut "access-card")
 * @returns Promise<boolean> - true si succès, false si erreur
 */
export async function downloadAccessCard(
  inscription: Inscription,
  elementId: string = "access-card",
): Promise<boolean> {
  try {
    const cardElement = document.getElementById(elementId);

    if (!cardElement) {
      console.error(`Élément avec l'ID "${elementId}" non trouvé`);
      return false;
    }

    // Import dynamique pour éviter l'erreur SSR (côté serveur)
    const htmlToImage = await import("html-to-image");

    // Capturer l'élément en image PNG avec haute qualité
    const dataUrl = await htmlToImage.toPng(cardElement, {
      quality: 1, // Qualité maximale
      pixelRatio: 2, // 2x pour meilleure résolution
      cacheBust: true, // Éviter les problèmes de cache
    });

    // Créer un lien de téléchargement
    const link = document.createElement("a");
    link.download = `carte-acces-${inscription.prenom}-${inscription.nom}.png`;
    link.href = dataUrl;
    link.click();

    return true;
  } catch (error) {
    console.error("Erreur lors du téléchargement de la carte:", error);
    return false;
  }
}
