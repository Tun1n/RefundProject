# Refund Web 💸

O **Refund Web** é um projeto de estudo sobre uma plataforma moderna e responsiva desenvolvida para simplificar e organizar o fluxo de solicitações e aprovações de reembolsos corporativos. O sistema atende a duas principais personas (colaboradores e gestores)

---

## 🚀 Funcionalidades

### 👤 Perfis de Acesso
- **Colaborador (Employee):**
  - Solicitação de reembolsos preenchendo o nome da despesa, valor e categoria.
  - Upload de comprovantes/recibos de pagamento de forma simples.
- **Gestor (Manager):**
  - Painel de controle (Dashboard) com todas as solicitações registradas.
  - Barra de pesquisa para filtrar solicitações pelo nome do colaborador.
  - Paginação inteligente para controle eficiente de grandes volumes de dados.

### 💼 Detalhes de Despesas
Categorização automática com suporte a ícones específicos para:
- 🚗 Transporte
- 🍔 Alimentação
- 🏨 Hospedagem
- 🛠️ Serviços
- ➕ Outros

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as tecnologias mais modernas do ecossistema front-end:

- **[React 19](https://react.dev/):** Biblioteca para construção de interfaces dinâmicas e baseadas em componentes.
- **[TypeScript](https://www.typescriptlang.org/):** Tipagem estática para maior segurança e produtividade no desenvolvimento.
- **[Vite](https://vite.dev/):** Ferramenta de build extremamente rápida para o ecossistema web moderna.
- **[Tailwind CSS v4](https://tailwindcss.com/):** Framework utilitário de CSS de alta performance com o novo plugin `@tailwindcss/vite`.
- **[React Router v8](https://reactrouter.com/):** Gerenciamento de rotas e navegação declarativa da aplicação.
- **[clsx](https://github.com/lukeed/clsx) & [tailwind-merge](https://github.com/dcastil/tailwind-merge):** Combinação e fusão eficiente de classes do Tailwind CSS de forma condicional.

---

## 📁 Estrutura de Pastas

A estrutura do projeto está organizada de forma modular e escalável:

```text
src/
├── assets/         # Recursos estáticos (Logos, Ícones SVG)
├── components/     # Componentes reutilizáveis (Button, Input, Header, Upload, etc.)
├── pages/          # Páginas da aplicação (Dashboard, Refund, SignIn, SignUp, etc.)
├── routes/         # Configurações de rotas e separação de rotas por perfis (Auth, Employee, Manager)
└── utils/          # Funções utilitárias (Formatação de moeda, categorias de reembolso, etc.)
```

---

## 💻 Como Executar o Projeto

Siga os passos abaixo para rodar a aplicação localmente no seu computador.

### Pré-requisitos
Certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- Gerenciador de pacotes (npm, yarn, pnpm ou bun)

### Passo a Passo

1. **Clonar o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd refund2/web
   ```

2. **Instalar as dependências:**
   ```bash
   npm install
   ```

3. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   *O servidor será iniciado por padrão em `http://localhost:5173/`.*

4. **Gerar a build de produção:**
   ```bash
   npm run build
   ```

5. **Executar o Linter (Análise estática de código):**
   ```bash
   npm run lint
   ```

---
