import DashboardChrome from "./DashboardChrome";
import MiniProgressBar from "./MiniProgressBar";
import { contentAgentData } from "./slidesData";
import type { SlideComponentProps } from "./types";

export default function ContentAgentSlide({ isActive }: SlideComponentProps) {
  const { draft, calendar, queue } = contentAgentData;

  return (
    <DashboardChrome activeNavIndex={1}>
      <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-5">
        <div className="rounded-xl border border-purple-primary/10 bg-paper-dotted p-4 lg:col-span-3">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-5 w-5 rounded bg-lavender-soft" />
            <span className="h-5 w-5 rounded bg-lavender-soft" />
            <span className="h-5 w-5 rounded bg-lime/60" />
          </div>
          <p className="font-display text-sm font-bold leading-snug text-purple-primary">
            {draft.title}
          </p>
          <div className="mt-3 space-y-2">
            {draft.bodyLines.map((line, i) => (
              <p key={i} className="text-[11px] leading-relaxed text-purple-primary/70">
                {line}
              </p>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between text-[10px] text-purple-primary/70">
            <span>{draft.wordCount} words</span>
            <span className="font-mono">// draft.md</span>
          </div>
          <div className="mt-4">
            <MiniProgressBar label="Draft quality" to={82} isActive={isActive} />
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-2">
          <div className="rounded-xl border border-purple-primary/10 bg-white-soft p-3">
            <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.1em] text-purple-primary/70">
              This week
            </p>
            <div className="flex justify-between gap-1">
              {calendar.map((d, i) => (
                <div
                  key={i}
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-semibold ${
                    d.scheduled ? "bg-lime text-purple-primary" : "bg-purple-primary/5 text-purple-primary/70"
                  }`}
                >
                  {d.day}
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 rounded-xl border border-purple-primary/10 bg-white-soft p-3">
            <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.1em] text-purple-primary/70">
              Drafts queue
            </p>
            <div className="space-y-2">
              {queue.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[11px]">
                  <span
                    className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                      item.platform === "LinkedIn"
                        ? "bg-purple-primary"
                        : item.platform === "Blog"
                          ? "bg-neon-blue"
                          : "bg-electric-pink"
                    }`}
                  />
                  <span className="flex-1 truncate text-purple-primary/80">{item.title}</span>
                  <span className="shrink-0 rounded-full bg-lavender-soft px-2 py-0.5 text-[9px] font-medium text-purple-primary/80">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardChrome>
  );
}
