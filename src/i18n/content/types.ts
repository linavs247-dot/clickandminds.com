// Shape shared by every locale's home-page content module
// (home.en.ts / home.es.ts). Keeping this as an explicit interface, not
// `typeof homeEn`, means a locale file missing a field fails to typecheck
// instead of silently falling back to English.

// Shared by the small single-section "coming soon" pages (Websites,
// Portfolio) until their full content ships in a later phase.
export interface ComingSoonPageCopy {
  eyebrow: string;
  headlineLead: string;
  highlight: string;
  body: string;
  cta: string;
}

export interface AgentCopy {
  tag: string;
  name: string;
  description: string;
  features: string[];
  liveMessages: string[];
  insight: string;
}

export interface DemoCopy {
  tag: string;
  name: string;
  description: string;
}

export interface StepCopy {
  title: string;
  body: string;
}

export interface PlanCopy {
  name: string;
  price: string;
  unit: string;
  description: string;
  features: string[];
  cta: string;
}

export interface ServiceCopy {
  name: string;
  outcome: string;
  includes: string[];
}

export interface TestimonialCopy {
  quote: string;
  name: string;
  role?: string;
}

export interface ProcessStepCopy {
  title: string;
  body: string;
}

export interface WebsitesPageCopy {
  hero: {
    eyebrow: string;
    headlineLead: string;
    highlight: string;
    body: string;
    cta: string;
  };
  services: {
    eyebrow: string;
    headlineLead: string;
    highlight: string;
    items: ServiceCopy[];
  };
  testimonials: {
    eyebrow: string;
    headlineLead: string;
    highlight: string;
    items: TestimonialCopy[];
  };
  process: {
    eyebrow: string;
    headlineLead: string;
    highlight: string;
    steps: ProcessStepCopy[];
  };
  finalCta: {
    headlineLead: string;
    highlight: string;
    body: string;
    cta: string;
  };
}

export interface HomeCopy {
  hero: {
    eyebrow: string;
    headlineLead: string;
    highlight: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
    socialProof: string;
  };
  pain: {
    tasks: string[];
    eyebrow: string;
    headlineLead: string;
    highlight: string;
    leadText: string;
    closingLine: string;
  };
  shift: {
    eyebrow: string;
    headlineLead: string;
    highlight: string;
    body: string;
  };
  gallery: {
    eyebrow: string;
    headlineLead: string;
    highlight: string;
    leadText: string;
    agents: AgentCopy[];
    customCard: {
      title: string;
      body: string;
      cta: string;
    };
  };
  demos: {
    eyebrow: string;
    headlineLead: string;
    highlight: string;
    leadText: string;
    items: DemoCopy[];
    carouselEyebrow: string;
    carouselHeadlineLead: string;
    carouselHighlight: string;
  };
  howItWorks: {
    eyebrow: string;
    headlineLead: string;
    highlight: string;
    steps: StepCopy[];
  };
  whySwitching: {
    eyebrow: string;
    headlineLead: string;
    highlight: string;
    checklist: string[];
    stats: {
      savedMonthlyLabel: string;
      systemOwnershipLabel: string;
      taskTimeValue: string;
      taskTimeLabel: string;
      directBuildValue: string;
      directBuildLabel: string;
    };
  };
  video3: {
    headlineLead: string;
    highlight: string;
    body: string;
  };
  pricing: {
    eyebrow: string;
    headlineLead: string;
    highlight: string;
    plans: PlanCopy[];
  };
  limitedSpots: {
    eyebrow: string;
    body: string;
    cta: string;
  };
  finalCta: {
    headlineLead: string;
    highlight: string;
    body: string;
    cta: string;
  };
}
