import { useState } from "react";
import type { EmailData } from "@/interfaces";

interface UseFormspreeReturn {
  sendEmail: (data: EmailData) => Promise<boolean>;
  isLoading: boolean;
  error: string | null;
}

export function useFormspree(): UseFormspreeReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = async (data: EmailData): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      // Você precisa criar conta no Formspree e pegar seu endpoint
      const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      });

      if (response.ok) {
        setIsLoading(false);
        return true;
      } else {
        throw new Error("Erro no envio");
      }
    } catch (err) {
      console.error("Erro ao enviar email:", err);
      setError(err instanceof Error ? err.message : "Erro ao enviar email");
      setIsLoading(false);
      return false;
    }
  };

  return {
    sendEmail,
    isLoading,
    error,
  };
}
