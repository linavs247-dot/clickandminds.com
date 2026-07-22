import DashboardChrome from "./DashboardChrome";
import MiniProgressBar from "./MiniProgressBar";
import MiniStatusPulse from "./MiniStatusPulse";
import { leadMagnetData } from "./slidesData";
import type { SlideComponentProps } from "./types";

export default function LeadMagnetBuilderSlide({ isActive }: SlideComponentProps) {
  return (
    <DashboardChrome activeNavIndex={2}>
      <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.1em] text-purple-primary/70">
        Resource library
      </p>
      <div className="space-y-3">
        {leadMagnetData.resources.map((resource, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-xl border border-purple-primary/10 bg-paper-dotted p-3"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-lavender-soft text-purple-primary">
              <span className="block h-4 w-3 rounded-[2px] border-2 border-current" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12px] font-semibold text-purple-primary">{resource.title}</p>
              <p className="font-mono text-[9px] uppercase tracking-[0.08em] text-purple-primary/70">
                {resource.type}
              </p>
              {resource.state === "Generating" && (
                <div className="mt-2 max-w-[160px]">
                  <MiniProgressBar
                    label="Generating"
                    to={resource.progress ?? 50}
                    isActive={isActive}
                  />
                </div>
              )}
            </div>
            <div className="shrink-0">
              {resource.state === "Ready" && <MiniStatusPulse label="Ready" />}
              {resource.state === "Draft" && (
                <span className="rounded-full bg-purple-primary/10 px-2.5 py-1 text-[9px] font-medium text-purple-primary/75">
                  Draft
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </DashboardChrome>
  );
}
