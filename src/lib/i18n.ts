import type { Locale } from "./types";

export const translations = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      services: "Serviços",
      contact: "Contato",
    },
    home: {
      greeting: "Olá, eu sou",
      title: "Desenvolvedor Full Stack",
      subtitle: "Construindo experiências web modernas e escaláveis",
      description:
        "Desenvolvedor Full Stack com mais de 5 anos de experiência em React, Node.js, TypeScript, Java e Python. Especializado em criar aplicações web robustas e interfaces de usuário intuitivas.",
      cta: "Ver Projetos",
      contact: "Entre em Contato",
      featuredProjects: "Projetos em Destaque",
      viewOnGithub: "Ver no GitHub",
    },
    about: {
      title: "Sobre Mim",
      downloadCV: "Baixar Currículo",
      education: "Formação",
      languages: "Idiomas",
      skills: "Habilidades",
      bio: "Sou formado como desenvolvedor full stack pela Trybe. Em todas as minhas experiências profissionais, precisei gerar e organizar dados, até que surgiu a oportunidade de me aprofundar e me especializar como profissional na área de desenvolvimento e ciência de dados. Estou sempre buscando aprender algo novo dentro da área de tecnologia e o que mais me estimula é superar os desafios que surgem.",
      languagesList: {
        Português: "Português",
        Inglês: "Inglês",
        Espanhol: "Espanhol",
        Alemão: "Alemão",
        levels: {
          Nativo: "Nativo",
          "B2/C1": "B2/C1",
          B1: "B1",
          A1: "A1",
        },
      },
    },
    experience: {
      title: "Experiência Profissional",
      present: "Presente",
      goals: "Objetivos",
      challenges: "Desafios",
      technologies: "Tecnologias",
      jobs: {
        weg: {
          goals:
            "Desenvolvimento de sistema web para monitoramento e análise de trabalho de campo (ensaios de comissionamento de transformadores).",
          challenges:
            "Desenvolvimento de sistema web com Next.js, Ant Design, ContextAPI e RestAPI. Backend em Node.js com TypeScript, TypeORM e arquitetura próxima a DDD. Inclui rotinas com node-cron, envio de mensagens via RabbitMQ e banco PostgreSQL em Docker e Kubernetes.",
        },
        fundacao: {
          goals:
            "Desenvolvimento de site que recebe dados via RestAPI utilizando React.",
          challenges:
            "Desenvolver código de site com React, aplicando ferramentas como axios, ContextAPI, Redux (Ducks), GraphQL, Material UI. Acompanhar e criar tarefas no Redmine e realizar versionamento utilizando GitLab.",
        },
        axor: {
          goals:
            "Criação de dashboards em Power BI, organização de banco de dados e desenvolvimento de back-end.",
          challenges:
            "Apoiar na migração de banco de dados, construir um back-end usando Python, elaborar queries (SQL) para busca (SQL Server e Oracle), construir dashboards com Power-BI e React para BI, criar bots para automatizar tarefas com Python.",
        },
        adroit: {
          goals:
            "Desenvolvimento de site voltado para produtor rural de frutos cítricos que recebe dados via RestAPI utilizando React.",
          challenges:
            "Desenvolver código de site com React, aplicando ferramentas como axios, ContextAPI, Redux, React-query, Material UI. Acompanhar e criar tarefas utilizando a label issue do GitHub.",
        },
        mainz: {
          goals:
            "Geração e acompanhamento de dados em ambiente de pesquisa científica.",
          challenges:
            "Configuração do sistema de análise e processamento de dados experimentais no Instituto de Física.",
        },
      },
    },
    services: {
      title: "Serviços",
      subtitle: "Como posso ajudar seu projeto",
      getStarted: "Começar",
      service1: {
        title: "Desenvolvimento do Zero",
        description:
          "Criação completa de aplicações web modernas, desde o planejamento até o deploy.",
        features: [
          "Arquitetura escalável",
          "Design responsivo",
          "Integração de APIs",
          "Deploy e CI/CD",
        ],
      },
      service2: {
        title: "Apoio em Projetos",
        description:
          "Suporte técnico para projetos em andamento, otimização e resolução de problemas.",
        features: [
          "Code review",
          "Refatoração de código",
          "Otimização de performance",
          "Correção de bugs",
        ],
      },
      service3: {
        title: "Consultoria em IA",
        description:
          "Implementação de soluções de IA e automação para melhorar processos.",
        features: [
          "Integração de LLMs",
          "Automação de processos",
          "Análise de dados",
          "Chatbots inteligentes",
        ],
      },
    },
    contact: {
      title: "Entre em Contato",
      subtitle: "Vamos conversar sobre seu projeto",
      name: "Nome",
      email: "Email",
      subject: "Assunto",
      message: "Mensagem",
      send: "Enviar Mensagem",
      whatsapp: "Ou me chame no WhatsApp",
      success: "Mensagem enviada com sucesso!",
      error: "Erro ao enviar mensagem. Tente novamente.",
    },
    footer: {
      rights: "Todos os direitos reservados",
      builtWith: "Construído com",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      services: "Services",
      contact: "Contact",
    },
    home: {
      greeting: "Hi, I am",
      title: "Full Stack Developer",
      subtitle: "Building modern and scalable web experiences",
      description:
        "Full Stack Developer with over 5 years of experience in React, Node.js, TypeScript, Java, and Python. Specialized in creating robust web applications and intuitive user interfaces.",
      cta: "View Projects",
      contact: "Get in Touch",
      featuredProjects: "Featured Projects",
      viewOnGithub: "View on GitHub",
    },
    about: {
      title: "About Me",
      downloadCV: "Download Resume",
      education: "Education",
      languages: "Languages",
      skills: "Skills",
      bio: "I graduated as a full stack developer from Trybe. In all my professional experiences, I needed to generate and organize data, until the opportunity arose to deepen and specialize as a professional in the development and data science area. I am always looking to learn something new within the technology area and what stimulates me the most is to overcome the challenges that arise.",
      languagesList: {
        Português: "Portuguese",
        Inglês: "English",
        Espanhol: "Spanish",
        Alemão: "German",
        levels: {
          Nativo: "Native",
          "B2/C1": "B2/C1",
          B1: "B1",
          A1: "A1",
        },
      },
    },
    experience: {
      title: "Professional Experience",
      present: "Present",
      goals: "Goals",
      challenges: "Challenges",
      technologies: "Technologies",
      jobs: {
        weg: {
          goals:
            "Development of a web system for monitoring and analyzing field work (commissioning tests for transformers).",
          challenges:
            "Development of a web system using Next.js, Ant Design, ContextAPI, and RestAPI. Backend built with Node.js, TypeScript, and TypeORM, following a near-DDD architecture. Includes routines with node-cron, message dispatch via RabbitMQ, and a PostgreSQL database hosted on Docker and Kubernetes.",
        },
        fundacao: {
          goals:
            "Development of a website that receives data via RestAPI using React.",
          challenges:
            "Develop website code with React, applying tools such as axios, ContextAPI, Redux (Ducks), GraphQL, Material UI. Track and create tasks in Redmine and perform versioning using GitLab.",
        },
        axor: {
          goals:
            "Creation of dashboards in Power BI, database organization and back-end development.",
          challenges:
            "Support database migration, build a back-end using Python, create queries (SQL) for search (SQL Server and Oracle), build dashboards with Power-BI and React for BI, create bots to automate tasks with Python.",
        },
        adroit: {
          goals:
            "Development of a website for citrus fruit farmers that receives data via RestAPI using React.",
          challenges:
            "Develop website code with React, applying tools such as axios, ContextAPI, Redux, React-query, Material UI. Track and create tasks using GitHub's issue label.",
        },
        mainz: {
          goals:
            "Data generation and monitoring in a scientific research environment.",
          challenges:
            "Configuration of the analysis system and processing of experimental data at the Physics Institute.",
        },
      },
    },
    services: {
      title: "Services",
      subtitle: "How I can help your project",
      getStarted: "Get Started",
      service1: {
        title: "Development from Scratch",
        description:
          "Complete creation of modern web applications, from planning to deployment.",
        features: [
          "Scalable architecture",
          "Responsive design",
          "API integration",
          "Deploy and CI/CD",
        ],
      },
      service2: {
        title: "Project Support",
        description:
          "Technical support for ongoing projects, optimization and problem solving.",
        features: [
          "Code review",
          "Code refactoring",
          "Performance optimization",
          "Bug fixing",
        ],
      },
      service3: {
        title: "AI Consulting",
        description:
          "Implementation of AI solutions and automation to improve processes.",
        features: [
          "LLM integration",
          "Process automation",
          "Data analysis",
          "Intelligent chatbots",
        ],
      },
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Let's talk about your project",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
      whatsapp: "Or reach me on WhatsApp",
      success: "Message sent successfully!",
      error: "Error sending message. Please try again.",
    },
    footer: {
      rights: "All rights reserved",
      builtWith: "Built with",
    },
  },
};

export function getTranslation(locale: Locale, key: string): string {
  const keys = key.split(".");
  let value: any = translations[locale];

  for (const k of keys) {
    value = value?.[k];
  }

  return value || key;
}
