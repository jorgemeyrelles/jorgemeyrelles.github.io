"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { useLocale } from "@/contexts/locale-context"
import { Button } from "./ui/button"

export function Footer() {
  const { t } = useLocale()

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Jorge Meyrelles Jr.</h3>
            <p className="text-sm text-muted-foreground">Full Stack Developer</p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/jorgemeyrelles"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://linkedin.com/in/jorgemeyrelles"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:jotaengpuc@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Links Rápidos</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
                {t("nav.home")}
              </a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                {t("nav.about")}
              </a>
              <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
                {t("nav.experience")}
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                {t("nav.projects")}
              </a>
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                {t("nav.services")}
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                {t("nav.contact")}
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contato</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>jotaengpuc@gmail.com</p>
              <p>+55 21 96456-4232</p>
              <p>Rio de Janeiro, Brasil</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Jorge Meyrelles Jr. {t("footer.rights")}. {t("footer.builtWith")}{" "}
            <Heart className="h-4 w-4 text-red-500 fill-red-500" /> & Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}
