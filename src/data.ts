export const profile = {
  name: "Sameer Khoja",
  shortName: "SK",
  role: "Senior Software Engineer",
  location: "San Francisco, CA",
  headline: "Building search, voice, and AI experiences at scale.",
  intro:
    "Senior Software Engineer at YouTube. I lead 0-to-1 product work across generative AI, search, and voice, turning ambitious ideas into reliable experiences.",
  links: {
    email: "sameerkhoja10@gmail.com",
    github: "https://github.com/sameerkhoja10",
    linkedin: "https://www.linkedin.com/in/sameerkhoja",
  },
};

export const focusAreas = [
  { index: "01", title: "Product", description: "From early ideas to shipped experiences" },
  { index: "02", title: "Systems", description: "Performance and reliability at scale" },
  { index: "03", title: "AI", description: "Useful, grounded intelligent products" },
  { index: "04", title: "Leadership", description: "Clarity across teams and ambiguity" },
];

export const experience = [
  {
    company: "YouTube",
    role: "Senior Software Engineer",
    period: "Mar 2022 - Present",
    location: "San Bruno, CA",
    summary: "Leading product engineering across generative AI, search, and voice on YouTube.",
    points: [
      "Tech lead for full-stack prototyping, design, and cross-functional alignment on 0-to-1 Ask Search features.",
      "Subject-matter expert for Voice on YouTube TV; reduced soft-mic latency by 60% and shipped audio saving, hold-to-talk, language selection, logging, and metrics.",
      "Own the Zero Prefix Search experience on TV, including new discovery shelves and work that reduced feature costs and dependencies.",
      "Launched immersive movie posters and genre shelves, increasing movie engagement on YouTube by 18%.",
    ],
  },
  {
    company: "Google",
    role: "Software Engineer",
    period: "Jun 2019 - Mar 2022",
    location: "Sunnyvale, CA",
    summary: "Built and led internal platforms for vendor operations, identity, and secure collaboration.",
    points: [
      "Led a team of 5+ engineers across vendor creation, suspension, and provisioning systems.",
      "Built COVID-19 suspension workflows that avoided re-onboarding thousands of vendors and contractors.",
      "Led secure partner collaboration services that reduced full-time employee effort by 67%.",
      "Built a Comments API for a tool managing more than 40% of Google's annual revenue.",
    ],
  },
  {
    company: "LinkedIn",
    role: "Software Engineer Intern",
    period: "Jun 2018 - Aug 2018",
    location: "Sunnyvale, CA",
    summary: "Shipped onboarding features with the Flagship Growth team.",
    points: [
      "Delivered four features for the Novice Member Experience.",
      "Built and launched an end-to-end onboarding search experience that increased engagement by 10%.",
    ],
  },
];

export const selectedWork = [
  {
    id: "01",
    title: "Ask Search",
    eyebrow: "Generative AI / 0-to-1",
    description:
      "Technical leadership for full-stack prototypes that explore how generative AI can reshape search on YouTube.",
    contribution: "Tech lead - prototyping, design, and cross-functional alignment",
    stack: ["TypeScript", "React", "Generative AI", "Product systems"],
  },
  {
    id: "02",
    title: "Voice on YouTube TV",
    eyebrow: "Performance / Platform",
    description:
      "Core voice capabilities for living-room devices, spanning audio capture, hold-to-talk, language selection, observability, and performance.",
    contribution: "60% reduction in soft-mic latency",
    stack: ["C++", "Performance", "Voice", "Telemetry"],
  },
  {
    id: "03",
    title: "Movie & TV Discovery",
    eyebrow: "Search / Consumer UX",
    description:
      "Immersive movie posters and genre shelves that made entertainment discovery richer across YouTube surfaces.",
    contribution: "18% engagement lift for movies on YouTube",
    stack: ["Search", "Experimentation", "TV", "Product UX"],
  },
  {
    id: "04",
    title: "Secure Partner Collaboration",
    eyebrow: "Enterprise / Workflow",
    description:
      "Services and workflows for secure collaboration with external partners and vendor teams inside Google.",
    contribution: "67% reduction in employee effort",
    stack: ["Java", "Go", "MySQL", "Identity & access"],
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["C++", "Java", "TypeScript", "Go", "Dart"],
  },
  {
    category: "Product engineering",
    items: ["React", "Ember", "MySQL", "Full-stack prototyping", "Experimentation"],
  },
  {
    category: "Specialties",
    items: ["Search", "Voice", "Generative AI", "Performance", "Technical leadership"],
  },
  {
    category: "AI toolkit",
    items: ["Cursor", "Lovable", "Windsurf", "AI Studio"],
  },
];

export const education = {
  school: "Cornell University",
  degree: "B.S. in Computer Science",
  period: "Aug 2016 - May 2019",
  location: "Ithaca, NY",
};
