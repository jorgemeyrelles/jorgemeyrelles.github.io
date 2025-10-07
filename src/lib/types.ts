export interface Experience {
  id: string
  company: string
  companyUrl?: string
  position: string
  location: string
  startDate: string
  endDate: string
  description: string
  technologies: string[]
  achievements?: string[]
}

export interface Project {
  id: string
  name: string
  description: string
  url: string
  githubUrl: string
  technologies: string[]
  image?: string
}

export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  subject: string
  defaultMessage: string
}

export interface Education {
  id: string
  institution: string
  degree: string
  field?: string
  startDate: string
  endDate: string
  location: string
  description?: string
}

export interface Language {
  name: string
  level: string
  flag: string
}

export type Locale = "pt" | "en"
