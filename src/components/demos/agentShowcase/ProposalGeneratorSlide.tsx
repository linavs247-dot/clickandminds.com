import DashboardChrome from "./DashboardChrome";
import MiniProgressBar from "./MiniProgressBar";
import { proposalGeneratorData } from "./slidesData";
import type { SlideComponentProps } from "./types";

export default function ProposalGeneratorSlide({ isActive }: SlideComponentProps) {
  const { callNotes, sections } = proposalGeneratorData;

  return (
    <DashboardChrome activeNavIndex={2}>
      <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-purple-primary/10 bg-paper-dotted p-4">
          <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.1em] text-purple-primary/70">
            Call notes
          </p>
          <ul className="space-y-2.5">
            {callNotes.map((note, i) => (
              <li key={i} className="flex gap-2 text-[11px] leading-relaxed text-purple-primary/70">
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-purple-primary/40" />
                {note}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-purple-primary/10 bg-white-soft p-4">
          <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.1em] text-purple-primary/70">
            Proposal
          </p>
          <div className="space-y-3">
            {sections.map((section, i) => (
              <div key={i} className={section.state === "pending" ? "opacity-40" : ""}>
                <div className="flex items-center justify-between text-[11px] font-medium text-purple-primary">
                  <span className={section.state === "pending" ? "border-b border-dashed border-purple-primary/40 pb-0.5" : ""}>
                    {section.heading}
                  </span>
                  {section.state === "done" && <span className="text-lime">✓</span>}
                </div>
                {section.state === "generating" && (
                  <div className="mt-1.5">
                    <MiniProgressBar
                      label="Generating"
                      to={section.progress ?? 50}
                      isActive={isActive}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardChrome>
  );
}
