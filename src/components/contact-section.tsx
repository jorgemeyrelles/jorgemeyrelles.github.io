"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, MessageSquare, Send, User } from "lucide-react";
import { useLocale } from "@/contexts/locale-context";
import { Button } from "./ui/button";
import { config } from "@/lib/config";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useToast } from "@/hooks/use-toast";
import { useEmailJS } from "@/hooks/use-emailjs";
import { contactFormSchema, type ContactFormData } from "@/interfaces";
import { useResend } from "@/hooks/use-resend";

export function ContactSection() {
  const { t } = useLocale();
  const { toast } = useToast();
  const { sendEmail, isLoading: isSubmitting, error } = useEmailJS();
  const { sendEmail: resendEmail } = useResend();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const success = await sendEmail(data);

      if (success) {
        toast({
          title: t("contact.success"),
          description: "Entrarei em contato em breve!",
        });
        await resendEmail({
          email: data.email,
          name: data.name,
          subject: "Obrigado pelo contato",
          message: "E-mail enviado com sucesso! Em breve entrarei em contato.",
        });
        reset();
      } else {
        throw new Error(error || "Erro ao enviar email");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      toast({
        title: t("contact.error"),
        description: err instanceof Error ? err.message : "Erro inesperado",
        variant: "destructive",
      });
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá Jorge! Gostaria de conversar sobre um projeto."
    );
    const whatsappUrl = `https://wa.me/${config.whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                {t("contact.send")}
              </CardTitle>
              <CardDescription>
                Preencha o formulário abaixo e entrarei em contato
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {t("contact.name")}
                  </Label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    {t("contact.email")}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    {t("contact.subject")}
                  </Label>
                  <Input
                    id="subject"
                    placeholder="Assunto da mensagem"
                    {...register("subject")}
                  />
                  {errors.subject && (
                    <p className="text-sm text-destructive">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t("contact.message")}</Label>
                  <Textarea
                    id="message"
                    placeholder="Descreva seu projeto ou dúvida..."
                    rows={5}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Enviando...</>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      {t("contact.send")}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* WhatsApp Card */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-green-500/10 to-green-600/10 border-green-500/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-green-600 dark:text-green-400" />
                  WhatsApp
                </CardTitle>
                <CardDescription>{t("contact.whatsapp")}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-600 hover:bg-green-700 text-white gap-2"
                >
                  <MessageSquare className="h-4 w-4" />
                  Abrir WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <a
                    href={`mailto:${config.contactEmail}`}
                    className="text-sm hover:underline"
                  >
                    {config.contactEmail}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm">+55 21 99484-4035</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>Florianópolis, Brasil</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
