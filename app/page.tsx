import Image from "next/image";
import {
  ArrowUpRight,
  BookOpen,
  Heart,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Users,
} from "lucide-react";
import { Footer, SiteHeader } from "@/components/site-header";

const values = [
  "Jesus Cristo de Nazaré, através do seu testemunho que chegou até nós, por meio dos relatos bíblicos, como suprema autoridade em matéria de fé e conduta;",
  "Defesa da dignidade de todas as pessoas;",
  "Cuidado com a Criação, revelada na atuação local;",
  "Liberdade e autonomia do Ser Humano na interpretação das Escrituras e no relacionamento com o Divino;",
  "Autonomia da igreja local para organizar sua vida e missão;",
  "Defesa da liberdade de crença e de expressão de fé para todas as pessoas e todos os credos;",
  "Separação institucional entre Igreja e Estado.",
];

const reflections = [
  [
    "Individualismo cristão: morte do cristianismo",
    "Cresce cada vez mais o individualismo cristão: é cada um por si e Deus por todos. Seria correta essa visão do cristianismo? Seria cristã essa conduta?",
  ],
  [
    "Apologética de uma existência comunitária desviante",
    "É nos vãos, nas brechas que o ministério e vocação de Paulo são delineados. Paulo não conviveu com Cristo, como os doze.",
  ],
  [
    "Carta Pastoral em alusão ao Dia do Orgulho LGBTQIA+",
    "Queridos/as/es irmãos/ãs/nes, muito nos alegra escrever esta carta pastoral em um dia tão importante para a comunidade LGBTQIA+.",
  ],
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section
          id="inicio"
          className="relative overflow-hidden border-b border-border bg-surface"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:py-14">
            <div className="order-2 lg:order-1">
              <p className="eyebrow">
                <Leaf className="size-4" /> Igreja Batista Semente
              </p>
              <h1 className="mt-5 max-w-xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] text-foreground sm:text-7xl">
                Uma igreja feita de <span className="text-primary">gente.</span>
              </h1>
              <p className="mt-7 max-w-lg text-lg leading-8 text-muted-foreground">
                Um espaço de fé, acolhimento, diversidade e compromisso com a
                vida. Venha ser igreja com a gente.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#sobre" className="button-primary">
                  Conheça A Semente <ArrowUpRight className="size-4" />
                </a>
                <a href="#contato" className="button-secondary">
                  Fale conosco
                </a>
              </div>
            </div>
            <div className="relative order-1 aspect-[16/10] overflow-hidden rounded-[1.5rem] lg:order-2 lg:aspect-[4/3]">
              <Image
                src="https://hom-semente.netlify.app/assets/img/carrossel/semente3.png"
                alt="Imagem da nossa semente"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4f2029]/55 to-transparent" />
              <p className="absolute bottom-5 left-5 text-sm font-medium text-white">
                Uma comunidade que celebra a vida
              </p>
            </div>
          </div>
        </section>
        <section
          id="sobre"
          className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
        >
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="eyebrow">A Semente</p>
              <h2 className="section-title">
                Ser igreja é caminhar em comunidade.
              </h2>
            </div>
            <article className="space-y-6 text-base leading-8 text-muted-foreground">
              <p>
                A palavra grega <em>ekklesia</em> aparece pouco mais de cem
                vezes no novo testamento, sendo o livro dos Atos dos Apóstolos o
                livro que mais utiliza essa expressão. Ela significa
                literalmente <strong>assembleia, convocada, escolhida.</strong>{" "}
                Interpretando de maneira mais simples, a igreja aponta para o
                povo chamado por Deus para viver e anunciar o Reino de Deus.
              </p>
              <p>
                A Semente quando se reúne para celebrar a Deus Pai/Mãe, servir
                ao próximo e anunciar a graça incondicional através da morte e
                ressurreição de Jesus está assumindo o seu papel de
                igreja/ekklesia, como agente em prol do Reino de Deus que foi
                inaugurado com a vinda do carpinteiro de Nazaré.
              </p>
              <p>
                Somos igreja de Jesus em sua <em>multidiversidade</em>. Se
                olharmos atentamente por alguns minutos para os Evangelhos
                (Mateus, Marcos, Lucas e João), cada um foi escrito por muitas
                mãos, com suas próprias experiências de fé e com o propósito de
                comunicar de maneira particular às suas respectivas comunidades.
                Depois, voltemo-nos para o ministério de Paulo, o apóstolo, e
                suas viagens missionárias que mostravam a diversidade das
                primeiras comunidades cristãs. Tudo isso nos dá margem para
                dizer que a igreja do Senhor é formada na e pela diversidade.
                Como Corpo de Jesus que reúne membros com características
                diferentes, a Semente afirma todas as pessoas como beneficiárias
                legítimas da multiforme graça de Deus (1Pe. 4:10), independente
                de sua cor/raça/etnia, identidade de gênero, orientação sexual,
                classe, origem geográfica etc.
              </p>
              <p>
                Somos igreja para além das quatro paredes da instituição. Ela é
                rede de relações e apoio, de afetos construídos e alimentados
                pela presença inspiradora do Espírito Santo, a Ruah Divina. É
                espaço para ouvir e conhecer histórias de vida.
              </p>
              <p className="font-semibold text-primary">
                Você se sente chamada/a/e para viver a mensagem do Reino de Deus
                trazida por Jesus? Venha SER IGREJA com a gente!
              </p>
            </article>
          </div>
        </section>
        <section id="missao" className="bg-surface-soft">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <p className="eyebrow">Nossa identidade</p>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <article className="info-card">
                <Heart className="icon-accent" />
                <h3>Missão</h3>
                <p>
                  Anunciar as boas novas do Jesus preto, pobre e periférico de
                  Nazaré, reafirmando todas as possibilidades de vida e
                  existência, estimulando a reconciliação das pessoas entre si,
                  destas com o seu Criador e com o meio ambiente onde vivem,
                  sendo uma igreja batista, afirmativa, acolhedora e ecumênica.
                </p>
              </article>
              <article className="info-card">
                <MapPin className="icon-accent" />
                <h3>Visão</h3>
                <p>
                  Ser em Aracaju um sinal histórico do Reino de Deus, cuidando e
                  defendendo a Criação, a dignidade de todas as pessoas e
                  testemunhando o Evangelho de Jesus Cristo que é amor, justiça
                  e paz.
                </p>
              </article>
              <article className="info-card">
                <Users className="icon-accent" />
                <h3>Valores</h3>
                <ul className="space-y-2">
                  {values.map((value) => (
                    <li key={value}>• {value}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>
        <section
          id="agenda"
          className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
        >
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Caminhos de encontro</p>
              <h2 className="section-title">Agenda</h2>
            </div>
            <BookOpen className="hidden size-10 text-accent sm:block" />
          </div>
          <div className="mt-10 rounded-2xl border border-border bg-card p-8 text-muted-foreground">
            <p className="text-lg text-foreground">
              Em breve, novos encontros da Semente.
            </p>
            <p className="mt-2">
              Acompanhe nossas redes sociais para saber das próximas
              celebrações, rodas de conversa e atividades.
            </p>
          </div>
        </section>
        <section id="contribua" className="bg-primary text-primary-foreground">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
            <div>
              <p className="eyebrow text-primary-foreground/70">
                Seja generoso
              </p>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight">
                Nossa contribuição para a construção do Reino de Deus deve ser
                integral.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-primary-foreground/80">
                Nossa contribuição para a construção do Reino de Deus deve ser
                integral, ou seja, ela envolve a nossa vida, tempo, orações e
                recursos. Tudo isso é indispensável para que possamos servir às
                pessoas. Sabemos que parte desse serviço envolve a contribuição
                financeira de todos aqueles e aquelas que direta ou
                indiretamente são abençoados(as) pela Semente. Convidamos você a
                exercitar sua generosidade apoiando nossa igreja (2Co 9,7).
              </p>
            </div>
            <a href="#contato" className="button-light">
              Veja como contribuir <ArrowUpRight className="size-4" />
            </a>
          </div>
        </section>
        <section
          id="reflexoes"
          className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
        >
          <p className="eyebrow">Pensar e praticar</p>
          <h2 className="section-title">Reflexões</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {reflections.map(([title, text]) => (
              <article key={title} className="info-card">
                <h3>{title}</h3>
                <p>{text}...</p>
                <a
                  href="#contato"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Ver mais <ArrowUpRight className="size-4" />
                </a>
              </article>
            ))}
          </div>
        </section>
        <section id="contato" className="bg-surface-soft">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-28">
            <div>
              <p className="eyebrow">Vamos conversar</p>
              <h2 className="section-title">Contato</h2>
              <p className="mt-5 max-w-sm leading-7 text-muted-foreground">
                Estamos disponíveis para ouvir você, acolher sua história e
                construir caminhos juntos.
              </p>
              <p className="mt-8 flex items-center gap-2 font-medium text-primary">
                <Mail className="size-4" /> sementearacaju@gmail.com
              </p>
            </div>
            <form className="grid gap-4">
              <input
                className="field"
                placeholder="Seu nome"
                aria-label="Seu nome"
              />
              <input
                className="field"
                type="email"
                placeholder="Seu e-mail"
                aria-label="Seu e-mail"
              />
              <textarea
                className="field min-h-36 resize-y"
                placeholder="Digite algo..."
                aria-label="Digite algo..."
              />
              <button className="button-primary w-fit" type="button">
                Enviar <ArrowUpRight className="size-4" />
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export const metadata = {
  title: "Semente | Igreja Batista em Aracaju",
  description: "Uma igreja batista, afirmativa, acolhedora e ecumênica.",
};
