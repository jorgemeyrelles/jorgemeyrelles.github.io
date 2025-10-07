import type { Experience, Education, Language, Service } from "./types";

export const experiences: Experience[] = [
  {
    id: "1",
    company: "WEG",
    companyUrl: "https://weg.net",
    position: "Full Stack Developer",
    location: "Blumenau, Brasil",
    startDate: "2024-08",
    endDate: "present",
    description: "experience.jobs.weg.goals",
    technologies: [
      "Next.js",
      "Ant Design",
      "ContextAPI",
      "Node.js",
      "TypeScript",
      "TypeORM",
      "RabbitMQ",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "Java 17",
      "Spring Boot",
    ],
    achievements: ["experience.jobs.weg.challenges"],
  },
  {
    id: "2",
    company: "Fundação ABC",
    companyUrl: "https://fundacaoabc.org.br",
    position: "Full Stack Developer",
    location: "Remoto",
    startDate: "2023-06",
    endDate: "2024-06",
    description: "experience.jobs.fundacao.goals",
    technologies: [
      "React.js",
      "Redux",
      "GraphQL",
      "Material UI",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "GitLab",
    ],
    achievements: ["experience.jobs.fundacao.challenges"],
  },
  {
    id: "3",
    company: "Axor Gestão & Consultoria",
    position: "Analista e Desenvolvedor de Sistemas",
    location: "Rio de Janeiro, Brasil",
    startDate: "2022-11",
    endDate: "2023-02",
    description: "experience.jobs.axor.goals",
    technologies: [
      "Python",
      "Node.js",
      "React.js",
      "Power BI",
      "SQL Server",
      "Oracle",
      "Docker",
    ],
    achievements: ["experience.jobs.axor.challenges"],
  },
  {
    id: "4",
    company: "Adroit Robotics",
    companyUrl: "https://adroitrobotics.com",
    position: "Desenvolvedor Fullstack Jr.",
    location: "São Paulo, Brasil",
    startDate: "2021-01",
    endDate: "2022-01",
    description: "experience.jobs.adroit.goals",
    technologies: [
      "React.js",
      "Redux",
      "Material UI",
      "Node.js",
      "MongoDB",
      "Express.js",
    ],
    achievements: ["experience.jobs.adroit.challenges"],
  },
  {
    id: "5",
    company: "Johannes Gutenberg-Universität Mainz",
    companyUrl: "https://www.komet.physik.uni-mainz.de/",
    position: "Trainee",
    location: "Mainz, Alemanha",
    startDate: "2018-08",
    endDate: "2019-02",
    description: "experience.jobs.mainz.goals",
    technologies: ["Data Analysis", "Research"],
    achievements: ["experience.jobs.mainz.challenges"],
  },
];

export const education: Education[] = [
  {
    id: "1",
    institution: "COTI Informática",
    degree: "Aperfeiçoamento",
    startDate: "2024-01",
    endDate: "2024-06",
    location: "Online",
    description:
      "Java OOP, Clean Code, DDD, TDD, Angular 18, Spring Boot, RabbitMQ, Docker, Azure",
  },
  {
    id: "2",
    institution: "PUC Minas",
    degree: "Pós-graduação",
    field: "Engenharia de Software",
    startDate: "2024-01",
    endDate: "2024-12",
    location: "Belo Horizonte, Brasil",
  },
  {
    id: "3",
    institution: "Trybe",
    degree: "Curso Intensivo",
    field: "Desenvolvimento Full Stack",
    startDate: "2021-01",
    endDate: "2022-03",
    location: "Rio de Janeiro, Brasil",
    description: "Full stack: MySQL, MongoDB, Express.js, React.js, Node.js",
  },
  {
    id: "4",
    institution: "PUC-Rio",
    degree: "Bacharelado",
    field: "Engenharia de Materiais e Metalurgia",
    startDate: "2007-01",
    endDate: "2014-06",
    location: "Rio de Janeiro, Brasil",
    description: "Iniciação científica no Departamento de Física",
  },
];

export const languages: Language[] = [
  {
    name: "about.languagesList.Português",
    level: "about.languagesList.levels.Nativo",
    flag: "🇧🇷",
  },
  {
    name: "about.languagesList.Inglês",
    level: "about.languagesList.levels.B2/C1",
    flag: "🇺🇸",
  },
  {
    name: "about.languagesList.Espanhol",
    level: "about.languagesList.levels.B1",
    flag: "🇪🇸",
  },
  {
    name: "about.languagesList.Alemão",
    level: "about.languagesList.levels.A1",
    flag: "🇩🇪",
  },
];

export const skills = [
  {
    name: "HTML",
    icon: "https://img.shields.io/badge/-HTML-05122A?style=for-the-badge&logo=HTML5",
  },
  {
    name: "CSS",
    icon: "https://img.shields.io/badge/-CSS-05122A?style=for-the-badge&logo=CSS3",
  },
  {
    name: "JavaScript",
    icon: "https://img.shields.io/badge/-Javascript-05122A?style=for-the-badge&logo=javascript",
  },
  {
    name: "TypeScript",
    icon: "https://img.shields.io/badge/-TypeScript-05122A?style=for-the-badge&logo=typescript",
  },
  {
    name: "React",
    icon: "https://img.shields.io/badge/-React-05122A?style=for-the-badge&logo=react",
  },
  {
    name: "Next.js",
    icon: "https://img.shields.io/badge/-Next.js-05122A?style=for-the-badge&logo=next.js",
  },
  {
    name: "Node.js",
    icon: "https://img.shields.io/badge/-NodeJs-05122A?style=for-the-badge&logo=nodedotjs",
  },
  {
    name: "Express",
    icon: "https://img.shields.io/badge/-Express-05122A?style=for-the-badge&logo=Express",
  },
  {
    name: "Redux",
    icon: "https://img.shields.io/badge/-Redux-05122A?style=for-the-badge&logo=redux",
  },
  {
    name: "React Query",
    icon: "https://img.shields.io/badge/-reactquery-05122A?style=for-the-badge&logo=reactquery",
  },
  {
    name: "React Router",
    icon: "https://img.shields.io/badge/-Router-05122A?style=for-the-badge&logo=reactrouter",
  },
  {
    name: "MySQL",
    icon: "https://img.shields.io/badge/-MySQL-05122A?style=for-the-badge&logo=mysql",
  },
  {
    name: "PostgreSQL",
    icon: "https://img.shields.io/badge/-PostgreSQL-05122A?style=for-the-badge&logo=postgresql",
  },
  {
    name: "MongoDB",
    icon: "https://img.shields.io/badge/-MongoDB-05122A?style=for-the-badge&logo=mongodb",
  },
  {
    name: "Python",
    icon: "https://img.shields.io/badge/-Python-05122A?style=for-the-badge&logo=Python",
  },
  {
    name: "Java",
    icon: "https://img.shields.io/badge/-Java-05122A?style=for-the-badge&logo=openjdk",
  },
  {
    name: "Spring Boot",
    icon: "https://img.shields.io/badge/-Spring-05122A?style=for-the-badge&logo=spring",
  },
  {
    name: "Docker",
    icon: "https://img.shields.io/badge/-Docker-05122A?style=for-the-badge&logo=docker",
  },
  {
    name: "Jest",
    icon: "https://img.shields.io/badge/-Jest-05122A?style=for-the-badge&logo=jest",
  },
  {
    name: "Cypress",
    icon: "https://img.shields.io/badge/-Cypress-05122A?style=for-the-badge&logo=Cypress",
  },
  {
    name: "Material UI",
    icon: "https://img.shields.io/badge/-MUI-05122A?style=for-the-badge&logo=MUI",
  },
  {
    name: "Power BI",
    icon: "https://img.shields.io/badge/-powerbi-05122A?style=for-the-badge&logo=powerbi",
  },
  {
    name: "Git",
    icon: "https://img.shields.io/badge/-Git-05122A?style=for-the-badge&logo=git",
  },
  {
    name: "GitHub",
    icon: "https://img.shields.io/badge/-GitHub-05122A?style=for-the-badge&logo=github",
  },
  {
    name: "VS Code",
    icon: "https://img.shields.io/badge/-VSCode-05122A?style=for-the-badge&logo=visualstudiocode",
  },
];

export const services: Service[] = [
  {
    id: "1",
    title: "service1.title",
    description: "service1.description",
    features: ["service1.features"],
    subject: "Desenvolvimento do Zero",
    defaultMessage:
      "Olá Jorge! Gostaria de conversar sobre desenvolvimento de um novo projeto.",
  },
  {
    id: "2",
    title: "service2.title",
    description: "service2.description",
    features: ["service2.features"],
    subject: "Apoio em Projeto",
    defaultMessage:
      "Olá Jorge! Preciso de apoio técnico em um projeto em andamento.",
  },
  {
    id: "3",
    title: "service3.title",
    description: "service3.description",
    features: ["service3.features"],
    subject: "Consultoria em IA",
    defaultMessage:
      "Olá Jorge! Gostaria de discutir sobre implementação de soluções de IA.",
  },
];
