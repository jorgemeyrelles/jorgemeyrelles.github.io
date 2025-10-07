"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { useLocale } from "@/contexts/locale-context";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import type { GitHubRepo } from "@/interfaces";

const featuredProjects = [
  {
    name: "mandd-app",
    description:
      "App de receitas desenvolvido em equipe utilizando React, Context API e integração com API REST",
    url: "https://jorgemeyrelles.github.io/mandd-app/",
    githubUrl: "https://github.com/jorgemeyrelles/mandd-app",
    technologies: ["React", "Context API", "REST API", "CSS"],
  },
  {
    name: "triviagame",
    description:
      "Jogo de trivia interativo com perguntas de múltipla escolha e sistema de pontuação",
    url: "https://jorgemeyrelles.github.io/triviagame/",
    githubUrl: "https://github.com/jorgemeyrelles/triviagame",
    technologies: ["React", "Bootstrap", "REST API", "JavaScript"],
  },
  {
    name: "moviefavorite",
    description:
      "Aplicação de filmes favoritos com integração à API de filmes e Material UI",
    url: "https://jorgemeyrelles.github.io/moviefavorite/",
    githubUrl: "https://github.com/jorgemeyrelles/moviefavorite",
    technologies: ["React", "Material UI", "REST API", "TypeScript"],
  },
  {
    name: "personRegistration",
    description: "Sistema de gestão de RDO com Java 17, Spring Boot e React",
    url: "https://github.com/jorgemeyrelles/personRegistration",
    githubUrl: "https://github.com/jorgemeyrelles/personRegistration",
    technologies: ["Java 17", "Spring Boot", "React", "PostgreSQL", "JPA"],
  },
  {
    name: "apiFinancas",
    description:
      "API de finanças pessoais com Spring Boot, seguindo princípios de DDD",
    url: "https://github.com/jorgemeyrelles/apiFinancas",
    githubUrl: "https://github.com/jorgemeyrelles/apiFinancas",
    technologies: ["Java 17", "Spring Boot", "MySQL", "DDD", "Lombok"],
  },
];

export function ProjectsSection() {
  const { t } = useLocale();
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          "https://api.github.com/users/jorgemeyrelles/repos?sort=updated&per_page=100"
        );
        const data = await response.json();

        // Filter for featured projects
        const featured = data.filter((repo: GitHubRepo) =>
          featuredProjects.some((fp) => fp.name === repo.name)
        );

        setRepos(featured);
      } catch (error) {
        console.error("[v0] Error fetching GitHub repos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            {t("home.featuredProjects")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("home.subtitle")}
          </p>
        </div>

        {loading ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="h-6 bg-muted rounded w-3/4" />
                  <div className="h-4 bg-muted rounded w-full mt-2" />
                </CardHeader>
                <CardContent>
                  <div className="h-4 bg-muted rounded w-full" />
                  <div className="h-4 bg-muted rounded w-2/3 mt-2" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => {
              const repo = repos.find((r) => r.name === project.name);

              return (
                <Card
                  key={project.name}
                  className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  <CardHeader>
                    <CardTitle className="flex items-start justify-between gap-2">
                      <span className="text-lg">{project.name}</span>
                      {repo && repo.stargazers_count > 0 && (
                        <Badge variant="secondary" className="text-xs">
                          ⭐ {repo.stargazers_count}
                        </Badge>
                      )}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="flex-1 gap-2 bg-transparent"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      {project.url && !project.url.includes("github.com") && (
                        <Button asChild size="sm" className="flex-1 gap-2">
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="gap-2 bg-transparent"
          >
            <a
              href="https://github.com/jorgemeyrelles?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              {t("home.viewOnGithub")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
