import { LogoDragon } from "@/components/Logo";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StatusDot } from "@/components/ui/StatusDot";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dragon Realms Network — TNEEMO · NCORE",
  description:
    "Infraestrutura de jogo de alta disponibilidade operada por TNEEMO Industries. Servidor Minecraft com sistema Dragon Ascension.",
};

const servers = [
  {
    name: "SERVIDOR PRINCIPAL",
    status: "online" as const,
    details: "Players: 0/100  ·  TPS: 20.0",
  },
  {
    name: "VELOCITY PROXY",
    status: "online" as const,
    details: "Latência média: 38ms",
  },
  {
    name: "BACKUP NODE",
    status: "standby" as const,
    details: "STANDBY",
  },
];

const ranks = [
  { name: "Iniciante", description: "Ponto de entrada. Acesso à maioria das mecânicas base." },
  { name: "Artesão", description: "Desbloqueado ao completar a cadeia de missões iniciais." },
  { name: "Guardião", description: "Requer domínio de um ofício e prova de combate." },
  { name: "Ancião", description: "Reconhecimento por contribuição à comunidade e mundo." },
  { name: "Dracônico", description: "Rank máximo. Acesso à Forja de Essência e Constructos." },
];

const techStack = [
  { label: "SERVIDOR BASE", value: "Paper 1.21 (fork Spigot)" },
  { label: "PROXY", value: "Velocity 3.x" },
  { label: "CONTAINERIZAÇÃO", value: "Docker Compose" },
  { label: "HOST", value: "LOMBOTRON — Mandaguari, PR" },
  { label: "MEMÓRIA ALOCADA", value: "12GB heap (servidor principal)" },
  { label: "BACKUP", value: "Snapshots diários às 04:00 BRT" },
];

export default function DragonRealmsPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen pb-24">
      <div className="max-w-6xl mx-auto px-5 pt-14">
        {/* Header */}
        <div className="py-16 border-b border-white/8 mb-12">
          <div className="flex flex-col items-center text-center">
            <LogoDragon size={52} className="text-uplink mb-6" />
            <h1 className="font-sans font-medium text-3xl sm:text-5xl tracking-[0.15em] uppercase text-alloy mb-3">
              DRAGON REALMS NETWORK
            </h1>
            <p className="font-sans text-[15px] text-niobium max-w-lg leading-[1.7]">
              Infraestrutura de jogo de alta disponibilidade.{" "}
              <span className="text-text-3">Operado por TNEEMO · NCORE.</span>
            </p>
          </div>
        </div>

        {/* Status operacional */}
        <section className="mb-16">
          <SectionLabel index="01" label="STATUS OPERACIONAL" />
          <div className="flex flex-col gap-0 bg-bg-2 border border-white/8 rounded-lg overflow-hidden">
            {servers.map((server, i) => (
              <div key={server.name}>
                {i > 0 && <div className="h-px bg-white/8" />}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-6 py-4">
                  <div className="flex items-center gap-3">
                    <StatusDot status={server.status} />
                    <span className="font-mono text-[12px] tracking-[0.15em] uppercase text-alloy">
                      {server.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-[11px] tracking-[0.1em] uppercase ${
                        server.status === "online"
                          ? "text-active"
                          : "text-niobium"
                      }`}
                    >
                      {server.status === "online" ? "ONLINE" : "STANDBY"}
                    </span>
                    <span className="font-mono text-[11px] text-text-3">
                      {server.details}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Como jogar */}
        <section className="mb-16">
          <SectionLabel index="02" label="COMO JOGAR" />
          <div className="bg-bg-2 border border-uplink/20 rounded-lg p-6">
            <div className="flex flex-col gap-4">
              {[
                { label: "ENDEREÇO IP", value: "play.dragonrealms.tneemo.com" },
                { label: "VERSÃO", value: "Minecraft Java Edition 1.21.x" },
                { label: "MODO", value: "Survival — Dragon Ascension ativo" },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5 border-b border-white/8 pb-4 last:border-0 last:pb-0">
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-niobium/60 w-28 shrink-0">
                    {label}
                  </span>
                  <span className="font-mono text-[13px] text-alloy">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dragon Ascension */}
        <section className="mb-16">
          <SectionLabel index="03" label="DRAGON ASCENSION" />
          <p className="font-sans text-[15px] text-niobium leading-[1.8] mb-8 max-w-2xl">
            Dragon Ascension é o sistema de progressão do servidor. Jogadores acumulam
            experiência em combate, crafting e exploração para avançar nos ranks dracônicos,
            desbloqueando mecânicas exclusivas como a Forja de Essência e os Constructos.
          </p>
          <div className="flex flex-col gap-0">
            {ranks.map((rank, i) => (
              <div key={rank.name} className="flex gap-5 py-4 border-b border-white/8 last:border-0">
                <span className="font-mono text-[11px] text-uplink/60 w-5 shrink-0 pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-sans font-medium text-[14px] tracking-[0.1em] uppercase text-alloy mb-1">
                    {rank.name}
                  </h3>
                  <p className="font-sans text-[13px] text-niobium">{rank.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Infraestrutura */}
        <section className="mb-16">
          <SectionLabel index="04" label="INFRAESTRUTURA" />
          <p className="font-sans text-[14px] text-niobium leading-[1.7] mb-6 max-w-2xl">
            O Dragon Realms é operado com os mesmos padrões de engenharia aplicados
            à infraestrutura corporativa TNEEMO. Transparência técnica como princípio.
          </p>
          <div className="bg-bg-2 border border-white/8 rounded-lg overflow-hidden">
            {techStack.map(({ label, value }, i) => (
              <div key={label}>
                {i > 0 && <div className="h-px bg-white/8" />}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 px-6 py-3.5">
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-text-3 sm:w-36 shrink-0">
                    {label}
                  </span>
                  <span className="font-mono text-[12px] text-niobium">{value}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ranking (placeholder) */}
        <section>
          <SectionLabel index="05" label="RANKING — TOP ASCENSÃO" />
          <div className="bg-bg-2 border border-white/8 rounded-lg px-6 py-8 text-center">
            <p className="font-mono text-[12px] text-text-3 tracking-[0.15em] uppercase">
              Nenhum jogador no ranking ainda.
            </p>
            <p className="font-mono text-[11px] text-text-3 mt-2">
              Seja o primeiro a atingir o rank Dracônico.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
