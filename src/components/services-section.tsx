"use client"

import { ArrowRight, CheckCircle2 } from "lucide-react"
import { useLocale } from "@/contexts/locale-context"
import { services } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"

export function ServicesSection() {
  const { t } = useLocale()

  const handleServiceClick = (service: (typeof services)[0]) => {
    const whatsappNumber = "5521964564232"
    const message = encodeURIComponent(service.defaultMessage)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">{t("services.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{t("services.subtitle")}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col"
            >
              <CardHeader>
                <CardTitle className="text-xl">{t(`services.${service.title}`)}</CardTitle>
                <CardDescription className="text-base">{t(`services.${service.description}`)}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between space-y-6">
                <ul className="space-y-3">
                  {service.features.map((featureKey, index) => {
                    const features = t(`services.${featureKey}`)
                    const featureList = Array.isArray(features) ? features : [features]

                    return featureList.map((feature, i) => (
                      <li key={`${index}-${i}`} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))
                  })}
                </ul>
                <Button
                  onClick={() => handleServiceClick(service)}
                  className="w-full gap-2 group-hover:gap-3 transition-all"
                >
                  {t("services.getStarted")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
