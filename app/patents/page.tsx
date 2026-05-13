import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Propriedade Intelectual — TNEEMO Industries",
  description:
    "Patentes e propriedade intelectual da TNEEMO Industries. Chassis Nióbio-E1 com liga Al-Nb e sistema modular ATX-FTEC.",
};

const claims = [
  "Sistema de trilhos com pino de retenção ø4mm e deflexão máxima ≤0.2mm a 50N",
  "PSU em suporte deslizante com curso controlado",
  "Bracket térmico de CPU com vedação EPDM anti-rattle",
  "Painel frontal modular intercambiável por zona funcional",
  "Geometria geral da estrutura em 8 zonas",
];

const planned = [
  {
    code: "HORIZON-2027",
    title: "Sistema de dissipação térmica integrado ao rail system ATX-FTEC",
  },
  {
    code: "HORIZON-2028",
    title: "Estrutura de cooling para rack de borda sem AC dedicado",
  },
];

export default function PatentsPage() {
  return (
    <div className="max-w-6xl mx-auto px-5 pt-14 pb-24">
      {/* Header */}
      <div className="py-12 border-b border-white/8 mb-12">
        <h1 className="font-sans font-medium text-3xl sm:text-4xl tracking-[0.12em] uppercase text-alloy mb-3">
          PROPRIEDADE INTELECTUAL
        </h1>
        <p className="font-sans text-[15px] text-niobium">
          Registro e proteção de inovações técnicas desenvolvidas pela TNEEMO Industries.
        </p>
      </div>

      {/* Active patent */}
      <SectionLabel index="IP-01" label="PATENTE ATIVA" />

      <div className="bg-bg-2 border border-white/8 rounded-lg overflow-hidden mb-12">
        {/* Status banner */}
        <div className="px-6 py-3 border-b border-white/8 flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-niobium/60">
            DIV-01 · FORJATEC
          </span>
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-uplink">
            [ EM ANÁLISE · INPI ]
          </span>
        </div>

        {/* Patent data */}
        <div className="px-6 py-6">
          <h2 className="font-sans font-medium text-[17px] tracking-[0.05em] text-alloy mb-6 leading-[1.5]">
            Chassis para Computação de Alta Densidade com Liga Al-Nb e Sistema Modular
            de Painéis em Trilhos (Forjatec Nióbio Edition)
          </h2>

          <div className="grid sm:grid-cols-2 gap-0">
            {[
              { label: "PROTOCOLO", value: "870260022275" },
              { label: "INPI", value: "BR 10 2026 005717 7" },
              { label: "DEPOSITANTE", value: "João Pedro Munhoz Pavaneti / TNEEMO Industries" },
              { label: "DATA DE DEPÓSITO", value: "2026" },
              { label: "DIVISÃO", value: "FORJATEC — DIV-01" },
              { label: "STATUS", value: "EM ANÁLISE · INPI" },
            ].map(({ label, value }) => (
              <div key={label} className="py-3 border-b border-white/8 flex gap-4">
                <span className="font-mono text-[11px] text-text-3 w-36 shrink-0">
                  {label}
                </span>
                <span className="font-mono text-[12px] text-alloy">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Claims */}
      <SectionLabel index="IP-02" label="REIVINDICAÇÕES (RESUMO PÚBLICO)" />

      <div className="flex flex-col mb-16">
        {claims.map((claim, i) => (
          <div key={claim} className="flex gap-5 py-4 border-b border-white/8">
            <span className="font-mono text-[11px] text-text-3 w-5 shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="font-mono text-[13px] text-niobium leading-[1.6]">{claim}</p>
          </div>
        ))}
      </div>

      {/* Planned patents */}
      <SectionLabel index="IP-03" label="PATENTES PLANEJADAS" />

      <div className="flex flex-col gap-3">
        {planned.map((p) => (
          <div
            key={p.code}
            className="bg-bg-2 border border-white/8 rounded-lg px-6 py-5 hover:border-white/14 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5">
              <span className="font-mono text-[11px] tracking-widest text-niobium/60 shrink-0">
                {p.code}
              </span>
              <p className="font-sans text-[14px] text-niobium">{p.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
