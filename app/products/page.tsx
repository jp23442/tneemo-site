import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produtos e Serviços — TNEEMO Industries",
  description:
    "Catálogo de produtos e serviços de engenharia da TNEEMO Industries. Orçamento sob consulta.",
};

type ProductStatus =
  | "PROTÓTIPO · PATENTE INPI ATIVA"
  | "DISPONÍVEL SOB CONTRATO"
  | "EM DESENVOLVIMENTO"
  | "DISPONÍVEL";

const statusColor: Record<ProductStatus, string> = {
  "PROTÓTIPO · PATENTE INPI ATIVA": "text-uplink",
  "DISPONÍVEL SOB CONTRATO": "text-active",
  "EM DESENVOLVIMENTO": "text-alert",
  "DISPONÍVEL": "text-active",
};

const categories = [
  {
    code: "TNM-CHASSIS",
    division: "FORJATEC",
    products: [
      {
        name: "NIÓBIO-E1 Workstation Chassis",
        specs: [
          "Liga Al-Nb, padrão ATX-FTEC v3",
          "8 zonas funcionais, PSU em trilho deslizante",
          "Painel modular intercambiável, bracket CPU com EPDM",
        ],
        status: "PROTÓTIPO · PATENTE INPI ATIVA" as ProductStatus,
      },
    ],
  },
  {
    code: "TNM-INFRA",
    division: "NCORE",
    products: [
      {
        name: "NCORE Infrastructure Kit",
        specs: [
          "Stack: GLPI + Zabbix + LibreNMS + Netbox + PFSense",
          "Documentação completa inclusa, deploy automatizado",
        ],
        status: "DISPONÍVEL SOB CONTRATO" as ProductStatus,
      },
    ],
  },
  {
    code: "TNM-THERMAL",
    division: "FORJATEC",
    products: [
      {
        name: "Thermal Bracket Series T1",
        specs: [
          "Bracket de CPU com isolamento térmico controlado",
          "Compatível com sockets LGA1700, AM5",
        ],
        status: "EM DESENVOLVIMENTO" as ProductStatus,
      },
    ],
  },
  {
    code: "TNM-SVC",
    division: "FIELD",
    products: [
      {
        name: "Engenharia de Infraestrutura sob Contrato",
        specs: [
          "Especificação técnica, procurement público (Lei 14.133/2021)",
          "Fiscal técnico, dimensionamento e implantação",
        ],
        status: "DISPONÍVEL" as ProductStatus,
      },
    ],
  },
  {
    code: "TNM-FIELD",
    division: "FIELD",
    products: [
      {
        name: "Kit de Levantamento de Campo",
        specs: [
          "Metodologia documentada para inventário de ativos distribuídos",
          "Integração com GLPI, relatório padronizado",
        ],
        status: "DISPONÍVEL" as ProductStatus,
      },
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="max-w-6xl mx-auto px-5 pt-14 pb-24">
      {/* Header */}
      <div className="py-12 border-b border-white/8 mb-12">
        <h1 className="font-sans font-medium text-3xl sm:text-4xl tracking-[0.12em] uppercase text-alloy mb-3">
          PRODUTOS E SERVIÇOS
        </h1>
        <p className="font-mono text-[12px] text-niobium tracking-[0.1em]">
          Orçamento sob consulta ·{" "}
          <a
            href="mailto:contato@tneemo.com"
            className="hover:text-alloy transition-colors"
          >
            contato@tneemo.com
          </a>
        </p>
      </div>

      <SectionLabel index="CAT" label="CATÁLOGO" />

      <div className="flex flex-col gap-3">
        {categories.map((cat) => (
          <div
            key={cat.code}
            className="bg-bg-2 border border-white/8 rounded-lg overflow-hidden"
          >
            {/* Category header */}
            <div className="flex items-center gap-4 px-6 py-4 border-b border-white/8">
              <span className="font-mono text-[11px] tracking-widest uppercase text-niobium/60">
                {cat.code}
              </span>
              <span className="font-mono text-[10px] tracking-widest uppercase text-text-3">
                {cat.division}
              </span>
            </div>

            {/* Products */}
            {cat.products.map((product) => (
              <div key={product.name} className="px-6 py-5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <h3 className="font-sans font-medium text-[15px] tracking-[0.05em] text-alloy">
                    {product.name}
                  </h3>
                  <span
                    className={`font-mono text-[10px] tracking-[0.15em] uppercase shrink-0 ${statusColor[product.status]}`}
                  >
                    {product.status}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  {product.specs.map((spec) => (
                    <div key={spec} className="flex gap-3">
                      <span className="font-mono text-text-3 text-[12px] shrink-0">—</span>
                      <p className="font-mono text-[12px] text-niobium leading-[1.6]">{spec}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 border border-white/8 rounded-lg">
        <p className="font-mono text-[12px] text-niobium leading-[1.8]">
          Todos os produtos estão em fase de validação técnica ou disponíveis sob contrato.
          <br />
          Para orçamentos, especificações detalhadas ou parcerias:{" "}
          <a href="mailto:contato@tneemo.com" className="text-alloy hover:underline">
            contato@tneemo.com
          </a>
        </p>
      </div>
    </div>
  );
}
