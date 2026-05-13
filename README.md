# TNEEMO Industries — Site Institucional

Site oficial da TNEEMO Industries. Engenharia industrial, chassis avançados e infraestrutura computacional. Mandaguari, PR, Brasil.

---

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | Next.js 16 (App Router) |
| Estilização | Tailwind CSS v4 |
| Tipografia | Geist Sans + Geist Mono (`next/font/google`) |
| Animações | Framer Motion |
| Ícones | Lucide React |
| Deploy | Vercel |
| Idioma | Português brasileiro |

---

## Estrutura de páginas

```
/                  → Homepage (Hero, Missão, Divisões, Manifesto)
/lab               → Diário Técnico — log de engenharia
/products          → Catálogo de produtos e serviços
/patents           → Propriedade intelectual (INPI)
/spec              → Documentação técnica pública
/dragonrealms      → Dragon Realms Network
```

---

## Desenvolvimento local

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

```bash
npm run build    # build de produção
npm run start    # servidor de produção local
```

---

## Estrutura do projeto

```
app/
├── globals.css          # Design system — @theme Tailwind v4
├── layout.tsx           # Root layout (NavBar, Footer, StatusBar)
├── page.tsx             # Homepage
├── lab/page.tsx
├── products/page.tsx
├── patents/page.tsx
├── spec/page.tsx        # Docs com sidebar (searchParams)
└── dragonrealms/page.tsx

components/
├── Logo.tsx             # SVG hexagonal + variante Dragon Realms
├── NavBar.tsx           # Sticky, mobile hamburger
├── Footer.tsx
├── StatusBar.tsx        # Barra de status fixa no bottom
└── ui/
    ├── SectionLabel.tsx
    └── StatusDot.tsx    # Dot animado (pulse-dot)
```

---

## Design system

Cores, tipografia e animações definidas via `@theme` em `app/globals.css`. Dark mode exclusivo — sem toggle.

```
--color-forged    #1A1A1A   preto industrial
--color-niobium   #888780   cinza metálico
--color-alloy     #F1EFE8   off-white
--color-bg        #0E0E0E   fundo principal
--color-uplink    #185FA5   azul de sistema ativo
--color-active    #3B6D11   verde operacional
--color-alert     #993C1D   vermelho de alerta
```

---

## Divisões

| Código | Nome | Área |
|--------|------|------|
| DIV-01 | FORJATEC | Chassis industriais Al-Nb |
| DIV-02 | SUBSTRATE | Ligas metálicas e materiais |
| DIV-03 | NCORE | Infraestrutura de rede |
| DIV-04 | AXIOM | Computação experimental e IA |
| DIV-05 | FIELD | Levantamento de campo e engenharia sob contrato |
| DIV-06 | DRAGON REALMS | Servidor de jogo de alta disponibilidade |

---

## Propriedade intelectual

**BR 10 2026 005717 7** — Chassis para Computação de Alta Densidade com Liga Al-Nb e Sistema Modular de Painéis em Trilhos (Forjatec Nióbio Edition). Status: em análise no INPI.

---

## Deploy

Configurado para Vercel (zero config com Next.js). Conecte o repositório em [vercel.com](https://vercel.com) e o deploy é automático a cada push na branch `main`.

---

*TNEEMO Industries · tneemo.com · EST. 2026*
