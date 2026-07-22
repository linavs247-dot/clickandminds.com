export type SlideId =
  | "content-agent"
  | "lead-generator"
  | "lead-magnet-builder"
  | "proposal-generator"
  | "analytics-dashboard";

export interface SlideMeta {
  id: SlideId;
  label: string;
  tag: string;
}

export interface SlideComponentProps {
  isActive: boolean;
}
