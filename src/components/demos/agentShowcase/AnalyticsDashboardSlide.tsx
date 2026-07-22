import { motion } from "framer-motion";
import Counter from "../../ui/Counter.tsx";
import DashboardChrome from "./DashboardChrome";
import { analyticsData } from "./slidesData";
import type { SlideComponentProps } from "./types";

export default function AnalyticsDashboardSlide({ isActive }: SlideComponentProps) {
  const { metrics, bars, donut } = analyticsData;
  const maxBar = Math.max(...bars.map((b) => b.value));

  let cumulative = 0;
  const donutStops = donut.map((segment) => {
    const start = cumulative;
    cumulative += segment.value;
    return `${segment.color} ${start}% ${cumulative}%`;
  });

  return (
    <DashboardChrome activeNavIndex={3}>
      <div className="grid h-full grid-cols-2 gap-3 sm:grid-cols-4">
        {metrics.map((metric, i) => (
          <div key={i} className="rounded-xl border border-purple-primary/10 bg-paper-dotted p-3">
            <p className="font-display text-xl font-extrabold text-purple-primary">
              {isActive ? (
                <Counter from={0} to={metric.value} suffix={metric.suffix ?? ""} />
              ) : (
                `${metric.value}${metric.suffix ?? ""}`
              )}
            </p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.08em] text-purple-primary/75">
              {metric.label}
            </p>
          </div>
        ))}

        <div className="col-span-2 rounded-xl border border-purple-primary/10 bg-white-soft p-4 sm:col-span-3">
          <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.1em] text-purple-primary/70">
            Weekly posts
          </p>
          <div className="flex h-24 items-stretch gap-2.5">
            {bars.map((bar, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
                <div className="flex w-full flex-1 items-end">
                  <motion.div
                    className="w-full rounded-t-sm bg-gradient-to-t from-purple-primary to-lavender"
                    style={{ height: `${(bar.value / maxBar) * 100}%`, transformOrigin: "bottom" }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: isActive ? 1 : 0 }}
                    transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
                <span className="text-[9px] text-purple-primary/70">{bar.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-2 flex items-center gap-4 rounded-xl border border-purple-primary/10 bg-white-soft p-4 sm:col-span-1">
          <motion.div
            className="h-16 w-16 shrink-0 rounded-full"
            style={{ background: `conic-gradient(${donutStops.join(", ")})` }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.8 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="space-y-1">
            {donut.map((segment, i) => (
              <div key={i} className="flex items-center gap-1.5 text-[9px] text-purple-primary/70">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: segment.color }} />
                {segment.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardChrome>
  );
}
