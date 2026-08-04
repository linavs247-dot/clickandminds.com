export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const ui = {
  en: {
    nav: {
      aiAgents: "AI Agents",
      websites: "Websites",
      portfolio: "Portfolio",
      bookACall: "Book a Call",
      openMenu: "Open menu",
      language: "Language",
    },
    footer: {
      tagline:
        "Content and AI systems studio. We build the AI employees and the content that run your business while you focus on the work only you can do.",
      services: "Services",
      getStarted: "Get started",
      copyright: "© 2026 Click & Minds. Content & AI Systems Studio.",
    },
    comingSoon: {
      badge: "Coming soon",
      cta: "Book a Call",
    },
  },
  es: {
    nav: {
      aiAgents: "Agentes de IA",
      websites: "Sitios Web",
      portfolio: "Portafolio",
      bookACall: "Agenda una Llamada",
      openMenu: "Abrir menú",
      language: "Idioma",
    },
    footer: {
      tagline:
        "Estudio de contenido y sistemas de IA. Construimos los empleados de IA y el contenido que hacen funcionar tu negocio mientras tú te enfocas en el trabajo que solo tú puedes hacer.",
      services: "Servicios",
      getStarted: "Comienza",
      copyright: "© 2026 Click & Minds. Estudio de Contenido y Sistemas de IA.",
    },
    comingSoon: {
      badge: "Próximamente",
      cta: "Agenda una Llamada",
    },
  },
} as const;

export function useTranslations(locale: Locale) {
  return ui[locale] ?? ui[defaultLocale];
}
