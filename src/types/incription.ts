export type PaymentStatus = "paid" | "unpaid";

export type SourceDecouverte =
  | "Facebook"
  | "WhatsApp"
  | "Instagram"
  | "Par un proche"
  | "Site web"
  | "Autre";

export interface Inscription {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  adresse: string;
  motivation: string | null;
  source_decouverte: SourceDecouverte | null;
  created_at: string;
  inscription_status: PaymentStatus;
  inscription_payment_date: string | null;
  participation_status: PaymentStatus;
  participation_payment_date: string | null;
  card_number: string | null;
  qr_code_data: string | null;
  card_generated_at: string | null;
}
