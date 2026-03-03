"use client";

import { Toaster } from "react-hot-toast";

/**
 * Composant de configuration globale pour les notifications toast
 * Utilisé dans le layout racine pour être disponible partout
 */
export default function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: "#fff",
          color: "#363636",
          padding: "16px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        },
        success: {
          iconTheme: {
            primary: "#10b981",
            secondary: "#fff",
          },
        },
        error: {
          iconTheme: {
            primary: "#ef4444",
            secondary: "#fff",
          },
        },
        loading: {
          iconTheme: {
            primary: "#0000ff",
            secondary: "#fff",
          },
        },
      }}
    />
  );
}
