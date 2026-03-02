import { z } from "zod";

// Schéma de validation pour le formulaire d'inscription
export const inscriptionSchema = z.object({
  nom: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(50, "Le nom ne peut pas dépasser 50 caractères")
    .regex(/^[a-zA-ZÀ-ÿ\s-]+$/, "Le nom ne peut contenir que des lettres"),

  prenom: z
    .string()
    .min(2, "Le prénom doit contenir au moins 2 caractères")
    .max(50, "Le prénom ne peut pas dépasser 50 caractères")
    .regex(/^[a-zA-ZÀ-ÿ\s-]+$/, "Le prénom ne peut contenir que des lettres"),

  email: z
    .string()
    .email("Veuillez entrer une adresse email valide")
    .toLowerCase(),

  telephone: z
    .string()
    .min(10, "Le numéro de téléphone doit contenir au moins 10 chiffres")
    .regex(/^[\d\s+()-]+$/, "Format de téléphone invalide"),

  adresse: z
    .string()
    .min(5, "L'adresse doit contenir au moins 5 caractères")
    .max(200, "L'adresse ne peut pas dépasser 200 caractères"),

  motivation: z
    .string()
    .max(500, "La motivation ne peut pas dépasser 500 caractères")
    .optional(),
});

export type InscriptionFormData = z.infer<typeof inscriptionSchema>;
