interface SectionLabelProps {
  index: string;
  label: string;
  className?: string;
}

export function SectionLabel({ index, label, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 mb-8 ${className}`}>
      <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-niobium whitespace-nowrap">
        {index} — {label}
      </span>
      <div className="flex-1 h-px bg-white/8" />
    </div>
  );
}
