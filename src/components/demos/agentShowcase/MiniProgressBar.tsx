import { motion, useReducedMotion } from "framer-motion";

interface MiniProgressBarProps {
  label: string;
  to: number;
  isActive: boolean;
  delay?: number;
  valueLabel?: string;
}

export default function MiniProgressBar({
  label,
  to,
  isActive,
  delay = 0,
  valueLabel,
}: MiniProgressBarProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-[11px] text-purple-primary/80">
        <span>{label}</span>
        <span className="font-mono">{valueLabel ?? `${to}%`}</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-purple-primary/10">
        <motion.div
          className="h-full rounded-full bg-lime"
          initial={{ width: 0 }}
          animate={{ width: isActive ? `${to}%` : 0 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.9, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] }
          }
        />
      </div>
    </div>
  );
}
