import { ALL_SITE_ROUTES, SUPPORT_EMAIL } from "@/lib/routes";

export type PageSection = {
  heading: string;
  body: string[];
  bullets?: string[];
};

export type ContentPageData = {
  key: string;
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  keyPoints: string[];
  sections: PageSection[];
  sourceIds: string[];
  relatedPaths: string[];
};

export const CONTENT_PAGES = {
  "united-states": {
    key: "united-states",
    path: "/united-states",
    title: "U.S. Hantavirus Map by State",
    description:
      "United States hantavirus map context using CDC state-level surveillance summaries and official state health sources.",
    eyebrow: "United States",
    intro:
      "The U.S. layer is a state-level historical context layer, not live local surveillance and not county-precision mapping. CDC publishes public hantavirus case geography by state and explicitly limits county-level public data.",
    keyPoints: [
      "CDC reported 864 laboratory-confirmed U.S. hantavirus disease cases from 1993 through 2022.",
      "CDC states that county-level case data cannot be provided publicly.",
      "State health departments remain the best source for current local reporting and prevention notices."
    ],
    sections: [
      {
        heading: "How to read the U.S. map",
        body: [
          "Reported cases are historical surveillance summaries. They show where cases have been reported by state, not where risk exists at an address.",
          "Reservoir regions show ecology. Deer mouse distribution and other rodent host ranges are useful context, but they do not show infected animals or human cases."
        ]
      },
      {
        heading: "Why county precision is avoided",
        body: [
          "Hantavirus is rare, and public health agencies protect patient privacy. This MVP does not infer county risk from news reports, rodent ranges, or partial state summaries.",
          "For current concerns in a specific area, contact the relevant state or local health department."
        ]
      }
    ],
    sourceIds: ["cdc-reported-cases", "cdc-surveillance", "cdc-about"],
    relatedPaths: [
      "/united-states/new-mexico",
      "/united-states/california",
      "/united-states/arizona",
      "/united-states/colorado"
    ]
  },
  "new-mexico": {
    key: "new-mexico",
    path: "/united-states/new-mexico",
    title: "New Mexico Hantavirus Map and Case Context",
    description:
      "New Mexico hantavirus map context with NMDOH source links, historical case summary, and prevention notes.",
    eyebrow: "United States / New Mexico",
    intro:
      "New Mexico is central to U.S. hantavirus history and remains one of the states where official hantavirus education is especially important. The map record here uses NMDOH summary data and links back to the state source.",
    keyPoints: [
      "NMDOH reports 142 HPS cases and 55 deaths in New Mexico between 1975 and 2025.",
      "NMDOH listed seven confirmed cases in 2025 and one confirmed case in 2026 on the reviewed disease page.",
      "NMDOH identifies deer mice as primary carriers in New Mexico and emphasizes rodent control around homes."
    ],
    sections: [
      {
        heading: "What the New Mexico layer means",
        body: [
          "The New Mexico marker is a state-level summary marker. It is not mapped at county precision, even when NMDOH source text mentions counties in specific years.",
          "Use the NMDOH page and news releases for the current official snapshot, because current-year summaries can update."
        ]
      },
      {
        heading: "Practical prevention context",
        body: [
          "NMDOH prevention messaging focuses on airing out enclosed spaces, keeping rodents out, and avoiding dust from mouse droppings, urine, saliva, and nesting materials.",
          "People with compatible illness after rodent exposure should contact healthcare or public health authorities."
        ]
      }
    ],
    sourceIds: ["nmdoh-hantavirus", "nmdoh-2026-case", "nmdoh-2025-death"],
    relatedPaths: ["/united-states", "/deer-mouse-hantavirus-map", "/prevention"]
  },
  california: {
    key: "california",
    path: "/united-states/california",
    title: "California Hantavirus Map",
    description:
      "California hantavirus map context linking to CDPH prevention, surveillance, and occupational health resources.",
    eyebrow: "United States / California",
    intro:
      "California public health sources emphasize deer mouse exposure, safe cleanup, and workplace settings such as parks, campgrounds, maintenance areas, cabins, and other enclosed spaces.",
    keyPoints: [
      "CDPH states that wild rodents, including deer mice, are common in many parts of California.",
      "CDPH links to an official interactive story map and a county-of-exposure PDF through 2024.",
      "This MVP links to CDPH products instead of copying county-level surveillance values."
    ],
    sections: [
      {
        heading: "What the California layer means",
        body: [
          "The California marker means official California hantavirus surveillance and prevention resources are available. It does not mean the site is publishing a live California case layer.",
          "County of exposure is useful epidemiologic context, but it is not the same as exact household or recreation-site risk."
        ]
      },
      {
        heading: "Workplace and recreation context",
        body: [
          "CDPH occupational health guidance highlights people whose work can disturb rodent-contaminated enclosed spaces.",
          "For site-specific workplace concerns, follow employer safety procedures and contact public health or occupational safety authorities."
        ]
      }
    ],
    sourceIds: ["cdph-hantavirus", "cdph-occupational-2025", "cdc-rodent-cleanup"],
    relatedPaths: ["/united-states", "/prevention/cleaning-mouse-droppings", "/deer-mouse-hantavirus-map"]
  },
  arizona: {
    key: "arizona",
    path: "/united-states/arizona",
    title: "Arizona Hantavirus Map",
    description:
      "Arizona hantavirus map context with ADHS Health Alert Network and investigation protocol sources.",
    eyebrow: "United States / Arizona",
    intro:
      "Arizona is part of the Four Corners history of hantavirus recognition in the United States. The state layer uses an ADHS Health Alert Network advisory as an official point-in-time source.",
    keyPoints: [
      "ADHS issued a July 8, 2024 HAN advisory about increased hantavirus activity.",
      "The advisory reported seven human HPS cases, including three deaths, as of July 1, 2024.",
      "Those values are a 2024 incident snapshot, not a current live total."
    ],
    sections: [
      {
        heading: "How to read the Arizona marker",
        body: [
          "The Arizona marker is attached to a reviewed official advisory. It should not be read as a current county map or a prediction of where exposure will occur.",
          "ADHS and local health authorities are the right sources for current Arizona reporting and investigation details."
        ]
      },
      {
        heading: "Clinical caution without self-diagnosis",
        body: [
          "The ADHS advisory was written for healthcare providers and encouraged consideration of hantavirus in compatible illness with rodent exposure.",
          "This website does not diagnose illness. People with concerning symptoms should contact healthcare or public health authorities."
        ]
      }
    ],
    sourceIds: ["adhs-han-2024", "adhs-protocol-2025", "cdc-about"],
    relatedPaths: ["/united-states", "/symptoms", "/prevention"]
  },
  colorado: {
    key: "colorado",
    path: "/united-states/colorado",
    title: "Colorado Hantavirus Map",
    description:
      "Colorado hantavirus map context with CDPHE prevention, reporting, and state data links.",
    eyebrow: "United States / Colorado",
    intro:
      "Colorado has official hantavirus prevention, reporting, and historical data resources. This MVP links to CDPHE for updated state-specific data rather than copying a live table.",
    keyPoints: [
      "CDPHE maintains a hantavirus page with public guidance and a Colorado data link since 1993.",
      "CDPHE instructs healthcare professionals to report the disease within four days.",
      "A CDC MMWR field report documents an apparent locally acquired Denver HPS case in 2018, showing why overly simple rural-only assumptions are unsafe."
    ],
    sections: [
      {
        heading: "How to read the Colorado layer",
        body: [
          "The Colorado marker indicates official state data and prevention sources. It is not a county-level risk or case map.",
          "Historical state case reports and rodent ecology are context; neither can tell whether a particular building has contaminated rodent material."
        ]
      },
      {
        heading: "Source use",
        body: [
          "CDPHE is the preferred source for Colorado-specific public health updates. CDC field reports are used here only for context and should not be generalized beyond their facts."
        ]
      }
    ],
    sourceIds: ["cdphe-hantavirus", "cdc-mmwr-denver-2018", "cdc-prevention"],
    relatedPaths: ["/united-states", "/prevention/cleaning-mouse-droppings", "/where-is-hantavirus-found"]
  },
  europe: {
    key: "europe",
    path: "/europe",
    title: "Europe Hantavirus Map and ECDC Context",
    description:
      "European hantavirus map context focused on ECDC surveillance, bank vole ecology, and HFRS limitations.",
    eyebrow: "Europe",
    intro:
      "European hantavirus context differs from the U.S. map. ECDC surveillance is primarily about orthohantavirus infections associated with hemorrhagic fever with renal syndrome, often involving Puumala virus and bank voles.",
    keyPoints: [
      "ECDC reported 1,885 hantavirus infection cases from 28 EU/EEA countries for 2023.",
      "Finland and Germany accounted for 60.5% of reported 2023 EU/EEA cases in the ECDC report.",
      "European HFRS surveillance should not be compared directly with U.S. HPS case maps."
    ],
    sections: [
      {
        heading: "Bank vole ecology",
        body: [
          "ECDC describes Puumala virus, carried by bank voles, as the most frequently identified cause of notified orthohantavirus infections in Europe.",
          "Rodent abundance, climate, and human-host interactions can drive seasonal and multi-year variation."
        ]
      },
      {
        heading: "Alert context",
        body: [
          "ECDC also publishes rapid assessments for unusual events, including the 2026 cruise-associated cluster. Those notices are incident assessments, not routine Europe-wide live maps."
        ]
      }
    ],
    sourceIds: ["ecdc-2023-aer", "ecdc-factsheet", "ecdc-cruise-2026"],
    relatedPaths: ["/where-is-hantavirus-found", "/hantavirus-outbreak-map", "/sources-methodology"]
  },
  "south-america": {
    key: "south-america",
    path: "/south-america",
    title: "South America Hantavirus Map",
    description:
      "South America hantavirus map context with PAHO/WHO alerts, Southern Cone surveillance, and Andes virus notes.",
    eyebrow: "South America",
    intro:
      "South America is important because Andes virus and other New World hantaviruses can cause hantavirus cardiopulmonary syndrome. Public health interpretation should stay tied to WHO, PAHO, and national agencies.",
    keyPoints: [
      "PAHO/WHO issued a December 2025 alert after increases in endemic countries of the Americas, especially the Southern Cone.",
      "WHO describes Andes virus as the currently known hantavirus with documented limited person-to-person transmission among close contacts.",
      "Primary infection risk remains linked to rodent exposure, especially contaminated urine, droppings, or saliva."
    ],
    sections: [
      {
        heading: "Southern Cone context",
        body: [
          "PAHO's alert names Argentina, Chile, Uruguay, and Paraguay as Southern Cone countries and emphasizes surveillance, diagnosis, clinical management, and environmental or occupational risk reduction.",
          "Regional alerts are not a substitute for country-level public health data."
        ]
      },
      {
        heading: "Andes virus caution",
        body: [
          "Limited person-to-person transmission has been documented for Andes virus in close and prolonged contact settings. That caveat should not be generalized to all hantaviruses or used to imply casual spread."
        ]
      }
    ],
    sourceIds: ["paho-alert-2025", "who-factsheet-2026", "who-don600-2026"],
    relatedPaths: ["/hantavirus-outbreak-map", "/where-is-hantavirus-found", "/sources-methodology"]
  },
  "hantavirus-risk-map": {
    key: "hantavirus-risk-map",
    path: "/hantavirus-risk-map",
    title: "Hantavirus Risk Map: What the Layers Mean",
    description:
      "How to read hantavirus risk map layers without confusing ecological risk, reported cases, and official alerts.",
    eyebrow: "Map methodology",
    intro:
      "A responsible hantavirus risk map has to separate three things: reported human cases, public health alerts, and reservoir or ecological evidence. Mixing those layers creates false precision.",
    keyPoints: [
      "Reported cases are surveillance summaries, not predictions.",
      "Official alerts are selected agency notices, not complete datasets.",
      "Reservoir regions show host ecology, not infected animals or exact human risk.",
      "A useful marker-reading workflow is: identify the layer, open the source, then decide whether you need a regional page, an outbreak note, or prevention guidance.",
      "Searches for a live hantavirus map should be interpreted as a need for recently reviewed official-source context, not a live infection counter."
    ],
    sections: [
      {
        heading: "What this map can do",
        body: [
          "It can show where official sources provide historical case context, current public health notices, and known reservoir ecology.",
          "It can help readers find the right official source faster and move from a map marker to the supporting source note.",
          "It can answer searches like hantavirus risk map, hantavirus map Canada, hantavirus Florida map, and hantavirus Washington map with clear source boundaries."
        ],
        bullets: [
          "Blue case markers: read as historical or agency-summary geography, not current local risk.",
          "Amber alert markers: read as official notices with dates, agencies, and event-specific limits.",
          "Green reservoir markers: read as ecology context, not confirmed infected animals at a location."
        ]
      },
      {
        heading: "What this map cannot do",
        body: [
          "It cannot tell whether a specific cabin, workplace, campsite, county, or home has contaminated rodent material.",
          "It cannot diagnose symptoms or replace emergency, clinical, public health, or occupational safety advice.",
          "It cannot provide live case counts, patient locations, or real-time infection tracking, even when the page is updated frequently."
        ]
      },
      {
        heading: "How to use the map longer without over-reading it",
        body: [
          "Start by clicking a marker and checking whether it is a case summary, official alert, or reservoir layer. Then follow the linked source or detail page rather than treating the popup as a standalone claim.",
          "If the question is regional, continue to a location page such as Canada, Florida, Washington, or the United States. If the question is event-specific, continue to an outbreak note. If the question is practical exposure reduction, continue to prevention guidance."
        ]
      }
    ],
    sourceIds: ["cdc-reported-cases", "cdc-prevention", "cdc-rodent-cleanup"],
    relatedPaths: ["/hantavirus-tracker", "/where/canada", "/where/florida", "/where/washington", "/sources-methodology", "/hantavirus-outbreak-map", "/prevention"]
  },
  "hantavirus-outbreak-map": {
    key: "hantavirus-outbreak-map",
    path: "/hantavirus-outbreak-map",
    title: "Hantavirus Outbreak Map",
    description:
      "A conservative explanation of hantavirus outbreak map sources, official alerts, and why this is not live surveillance.",
    eyebrow: "Official alerts",
    intro:
      "The outbreak layer is limited to official public health notices. It is built to avoid rumor-driven or sensational outbreak tracking.",
    keyPoints: [
      "WHO, ECDC, PAHO/WHO, CDC, and state health departments are preferred alert sources.",
      "An alert can be important without implying broad public risk.",
      "This site does not publish live outbreak surveillance or exact local exposure maps."
    ],
    sections: [
      {
        heading: "How alerts are selected",
        body: [
          "Alerts are included when an official agency publishes a public notice, rapid assessment, Health Alert Network advisory, or epidemiological alert with enough context to summarize safely.",
          "Each alert card includes source links and a limitation note."
        ]
      },
      {
        heading: "2026 cruise-associated cluster",
        body: [
          "WHO, ECDC, and PAHO published official updates on the 2026 cruise-associated Andes virus cluster. This site presents it as an event-specific official alert, not as evidence of general community spread."
        ]
      }
    ],
    sourceIds: ["who-don600-2026", "ecdc-cruise-2026", "paho-cruise-2026", "paho-alert-2025"],
    relatedPaths: ["/outbreaks", "/south-america", "/europe", "/sources-methodology"]
  },
  "deer-mouse-hantavirus-map": {
    key: "deer-mouse-hantavirus-map",
    path: "/deer-mouse-hantavirus-map",
    title: "Deer Mouse Hantavirus Map",
    description:
      "Deer mouse hantavirus map context for Sin Nombre virus, reservoir ecology, and U.S. risk interpretation.",
    eyebrow: "Reservoir ecology",
    intro:
      "The deer mouse layer explains a major U.S. reservoir relationship. It should be read as ecology, not as a map of infected mice or human cases.",
    keyPoints: [
      "CDC identifies the deer mouse as the common U.S. reservoir associated with Sin Nombre virus.",
      "State agencies in New Mexico and California also emphasize deer mouse exposure in prevention guidance.",
      "Reservoir range does not prove current infection in rodents at a specific site."
    ],
    sections: [
      {
        heading: "What deer mouse distribution means",
        body: [
          "Deer mice are widespread, and only some individual animals may be infected. Human risk usually involves exposure to contaminated urine, droppings, saliva, or nesting materials, especially when dust is disturbed.",
          "A deer mouse map can support prevention education, but it cannot replace inspection, cleanup guidance, or public health consultation."
        ]
      },
      {
        heading: "Why this page avoids exact risk scores",
        body: [
          "There is no public static dataset that can turn a reservoir range into an exact household risk score. Weather, rodent abundance, building conditions, ventilation, and cleanup behavior all matter."
        ]
      }
    ],
    sourceIds: ["cdc-about", "cdc-eid-reservoir-table", "nmdoh-hantavirus", "cdph-hantavirus"],
    relatedPaths: ["/hantavirus-risk-map", "/prevention/cleaning-mouse-droppings", "/where-is-hantavirus-found"]
  },
  "where-is-hantavirus-found": {
    key: "where-is-hantavirus-found",
    path: "/where-is-hantavirus-found",
    title: "Where Is Hantavirus Found?",
    description:
      "Plain-English geography of hantavirus in the Americas, Europe, Asia, and selected reservoir regions.",
    eyebrow: "Geography",
    intro:
      "Hantaviruses are found worldwide in rodent reservoirs, but the viruses, syndromes, and public health reporting systems differ by region.",
    keyPoints: [
      "In the Americas, New World hantaviruses can cause hantavirus pulmonary or cardiopulmonary syndrome.",
      "In Europe and Asia, hantaviruses are commonly discussed in relation to hemorrhagic fever with renal syndrome.",
      "Local public health agencies are the right source for local case reporting and exposure investigations."
    ],
    sections: [
      {
        heading: "United States",
        body: [
          "CDC surveillance began after the 1993 Four Corners outbreak. Public U.S. case geography is state-level, and most reported cases have occurred west of the Mississippi River."
        ]
      },
      {
        heading: "Europe and South America",
        body: [
          "ECDC reports EU/EEA orthohantavirus surveillance, often involving Puumala virus and bank voles. PAHO/WHO and WHO provide regional and outbreak context for the Americas, including Andes virus in South America."
        ]
      }
    ],
    sourceIds: ["cdc-reported-cases", "ecdc-factsheet", "paho-alert-2025", "who-factsheet-2026"],
    relatedPaths: ["/united-states", "/europe", "/south-america"]
  },
  symptoms: {
    key: "symptoms",
    path: "/symptoms",
    title: "Hantavirus Symptoms: Educational Overview",
    description:
      "Educational overview of hantavirus symptoms with clear medical disclaimer and source links.",
    eyebrow: "Health education",
    intro:
      "This page is educational and cannot diagnose illness. Hantavirus symptoms can overlap with many other conditions, and severe disease can progress quickly.",
    keyPoints: [
      "CDC describes early HPS symptoms such as fatigue, fever, and muscle aches.",
      "Later HPS symptoms can include coughing and shortness of breath as the lungs are affected.",
      "If symptoms follow rodent exposure, contact a healthcare provider or public health authority and describe the exposure."
    ],
    sections: [
      {
        heading: "Why symptoms are not enough",
        body: [
          "Symptoms alone cannot confirm hantavirus infection. Clinical evaluation, exposure history, and appropriate testing are needed.",
          "Difficulty breathing or rapidly worsening illness requires urgent medical attention."
        ]
      },
      {
        heading: "Exposure history matters",
        body: [
          "Tell healthcare professionals about contact with rodents, droppings, urine, saliva, nests, enclosed dusty spaces, cabins, sheds, vehicles, or occupational exposures."
        ]
      }
    ],
    sourceIds: ["cdc-about", "cdc-surveillance", "cdc-prevention"],
    relatedPaths: ["/prevention", "/prevention/cleaning-mouse-droppings", "/sources-methodology"]
  },
  prevention: {
    key: "prevention",
    path: "/prevention",
    title: "Hantavirus Prevention",
    description:
      "General hantavirus prevention education based on CDC and state public health guidance.",
    eyebrow: "Prevention",
    intro:
      "Prevention focuses on reducing contact with wild rodents and avoiding dust from contaminated urine, droppings, saliva, and nesting materials.",
    keyPoints: [
      "Keep rodents out by sealing openings, removing food sources, and reducing shelter.",
      "Use safe wet-cleaning methods rather than sweeping or vacuuming dry droppings.",
      "Follow local public health or occupational safety guidance for heavy infestations or workplace exposures."
    ],
    sections: [
      {
        heading: "Home and cabin prevention",
        body: [
          "Air out enclosed spaces before cleaning, look for evidence of rodent activity, and clean contaminated materials using disinfectant-based methods.",
          "Store food in rodent-proof containers and address entry points that allow rodents into buildings."
        ]
      },
      {
        heading: "When to ask for help",
        body: [
          "Heavy infestations, contaminated ventilation systems, and workplace cleanup may require professional pest control, public health guidance, or occupational safety support."
        ]
      }
    ],
    sourceIds: ["cdc-prevention", "cdc-rodent-cleanup", "cdph-hantavirus", "nmdoh-hantavirus"],
    relatedPaths: ["/prevention/cleaning-mouse-droppings", "/symptoms", "/deer-mouse-hantavirus-map"]
  },
  "cleaning-mouse-droppings": {
    key: "cleaning-mouse-droppings",
    path: "/prevention/cleaning-mouse-droppings",
    title: "Cleaning Mouse Droppings Safely",
    description:
      "CDC-based educational guidance for cleaning mouse droppings, nests, dead rodents, vehicles, and heavy contamination while reducing dust exposure.",
    eyebrow: "Prevention / Cleaning",
    intro:
      "People searching for cleaning mouse droppings and hantavirus usually need practical safety steps. This page summarizes CDC-based public guidance for reducing dust exposure from rodent urine, droppings, nests, and contaminated materials, then links back to official sources for full details.",
    keyPoints: [
      "Do not sweep or vacuum dry mouse droppings, urine, or nests before disinfection.",
      "Ventilate enclosed spaces before cleanup when CDC guidance calls for it, especially cabins, sheds, garages, vehicles, and storage areas.",
      "Use disinfectant or a CDC-described bleach solution, wet contaminated material thoroughly, and allow contact time before wiping.",
      "This page is prevention education, not medical advice, diagnosis, emergency guidance, or a substitute for local public health or occupational safety direction."
    ],
    sections: [
      {
        heading: "Before you clean mouse droppings",
        body: [
          "Treat visible rodent droppings, urine, nests, dead rodents, and contaminated dust as a cleanup situation rather than a dry sweeping job. CDC guidance focuses on avoiding airborne dust that may contain material from rodent urine, droppings, saliva, or nests.",
          "If the space is enclosed, such as a cabin, shed, garage, storage room, vehicle, camper, or workplace area, ventilate first when official guidance calls for it and keep people who do not need to be involved away from the cleanup area."
        ]
      },
      {
        heading: "Basic CDC-style cleanup flow",
        body: [
          "Put on rubber or plastic gloves. Wet droppings, urine, nests, or contaminated surfaces with disinfectant or a CDC-described bleach solution. Let the material soak for the recommended contact time before wiping it up with towels or disposable materials.",
          "Place contaminated waste in covered trash according to local rules, then clean and disinfect nearby surfaces. Wash hands after removing gloves. Follow the CDC page directly for details on dead rodents, nests, porous materials, vehicles, and heavy infestations because the steps differ by situation."
        ]
      },
      {
        heading: "What not to do",
        body: [
          "Do not sweep, vacuum, or use compressed air on dry droppings or nests before wet disinfection. Those actions can stir contaminated dust into the air, which is the exposure pathway CDC guidance is designed to reduce.",
          "Do not treat a rodent reservoir map or a nearby case summary as proof that your home, cabin, workplace, campsite, or vehicle is contaminated. Cleanup decisions should be based on actual rodent evidence and official prevention guidance, not exact-risk claims."
        ]
      },
      {
        heading: "When cleanup is higher risk",
        body: [
          "Heavy rodent infestation, contaminated ventilation systems, workplace cleanup, repeated rodent entry, dead rodents in difficult spaces, or large contaminated storage areas are reasons to involve professional pest control, local public health, occupational safety authorities, or building management.",
          "If someone develops concerning symptoms after rodent exposure, especially breathing difficulty or rapidly worsening illness, this site cannot diagnose the cause. Contact healthcare or emergency services and mention the rodent exposure history."
        ]
      },
      {
        heading: "How this relates to the hantavirus map",
        body: [
          "The hantavirus map and tracker show reviewed source summaries, selected official alerts, and reservoir ecology. They do not show live household risk, infected mice, or patient locations.",
          "Use this cleanup guide for practical prevention context, then use the source and methodology page to understand why map layers avoid exact local risk scoring."
        ]
      }
    ],
    sourceIds: ["cdc-rodent-cleanup", "cdc-prevention", "cdph-hantavirus", "nmdoh-hantavirus"],
    relatedPaths: ["/prevention", "/symptoms", "/hantavirus", "/deer-mouse-hantavirus-map", "/sources-methodology"]
  },
  "sources-methodology": {
    key: "sources-methodology",
    path: "/sources-methodology",
    title: "Sources and Methodology",
    description:
      "How Hantavirus Maps reviews sources, separates data layers, and avoids unsupported precision.",
    eyebrow: "Transparency",
    intro:
      "Hantavirus Maps is a static educational data project. It uses reviewed official-source summaries and makes uncertainty visible instead of implying exact local risk.",
    keyPoints: [
      "Every map record points to source IDs in the registry.",
      "The site separates reported cases, official alerts, and reservoir evidence.",
      "The site avoids county-level CDC case claims, real-time tracking claims, and exact risk scores.",
      "Reviewed-only feeds and outbreak notes publish source review updates, not unverified case rumors."
    ],
    sections: [
      {
        heading: "Source taxonomy",
        body: [
          "Primary public health sources include CDC, WHO, PAHO/WHO, ECDC, and state or national health departments. These sources are preferred for case definitions, official alerts, prevention guidance, and public surveillance summaries.",
          "Supporting scientific or ecology sources may be used for reservoir context, but they are not converted into case counts, infected-animal maps, or exact local risk claims."
        ],
        bullets: [
          "Reported case summaries: official surveillance or agency summary pages, usually state-level or country-level.",
          "Official alerts: reviewed agency notices about selected events, outbreaks, or public health advisories.",
          "Reservoir ecology: host and habitat context that explains where exposure can be biologically plausible, not where human cases are occurring."
        ]
      },
      {
        heading: "Inclusion rules",
        body: [
          "Preferred sources are CDC, WHO, PAHO/WHO, ECDC, state health departments, and peer-reviewed CDC publications.",
          "A source must be public, linkable, and clear enough to summarize without guessing.",
          "Each public map or guide page should be able to trace its claims back to one or more source IDs in the registry."
        ]
      },
      {
        heading: "Review workflow",
        body: [
          "New candidate sources are first treated as review material. They can be recorded in internal reports or reviewed-only feeds before they are promoted into public data snapshots.",
          "A source is promoted only when the wording, geography, time period, limitations, and agency status are clear enough to summarize conservatively.",
          "If a source changes, becomes unavailable, or introduces uncertainty, public copy should prefer the limitation over an unsupported inference."
        ]
      },
      {
        heading: "Exclusion rules",
        body: [
          "The MVP excludes rumor-based reports, unsourced social posts, scraped news-only case maps, and unsupported county-level precision.",
          "Reservoir ecology is never converted into exact human risk.",
          "The site does not publish patient locations, suspected cases from unofficial media, travel-clearance advice, or live current-case counters."
        ]
      },
      {
        heading: "Feed and tracker limits",
        body: [
          "The reviewed RSS and JSON feeds are site-update feeds. They may announce reviewed official-source notes, methodology updates, and new educational pages.",
          "They are not live surveillance feeds, public health reporting systems, emergency notification services, or complete outbreak datasets."
        ]
      }
    ],
    sourceIds: [
      "cdc-reported-cases",
      "cdc-surveillance",
      "cdc-about",
      "who-factsheet-2026",
      "ecdc-factsheet",
      "paho-alert-2025"
    ],
    relatedPaths: ["/about", "/", "/hantavirus-risk-map"]
  },
  about: {
    key: "about",
    path: "/about",
    title: "About Us - Hantavirus Maps",
    description:
      "About Hantavirus Maps, an educational source-linked public health map and data explanation project.",
    eyebrow: "About Us",
    intro:
      "Hantavirus Maps is a static, source-linked public health explanation site. It is designed to help readers find official context without implying live local case tracking.",
    keyPoints: [
      "The homepage keyword and product focus is hantavirus map.",
      "The project prioritizes source transparency, conservative language, and clear limits.",
      "It is not medical advice, diagnosis, emergency guidance, or a substitute for professional public health information."
    ],
    sections: [
      {
        heading: "What this site does",
        body: [
          "Hantavirus Maps organizes official-source summaries, selected public health alerts, and rodent reservoir ecology into readable map and guide pages.",
          "This project treats hantavirus as a serious public health topic that deserves calm explanation. It avoids sensational live-local, exact-risk, and unsupported county-precision claims."
        ]
      },
      {
        heading: "What this site does not do",
        body: [
          "Hantavirus Maps does not provide medical diagnosis, emergency advice, treatment advice, live case reporting, or exact personal risk scoring.",
          "If you are ill after rodent exposure, have trouble breathing, or need case reporting guidance, contact healthcare professionals, emergency services, or local public health authorities."
        ]
      },
      {
        heading: "Contact",
        body: [
          `For site questions, corrections, source suggestions, or policy requests, contact ${SUPPORT_EMAIL}.`
        ]
      },
      {
        heading: "Deployment model",
        body: [
          "The site is built as a static Next.js export for Cloudflare Workers assets. Data files are reviewed JSON snapshots and no server runtime or paid API is required."
        ]
      }
    ],
    sourceIds: ["cdc-reported-cases", "cdc-prevention", "who-factsheet-2026"],
    relatedPaths: ["/sources-methodology", "/privacy-policy", "/terms-of-use"]
  },
  privacyPolicy: {
    key: "privacyPolicy",
    path: "/privacy-policy",
    title: "Privacy Policy",
    description:
      "Privacy policy for Hantavirus Maps, including analytics, cookies, external links, and contact information.",
    eyebrow: "Privacy",
    intro:
      "This Privacy Policy explains how Hantavirus Maps handles information when you visit this educational public health data site.",
    keyPoints: [
      "We do not ask users to submit personal health information through this website.",
      "The site may use basic hosting, security, analytics, or performance logs to keep the service reliable.",
      `Privacy questions can be sent to ${SUPPORT_EMAIL}.`
    ],
    sections: [
      {
        heading: "Information we do not collect intentionally",
        body: [
          "Hantavirus Maps is an informational website. It does not provide accounts, patient intake, diagnosis tools, case reporting forms, or emergency services.",
          "Do not send personal medical details, protected health information, urgent symptoms, or emergency requests through this website or by email."
        ]
      },
      {
        heading: "Technical information",
        body: [
          "Like most websites, our hosting and security providers may process basic technical information such as IP address, browser type, requested URL, timestamps, referrer, and security events.",
          "This information is used for site delivery, abuse prevention, debugging, performance measurement, and security."
        ]
      },
      {
        heading: "Cookies and analytics",
        body: [
          "The current static site does not require user accounts or login cookies. It uses Google Analytics and Microsoft Clarity to understand aggregate site usage, page performance, and usability patterns.",
          "Analytics providers may process technical information such as page URL, device/browser information, approximate location derived from network data, interaction events, and cookie or similar identifiers according to their own policies.",
          "Third-party map tiles and external links may be requested by your browser when you use the interactive map or open source links. Those providers may process requests under their own policies."
        ]
      },
      {
        heading: "External links",
        body: [
          "The site links to CDC, WHO, PAHO/WHO, ECDC, state health departments, and other external sources. We are not responsible for the privacy practices or content of external websites."
        ]
      },
      {
        heading: "Contact",
        body: [
          `For privacy questions or requests, email ${SUPPORT_EMAIL}.`
        ]
      }
    ],
    sourceIds: [],
    relatedPaths: ["/about", "/terms-of-use", "/sources-methodology"]
  },
  termsOfUse: {
    key: "termsOfUse",
    path: "/terms-of-use",
    title: "Terms of Use",
    description:
      "Terms of use for Hantavirus Maps, including educational-use limits, medical disclaimer, and source limitations.",
    eyebrow: "Terms",
    intro:
      "These Terms of Use describe the conditions for using Hantavirus Maps. By using the site, you agree to these terms.",
    keyPoints: [
      "The site is for educational and informational use only.",
      "It is not medical advice, diagnosis, treatment advice, emergency guidance, or a case reporting system.",
      `Questions about these terms can be sent to ${SUPPORT_EMAIL}.`
    ],
    sections: [
      {
        heading: "Educational use only",
        body: [
          "Hantavirus Maps summarizes source-linked public health information, selected official alerts, and reservoir ecology. It is intended to help readers understand available public sources and their limitations.",
          "The site does not provide clinical judgment, public health determinations, emergency response, occupational safety approval, pest-control services, or legal advice."
        ]
      },
      {
        heading: "Medical and emergency disclaimer",
        body: [
          "Do not use this website to diagnose symptoms, decide whether you have hantavirus infection, delay medical care, or determine whether a specific home, workplace, cabin, campsite, or county is safe.",
          "If you are ill after rodent exposure, have difficulty breathing, or believe you may have an emergency, contact healthcare professionals, emergency services, or local public health authorities."
        ]
      },
      {
        heading: "Data and map limitations",
        body: [
          "Map markers and pages are reviewed snapshots, not live surveillance. Public case geography may be state-level or otherwise limited by official sources.",
          "Reservoir ecology does not prove infected animals, human cases, or exact local risk. Official agencies remain the authoritative source for current investigations and local guidance."
        ]
      },
      {
        heading: "Source links and changes",
        body: [
          "External source pages may change, move, or become unavailable. Hantavirus Maps may update, correct, remove, or revise content at any time.",
          "If you notice a source issue or correction, email the details to the support contact."
        ]
      },
      {
        heading: "Contact",
        body: [
          `For questions about these Terms of Use, email ${SUPPORT_EMAIL}.`
        ]
      }
    ],
    sourceIds: [],
    relatedPaths: ["/privacy-policy", "/about", "/sources-methodology"]
  }
} satisfies Record<string, ContentPageData>;

export type ContentPageKey = keyof typeof CONTENT_PAGES;

export function getContentPage(key: ContentPageKey) {
  return CONTENT_PAGES[key];
}

export function getRouteForPath(path: string) {
  return ALL_SITE_ROUTES.find((route) => route.path === path);
}
