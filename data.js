/* ==========================================================================
   Geoff Fox, site data
   HOW TO ADD WORK
   1. Place a file in assets/images/work/
      (optional 1024px texture is not required unless you reuse a 3D scene).
   2. Add an object to WORK below.
      `set` must be "floor", "circulation", or "shortlist".
      Set home: true to feature it on the home page (keep this to about 6).
   3. That’s it. The work index, filters, lightbox, and project page all
      read from this file.

   HOW TO ADD PHOTOGRAPHS
   1. Place a file in assets/images/photography/
   2. Add an object to PHOTOGRAPHY below (file, alt, caption, optional aspect).
   ========================================================================== */

const SITE = {
  name: "Geoff Fox",
  role: "Creative Marketing & Brand Strategist",
  city: "Philadelphia, PA",
  email: "Foxgeoffbusiness@gmail.com",
  linkedin: "https://www.linkedin.com/in/geoffrey-fox/",
  /* Set this to the live origin once the site is hosted, with no trailing slash.
     Examples: "https://username.github.io/repo" or "https://yourdomain.com"
     Leave "" for relative paths until then. This is the only place to set it. */
  url: "https://geoffcfox.github.io",
  resume: "assets/Geoff-Fox-Resume.pdf",
  portrait: "assets/images/geoff-fox-portrait.jpg",
  portraitAlt: "Geoff Fox, standing outdoors in a gray coat, smiling in front of the Washington Monument."
};

const CATEGORIES = [
  {
    id: "floor",
    label: "On the floor",
    blurb: "Signs, banners, and expo ads I have made to hold up in a busy room."
  },
  {
    id: "circulation",
    label: "In circulation",
    blurb: "Invitations, announcements, social posts, and print ads. Work that has to travel without losing its voice."
  },
  {
    id: "shortlist",
    label: "For the shortlist",
    blurb: "A sample of the covers, title pages, and proposal decks I design for pursuits across a wide range of markets and clients. Client names and identifying marks have been withheld."
  }
];

const SET_LABEL = {
  floor: "On the floor",
  circulation: "In circulation",
  shortlist: "For the shortlist"
};

const WORK = [
  {
    id: "aegis-court-sign",
    title: "Court board",
    meta: "Sponsorship signage",
    set: "floor",
    featured: true,
    file: "aegis-court-sign.jpg",
    alt: "Court sponsorship board reading Court 6 Aegis, designed by Geoff Fox.",
    caption: "A sponsorship board designed to read clearly from the court and the stands."
  },
  {
    id: "cvu-retractable-banner",
    title: "Retractable banner",
    meta: "Industry event",
    set: "floor",
    featured: true,
    file: "cvu-retractable-banner.jpg",
    alt: "Tall retractable event banner designed by Geoff Fox.",
    caption: "A tall banner I designed for a busy industry event, built to read in a crowded aisle."
  },
  {
    id: "cvu-pickleball-banner",
    title: "Title banner",
    meta: "Live tournament",
    set: "floor",
    featured: false,
    file: "cvu-pickleball-banner.jpg",
    alt: "Title sponsorship banner for a pickleball challenge, designed by Geoff Fox.",
    caption: "Title-sponsor graphic for a tournament floor, pairing a mark with a venue-scale format."
  },
  {
    id: "safet-coach-ad",
    title: "Expo advertisement",
    meta: "Construction technology",
    set: "floor",
    featured: false,
    file: "safet-coach-ad.jpg",
    alt: "Expo advertisement for a construction safety product, designed by Geoff Fox.",
    caption: "A compact expo ad meant to be taken in at a glance, then taken home as a QR."
  },

  {
    id: "philly-new-arena",
    home: true,
    homeOrder: 4,
    title: "Philadelphia's New Arena",
    meta: "Outreach event flyer",
    set: "floor",
    file: "philly-new-arena-flyer.jpg",
    webp: "philly-new-arena-flyer.webp",
    alt: "PACT+ outreach event flyer for Philadelphia's New Arena, for local and small construction companies, on Wednesday, November 18 at Xfinity Mobile Arena.",
    caption: "A PACT+ outreach event flyer I designed for local and small construction companies, about Philadelphia's New Arena. The event is Wednesday, November 18, at Xfinity Mobile Arena, with networking from 12:30 p.m. to 1:30 p.m. and a presentation from 1:30 p.m. to 2:30 p.m."
  },


  {
    id: "turner-nyc-skyline-banner",
    home: true,
    homeOrder: 1,
    title: "Turner skyline banner",
    meta: "Wide banner",
    set: "circulation",
    wide: true,
    file: "turner-nyc-banner.jpg",
    webp: "turner-nyc-banner.webp",
    alt: "Wide Turner banner with the Turner logo over a paper-cut style New York City skyline, including the Statue of Liberty, the Empire State Building, a plane, a hot air balloon, and a sun.",
    caption: "A wide banner I designed for Turner, with the Turner logo over a paper-cut style New York City skyline."
  },
  {
    id: "share-the-warmth",
    home: true,
    homeOrder: 2,
    title: "Share the Warmth",
    meta: "Winter clothing drive flyer",
    set: "circulation",
    file: "share-the-warmth-1.jpg",
    webp: "share-the-warmth-1.webp",
    alt: "Share the Warmth winter clothing drive flyer presented by MIND and Wohlsen, with coats, hats, gloves, scarves, socks, and thermal layers hanging on a line.",
    caption: "A winter clothing drive flyer I designed, presented by MIND and Wohlsen. The drive runs from November 30, 2026 to January 4, 2027.",
    pages: [
      {
        file: "share-the-warmth-1.jpg",
        webp: "share-the-warmth-1.webp",
        alt: "Share the Warmth winter clothing drive flyer presented by MIND and Wohlsen, with coats, hats, gloves, scarves, socks, and thermal layers hanging on a line.",
        caption: "Front, presented by MIND and Wohlsen"
      },
      {
        file: "share-the-warmth-2.jpg",
        webp: "share-the-warmth-2.webp",
        alt: "Share the Warmth winter clothing drive flyer presented by MIND, ending with a thank you for your kindness.",
        caption: "A second page, with thanks"
      }
    ]
  },

  {
    id: "inclusion-week-fair",
    home: true,
    homeOrder: 7,
    title: "Apprenticeship Awareness Fair",
    meta: "Event flyer",
    set: "circulation",
    file: "inclusion-week-flyer.jpg",
    webp: "inclusion-week-flyer.webp",
    alt: "Flyer for the Construction Inclusion Week Apprenticeship Awareness Fair, hosted by Turner Construction Company and Gilbane Building Company, on Thursday, October 15, 2026.",
    caption: "A flyer I designed for the Construction Inclusion Week Apprenticeship Awareness Fair, hosted by Turner Construction Company and Gilbane Building Company. It takes place on Thursday, October 15, 2026, from 10 a.m. to 2 p.m. at Gilbane's office, with registration by QR code."
  },
  {
    id: "holiday-card-2026",
    home: true,
    homeOrder: 3,
    title: "2026 Holiday Card",
    meta: "Holiday card",
    set: "circulation",
    file: "holiday-card-front.jpg",
    webp: "holiday-card-front.webp",
    alt: "Front of a 2026 holiday card: a snowy city skyline at dusk, with a crane lifting a wreath beside a building under construction.",
    caption: "A 2026 holiday card I designed. The front is a snowy city skyline with a crane lifting a wreath, the inside leaves room for a greeting, and the back looks out on boathouses along the water.",
    stage: "stack",
    pages: [
      {
        file: "holiday-card-front.jpg",
        webp: "holiday-card-front.webp",
        alt: "Front of a 2026 holiday card: a snowy city skyline at dusk, with a crane lifting a wreath beside a building under construction.",
        caption: "Front"
      },
      {
        file: "holiday-card-inside.jpg",
        webp: "holiday-card-inside.webp",
        alt: "Inside of the 2026 holiday card: a cream panel with a gold border, holly, and line drawings of a crane and a steel frame, leaving room for a greeting.",
        caption: "Inside"
      },
      {
        file: "holiday-card-back.jpg",
        webp: "holiday-card-back.webp",
        alt: "Back of the 2026 holiday card: snowy boathouses along a river, with a city skyline and a crane in the distance.",
        caption: "Back"
      }
    ]
  },
  {
    id: "intern-welcome-board",
    title: "Intern class welcome",
    meta: "Recruiting / internal",
    set: "circulation",
    featured: false,
    file: "intern-welcome-board.jpg",
    alt: "Welcome board for an intern class, designed by Geoff Fox.",
    caption: "A welcome board for a new intern class, with names and faces, so it feels like a cohort."
  },
  {
    id: "pickleball-poster",
    home: true,
    homeOrder: 6,
    title: "Pickleball challenge",
    meta: "Event poster",
    set: "circulation",
    featured: true,
    file: "pickleball-poster.jpg",
    alt: "Poster for a pickleball challenge, designed by Geoff Fox.",
    caption: "A poster for a company tournament: enough energy to post, enough information to show up."
  },
  {
    id: "juneteenth-banner",
    title: "Juneteenth commemoration",
    meta: "Announcement",
    set: "circulation",
    featured: true,
    file: "juneteenth-banner.jpg",
    alt: "Commemorative Juneteenth graphic, designed by Geoff Fox.",
    caption: "A commemorative graphic for an internal observance, designed to be shared widely."
  },
  {
    id: "levis-stadium",
    title: "Levi’s Stadium",
    meta: "LinkedIn graphic",
    set: "circulation",
    featured: true,
    file: "levis-stadium-linkedin.jpg",
    alt: "LinkedIn graphic about Levi’s Stadium, designed by Geoff Fox.",
    caption: "A social graphic built around a single completed project, sized for the feed."
  },
  {
    id: "community-support-ad",
    home: true,
    homeOrder: 5,
    thumbPos: "74% 50%",
    title: "Turner community sponsorship ads",
    meta: "Sponsor advertisements",
    set: "circulation",
    file: "nemours-support-ad.jpg",
    webp: "nemours-support-ad.webp",
    alt: "Turner advertisement reading Proud to support Nemours Children's Health, with a family at a table in a bright room.",
    caption: "Sponsor advertisements I designed for Turner. One says proud to support Nemours Children's Health, and the other is a proud sponsor ad for the Geisinger Health Foundation, with the line Building a Healthier Future Together.",
    stage: "stack",
    pages: [
      {
        file: "nemours-support-ad.jpg",
        webp: "nemours-support-ad.webp",
        alt: "Turner advertisement reading Proud to support Nemours Children's Health, with two women and a boy at a table in a bright room.",
        caption: "Proud to support Nemours Children's Health"
      },
      {
        file: "geisinger-sponsor.jpg",
        webp: "geisinger-sponsor.webp",
        alt: "Turner advertisement reading Building a Healthier Future Together, proud sponsor of the Geisinger Health Foundation, with banners and workers carrying a signed beam.",
        caption: "Building a Healthier Future Together, for the Geisinger Health Foundation"
      }
    ]
  },
  {
    id: "pmpx-summer",
    title: "Summer team meeting",
    meta: "Internal graphic",
    set: "circulation",
    featured: false,
    file: "pmpx-summer.jpg",
    alt: "Graphic for a summer project-manager meeting, designed by Geoff Fox.",
    caption: "A meeting graphic for a regional gathering of project teams."
  },
  {
    id: "winter-newsletter",
    title: "Winter newsletter",
    meta: "Publication cover",
    set: "circulation",
    featured: false,
    file: "winter-newsletter.jpg",
    alt: "Cover of a winter newsletter, designed by Geoff Fox.",
    caption: "The cover for a seasonal internal newsletter. I wanted one still that could carry the whole issue."
  },
  {
    id: "meeting-deck-winter",
    title: "Winter regional meeting",
    meta: "Presentation",
    set: "circulation",
    featured: false,
    file: "meeting-deck-winter.jpg",
    alt: "Title slide for a winter regional meeting, designed by Geoff Fox.",
    caption: "Title slide for a regional meeting deck, aligned to the same visual system as the leave-behinds."
  },
  {
    id: "social-style-guide",
    title: "Social style guide",
    meta: "System / deck",
    set: "circulation",
    featured: false,
    file: "social-style-guide.jpg",
    alt: "Pages from a social media style guide, designed by Geoff Fox.",
    caption: "A short guide for how the brand should show up on social, with examples, not just rules."
  },
  {
    id: "market-analysis",
    title: "Market analysis",
    meta: "Presentation",
    set: "circulation",
    featured: false,
    file: "market-analysis-deck.jpg",
    alt: "Title slide from a market analysis presentation, designed by Geoff Fox.",
    caption: "A market-analysis title designed to feel like a chapter, not a template."
  },
  {
    id: "passport-burj",
    title: "Visa series, I",
    meta: "Illustrated campaign",
    set: "circulation",
    featured: true,
    file: "passport-burj-khalifa.jpg",
    alt: "Illustrated visa-style poster featuring a city skyline, designed by Geoff Fox.",
    caption: "One of a pair of illustrated “visa” posters. A campaign idea made to feel like something you would keep."
  },
  {
    id: "passport-unity",
    title: "Visa series, II",
    meta: "Illustrated campaign",
    set: "circulation",
    featured: false,
    file: "passport-statue-unity.jpg",
    alt: "Illustrated visa-style poster featuring a monumental statue, designed by Geoff Fox.",
    caption: "The companion poster in the visa series, built on the same paper, type, and stamp language."
  },
  {
    id: "therapy-cover",
    title: "Therapy suite",
    meta: "Healthcare · confidential",
    set: "shortlist",
    featured: false,
    confidential: true,
    file: "therapy-room-cover.jpg",
    alt: "Proposal cover for a healthcare therapy suite, with identifying marks removed.",
    caption: "Cover for a healthcare therapy-suite pursuit. Identifying details withheld."
  },
  {
    id: "abstract-cover",
    title: "Abstract cover system",
    meta: "Healthcare · confidential",
    set: "shortlist",
    featured: false,
    confidential: true,
    file: "healthcare-ag-cover.jpg",
    alt: "Abstract proposal cover system for a healthcare pursuit, with identifying marks removed.",
    caption: "A typographic and formal cover system for a healthcare pursuit."
  },
  {
    id: "pediatric-cover",
    title: "Pediatric care",
    meta: "Healthcare · confidential",
    set: "shortlist",
    featured: true,
    confidential: true,
    file: "pediatric-care-cover.jpg",
    alt: "Proposal cover for a pediatric care project, with identifying marks removed.",
    caption: "Cover for a pediatric-care pursuit, built around plan, color, and a quiet photograph."
  },
  {
    id: "imaging-cover",
    title: "Imaging renovation",
    meta: "Healthcare · confidential",
    set: "shortlist",
    featured: false,
    confidential: true,
    file: "mri-cover-clean.jpg",
    alt: "Proposal cover for a healthcare imaging renovation, with identifying marks removed.",
    caption: "Cover for an imaging-renovation pursuit. Identifying details withheld."
  },
  {
    id: "ir-suite-cover",
    title: "Interventional suite",
    meta: "Healthcare · confidential",
    set: "shortlist",
    featured: false,
    confidential: true,
    file: "ir-suite-cover-design-cropped.jpg",
    alt: "Proposal cover for an interventional suite, with identifying marks removed.",
    caption: "A cover for an interventional-suite pursuit, reduced to color, type, and a single symbol."
  },
  {
    id: "pavilion-cover",
    title: "Medical pavilion",
    meta: "Healthcare · confidential",
    set: "shortlist",
    featured: false,
    confidential: true,
    file: "pavilion-cover-clean.jpg",
    alt: "Proposal cover for a medical pavilion, with identifying marks removed.",
    caption: "Cover for a medical-pavilion pursuit, with a mid-construction photograph held in an arc of color."
  },
  {
    id: "hall-cover",
    title: "Historic hall",
    meta: "Higher education · confidential",
    set: "shortlist",
    featured: true,
    confidential: true,
    file: "hall-cover-clean.jpg",
    alt: "Proposal cover for a historic hall in higher education, with identifying marks removed.",
    caption: "Cover for a higher-education hall pursuit. Identifying details withheld."
  },
  {
    id: "pitch-title",
    title: "Brand activation pitch",
    meta: "Title page · confidential",
    set: "shortlist",
    featured: true,
    confidential: true,
    file: "pitch-title-clean.jpg",
    alt: "Title page for a brand activation pitch, with identifying marks removed.",
    caption: "Title page for a brand-activation pitch. Identifying details withheld."
  }
];

/* Applications I use. Edit this array to add or remove tools.
   Icons live in assets/icons/ (Simple Icons SVGs). Leave icon empty for a wordmark badge. */
const TOOLS = [
  { name: "Lightroom", icon: "adobelightroom" },
  { name: "Photoshop", icon: "adobephotoshop" },
  { name: "InDesign", icon: "adobeindesign" },
  { name: "Illustrator", icon: "adobeillustrator" },
  { name: "Fresco", icon: "adobefresco" },
  { name: "After Effects", icon: "adobeaftereffects" },
  { name: "Premiere Pro", icon: "adobepremierepro" },
  { name: "Canva", icon: "canva" },
  { name: "Figma", icon: "figma" },
  { name: "GitHub", icon: "github" },
  { name: "Excel", icon: "microsoftexcel" },
  { name: "PowerPoint", icon: "microsoftpowerpoint" }
];

const SKILLS = [
  "RFP and RFQ books",
  "Proposal covers and pursuit decks",
  "Campaigns and social graphics",
  "Event and sponsorship signage",
  "Newsletters and internal communications",
  "Photography and videography",
  "Event planning and on-site coordination",
  "Brand consistency across deliverables"
];

const EXPERIENCE = [
  {
    role: "Marketing Coordinator II",
    org: "Turner Construction Company",
    place: "Philadelphia",
    dates: "Dec 2025 to Present",
    points: [
      "Coordinate and develop RFP, RFQ, and proposal materials, including covers, project experience, team qualifications, and approach sections.",
      "Create collateral, presentations, signage, newsletters, and internal communications.",
      "Support interview preparation and pursuit efforts with client-facing presentation materials and graphics.",
      "Photograph and film project milestones, company events, and recruiting, and help plan and run the events themselves."
    ]
  },
  {
    role: "Marketing Coordinator Intern",
    org: "Turner Construction Company",
    place: "Bridgewater, NJ",
    dates: "Jun 2025 to Aug 2025",
    points: [
      "Assisted the business development and marketing team with proposals, presentations, and marketing materials for live pursuits."
    ]
  },
  {
    role: "Manager on Duty, Front Desk",
    org: "Equinox Sports Club",
    place: "New York, NY",
    dates: "Aug 2022 to Dec 2024",
    points: [
      "Led a thirty-person front desk team, including onboarding, skill development, and day-to-day service standards.",
      "Designed a training program that reduced onboarding time by 30 percent, with performance tracking to keep the program honest."
    ]
  },
  {
    role: "Lifeguard",
    org: "Universal Volcano Bay",
    place: "Orlando, FL",
    dates: "Dec 2019 to Jun 2020",
    points: [
      "Conducted safety and compliance training, and provided emergency-response and first-aid instruction for staff."
    ]
  },
  {
    role: "VDC/BIM Engineering Intern",
    org: "Turner Construction Company",
    place: "Orlando, FL",
    dates: "Mar 2019 to Aug 2019",
    points: [
      "Built 3D models of buildings in BIM (Building Information Modeling). BIM uses detailed 3D models to plan and coordinate a building before it goes up.",
      "Ran clash detection in coordination software to make sure trade systems do not collide before construction.",
      "Conducted site visits to assess training needs for safety and efficiency improvements."
    ]
  }
];

const EDUCATION = [
  {
    school: "Full Sail University",
    credential: "B.S. Business, concentration in Digital Marketing",
    dates: "October 2026",
    note: "Valedictorian. Course Director Award for Leadership & Organization."
  },
  {
    school: "Clark University",
    credential: "Coursework",
    dates: "2017 to 2018"
  },
  {
    school: "The Masters School",
    credential: "Diploma",
    dates: "2017"
  }
];

const AWARDS = [
  {
    title: "Valedictorian",
    detail: "Graduated as Valedictorian of the B.S. in Business program at Full Sail University, with a concentration in Digital Marketing."
  },
  {
    title: "Course Director Award for Leadership & Organization",
    detail: "Recognized for leadership, organization, and performance throughout the program."
  },
  {
    title: "Employee training program",
    detail: "Designed and ran a training program at Equinox that reduced onboarding time by 30 percent."
  }
];

const ASIDE = [
  "Habitat for Humanity volunteer, Cambodia.",
  "Varsity captain in lacrosse and soccer; ten varsity letters."
];

/* Photographs: add files to assets/images/photography/ and an entry here.
   Example:
   { id: "jobsite-01", file: "jobsite-01.jpg", webp: "jobsite-01.webp", alt: "...", caption: "...", span: "6", home: true }
*/
const PHOTOGRAPHY = [
  {
    id: "group-briefing",
    kind: "photo",
    title: "Before the outing",
    file: "group-briefing.jpg",
    webp: "group-briefing.webp",
    alt: "An organizer briefing a group indoors before a golf outing.",
    caption: "A few last notes before everyone heads out to the course.",
    span: "6"
  },
  {
    id: "event-checkin",
    kind: "photo",
    title: "Check-in",
    file: "event-checkin.jpg",
    webp: "event-checkin.webp",
    alt: "Guests talking around the check-in table at a golf outing.",
    caption: "Check-in at the golf outing. I love these in-between conversations.",
    span: "6"
  },
  {
    id: "golf-swing",
    kind: "photo",
    title: "Mid-swing",
    file: "golf-swing.jpg",
    webp: "golf-swing.webp",
    alt: "A golfer mid-swing on a sunny autumn course, with teammates watching.",
    caption: "Mid-swing on a clear autumn morning.",
    span: "4"
  },
  {
    id: "autumn-green",
    kind: "photo",
    title: "On the green",
    file: "autumn-green.jpg",
    webp: "autumn-green.webp",
    alt: "Three golfers on a green, with autumn trees in full color behind them.",
    caption: "A quiet walk onto the green, with the trees doing most of the talking.",
    span: "8"
  },
  {
    id: "team-red-trees",
    kind: "photo",
    home: true,
    title: "The group",
    file: "team-red-trees.jpg",
    webp: "team-red-trees.webp",
    alt: "Five golfers posing together under vivid red autumn trees.",
    caption: "Five of the group, and a backdrop I could not have planned better.",
    span: "8"
  },
  {
    id: "tee-shot",
    kind: "photo",
    title: "Off the tee",
    file: "tee-shot.jpg",
    webp: "tee-shot.webp",
    alt: "A golfer teeing off on a sunny course, with sponsor signs behind him.",
    caption: "Off the tee, with the sponsor signs looking on.",
    span: "4"
  },
  {
    id: "sign-in-table",
    kind: "photo",
    title: "Signing in",
    file: "sign-in-table.jpg",
    webp: "sign-in-table.webp",
    alt: "A woman leaning over a table to sign in before an event.",
    caption: "Signing in, quietly, before the day gets going.",
    span: "6"
  },
  {
    id: "window-view",
    kind: "photo",
    title: "The view",
    file: "window-view.jpg",
    webp: "window-view.webp",
    alt: "A man and a young boy looking out a high-rise window over the city.",
    caption: "A pause at the window, taking in the city from up high.",
    span: "6"
  },
  {
    id: "golf-cart-wave",
    kind: "photo",
    title: "Cart 13",
    file: "golf-cart-wave.jpg",
    webp: "golf-cart-wave.webp",
    alt: "A man waving from the passenger seat of a golf cart, with another cart behind.",
    caption: "A wave from cart 13, heading down the path.",
    span: "4"
  },
  {
    id: "office-laptop-hivis",
    kind: "photo",
    title: "Looking it over",
    file: "office-laptop-hivis.jpg",
    webp: "office-laptop-hivis.webp",
    alt: "A woman with a laptop sitting beside a girl in a hi-vis vest, framed by chairs.",
    caption: "A little look over the work, hi-vis vest and all.",
    span: "8"
  },
  {
    id: "hard-hat",
    kind: "photo",
    home: true,
    title: "The hard hat",
    file: "hard-hat.jpg",
    webp: "hard-hat.webp",
    alt: "A little girl putting a white hard hat on a man's head by a window.",
    caption: "The hard hat goes on, carefully.",
    span: "12"
  }
];

const WORK_DIR = "assets/images/work/";
const PHOTO_DIR = "assets/images/photography/";

const BRAND_DIR = "assets/images/branding/";

const BRANDING = [
  {
    id: "mind",
    title: "MIND: Logo",
    description: "MIND stands for Minority, Indigenous, Nurturing Development. I designed the logo.",
    assets: [
      {
        id: "mind-logo",
        kind: "brand-logo",
        file: "mind-logo.png",
        webp: "mind-logo.webp",
        alt: "MIND logo, a raised mosaic-blue arm forming the letter I, with the words Minority, Indigenous, Nurturing Development underneath.",
        caption: "The MIND logo"
      }
    ]
  }
];

const SKETCHBOOK = [];



const SERVICES = [
  "Social Media",
  "Brand Strategy",
  "Graphic Design",
  "Photography",
  "Videography",
  "Content Creation",
  "Marketing Campaigns",
  "Proposal Design",
  "Event Signage",
  "Newsletters"
];

Object.assign(window, {
  SITE, CATEGORIES, SET_LABEL, WORK, TOOLS, SKILLS, SERVICES, EXPERIENCE, EDUCATION, AWARDS, ASIDE, PHOTOGRAPHY, BRANDING, SKETCHBOOK, WORK_DIR, PHOTO_DIR, BRAND_DIR
});
