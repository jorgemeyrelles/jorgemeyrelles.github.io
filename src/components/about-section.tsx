"use client"

import { Download } from "lucide-react"
import { useLocale } from "@/contexts/locale-context"
import { education, languages, skills } from "@/lib/data"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"

export function AboutSection() {
  const { t, locale } = useLocale()

  const handleDownloadCV = () => {
    const cvUrl = locale === "pt" ? "/cv/jorge-meyrelles-cv-pt.pdf" : "/cv/jorge-meyrelles-cv-en.pdf"
    const link = document.createElement("a")
    link.href = cvUrl
    link.download = `jorge-meyrelles-cv-${locale}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">{t("about.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            {t("about.bio")}
          </p>
          <div className="pt-4">
            <Button onClick={handleDownloadCV} size="lg" className="gap-2">
              <Download className="h-4 w-4" />
              {t("about.downloadCV")}
            </Button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mt-16">
          {/* Skills Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t("about.skills")}</CardTitle>
            </CardHeader>
            <CardContent>
              <TooltipProvider>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <Tooltip key={skill.name}>
                      <TooltipTrigger asChild>
                        <div className="transition-transform hover:scale-110 cursor-pointer">
                          <img src={skill.icon || "/placeholder.svg"} alt={skill.name} className="h-8" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{skill.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </TooltipProvider>
            </CardContent>
          </Card>

          {/* Languages Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t("about.languages")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {languages.map((language) => (
                  <div key={language.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{language.flag}</span>
                      <span className="font-medium">{t(language.name)}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{t(language.level)}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Education Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">{t("about.education")}</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((edu) => (
              <Card key={edu.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{edu.degree}</CardTitle>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                </CardHeader>
                <CardContent className="space-y-2">
                  {edu.field && <p className="text-sm font-medium">{edu.field}</p>}
                  <p className="text-sm text-muted-foreground">
                    {edu.startDate} - {edu.endDate}
                  </p>
                  {edu.description && <p className="text-sm text-muted-foreground">{edu.description}</p>}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
