// React port of Badge.astro's "status-active" markup. Astro components
// can't be imported into a .tsx React tree, so this duplicates that exact
// visual (same classes) on purpose rather than sharing a component.
interface MiniStatusPulseProps {
  label?: string;
  className?: string;
}

export default function MiniStatusPulse({
  label = "Active",
  className = "",
}: MiniStatusPulseProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-purple-primary/80 ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
      </span>
      {label}
    </span>
  );
}
