export interface SiteConfig {
  name: string;
  siteName: string;
  domain: string;
  url: string;
  siteUrl: string;
  description: string;
  siteDescription: string;
  defaultAuthor: string;
  repo: string;
  i18n: { defaultLocale: string; locales: string[]; prefixDefaultLocale: boolean; };
  theme: { style: string; fontFamily: string; colorScheme: string; };
  matomo: { url: string; siteId: string; containerId: string; };
  revive: { reviveId: string; scriptUrl: string; zones: Record<string, { zoneId: number; format: string }>; };
  legal: { editor: string; address: string; contactEmail: string; hostName: string; hostAddress: string; };
  categories: Array<{ id: string; label: string }>;
}

export const siteConfig: SiteConfig = {
  name: "Paris Fenêtres — Menuiserie Urbaine, Fenêtres Isolantes Haussmanniennes & Isolation Acoustique",
  siteName: "parisfenetres.com",
  domain: "parisfenetres.com",
  url: "https://parisfenetres.com",
  siteUrl: "https://parisfenetres.com",
  description: "Expertise en menuiserie et rénovation de fenêtres à Paris : double vitrage acoustique haute performance, menuiseries bois conformes ABF, isolation thermique et valorisation du patrimoine parisien.",
  siteDescription: "Expertise en menuiserie et rénovation de fenêtres à Paris : double vitrage acoustique haute performance, menuiseries bois conformes ABF, isolation thermique et valorisation du patrimoine parisien.",
  defaultAuthor: "L'Atelier Paris Fenêtres",
  repo: "jc842/parisfenetres",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en", "es"],
    prefixDefaultLocale: false,
  },

  theme: {
    style: "lexington-vanta",
    fontFamily: "Playfair Display, Plus Jakarta Sans, sans-serif",
    colorScheme: "amber",
  },

  matomo: {
    url: "https://analytics.les4h.fr/",
    siteId: "62",
    containerId: "cJnAXfBX",
  },

  revive: {
    reviveId: "ac119b122a644588953c74c4c1daee06",
    scriptUrl: "//ads.les4h.fr/www/delivery/asyncjs.php",
    zones: {
      mobileSticky: { zoneId: 692, format: "mobileBanner" },
      inContent: { zoneId: 691, format: "mediumRectangle" },
      header: { zoneId: 690, format: "leaderboard" },
      halfPage: { zoneId: 688, format: "halfPage" },
      largeRectangle: { zoneId: 689, format: "largeRectangle" },
      skyscraper: { zoneId: 693, format: "skyscraper" },
    },
  },

  legal: {
    editor: "Paris Fenêtres Éditions",
    address: "18 Rue du Faubourg Saint-Antoine, 75012 Paris",
    contactEmail: "contact@parisfenetres.com",
    hostName: "Cloudflare Pages",
    hostAddress: "101 Townsend St, San Francisco, CA 94107, USA",
  },

  categories: [
    { id: "haussmannien", label: "Fenêtres Haussmanniennes & ABF" },
    { id: "acoustique", label: "Isolation Phonique & Acoustique" },
    { id: "bois-alu", label: "Menuiserie Bois & Aluminium" },
    { id: "thermique", label: "Rénovation Énergétique Paris" },
  ],
};
