import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LAB · Diário Técnico — TNEEMO Industries",
  description:
    "Registros de pesquisa, protótipos e decisões de engenharia da TNEEMO Industries.",
};

type EntryStatus = "EM TESTE" | "ABERTO" | "CONCLUÍDO";

const statusColor: Record<EntryStatus, string> = {
  "EM TESTE": "text-uplink",
  "ABERTO": "text-alert",
  "CONCLUÍDO": "text-active",
};

const entries = [
  {
    date: "2026-05-01",
    division: "FORJATEC",
    status: "EM TESTE" as EntryStatus,
    title: "Primeira análise de deflexão do rail system ATX-FTEC v3",
    summary:
      "Teste de carga de 50N no pino de retenção ø4mm. Deflexão medida: 0.18mm. Dentro da especificação máxima de 0.2mm. Próximo passo: teste com EPDM e variação de temperatura.",
    slug: "deflexao-rail-atx-ftec-v3",
  },
  {
    date: "2026-04-20",
    division: "SUBSTRATE",
    status: "ABERTO" as EntryStatus,
    title: "Revisão de reivindicações da patente BR 10 2026 005717 7",
    summary:
      "Escopo das reivindicações de liga Al-Nb revisado para evitar overclaiming em propriedades mecânicas sem validação experimental. Foco mantido na geometria do sistema modular.",
    slug: "revisao-reivindicacoes-patente",
  },
  {
    date: "2026-04-08",
    division: "NCORE",
    status: "CONCLUÍDO" as EntryStatus,
    title: "Deploy de Velocity + Paper em Docker no Bolsotron",
    summary:
      "Stack Dragon Realms operacional. Latência de conexão média: 12ms local, 38ms região Sul. Próxima fase: load balancing multi-nó.",
    slug: "deploy-velocity-paper-docker",
  },
  {
    date: "2026-03-15",
    division: "AXIOM",
    status: "ABERTO" as EntryStatus,
    title: "Benchmarks preliminares — LOMBOTRON vs inferência remota",
    summary:
      "60 turnos comparativos. LOMBOTRON (Qwen 3.5 9B / RTX 3090) registrou resultado superior em 60/60 casos em tarefas de decisão estruturada. Metodologia de seleção de subproblema documentada.",
    slug: "benchmarks-lombotron",
  },
];

export default function LabPage() {
  return (
    <div className="max-w-6xl mx-auto px-5 pt-14 pb-24">
      {/* Header */}
      <div className="py-12 border-b border-white/8 mb-12">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-niobium">
            [ ATUALIZAÇÃO ASSÍNCRONA ]
          </span>
        </div>
        <h1 className="font-sans font-medium text-3xl sm:text-4xl tracking-[0.12em] uppercase text-alloy mb-3">
          LAB · DIÁRIO TÉCNICO
        </h1>
        <p className="font-sans text-[15px] text-niobium leading-[1.7]">
          Registros de pesquisa, protótipos e decisões de engenharia.
        </p>
      </div>

      <SectionLabel index="LOG" label="ENTRADAS" />

      {/* Entries */}
      <div className="flex flex-col gap-0">
        {entries.map((entry, i) => (
          <div key={entry.slug}>
            {i > 0 && <div className="h-px bg-white/8" />}
            <article className="bg-bg-2 border border-white/8 rounded-lg p-6 my-3 hover:border-white/14 transition-colors">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4">
                <span className="font-mono text-[11px] text-text-3">{entry.date}</span>
                <span className="font-mono text-[10px] tracking-widest uppercase text-niobium/60">
                  {entry.division}
                </span>
                <span
                  className={`font-mono text-[10px] tracking-widest uppercase ${statusColor[entry.status]}`}
                >
                  {entry.status}
                </span>
              </div>
              <h2 className="font-sans font-medium text-[17px] tracking-[0.03em] text-alloy mb-3">
                {entry.title}
              </h2>
              <p className="font-sans text-[14px] leading-[1.7] text-niobium mb-4">
                {entry.summary}
              </p>
              <button className="font-mono text-[11px] tracking-[0.2em] uppercase text-text-3 hover:text-niobium transition-colors">
                → LER ENTRADA COMPLETA
              </button>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}
