# CloudVops

> **Site institucional da CloudVops — Especialistas em DevOps, CI/CD, Kubernetes e Terraform.**
> Acelere seus deploys e escale com confiança. Transforme sua infraestrutura com automação inteligente, pipelines eficientes e arquitetura cloud escalável.

Este é o site institucional (landing page) da **CloudVops**, desenvolvido com **React**, **TypeScript**, **Vite**, **TailwindCSS** e **Shadcn/UI**. A página apresenta os serviços DevOps da empresa, processo de trabalho, benefícios, informações sobre a empresa e um formulário de contato.

## 🌐 Sobre o site

A landing page é uma **Single Page Application (SPA)** composta por uma página principal (`/`) com diversas seções ancoradas, além de uma página 404 para rotas inválidas:

- **Hero** — Apresentação principal com chamada para ação e estatísticas (90% redução de deploy, 99.9% uptime, 50+ projetos, 24/7 suporte).
- **Serviços** — Cards com os serviços DevOps oferecidos: CI/CD & Pipelines, Kubernetes, Terraform & IaC, Cloud Architecture, Monitoring & Observability, e Security & DevSecOps.
- **Processo** — Metodologia em 4 etapas: Análise → Planejamento → Implementação → Monitoramento.
- **Benefícios** — Resultados comprovados com métricas (90% mais rápido, 99.9% uptime, 10x capacidade, 40% economia).
- **Sobre** — Estatísticas da empresa e grade de tecnologias dominadas (AWS, Azure, GCP, Kubernetes, Docker, Terraform, GitLab CI, GitHub Actions, Jenkins, Prometheus, Grafana, ArgoCD).
- **Contato** — Formulário para orçamento com seleção de serviço de interesse, informações de contato (telefone e localização) e diferenciais da empresa.
- **Footer** — Links de navegação, redes sociais, informações de contato e copyright.

O site conta com **navegação suave entre seções**, **menu responsivo** (mobile/desktop), **animações CSS** (fade-up, float) e **efeitos de glassmorphism** com gradientes.

## ✨ Tecnologias

- ⚛️ **React 18** + **TypeScript**
- ⚡ **Vite** — build tool e dev server
- 🎨 **TailwindCSS** + **Shadcn/UI** — estilização e componentes acessíveis
- 🧭 **React Router DOM** — roteamento SPA
- 🖼️ **Lucide React** — biblioteca de ícones
- 🎭 **Class Variance Authority** — variantes de componentes
- 🔍 **ESLint** + **Prettier** — qualidade de código
- 📦 **pnpm** — gerenciador de pacotes
- 🎯 **TanStack Query** — gerenciamento de estado servidor (configurado no provider)
- 📝 **React Hook Form** + **Zod** — formulários e validação
- 🎨 **Sonner** — notificações toast

## 💻 IDE recomendada

[**VSCode**](https://code.visualstudio.com/) com as extensões:
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## 🚀 Setup do projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) 18+ (recomendado LTS)
- [pnpm](https://pnpm.io/) (ou npm/yarn)

### Instalação

```bash
# Com pnpm (recomendado)
$ pnpm install

# Com npm
$ npm install

# Com yarn
$ yarn install
```

### Desenvolvimento

```bash
# pnpm
$ pnpm dev

# npm
$ npm run dev
```

A aplicação será iniciada em `http://localhost:5173` (porta padrão do Vite).

### Build de produção

```bash
# pnpm
$ pnpm build

# npm
$ npm run build
```

O build gera os arquivos estáticos otimizados em `dist/`.

### Build em modo desenvolvimento

```bash
$ pnpm build:dev
```

### Preview do build

```bash
$ pnpm preview
```

### Lint

```bash
$ pnpm lint
```

## 📂 Estrutura do projeto

```
cloudvops/
├── public/                 # Arquivos estáticos
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── assets/             # Imagens e mídias
│   ├── components/         # Componentes da landing page
│   │   ├── ui/             # Componentes Shadcn/UI (Button, Input, Card, etc.)
│   │   ├── About.tsx       # Seção "Sobre"
│   │   ├── Benefits.tsx    # Seção "Benefícios"
│   │   ├── Contact.tsx     # Seção "Contato" com formulário
│   │   ├── Footer.tsx      # Rodapé
│   │   ├── Hero.tsx        # Seção principal (hero)
│   │   ├── Navbar.tsx      # Barra de navegação
│   │   ├── NavLink.tsx     # Link de navegação
│   │   ├── Process.tsx     # Seção "Processo"
│   │   └── Services.tsx    # Seção "Serviços"
│   ├── hooks/              # Custom React hooks (use-toast, etc.)
│   ├── lib/                # Utilitários e helpers
│   ├── pages/              # Páginas (rotas)
│   │   ├── Index.tsx       # Página principal (landing)
│   │   └── NotFound.tsx    # Página 404
│   ├── App.tsx             # Componente raiz com providers e rotas
│   ├── index.css           # Estilos globais e tema
│   └── main.tsx            # Entry point
├── components.json         # Configuração do Shadcn/UI
├── tailwind.config.ts      # Configuração do TailwindCSS
├── postcss.config.js       # Configuração do PostCSS
├── vite.config.ts          # Configuração do Vite
├── tsconfig.json           # Configuração do TypeScript
├── eslint.config.js        # Configuração do ESLint
└── package.json
```

## 🗺️ Rotas

| Rota | Descrição |
|------|-----------|
| `/`   | Landing page principal com todas as seções |
| `*`   | Página 404 (Not Found) |

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

<p align="center">Feito com 💙 pela equipe CloudVops</p>
