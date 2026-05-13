import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentação Técnica — TNEEMO Industries",
  description:
    "Especificações técnicas públicas da TNEEMO Industries: chassis ATX-FTEC, NCORE deploy guide e metodologia de campo.",
};

const docs = [
  {
    id: "atx-ftec",
    code: "DOC-01",
    title: "ATX-FTEC v3 — Especificação de Chassis",
    division: "FORJATEC",
    sections: [
      {
        heading: "Zonas Funcionais",
        content:
          "O chassis Nióbio-E1 é dividido em 8 zonas funcionais numeradas de Z1 a Z8, cada uma com função estrutural e térmica definida:\n\nZ1 — Zona de PSU (trilho deslizante, curso 60mm)\nZ2 — Zona de GPU primária (bracket de 3 slots)\nZ3 — Zona de armazenamento (6× NVMe ou 4× 3.5\")\nZ4 — Zona de CPU e bracket térmico (socket LGA1700/AM5)\nZ5 — Zona de RAM (suporte dual channel)\nZ6 — Zona de conectividade frontal (modular)\nZ7 — Zona de ventilação de exaustão\nZ8 — Zona de expansão e gerenciamento",
      },
      {
        heading: "Rail System",
        content:
          "Pino de retenção: ø4mm, aço 1045\nDeflexão máxima: ≤0.2mm a carga de 50N\nComprimento de trilho: 480mm (padrão ATX-FTEC)\nPasso de fixação: 25.4mm (1\")\nTolerância de fabricação: ±0.05mm",
      },
      {
        heading: "Materiais Aprovados",
        content:
          "Estrutura principal: Liga Al-Nb (composição proprietária — ver patente BR 10 2026 005717 7)\nBrackets secundários: Alumínio 6061-T6\nVedação anti-rattle: EPDM Shore A 50\nFixadores: Aço inox A2",
      },
      {
        heading: "Compatibilidade",
        content:
          "Motherboards: ATX, E-ATX (com adaptador)\nCPU Sockets: LGA1700, LGA1851, AM5\nGPU: até 3 slots, comprimento máx. 340mm\nPSU: ATX 12V v2.3+ (trilho deslizante incluso)",
      },
    ],
  },
  {
    id: "ncore",
    code: "DOC-02",
    title: "NCORE Deploy Guide",
    division: "NCORE",
    sections: [
      {
        heading: "Requisitos de Hardware",
        content:
          "CPU: mínimo 4 cores x86-64\nRAM: mínimo 8GB ECC recomendado\nArmazenamento: 120GB SSD para SO + volumes separados para dados\nRede: 1GbE mínimo, 10GbE recomendado\nSO: Debian 12 (Bookworm) ou Ubuntu Server 22.04 LTS",
      },
      {
        heading: "Stack de Software",
        content:
          "GLPI 10.x — Gestão de ativos e helpdesk\nZabbix 6.x — Monitoramento de infraestrutura\nLibreNMS — Monitoramento de rede (SNMP)\nNetbox — Documentação de rede e IPAM\nPFSense 2.7 — Firewall e roteamento",
      },
      {
        heading: "Sequência de Instalação",
        content:
          "1. Instalação base do SO com particionamento LVM\n2. Configuração de hostname, timezone e locale\n3. Deploy do stack via Docker Compose (fornecido)\n4. Configuração de Fail2ban (SSH, HTTP, GLPI)\n5. Integração com GLPI Inventory Agent nos endpoints\n6. Configuração de alertas no Zabbix\n7. Documentação inicial no Netbox",
      },
      {
        heading: "Configuração de Fail2ban",
        content:
          "Jails ativos: sshd, nginx-http-auth, glpi-auth\nBantime: 3600s (padrão), 86400s (reincidência)\nMaxretry: 5 tentativas em 600s\nIgnoreip: 127.0.0.1/8, ::1, rede local /24",
      },
    ],
  },
  {
    id: "field",
    code: "DOC-03",
    title: "Metodologia de Campo TNM-FIELD",
    division: "FIELD",
    sections: [
      {
        heading: "Protocolo de Levantamento",
        content:
          "Fase 1 — Reconhecimento: identificação de salas, racks e pontos de acesso\nFase 2 — Inventário físico: catalogação de cada ativo com etiqueta patrimonial, serial e modelo\nFase 3 — Levantamento lógico: endereçamento IP, VLAN, configuração ativa\nFase 4 — Documentação fotográfica: rack front/back, identificação de cabeamento\nFase 5 — Consolidação: importação para GLPI via agente ou planilha padrão",
      },
      {
        heading: "Template de Planilha",
        content:
          "Colunas obrigatórias:\nPatrimônio | Tipo | Fabricante | Modelo | Serial | Local | IP | MAC | Status | Observação\n\nFormato: .xlsx compatível com importação nativa GLPI\nVersão: TNM-FIELD-v2.1",
      },
      {
        heading: "Checklist de Validação",
        content:
          "[ ] Todos os ativos com patrimônio registrado\n[ ] IPs verificados via ping sweep\n[ ] MACs coletados (arp-scan ou switch SNMP)\n[ ] Fotos de rack capturadas (frente e verso)\n[ ] Cabos identificados em ambas as extremidades\n[ ] Relatório final assinado pelo responsável técnico",
      },
    ],
  },
];

export default async function SpecPage({
  searchParams,
}: {
  searchParams: Promise<{ doc?: string }>;
}) {
  const { doc } = await searchParams;
  const activeDoc = docs.find((d) => d.id === doc) ?? docs[0];

  return (
    <div className="max-w-6xl mx-auto px-5 pt-14 pb-24">
      {/* Header */}
      <div className="py-12 border-b border-white/8 mb-0">
        <h1 className="font-sans font-medium text-3xl sm:text-4xl tracking-[0.12em] uppercase text-alloy mb-3">
          DOCUMENTAÇÃO TÉCNICA
        </h1>
        <p className="font-sans text-[15px] text-niobium">
          Especificações públicas de produtos, sistemas e metodologias TNEEMO.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mt-8">
        {/* Sidebar */}
        <aside className="lg:w-56 shrink-0">
          <div className="lg:sticky lg:top-20">
            <SectionLabel index="IDX" label="DOCUMENTOS" />
            <nav className="flex flex-col gap-1">
              {docs.map((d) => (
                <a
                  key={d.id}
                  href={`?doc=${d.id}`}
                  className={`block px-3 py-2.5 rounded transition-colors ${
                    d.id === activeDoc.id
                      ? "bg-bg-3 border border-white/8 text-alloy"
                      : "text-niobium hover:text-alloy"
                  }`}
                >
                  <span className="font-mono text-[10px] tracking-widest text-text-3 block mb-1">
                    {d.code} · {d.division}
                  </span>
                  <span className="font-sans text-[13px] leading-[1.4]">{d.title}</span>
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <article className="flex-1 min-w-0">
          <div className="border-b border-white/8 pb-6 mb-8">
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-niobium/60 block mb-2">
              {activeDoc.code} · {activeDoc.division}
            </span>
            <h2 className="font-sans font-medium text-xl sm:text-2xl tracking-[0.05em] text-alloy">
              {activeDoc.title}
            </h2>
          </div>

          <div className="flex flex-col gap-0">
            {activeDoc.sections.map((section, i) => (
              <div key={section.heading}>
                {i > 0 && <div className="h-px bg-white/8" />}
                <div className="py-6">
                  <h3 className="font-sans font-medium text-[14px] tracking-[0.1em] uppercase text-alloy mb-4">
                    {section.heading}
                  </h3>
                  <div className="font-mono text-[12px] leading-[1.8] text-niobium whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
