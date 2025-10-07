import { useState } from "react";
import { Resend } from "resend";
import type { EmailData, UseResendReturn } from "@/interfaces";
import { config } from "@/lib/config";

export function useResend(): UseResendReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = async (data: EmailData): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      const resend = new Resend(config.resend.apiKey);

      await resend.emails.send({
        from: "contato@resend.dev",
        to: config.contactEmail,
        subject: data.subject,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h3 style="color: #333;">Nova mensagem de ${data.name}</h3>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Nome:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Assunto:</strong> ${data.subject}</p>
            </div>
            <div style="background: #fff; padding: 20px; border-left: 4px solid #007bff; margin: 20px 0;">
              <h4>Mensagem:</h4>
              <p style="line-height: 1.6;">${data.message}</p>
            </div>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #6c757d; font-size: 14px;">
              <p>Para responder, utilize: <a href="mailto:${data.email}">${data.email}</a></p>
            </div>
          </div>
        `,
        replyTo: data.email,
      });

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
