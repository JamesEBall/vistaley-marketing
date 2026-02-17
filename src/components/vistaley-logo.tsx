import { cn } from "@/lib/utils";

interface VistaleyLogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "color" | "white";
  showWordmark?: boolean;
  className?: string;
}

const iconSizes = {
  sm: { icon: 28, plus: 12, gap: 6 },
  md: { icon: 36, plus: 16, gap: 8 },
  lg: { icon: 48, plus: 20, gap: 10 },
};

export function VistaleyLogo({
  size = "sm",
  variant = "color",
  showWordmark = false,
  className,
}: VistaleyLogoProps) {
  const { icon, plus, gap } = iconSizes[size];
  const isWhite = variant === "white";

  return (
    <div className={cn("flex items-center", className)} style={{ gap }}>
      <div className="flex items-center" style={{ gap }}>
        {/* VentureLens icon */}
        <div
          className="flex items-center justify-center rounded-lg"
          style={{
            width: icon,
            height: icon,
            background: isWhite
              ? "rgba(255,255,255,0.12)"
              : "linear-gradient(135deg, #34d399, #14b8a6)",
          }}
        >
          <VentureLensIcon size={icon * 0.55} />
        </div>

        {/* Plus */}
        <svg
          width={plus}
          height={plus}
          viewBox="0 0 24 24"
          fill="none"
        >
          <rect
            x="9.5"
            y="0"
            width="5"
            height="24"
            rx="2.5"
            fill={isWhite ? "rgba(255,255,255,0.5)" : "#94a3b8"}
          />
          <rect
            x="0"
            y="9.5"
            width="24"
            height="5"
            rx="2.5"
            fill={isWhite ? "rgba(255,255,255,0.5)" : "#94a3b8"}
          />
        </svg>

        {/* Harbour icon */}
        <div
          className="flex items-center justify-center rounded-lg"
          style={{
            width: icon,
            height: icon,
            background: isWhite
              ? "rgba(255,255,255,0.12)"
              : "linear-gradient(135deg, #38bdf8, #3b82f6)",
          }}
        >
          <HarbourIcon size={icon * 0.55} />
        </div>
      </div>

      {showWordmark && (
        <span
          className={cn(
            "font-semibold tracking-tight",
            size === "sm" && "text-base",
            size === "md" && "text-lg",
            size === "lg" && "text-xl",
            isWhite ? "text-white" : "text-white"
          )}
          style={{ marginLeft: gap }}
        >
          Vistaley
        </span>
      )}
    </div>
  );
}

function VentureLensIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {/* Light beams */}
      <polygon points="12,5 9.5,1 14.5,1" fill="white" opacity="0.45" />
      <polygon points="12,5.5 6,3 9.5,5" fill="white" opacity="0.25" />
      <polygon points="12,5.5 18,3 14.5,5" fill="white" opacity="0.25" />
      {/* Dome */}
      <path d="M10.5,7 Q12,5 13.5,7" fill="white" />
      {/* Lantern */}
      <rect x="10" y="7" width="4" height="1.8" rx="0.3" fill="white" />
      <rect x="10.6" y="7.3" width="2.8" height="1.2" rx="0.2" fill="#fef9c3" opacity="0.7" />
      {/* Tower */}
      <path d="M10.3,8.8 L9.7,19.5 L14.3,19.5 L13.7,8.8 Z" fill="white" />
      {/* Stripes */}
      <rect x="10.1" y="12" width="3.8" height="1.1" rx="0.2" fill="#0d9488" opacity="0.55" />
      <rect x="9.9" y="15.8" width="4.2" height="1.1" rx="0.2" fill="#0d9488" opacity="0.55" />
      {/* Base */}
      <rect x="8.5" y="19.5" width="7" height="1.5" rx="0.5" fill="white" />
      {/* Rock */}
      <ellipse cx="12" cy="22" rx="6" ry="1.2" fill="white" opacity="0.2" />
    </svg>
  );
}

function HarbourIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {/* Sail */}
      <path d="M12,3 L12,15 L5,15 Z" fill="white" opacity="0.9" />
      <path d="M12,5 L12,15 L18,15 Z" fill="white" opacity="0.65" />
      {/* Hull */}
      <path d="M3,17 L5,15 L19,15 L21,17 L19.5,19 L4.5,19 Z" fill="white" />
      {/* Water */}
      <path
        d="M2,21 Q6,19.5 12,21 Q18,19.5 22,21"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}

export { VentureLensIcon, HarbourIcon };
