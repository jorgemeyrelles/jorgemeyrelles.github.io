export const config = {
  // Contact Information
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5521994844035",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "jotaengpuc@gmail.com",

  // Resend Configuration
  resend: {
    apiKey:
      process.env.NEXT_PUBLIC_RESEND_API_KEY ||
      "re_6o1mmn92_EAPXRSRiGghowjnqK4Zg71aA",
  },

  // EmailJS Configuration
  emailjs: {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_xxxxxxx",
    templateId:
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_xxxxxxx",
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "xxxxxxx",
  },
};
