"use client"

import { ExternalLink, MapPin } from "lucide-react"
import { useLocale } from "@/contexts/locale-context"
import { experiences } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"

export function ExperienceSection() {
  const { t } = useLocale()

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">{t("experience.title")}</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={exp.id} className="relative hover:shadow-lg transition-shadow">
              {/* Timeline connector */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-full h-8 w-0.5 bg-border hidden md:block" />
              )}

              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl flex items-center gap-2 flex-wrap">
                      {exp.position}
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline inline-flex items-center gap-1"
                        >
                          @ {exp.company}
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      ) : (
                        <span className="text-primary">@ {exp.company}</span>
                      )}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                      <span>
                        {exp.startDate} - {exp.endDate === "present" ? t("experience.present") : exp.endDate}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-primary">{t("experience.goals")}:</h4>
                  <p className="text-muted-foreground leading-relaxed">{t(exp.description)}</p>
                </div>

                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-primary">{t("experience.challenges")}:</h4>
                    <p className="text-muted-foreground leading-relaxed">{t(exp.achievements[0])}</p>
                  </div>
                )}

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-primary">{t("experience.technologies")}:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
