export interface Inscription {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  adresse: string;
  motivation: string | null;
  created_at: string;
}
