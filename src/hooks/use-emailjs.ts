import { useState } from "react";
import emailjs from "@emailjs/browser";
import type { EmailData, UseEmailJSReturn } from "@/interfaces";
import { config } from "@/lib/config";

export function useEmailJS(): UseEmailJSReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = async (data: EmailData): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      await emailjs.send(
        config.emailjs.serviceId,
        config.emailjs.templateId,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          to_email: config.contactEmail,
        },
        config.emailjs.publicKey
      );

      setIsLoading(false);
      return true;
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
