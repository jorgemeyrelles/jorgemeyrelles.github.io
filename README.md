# 👨‍💻 Jorge Meyrelles Jr. - Portfolio

[![Deploy to GitHub Pages](https://github.com/jorgemeyrelles/jorgemeyrelles.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/jorgemeyrelles/jorgemeyrelles.github.io/actions/workflows/deploy.yml)
[![Next.js](https://img.shields.io/badge/Next.js-15.x-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC)](https://tailwindcss.com/)

> Portfolio pessoal desenvolvido com Next.js, TypeScript e TailwindCSS, showcasing meus projetos e experiência como Desenvolvedor Full Stack.

🌐 **[Ver Portfolio Online](https://jorgemeyrelles.github.io)**

## 📝 **Sobre o Projeto**

Este é meu portfolio pessoal, uma aplicação web moderna e responsiva que apresenta:

- 🎯 **Seção Hero** - Apresentação pessoal com carrossel de fotos
- 🚀 **Projetos** - Showcase dos principais trabalhos e repositórios GitHub
- 💼 **Experiência** - Timeline profissional e skills técnicas
- 🛠️ **Serviços** - Competências e áreas de atuação
- 📞 **Contato** - Formulário integrado com EmailJS e WhatsApp
- 🌐 **Internacionalização** - Suporte a múltiplos idiomas
- 🎨 **Tema Dinâmico** - Light/Dark mode

## 🏗️ **Estrutura do Projeto**

```
jorgemeyrelles.github.io/
├── src/                          # Código fonte principal
│   ├── app/                      # Next.js App Router
│   │   ├── globals.css          # Estilos globais
│   │   ├── layout.tsx           # Layout principal
│   │   └── page.tsx             # Página inicial
│   ├── components/               # Componentes React
│   │   ├── ui/                  # Componentes base (shadcn/ui)
│   │   ├── about-section.tsx    # Seção sobre
│   │   ├── contact-section.tsx  # Formulário de contato
│   │   ├── hero-section.tsx     # Seção principal
│   │   ├── projects-section.tsx # Projetos
│   │   └── ...                  # Outros componentes
│   ├── contexts/                 # Context API
│   │   ├── locale-context.tsx   # Internacionalização
│   │   └── theme-context.tsx    # Tema dark/light
│   ├── hooks/                    # Custom Hooks
│   │   ├── use-emailjs.ts       # EmailJS para envio de emails
│   │   ├── use-resend.ts        # Resend API (alternativo)
│   │   └── use-toast.ts         # Sistema de notificações
│   ├── interfaces/               # TypeScript Interfaces
│   │   ├── contact.ts           # Tipos do formulário
│   │   ├── email.ts             # Tipos de email
│   │   ├── projects.ts          # Tipos de projetos
│   │   └── index.ts             # Barrel exports
│   └── lib/                      # Utilitários e configurações
│       ├── config.ts            # Configurações centralizadas
│       ├── data.ts              # Dados estáticos
│       └── utils.ts             # Funções utilitárias
├── public/                       # Arquivos estáticos
│   ├── images/                  # Imagens e fotos
│   └── .nojekyll               # Configuração GitHub Pages
├── .github/workflows/            # CI/CD GitHub Actions
│   └── deploy.yml              # Deploy automático
├── .env.local                   # Variáveis de ambiente
├── package.json                 # Dependências npm
├── tsconfig.json               # Configuração TypeScript
├── tailwind.config.ts          # Configuração TailwindCSS
└── next.config.mjs             # Configuração Next.js
```

## 🚀 **Tecnologias Utilizadas**

### **Frontend**

- ⚡ **Next.js 15** - React framework com App Router
- 🔷 **TypeScript** - Tipagem estática
- 🎨 **TailwindCSS** - Framework CSS utilitário
- 🧩 **shadcn/ui** - Biblioteca de componentes
- 🎭 **Framer Motion** - Animações
- 🌐 **React Hook Form** - Gerenciamento de formulários
- 📧 **EmailJS** - Envio de emails no frontend

### **Ferramentas & Deploy**

- 🐙 **GitHub Pages** - Hospedagem estática
- ⚙️ **GitHub Actions** - CI/CD automatizado
- 📱 **Responsive Design** - Mobile-first
- 🔍 **SEO Otimizado** - Meta tags e estrutura
- 🌙 **Dark Mode** - Tema escuro/claro

## 🛠️ **Instalação e Desenvolvimento**

### **Pré-requisitos**

- Node.js 18+
- npm ou yarn
- Git

### **Clonando o Repositório**

```bash
git clone https://github.com/jorgemeyrelles/jorgemeyrelles.github.io.git
cd jorgemeyrelles.github.io
```

### **Instalando Dependências**

```bash
npm install
# ou
yarn install
```

### **Configurando Variáveis de Ambiente**

Crie um arquivo `.env.local` na raiz do projeto:

```bash
# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL=seu@email.com
NEXT_PUBLIC_WHATSAPP_NUMBER=5521999999999

# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### **Executando em Desenvolvimento**

```bash
npm run dev
# ou
yarn dev
```

Acesse: http://localhost:3000

### **Build para Produção**

```bash
npm run build
# ou
yarn build
```

## 📧 **Configuração do EmailJS**

1. Crie uma conta em [EmailJS](https://www.emailjs.com/)
2. Configure um serviço de email (Gmail, Outlook, etc.)
3. Crie um template de email
4. Adicione as credenciais no `.env.local`

## 🚀 **Deploy**

O projeto está configurado para deploy automático no GitHub Pages:

1. **Push para a branch `master`**
2. **GitHub Actions** executa o build automaticamente
3. **Deploy** é feito para GitHub Pages

### **Deploy Manual**

```bash
npm run build
npx gh-pages -d out
```

## 🤝 **Contribuições**

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 **Licença**

Este projeto está sob a licença ISC. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 **Contato**

**Jorge Meyrelles Jr.**

- 🌐 Portfolio: [jorgemeyrelles.github.io](https://jorgemeyrelles.github.io)
- 📧 Email: jotaengpuc@gmail.com
- 💼 LinkedIn: [linkedin.com/in/jorgemeyrelles](https://linkedin.com/in/jorgemeyrelles)
- 🐙 GitHub: [github.com/jorgemeyrelles](https://github.com/jorgemeyrelles)
- 📱 WhatsApp: +55 21 99484-4035

---

⭐ **Se este projeto te ajudou, deixe uma estrela!** ⭐
