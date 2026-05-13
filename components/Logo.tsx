interface LogoProps {
  size?: number;
  className?: string;
}

// Solar rotation mark (MK-01) — outer hex shell + dashed inner hex +
// 6 fan blades (each outer vertex → next inner vertex CW) + corona + nucleus
export function Logo({ size = 32, className = "" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
    >
      {/* Outer hexagonal shell */}
      <polygon
        points="32,4 58,18 58,46 32,60 6,46 6,18"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Inner hex — dashed reference layer */}
      <polygon
        points="32,15 48,24 48,40 32,49 16,40 16,24"
        stroke="currentColor"
        strokeWidth="0.75"
        fill="none"
        strokeDasharray="3,2.5"
        opacity="0.4"
      />
      {/* Solar fan blades — each outer vertex → next inner vertex (CW) */}
      <line x1="32" y1="4"  x2="48" y2="24" stroke="currentColor" strokeWidth="1" />
      <line x1="58" y1="18" x2="48" y2="40" stroke="currentColor" strokeWidth="1" />
      <line x1="58" y1="46" x2="32" y2="49" stroke="currentColor" strokeWidth="1" />
      <line x1="32" y1="60" x2="16" y2="40" stroke="currentColor" strokeWidth="1" />
      <line x1="6"  y1="46" x2="16" y2="24" stroke="currentColor" strokeWidth="1" />
      <line x1="6"  y1="18" x2="32" y2="15" stroke="currentColor" strokeWidth="1" />
      {/* Solar core: corona ring + nucleus */}
      <circle cx="32" cy="32" r="5.5" stroke="currentColor" strokeWidth="0.75" fill="none" opacity="0.5" />
      <circle cx="32" cy="32" r="2.5" fill="currentColor" />
    </svg>
  );
}

// Dragon Realms variant — diamond node + wing lines
export function LogoDragon({ size = 32, className = "" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
    >
      <polygon
        points="32,4 58,18 58,46 32,60 6,46 6,18"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <polygon
        points="32,14 50,24 50,40 32,50 14,40 14,24"
        stroke="currentColor"
        strokeWidth="0.75"
        fill="none"
        strokeDasharray="3,2"
        opacity="0.5"
      />
      {/* Diamond node */}
      <polygon points="32,28 36,32 32,36 28,32" fill="currentColor" />
      {/* Wing lines */}
      <line x1="6"  y1="18" x2="20" y2="28" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <line x1="58" y1="18" x2="44" y2="28" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <line x1="32" y1="14" x2="32" y2="28" stroke="currentColor" strokeWidth="1" />
      <line x1="32" y1="36" x2="32" y2="50" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
