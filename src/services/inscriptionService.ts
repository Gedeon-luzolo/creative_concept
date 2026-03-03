import { supabase } from "@/src/lib/supabase";
import { PaymentStatus } from "@/src/types/incription";

export const inscriptionService = {
  async fetchAll() {
    const { data, error } = await supabase
      .from("inscriptions")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return data || [];
  },

  async updatePaymentStatus(
    id: string,
    field: "inscription_status" | "participation_status",
    status: PaymentStatus,
  ) {
    const dateField =
      field === "inscription_status"
        ? "inscription_payment_date"
        : "participation_payment_date";

    const { error } = await supabase
      .from("inscriptions")
      .update({
        [field]: status,
        [dateField]: status === "paid" ? new Date().toISOString() : null,
      })
      .eq("id", id);

    if (error) throw error;
  },
};
