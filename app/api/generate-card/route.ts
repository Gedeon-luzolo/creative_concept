import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/src/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const { inscriptionId } = await request.json();

    if (!inscriptionId) {
      return NextResponse.json(
        { error: "ID d'inscription requis" },
        { status: 400 },
      );
    }

    // Récupérer l'inscription
    const { data: inscription, error: fetchError } = await supabase
      .from("inscriptions")
      .select("*")
      .eq("id", inscriptionId)
      .single();

    if (fetchError || !inscription) {
      return NextResponse.json(
        { error: "Inscription non trouvée" },
        { status: 404 },
      );
    }

    // Vérifier que le paiement d'inscription est fait
    if (inscription.inscription_status !== "paid") {
      return NextResponse.json(
        {
          error:
            "Le paiement d'inscription doit être effectué avant de générer la carte",
        },
        { status: 400 },
      );
    }

    // Vérifier si la carte existe déjà
    if (inscription.card_number) {
      return NextResponse.json(
        {
          success: true,
          message: "Carte déjà générée",
          data: inscription,
        },
        { status: 200 },
      );
    }

    // Générer un numéro de carte unique
    const year = new Date().getFullYear();
    const count = await supabase
      .from("inscriptions")
      .select("id", { count: "exact", head: true })
      .not("card_number", "is", null);

    const cardNumber = `VC-${year}-${String((count.count || 0) + 1).padStart(3, "0")}`;

    // Générer l'URL du QR code
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const qrCodeData = `${baseUrl}/verify/${inscriptionId}`;

    // Mettre à jour l'inscription avec les données de la carte
    const { data: updatedInscription, error: updateError } = await supabase
      .from("inscriptions")
      .update({
        card_number: cardNumber,
        qr_code_data: qrCodeData,
        card_generated_at: new Date().toISOString(),
      })
      .eq("id", inscriptionId)
      .select()
      .single();

    if (updateError) {
      console.error("Erreur mise à jour:", updateError);
      return NextResponse.json(
        { error: "Erreur lors de la génération de la carte" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Carte générée avec succès",
        data: updatedInscription,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Erreur serveur:", error);
    return NextResponse.json(
      { error: "Erreur serveur. Veuillez réessayer." },
      { status: 500 },
    );
  }
}
