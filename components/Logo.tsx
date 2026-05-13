interface LogoProps {
  size?: number;
  className?: string;
}

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
      <circle cx="32" cy="32" r="4" fill="currentColor" />
      <line x1="32" y1="14" x2="32" y2="28" stroke="currentColor" strokeWidth="1" />
      <line x1="32" y1="36" x2="32" y2="50" stroke="currentColor" strokeWidth="1" />
      <line x1="14" y1="24" x2="28" y2="31" stroke="currentColor" strokeWidth="1" />
      <line x1="36" y1="33" x2="50" y2="40" stroke="currentColor" strokeWidth="1" />
      <line x1="50" y1="24" x2="36" y2="31" stroke="currentColor" strokeWidth="1" />
      <line x1="28" y1="33" x2="14" y2="40" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

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
      <line x1="6" y1="18" x2="20" y2="28" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <line x1="58" y1="18" x2="44" y2="28" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <line x1="32" y1="14" x2="32" y2="28" stroke="currentColor" strokeWidth="1" />
      <line x1="32" y1="36" x2="32" y2="50" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
