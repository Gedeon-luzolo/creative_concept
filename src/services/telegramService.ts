/**
 * Service pour envoyer des notifications via Telegram Bot
 */

interface TelegramNotification {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  adresse: string;
  source_decouverte?: string | null;
  created_at: string;
}

export const telegramService = {
  /**
   * Envoie une notification Telegram pour une nouvelle inscription
   */
  async sendInscriptionNotification(
    data: TelegramNotification,
  ): Promise<boolean> {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // Vérifier que les variables d'environnement sont configurées
    if (!botToken || !chatId) {
      console.warn(
        "Telegram non configuré: TELEGRAM_BOT_TOKEN ou TELEGRAM_CHAT_ID manquant",
      );
      return false;
    }

    // Formater le message
    const message = `
🎓 *NOUVELLE INSCRIPTION - VIBE CODING*

👤 *Participant:*
${data.prenom} ${data.nom}

📧 *Email:*
${data.email}

📱 *Téléphone:*
${data.telephone}

📍 *Adresse:*
${data.adresse}

${data.source_decouverte ? `📢 *Découvert via:*\n${data.source_decouverte}\n\n` : ""}🕐 *Date d'inscription:*
${new Date(data.created_at).toLocaleString("fr-FR", {
  dateStyle: "full",
  timeStyle: "short",
})}

🔗 [Voir dans l'admin](${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/admin/demandes)
    `.trim();

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: "Markdown",
          }),
        },
      );

      if (!response.ok) {
        const error = await response.json();
        console.error("Erreur Telegram API:", error);
        return false;
      }

      return true;
    } catch (error) {
      console.error(
        "Erreur lors de l'envoi de la notification Telegram:",
        error,
      );
      return false;
    }
  },
};
