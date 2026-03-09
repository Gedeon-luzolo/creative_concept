import { supabase } from "@/src/lib/supabase";

/**
 * Interface pour les statistiques de paiement
 */
export interface PaymentStats {
  // Inscriptions (5$ chacune)
  paidInscriptions: number;
  inscriptionRevenue: number;

  // Participations (30$ chacune)
  paidParticipations: number;
  participationRevenue: number;

  // Total en caisse
  totalRevenue: number;
}

/**
 * Service pour gérer les statistiques de paiement
 */
export const paymentService = {
  /**
   * Récupère les statistiques de paiement (ce qu'on a en caisse)
   */
  async getPaymentStats(): Promise<PaymentStats> {
    const { data, error } = await supabase
      .from("inscriptions")
      .select("inscription_status, participation_status");

    if (error) throw error;

    const inscriptions = data || [];

    // Compter les paiements
    const paidInscriptions = inscriptions.filter(
      (i) => i.inscription_status === "paid",
    ).length;

    const paidParticipations = inscriptions.filter(
      (i) => i.participation_status === "paid",
    ).length;

    // Calculer les revenus
    const inscriptionRevenue = paidInscriptions * 5;
    const participationRevenue = paidParticipations * 30;
    const totalRevenue = inscriptionRevenue + participationRevenue;

    return {
      paidInscriptions,
      inscriptionRevenue,
      paidParticipations,
      participationRevenue,
      totalRevenue,
    };
  },
};
