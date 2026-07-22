import type { ReactNode } from "react";

// The shared "SaaS app with a sidebar" shell every slide renders inside.
// Purely decorative chrome (sidebar icons, search bar, avatar), never
// functional, matching the brief's "clean SaaS dashboard" style reference.
interface DashboardChromeProps {
  activeNavIndex?: number;
  children: ReactNode;
}

const NAV_ICONS = ["grid", "list", "doc", "chart", "gear"] as const;

function NavIcon({ shape }: { shape: (typeof NAV_ICONS)[number] }) {
  switch (shape) {
    case "grid":
      return (
        <span className="grid grid-cols-2 gap-0.5">
          <span className="h-1.5 w-1.5 rounded-[1px] bg-current" />
          <span className="h-1.5 w-1.5 rounded-[1px] bg-current" />
          <span className="h-1.5 w-1.5 rounded-[1px] bg-current" />
          <span className="h-1.5 w-1.5 rounded-[1px] bg-current" />
        </span>
      );
    case "list":
      return (
        <span className="flex flex-col gap-1">
          <span className="h-0.5 w-4 rounded-full bg-current" />
          <span className="h-0.5 w-4 rounded-full bg-current" />
          <span className="h-0.5 w-3 rounded-full bg-current" />
        </span>
      );
    case "doc":
      return <span className="block h-4 w-3 rounded-[2px] border-2 border-current" />;
    case "chart":
      return (
        <span className="flex items-end gap-0.5">
          <span className="h-2 w-1 bg-current" />
          <span className="h-3 w-1 bg-current" />
          <span className="h-1.5 w-1 bg-current" />
        </span>
      );
    case "gear":
      return <span className="block h-3 w-3 rounded-full border-2 border-current" />;
  }
}

export default function DashboardChrome({ activeNavIndex = 0, children }: DashboardChromeProps) {
  return (
    <div className="flex h-full min-h-[360px] bg-white-soft text-purple-primary sm:min-h-[420px]">
      <aside className="flex w-14 shrink-0 flex-col items-center gap-5 border-r border-purple-primary/10 bg-lavender-soft/30 py-5 sm:w-44 sm:items-stretch sm:px-4">
        <div className="mb-2 hidden font-display text-xs font-extrabold tracking-tight sm:block">
          Click &amp; Minds<span className="text-electric-pink">.</span>
        </div>
        {NAV_ICONS.map((shape, i) => (
          <div
            key={shape}
            className={`flex items-center gap-2.5 rounded-lg px-2 py-1.5 ${
              i === activeNavIndex ? "bg-purple-primary text-white-soft" : "text-purple-primary/75"
            }`}
          >
            <NavIcon shape={shape} />
            <span className="hidden text-[11px] font-medium capitalize sm:inline">
              {shape === "doc" ? "Documents" : shape === "gear" ? "Settings" : shape}
            </span>
          </div>
        ))}
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center justify-between gap-3 border-b border-purple-primary/10 px-4 py-3 sm:px-6">
          <div className="h-7 w-32 max-w-[45%] rounded-full border border-purple-primary/15 bg-paper-dotted sm:w-48" />
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lavender text-[10px] font-bold text-purple-primary">
            CM
          </div>
        </div>
        <div className="min-w-0 flex-1 overflow-hidden p-4 sm:p-6">{children}</div>
      </div>
    </div>
  );
}
