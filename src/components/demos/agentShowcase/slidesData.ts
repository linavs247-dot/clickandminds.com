import type { SlideMeta } from "./types";

export const SLIDES: SlideMeta[] = [
  { id: "content-agent", label: "Content Agent", tag: "// content_agent.live" },
  { id: "lead-generator", label: "Lead Generator", tag: "// lead_generator.live" },
  { id: "lead-magnet-builder", label: "Lead Magnet Builder", tag: "// lead_magnet.live" },
  { id: "proposal-generator", label: "Proposal Generator", tag: "// proposal_generator.live" },
  { id: "analytics-dashboard", label: "Analytics Dashboard", tag: "// analytics.live" },
];

export const contentAgentData = {
  draft: {
    title: "5 Ways AI Agents Save Founders 10+ Hours a Week",
    bodyLines: [
      "Most founders lose their week to tasks that do not need a human touch.",
      "Here is what we automated for three clients this month, and what it freed up.",
      "The pattern is always the same: repetitive, rule based, and draining.",
    ],
    wordCount: 412,
  },
  calendar: [
    { day: "M", scheduled: true },
    { day: "T", scheduled: false },
    { day: "W", scheduled: true },
    { day: "T", scheduled: false },
    { day: "F", scheduled: true },
    { day: "S", scheduled: false },
    { day: "S", scheduled: false },
  ],
  queue: [
    { title: "5 Ways AI Agents Save Founders Time", platform: "LinkedIn", status: "Scheduled" },
    { title: "Behind the Build: Client Success Agent", platform: "Blog", status: "In Review" },
    { title: "Why Consistency Beats Volume", platform: "LinkedIn", status: "Draft" },
    { title: "Q3 Automation Recap", platform: "Instagram", status: "Draft" },
  ],
};

export const leadGeneratorData = {
  weeklyCount: 24,
  leads: [
    { name: "Sarah Chen", company: "Nimbus Retail", score: 92, status: "Follow-up", source: "LinkedIn" },
    { name: "Marcus Webb", company: "Foundry Studio", score: 87, status: "Contacted", source: "Website Form" },
    { name: "Priya Anand", company: "Loom & Co", score: 81, status: "New", source: "Referral" },
    { name: "Diego Torres", company: "Northline Media", score: 74, status: "New", source: "Cold Email" },
    { name: "Elena Marsh", company: "Basecamp Goods", score: 68, status: "Contacted", source: "LinkedIn" },
    { name: "Jonah Price", company: "Fielder Supply", score: 59, status: "Won", source: "Referral" },
  ],
};

export const leadMagnetData = {
  resources: [
    { title: "The 2026 Outreach Playbook", type: "PDF Guide", state: "Ready" as const },
    { title: "30-Point Launch Checklist", type: "Checklist", state: "Generating" as const, progress: 64 },
    { title: "Proposal Template Pack", type: "Template", state: "Draft" as const },
    { title: "LinkedIn Bio Swipe File", type: "Template", state: "Ready" as const },
  ],
};

export const proposalGeneratorData = {
  callNotes: [
    "Client wants a 3 month retainer, not a one-off project",
    "Budget range: $2,000 to $4,000 per month",
    "Pain point: inconsistent posting, no real strategy",
    "Wants carousels and infographics, not just text posts",
    "Decision maker: founder, wants weekly async updates",
  ],
  sections: [
    { heading: "Executive Summary", state: "done" as const },
    { heading: "Scope of Work", state: "done" as const },
    { heading: "Pricing & Packages", state: "generating" as const, progress: 55 },
    { heading: "Timeline", state: "pending" as const },
    { heading: "Terms", state: "pending" as const },
  ],
};

export const analyticsData = {
  metrics: [
    { label: "Leads Generated", value: 128 },
    { label: "Content Published", value: 42 },
    { label: "Engagement Rate", value: 6, suffix: "%" },
    { label: "Hours Saved", value: 37, suffix: "h" },
  ],
  bars: [
    { label: "W1", value: 40 },
    { label: "W2", value: 65 },
    { label: "W3", value: 50 },
    { label: "W4", value: 85 },
    { label: "W5", value: 70 },
    { label: "W6", value: 95 },
  ],
  donut: [
    { label: "LinkedIn", value: 45, color: "var(--color-purple-primary)" },
    { label: "Website", value: 25, color: "var(--color-lavender)" },
    { label: "Referral", value: 20, color: "var(--color-lime)" },
    { label: "Cold Email", value: 10, color: "var(--color-neon-blue)" },
  ],
};
