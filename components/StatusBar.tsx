import { StatusDot } from "./ui/StatusDot";

const statuses = [
  { label: "NCORE", status: "online" as const },
  { label: "FORJATEC", status: "online" as const },
  { label: "DRAGONREALMS", status: "online" as const },
];

export function StatusBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/8 bg-bg/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-5 h-7 flex items-center justify-between overflow-hidden">
        <div className="flex items-center gap-5 overflow-x-auto scrollbar-none">
          {statuses.map((s, i) => (
            <div key={s.label} className="flex items-center gap-2 shrink-0">
              {i > 0 && <span className="text-text-3 font-mono text-[10px]">·</span>}
              <StatusDot status={s.status} />
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-text-3">
                {s.label} · {s.status === "online" ? "ONLINE" : "STANDBY"}
              </span>
            </div>
          ))}
        </div>
        <span className="font-mono text-[10px] text-text-3 shrink-0 ml-4">
          tneemo.com · v1.0
        </span>
      </div>
    </div>
  );
}
