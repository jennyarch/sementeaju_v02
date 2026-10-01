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
- Carrossel automático no início, com setas, indicadores, botão de pausa e suporte a swipe
- Doação via Pix na seção de contribuição, com QR Code e cópia da chave para a área de transferência
- Formulário visual de contato
- Canais de contato diretos: e-mail e WhatsApp
- Redes sociais (Instagram, YouTube e WhatsApp) na seção de contato
- Créditos da desenvolvedora com LinkedIn e WhatsApp no rodapé
- Favicon, ícone para iOS e ícone vetorial
- Imagens do projeto e referências do site original
- Metadados básicos para SEO e idioma `pt-BR`

## Estrutura do projeto

```text
.
├── app/
│   ├── favicon.ico        # Ícone multi-resolução (16 a 256px) gerado a partir do ícone vetorial
│   ├── apple-icon.png     # Ícone 180x180 para adicionar à tela de início do iOS
│   ├── icon.svg           # Ícone vetorial (broto), usado por navegadores modernos
│   ├── globals.css        # Tokens de tema, estilos globais e utilitários visuais
│   ├── layout.tsx         # Layout raiz, metadados, viewport e Analytics
│   └── page.tsx           # Página institucional principal
├── components/
│   ├── brand-icons.tsx    # Ícones de marca em SVG (Instagram, YouTube, WhatsApp e LinkedIn)
│   ├── hero-carousel.tsx  # Carrossel do início com as imagens da galeria
│   ├── pix-donation.tsx   # QR Code do Pix e cópia da chave de doação
│   ├── site-header.tsx    # Cabeçalho, navegação, controle de tema e rodapé
│   ├── social-links.tsx   # Lista reutilizável de redes sociais
│   └── ui/
│       └── button.tsx     # Componente base de botão padronizado
├── lib/
│   └── utils.ts           # Utilitários compartilhados, incluindo cn()
├── public/assets/img/
│   ├── galeria/           # Imagens da galeria em WebP, otimizadas para a web
│   └── qrcode-pix-semente.png  # QR Code do Pix (PNG sem perdas)
├── components.json        # Configuração do shadcn/ui
├── next.config.mjs        # Configuração do Next.js
├── postcss.config.mjs     # Configuração do PostCSS/Tailwind
├── tsconfig.json          # Configuração do TypeScript
├── package.json           # Dependências e scripts do projeto
└── pnpm-lock.yaml         # Lockfile das dependências
```

## Imagens

As imagens originais do projeto são mantidas em `public/assets/img/`. As versões
usadas no site ficam em `public/assets/img/galeria/` no formato WebP, com no
máximo 2000px de largura, reduzindo o total de cerca de 104 MB para cerca de
1,2 MB.

O QR Code do Pix é um PNG sem compressão com perda, para que os módulos
permanecam nítidos e a leitura por qualquer aplicativo de banco continue
confiável.

Para gerar novas versões otimizadas a partir dos originais:

```bash
pnpm dlx sharp-cli@5 -i public/assets/img/semente1.png -o public/assets/img/galeria/semente-1.webp resize 2000 1400 --fit cover --position centre -q 78
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

Os textos institucionais são mantidos na página principal e organizados por seções. As imagens são carregadas de `public/assets/img/galeria/` pelo componente `components/hero-carousel.tsx`, que concentra a lista de slides e suas legendas.

## Contato e redes

Os canais de contato ficam em `components/social-links.tsx` e são usados na seção de contato. O crédito da desenvolvedora fica no rodapé, em `components/site-header.tsx`.

Os dados de doação via Pix ficam no topo de `components/pix-donation.tsx`, em um objeto único, com a chave, o nome do titular e o tipo de chave.

## Próximos passos sugeridos

- Conectar o formulário de contato a um serviço de envio de mensagens
- Adicionar páginas individuais para as reflexões
- Integrar a agenda com dados reais
- Adicionar testes automatizados para os fluxos interativos

## Licença

Projeto institucional da Semente Aju. O conteúdo textual, a identidade e as imagens devem ser utilizados conforme as permissões da organização.
