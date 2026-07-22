import Counter from "../../ui/Counter.tsx";
import DashboardChrome from "./DashboardChrome";
import { leadGeneratorData } from "./slidesData";
import type { SlideComponentProps } from "./types";

const STATUS_COLOR: Record<string, string> = {
  New: "bg-lavender-soft text-purple-primary/80",
  Contacted: "bg-neon-blue/15 text-purple-primary",
  "Follow-up": "bg-lime/70 text-purple-primary",
  Won: "bg-purple-primary text-white-soft",
};

export default function LeadGeneratorSlide({ isActive }: SlideComponentProps) {
  const { weeklyCount, leads } = leadGeneratorData;

  return (
    <DashboardChrome activeNavIndex={1}>
      <div className="flex h-full flex-col">
        <div className="mb-3 flex items-baseline gap-2">
          <span className="font-display text-2xl font-extrabold text-purple-primary">
            {isActive ? <Counter from={0} to={weeklyCount} /> : weeklyCount}
          </span>
          <span className="text-[11px] text-purple-primary/80">new leads this week</span>
        </div>

        <div className="min-w-0 flex-1 overflow-x-auto rounded-xl border border-purple-primary/10 bg-paper-dotted">
          <table className="w-full min-w-[420px] text-left text-[11px]">
            <thead>
              <tr className="border-b border-purple-primary/10 text-[9px] uppercase tracking-[0.1em] text-purple-primary/70">
                <th className="px-3 py-2 font-medium">Name</th>
                <th className="px-3 py-2 font-medium">Company</th>
                <th className="px-3 py-2 font-medium">Score</th>
                <th className="px-3 py-2 font-medium">Status</th>
                <th className="hidden px-3 py-2 font-medium sm:table-cell">Source</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white-soft/60" : ""}>
                  <td className="px-3 py-2 font-medium text-purple-primary">{lead.name}</td>
                  <td className="px-3 py-2 text-purple-primary/70">{lead.company}</td>
                  <td className="px-3 py-2">
                    <span
                      className={`font-mono font-bold ${
                        lead.score >= 80 ? "text-purple-primary" : "text-purple-primary/75"
                      }`}
                    >
                      {lead.score}
                    </span>
                  </td>
                  <td className="px-3 py-2">
                    <span
                      className={`rounded-full px-2 py-0.5 text-[9px] font-medium ${STATUS_COLOR[lead.status]}`}
                    >
                      {lead.status}
                    </span>
                  </td>
                  <td className="hidden px-3 py-2 text-purple-primary/80 sm:table-cell">{lead.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardChrome>
  );
}
