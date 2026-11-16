/* ==========================================================================
   Geoff Fox — site data
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
  city: "New York City",
  relocation: "Open to relocation",
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
    blurb: "Signage, title walls, retractable banners, and expo ads — graphics that have to hold among people, noise, and architecture."
  },
  {
    id: "circulation",
    label: "In circulation",
    blurb: "Invitations, announcements, social pieces, internal meetings, and print ads — work that has to move without losing its voice."
  },
  {
    id: "shortlist",
    label: "For the shortlist",
    blurb: "Covers, title pages, and decks for pursuits in healthcare, higher education, and brand activations. Client names and identifying marks have been withheld."
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
    home: true,
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
    caption: "A vertical banner for a live industry event — built for a crowded aisle."
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
    id: "golf-outing-flyer",
    title: "Charity golf outing",
    meta: "Invitation / flyer",
    set: "circulation",
    featured: true,
    file: "golf-outing-flyer.jpg",
    alt: "Flyer for a charity golf outing, designed by Geoff Fox.",
    caption: "Print invitation for an annual outing — schedule, sponsors, and a reason to come."
  },
  {
    id: "save-the-date",
    title: "Save the date",
    meta: "Golf outing",
    set: "circulation",
    featured: false,
    file: "save-the-date.jpg",
    alt: "Save-the-date card for a charity golf outing, designed by Geoff Fox.",
    caption: "The first piece in the outing sequence: a date, a place, and a tone."
  },
  {
    id: "intern-welcome-board",
    title: "Intern class welcome",
    meta: "Recruiting / internal",
    set: "circulation",
    featured: false,
    file: "intern-welcome-board.jpg",
    alt: "Welcome board for an intern class, designed by Geoff Fox.",
    caption: "A welcome board for a new intern class — names and faces, made to feel like a cohort."
  },
  {
    id: "pickleball-poster",
    home: true,
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
    home: true,
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
    title: "Community support",
    meta: "Print advertisement",
    set: "circulation",
    featured: false,
    file: "nemours-support-ad.jpg",
    alt: "Print advertisement for a community support initiative, designed by Geoff Fox.",
    caption: "A print advertisement for a community support program, written and designed to be straightforward."
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
    caption: "Cover for a seasonal internal newsletter — a still that has to carry a whole issue."
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
    caption: "A short guide for how the brand should show up in social — examples, not just rules."
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
    home: true,
    title: "Visa series, I",
    meta: "Illustrated campaign",
    set: "circulation",
    featured: true,
    file: "passport-burj-khalifa.jpg",
    alt: "Illustrated visa-style poster featuring a city skyline, designed by Geoff Fox.",
    caption: "One of a pair of illustrated “visa” posters — a campaign idea rendered as an artifact you would keep."
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
    home: true,
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
    home: true,
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

/* Applications list — edit this array to add or remove tools.
   The resume listed “Adobe Creative Suite” and “Microsoft Office” only.
   After Effects is included because it appears on the live site; Geoff should
   confirm the individual app names before this goes public. */
const TOOLS = [
  "Photoshop",
  "Illustrator",
  "InDesign",
  "Premiere Pro",
  "After Effects",
  "Lightroom",
  "Word",
  "PowerPoint",
  "Excel"
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
    dates: "Dec 2025 – Present",
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
    dates: "Jun 2025 – Aug 2025",
    points: [
      "Assisted the business development and marketing team with proposals, presentations, and marketing materials for live pursuits."
    ]
  },
  {
    role: "Manager on Duty, Front Desk",
    org: "Equinox Sports Club",
    place: "New York, NY",
    dates: "Aug 2022 – Dec 2024",
    points: [
      "Led a thirty-person front desk team, including onboarding, skill development, and day-to-day service standards.",
      "Designed a training program that reduced onboarding time by 30 percent, with performance tracking to keep the program honest."
    ]
  },
  {
    role: "Lifeguard",
    org: "Universal Volcano Bay",
    place: "Orlando, FL",
    dates: "Dec 2019 – Jun 2020",
    points: [
      "Conducted safety and compliance training, and provided emergency-response and first-aid instruction for staff."
    ]
  },
  {
    role: "VDC/BIM Engineering Intern",
    org: "Turner Construction Company",
    place: "Orlando, FL",
    dates: "Mar 2019 – Aug 2019",
    points: [
      "Wrote instructional guides for BIM processes and walked the site to assess training needs for safety and efficiency."
    ]
  }
];

const EDUCATION = [
  {
    school: "Full Sail University",
    credential: "B.S. Digital Marketing",
    dates: "October 2026",
    note: "Valedictorian. Course Director Award for Leadership & Organization."
  },
  {
    school: "Clark University",
    credential: "Coursework",
    dates: "2017 – 2018"
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
    detail: "Graduated as Valedictorian of the Digital Marketing B.S. program at Full Sail University."
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

/* Photographs — add files to assets/images/photography/ and an entry here.
   Example:
   { id: "jobsite-01", file: "jobsite-01.jpg", alt: "…", caption: "…", aspect: "3 / 2" }
*/
const PHOTOGRAPHY = [];

const WORK_DIR = "assets/images/work/";
const PHOTO_DIR = "assets/images/photography/";

Object.assign(window, {
  SITE, CATEGORIES, SET_LABEL, WORK, TOOLS, SKILLS, EXPERIENCE, EDUCATION, AWARDS, ASIDE, PHOTOGRAPHY, WORK_DIR, PHOTO_DIR
});
