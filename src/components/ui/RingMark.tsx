import type { CSSProperties } from "react";

// The concentric-ring mark from the EG Access logo, drawn as SVG so it scales
// and can animate. Outer arc is teal; inner arcs are white (or navy on light).
type Props = { className?: string; tone?: "dark" | "light"; animate?: boolean; title?: string };

const rings = [
  { r: 46, w: 5, gap: 34, rot: -60, accent: true },
  { r: 36, w: 4, gap: 26, rot: 120 },
  { r: 27, w: 4, gap: 20, rot: 200 },
  { r: 18, w: 4, gap: 14, rot: 20 },
  { r: 9, w: 4, gap: 9, rot: 150 },
];

export function RingMark({ className = "", tone = "dark", animate = false, title }: Props) {
  const inner = tone === "dark" ? "#ffffff" : "#091d39";
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      {rings.map((ring, i) => {
        const c = 2 * Math.PI * ring.r;
        const dash = c - ring.gap;
        return (
          <circle
            key={ring.r}
            cx="50"
            cy="50"
            r={ring.r}
            fill="none"
            stroke={ring.accent ? "#259a92" : inner}
            strokeWidth={ring.w}
            strokeLinecap="round"
            strokeDasharray={`${dash} ${c}`}
            transform={`rotate(${ring.rot} 50 50)`}
            className={animate ? "animate-ring-in" : undefined}
            style={
              animate
                ? ({ "--ring-len": dash, animationDelay: `${i * 110}ms` } as CSSProperties)
                : undefined
            }
          />
        );
      })}
    </svg>
  );
}
