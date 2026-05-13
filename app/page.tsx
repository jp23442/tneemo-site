import { Logo } from "@/components/Logo";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Link from "next/link";

const divisions = [
  {
    code: "DIV-01",
    name: "FORJATEC",
    description:
      "Chassis industriais em liga Al-Nb. Sistema modular ATX-FTEC v3 com zonas funcionais definidas e rail system patenteado.",
    accent: false,
  },
  {
    code: "DIV-02",
    name: "SUBSTRATE",
    description:
      "Pesquisa e desenvolvimento de ligas metálicas avançadas. Propriedade intelectual em geometrias de estrutura e composição material.",
    accent: false,
  },
  {
    code: "DIV-03",
    name: "NCORE",
    description:
      "Infraestrutura computacional de rede. Stack GLPI + Zabbix + LibreNMS + PFSense. Deploy automatizado e documentação inclusa.",
    accent: false,
  },
  {
    code: "DIV-04",
    name: "AXIOM",
    description:
      "Computação experimental e inferência local. Pesquisa em LLMs de borda, benchmarks estruturados e metodologia de avaliação.",
    accent: false,
  },
  {
    code: "DIV-05",
    name: "FIELD",
    description:
      "Levantamento técnico de campo. Inventário de ativos distribuídos, engenharia sob contrato e procurement público (Lei 14.133/2021).",
    accent: false,
  },
  {
    code: "DIV-06",
    name: "DRAGON REALMS",
    description:
      "Infraestrutura de jogo de alta disponibilidade. Servidor Minecraft operado como produto de engenharia — Paper + Velocity em Docker.",
    accent: true,
  },
];

const manifesto = [
  {
    numeral: "I",
    text: "A engenharia não começa na solução. Começa na recusa de aceitar a restrição como definitiva.",
  },
  {
    numeral: "II",
    text: "Especificações são contratos. Tolerâncias são decisões. Materiais são compromissos. Nada é arbitrário.",
  },
  {
    numeral: "III",
    text: "Documentação não é burocracia — é o único artefato que sobrevive ao criador do projeto.",
  },
  {
    numeral: "IV",
    text: "Um sistema mal feito que funciona hoje é uma dívida com juros compostos. O custo total de propriedade sempre vence.",
  },
  {
    numeral: "V",
    text: "Durabilidade não é robustez excessiva. É dimensionamento preciso para a vida útil pretendida.",
  },
  {
    numeral: "VI",
    text: "Infraestrutura invisível é infraestrutura bem feita. Visível demais é sinal de alarme — ou de vaidade de design.",
  },
  {
    numeral: "VII",
    text: "O mercado otimiza para custo de produção. Nós otimizamos para custo total de propriedade.",
  },
  {
    numeral: "VIII",
    text: "Manutenibilidade é um requisito funcional, não um desejo de design. Se não for possível consertar, não está pronto.",
  },
];

const values = [
  "DURABILIDADE ANTES DE ELEGÂNCIA",
  "ESPECIFICAÇÃO ANTES DE PROMESSA",
  "DOCUMENTAÇÃO COMO PRODUTO",
  "MANUTENIBILIDADE COMO REQUISITO",
];

export default function HomePage() {
  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-5 pt-24 pb-20">
        <div className="flex flex-col items-center text-center">
          <Logo size={56} className="text-alloy mb-8" />
          <h1 className="font-sans font-medium text-5xl sm:text-6xl tracking-[0.2em] uppercase text-alloy mb-4">
            TNEEMO INDUSTRIES
          </h1>
          <p className="font-sans text-base text-niobium tracking-[0.02em]">
            Engenharia onde começa o impossível.
          </p>
          <div className="w-full border-t border-white/8 mt-10 pt-6 flex flex-col sm:flex-row justify-between gap-2">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-text-3">
              MANDAGUARI · PR · BRASIL
            </span>
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-text-3">
              EST. 2026
            </span>
          </div>
        </div>
      </section>

      {/* Missão */}
      <section className="max-w-6xl mx-auto px-5 py-16 border-t border-white/8">
        <SectionLabel index="01" label="MISSÃO" />
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start">
          <div>
            <p className="text-[18px] leading-[1.8] text-alloy/90 max-w-2xl">
              A TNEEMO não nasce de um plano de negócios.
              Nasce de um acúmulo de problemas sem solução pronta no mercado —
              e da convicção de que sistemas mal feitos são mais caros no longo prazo
              do que construir algo certo desde o início.
            </p>
            <p className="text-[18px] leading-[1.8] text-alloy/90 max-w-2xl mt-4">
              Projetamos e fabricamos infraestrutura, chassis e sistemas computacionais
              que operam além dos limites do que o mercado considera conveniente construir.
              Cada decisão técnica é documentada, testada e defendida.
            </p>
          </div>
          <div className="flex flex-col gap-0 min-w-[220px]">
            {values.map((value, i) => (
              <div key={value}>
                {i > 0 && <div className="h-px bg-white/8 my-3" />}
                <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-niobium">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisões */}
      <section className="max-w-6xl mx-auto px-5 py-16 border-t border-white/8">
        <SectionLabel index="02" label="DIVISÕES" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {divisions.map((div) => (
            <div
              key={div.code}
              className={`bg-bg-2 border rounded-lg p-5 hover:border-white/16 transition-colors ${
                div.accent ? "border-uplink/30 hover:border-uplink/50" : "border-white/8"
              }`}
            >
              <span
                className={`font-mono text-[10px] tracking-widest uppercase mb-3 block ${
                  div.accent ? "text-uplink/70" : "text-niobium/60"
                }`}
              >
                {div.code}
              </span>
              <h3
                className={`font-sans font-medium text-sm tracking-[0.12em] uppercase mb-2 ${
                  div.accent ? "text-blue-300" : "text-alloy"
                }`}
              >
                {div.name}
              </h3>
              <div className="h-px bg-white/8 mb-3" />
              <p className="font-sans text-[14px] leading-[1.7] text-niobium">
                {div.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Manifesto */}
      <section className="max-w-6xl mx-auto px-5 py-16 border-t border-white/8">
        <SectionLabel index="03" label="MANIFESTO TÉCNICO" />
        <div className="flex flex-col">
          {manifesto.map((item, i) => (
            <div key={item.numeral}>
              {i > 0 && <div className="h-px bg-white/8" />}
              <div className="flex gap-6 py-5">
                <span className="font-mono text-[12px] text-text-3 w-6 shrink-0 pt-0.5">
                  {item.numeral}.
                </span>
                <p className="text-[15px] leading-[1.8] text-alloy/80">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="max-w-6xl mx-auto px-5 py-16 border-t border-white/8">
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/products"
            className="border border-white/20 px-5 py-2.5 text-sm font-mono tracking-widest uppercase hover:bg-white/5 transition-colors text-alloy"
          >
            VER PRODUTOS →
          </Link>
          <Link
            href="/patents"
            className="border border-white/20 px-5 py-2.5 text-sm font-mono tracking-widest uppercase hover:bg-white/5 transition-colors text-alloy"
          >
            PROPRIEDADE INTELECTUAL →
          </Link>
          <Link
            href="/lab"
            className="border border-white/20 px-5 py-2.5 text-sm font-mono tracking-widest uppercase hover:bg-white/5 transition-colors text-alloy"
          >
            DIÁRIO TÉCNICO →
          </Link>
        </div>
      </section>
    </div>
  );
}
