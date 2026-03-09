import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/src/lib/supabase";
import { inscriptionSchema } from "@/src/utils/validation";
import { telegramService } from "@/src/services/telegramService";

export async function POST(request: NextRequest) {
  try {
    // Récupérer les données du body
    const body = await request.json();

    // Valider les données avec Zod
    const validationResult = inscriptionSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Données invalides",
          details: validationResult.error.issues,
        },
        { status: 400 },
      );
    }

    const data = validationResult.data;

    // Vérifier si l'email existe déjà
    const { data: existingEmail } = await supabase
      .from("inscriptions")
      .select("email")
      .eq("email", data.email)
      .single();

    if (existingEmail) {
      return NextResponse.json(
        {
          error:
            "Cet email est déjà inscrit. Veuillez utiliser un autre email ou nous contacter sur WhatsApp.",
        },
        { status: 409 },
      );
    }

    // Vérifier si le téléphone existe déjà
    const { data: existingPhone } = await supabase
      .from("inscriptions")
      .select("telephone")
      .eq("telephone", data.telephone)
      .single();

    if (existingPhone) {
      return NextResponse.json(
        {
          error:
            "Ce numéro de téléphone est déjà inscrit. Veuillez utiliser un autre numéro ou nous contacter sur WhatsApp.",
        },
        { status: 409 },
      );
    }

    // Insérer les données dans Supabase
    const { data: insertedData, error } = await supabase
      .from("inscriptions")
      .insert([
        {
          nom: data.nom,
          prenom: data.prenom,
          email: data.email,
          telephone: data.telephone,
          adresse: data.adresse,
          source_decouverte: data.source_decouverte || null,
          motivation: data.motivation || null,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Erreur Supabase:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'inscription. Veuillez réessayer." },
        { status: 500 },
      );
    }

    // Envoyer une notification Telegram (ne bloque pas l'inscription si ça échoue)
    try {
      await telegramService.sendInscriptionNotification({
        nom: insertedData.nom,
        prenom: insertedData.prenom,
        email: insertedData.email,
        telephone: insertedData.telephone,
        adresse: insertedData.adresse,
        source_decouverte: insertedData.source_decouverte,
        created_at: insertedData.created_at,
      });
    } catch (telegramError) {
      // On log l'erreur mais on ne fait pas échouer l'inscription
      console.error("Erreur notification Telegram:", telegramError);
    }

    // Succès
    return NextResponse.json(
      {
        success: true,
        message: "Inscription réussie!",
        data: insertedData,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Erreur serveur:", error);
    return NextResponse.json(
      { error: "Erreur serveur. Veuillez réessayer." },
      { status: 500 },
    );
  }
}
