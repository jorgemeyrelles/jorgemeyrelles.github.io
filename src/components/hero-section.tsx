"use client";

import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useLocale } from "@/contexts/locale-context";
import { Button } from "./ui/button";
import { ProfileCarousel } from "./profile-carousel";

export function HeroSection() {
  const { t } = useLocale();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Right side - Background carousel with gradient overlay */}
      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
        <ProfileCarousel />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      {/* Content container */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-2xl">
          {/* Text content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700">
                {t("home.greeting")}
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                Jorge Meyrelles Jr.
              </h1>
              <h2 className="text-2xl font-semibold text-primary sm:text-3xl lg:text-4xl text-balance animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                {t("home.title")}
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed text-pretty max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              {t("home.description")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              <Button asChild size="lg" className="gap-2">
                <Link href="#projects">
                  {t("home.cta")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 bg-transparent"
              >
                <Link href="#contact">
                  <Mail className="h-4 w-4" />
                  {t("home.contact")}
                </Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
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
                <a href="#contact" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-12 lg:hidden relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-border shadow-2xl">
            <ProfileCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
