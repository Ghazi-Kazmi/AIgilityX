export type HeaderVariant = "home" | "hackathon" | "summit";

export type HeaderActionKey = "summitInvitation";

export interface HeaderMenuItem {
  key: string;
  label: string;
  type: "section" | "route" | "action";
  path?: string;
  sectionId?: string;
  actionKey?: HeaderActionKey;
  submenu?: HeaderMenuItem[];
}

export interface HeaderCTA {
  label: string;
  type: "section" | "route" | "action";
  path?: string;
  sectionId?: string;
  actionKey?: HeaderActionKey;
}

export interface HeaderConfig {
  links: HeaderMenuItem[];
  cta: HeaderCTA;
}

const globalInitiativesMenu: HeaderMenuItem = {
  key: "global-initiatives",
  label: "Global Initiatives",
  type: "route",
  path: "#",
  submenu: [
    {
      key: "hackathon",
      label: "Sovereign AI Hackathon",
      type: "route",
      path: "/hackathon",
    },
    {
      key: "summit",
      label: "Global Sovereign AI Summit",
      type: "route",
      path: "/summit",
    },
    {
      key: "fellowship",
      label: "AI Leaders Fellowship",
      type: "route",
      path: "#",
    },
  ],
};

const researchInsightsMenu: HeaderMenuItem = {
  key: "research-insights",
  label: "Research Insights",
  type: "route",
  path: "#",
  submenu: [
    { key: "blogs", label: "Blogs", type: "route", path: "/" },
    { key: "whitepapers", label: "Whitepapers", type: "route", path: "/" },
    { key: "case-studies", label: "Case Studies", type: "route", path: "/" },
  ],
};

export const getHeaderVariant = (pathname: string): HeaderVariant => {
  const normalizedPath = pathname.replace(/\/+$/, "") || "/";

  if (normalizedPath === "/hackathon") {
    return "hackathon";
  }

  if (normalizedPath === "/summit") {
    return "summit";
  }

  return "home";
};

export const getHeaderConfig = (variant: HeaderVariant): HeaderConfig => {
  switch (variant) {
    case "hackathon":
      return {
        links: [
          {
            key: "imperative",
            label: "The Imperative",
            type: "section",
            path: "/hackathon",
            sectionId: "imperative",
          },
          {
            key: "timeline",
            label: "Timeline",
            type: "section",
            path: "/hackathon",
            sectionId: "timeline",
          },
          {
            key: "program",
            label: "Program",
            type: "section",
            path: "/hackathon",
            sectionId: "program",
          },
          {
            key: "mentors",
            label: "Mentors",
            type: "section",
            path: "/hackathon",
            sectionId: "mentors",
          },
          {
            key: "partners",
            label: "Partners",
            type: "section",
            path: "/hackathon",
            sectionId: "partners",
          },
          {
            key: "faq",
            label: "FAQ",
            type: "section",
            path: "/hackathon",
            sectionId: "faq",
          },
          globalInitiativesMenu,
        ],
        cta: {
          label: "Apply Now",
          type: "section",
          path: "/hackathon",
          sectionId: "apply",
        },
      };

    case "summit":
      return {
        links: [
          {
            key: "imperative",
            label: "Imperative",
            type: "section",
            path: "/summit",
            sectionId: "imperative",
          },
          {
            key: "objectives",
            label: "Objectives",
            type: "section",
            path: "/summit",
            sectionId: "objectives",
          },
          {
            key: "audience",
            label: "Audience",
            type: "section",
            path: "/summit",
            sectionId: "audience",
          },
          {
            key: "agenda",
            label: "Agenda",
            type: "section",
            path: "/summit",
            sectionId: "agenda",
          },
          {
            key: "speakers",
            label: "Speakers",
            type: "section",
            path: "/summit",
            sectionId: "speakers",
          },
          {
            key: "deliverables",
            label: "Deliverables",
            type: "section",
            path: "/summit",
            sectionId: "deliverables",
          },
          {
            key: "partners",
            label: "Partners",
            type: "section",
            path: "/summit",
            sectionId: "partners",
          },
          globalInitiativesMenu,
        ],
        cta: {
          label: "Request Invitation",
          type: "action",
          actionKey: "summitInvitation",
        },
      };

    case "home":
    default:
      return {
        links: [
          {
            key: "about",
            label: "About Us",
            type: "section",
            path: "/",
            sectionId: "about-section",
          },
          {
            key: "ecosystem",
            label: "Ecosystem",
            type: "section",
            path: "/",
            sectionId: "ecosystem",
          },
          {
            key: "services",
            label: "Services",
            type: "section",
            path: "/",
            sectionId: "services-section",
          },
          {
            key: "expertise",
            label: "Expertise",
            type: "section",
            path: "/",
            sectionId: "expertise",
          },
          researchInsightsMenu,
          globalInitiativesMenu,
          {
            key: "contact",
            label: "Contact Us",
            type: "section",
            path: "/",
            sectionId: "contact-section",
          },
        ],
        cta: {
          label: "Global AI Hub",
          type: "route",
          path: "/contact",
        },
      };
  }
};
