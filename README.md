# Semente Aju

Site institucional da Igreja Batista Semente, em Aracaju. O projeto apresenta a identidade, a missão, os valores, a agenda, as reflexões e os canais de contato da comunidade.

## Objetivo

Criar uma presença digital acolhedora, acessível e responsiva para a Semente, mantendo os textos e referências visuais do site original e organizando a experiência em uma interface moderna.

## Tecnologias

- **Next.js 16** com App Router
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **shadcn/ui** para padronização de componentes
- **Lucide React** para ícones
- **Vercel Analytics** em produção
- **pnpm** como gerenciador de pacotes

## Funcionalidades

- Página institucional de seção única
- Navegação por âncoras entre as seções
- Layout responsivo para desktop, tablet e celular
- Tema claro como padrão
- Suporte a tema escuro com controle no cabeçalho
- Seções de início, sobre, missão, visão, valores, agenda, contribuição, reflexões e contato
- Formulário visual de contato
- Imagens do projeto e referências do site original
- Metadados básicos para SEO e idioma `pt-BR`

## Estrutura do projeto

```text
.
├── app/
│   ├── globals.css       # Tokens de tema, estilos globais e utilitários visuais
│   ├── layout.tsx        # Layout raiz, metadados, viewport e Analytics
│   └── page.tsx          # Página institucional principal
├── components/
│   ├── site-header.tsx   # Cabeçalho, navegação, controle de tema e rodapé
│   └── ui/
│       └── button.tsx    # Componente base de botão padronizado
├── lib/
│   └── utils.ts          # Utilitários compartilhados, incluindo cn()
├── public/               # Arquivos públicos e imagens estáticas, quando aplicável
├── components.json       # Configuração do shadcn/ui
├── next.config.mjs       # Configuração do Next.js
├── postcss.config.mjs   # Configuração do PostCSS/Tailwind
├── tsconfig.json         # Configuração do TypeScript
├── package.json          # Dependências e scripts do projeto
└── pnpm-lock.yaml        # Lockfile das dependências
```

## Como executar

Instale as dependências:

```bash
pnpm install
```

Inicie o servidor de desenvolvimento:

```bash
pnpm dev
```

O site ficará disponível em `http://localhost:3000`.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `pnpm dev` | Inicia o servidor de desenvolvimento |
| `pnpm build` | Gera a build de produção |
| `pnpm start` | Inicia a aplicação em modo de produção |

## Identidade visual

A interface preserva a paleta principal do projeto original, com tons terrosos, vinho, verde e neutros quentes. Os tokens de cor estão centralizados em `app/globals.css`, facilitando ajustes futuros e a manutenção consistente dos temas claro e escuro.

A tipografia, o espaçamento, os cartões e os botões foram organizados para manter uma linguagem visual simples, humana e acolhedora, alinhada à proposta da comunidade.

## Conteúdo e imagens

Os textos institucionais são mantidos na página principal e organizados por seções. As imagens podem ser atualizadas em `app/page.tsx` ou movidas para `public/` quando forem incorporadas como arquivos locais.

## Próximos passos sugeridos

- Conectar o formulário de contato a um serviço de envio de mensagens
- Substituir URLs externas de imagens por arquivos otimizados em `public/`
- Adicionar páginas individuais para as reflexões
- Integrar a agenda com dados reais
- Adicionar testes automatizados para os fluxos interativos

## Licença

Projeto institucional da Semente Aju. O conteúdo textual, a identidade e as imagens devem ser utilizados conforme as permissões da organização.
