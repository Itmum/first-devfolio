// EDIT HERE: all site content lives in this file.
export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  summary: string;
  description: string;
  tech: string[];
  features: string[];
  learned: string[];
  live: string;
  github: string;
  image: string; // e.g. "/projects/bazar-dor.png" (put the file in /public/projects). Empty = placeholder.
};

export const profile = {
  name: "Itmum Sadiq Rahman",
  headline: "Aspiring full-stack developer",
  availability: "Open to internships and entry-level opportunities",
  bio: "I'm a Computer Science and Engineering student at ULAB with a passion for web development. I'm exploring the MERN stack, React and Next.js, and I focus on building practical projects, improving my code and learning by doing. I enjoy turning ideas into working web apps and collaborating to solve real-world problems.",
  location: "Dhaka, Bangladesh",
  email: "itmamsadiq22@gmail.com",
  github: "https://github.com/Itmum",
  linkedin: "https://www.linkedin.com/in/itmum",
  resume: "/Itmum_Sadiq_Rahman_CV.pdf",
  photo: "/itmum.jpg",
};

export const skills: { group: string; items: string[]; learning?: string[] }[] =
  [
    {
      group: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Bootstrap",
        "DaisyUI",
      ],
    },
    {
      group: "Backend and auth",
      items: ["Better Auth", "MongoDB"],
      learning: ["Node.js", "Express"],
    },
    { group: "Languages", items: ["JavaScript", "TypeScript", "C"] },
    {
      group: "Tools",
      items: [
        "VS Code",
        "Code::Blocks",
        "Git and GitHub",
        "Vercel",
        "Google Sheets",
        "Excel",
      ],
    },
  ];

export const experience = [
  {
    role: "Project Associate (Remote)",
    org: "Quantanite Bangladesh",
    period: "Nov 2024 to Jan 2026",
    points: [
      "Processed sensitive data for a US-based client, following strict confidentiality and privacy protocols.",
      "Met quality benchmarks and daily targets with high accuracy, working with large datasets in Google Sheets.",
      "Worked independently in a remote setting while balancing full-time university studies.",
    ],
  },
];

export const education = [
  {
    school: "University of Liberal Arts Bangladesh (ULAB)",
    detail: "B.Sc. in Computer Science and Engineering",
    period: "2025 to 2028 (expected)",
  },
  {
    school: "Daffodil International College",
    detail: "HSC, Science",
    period: "2021",
  },
  {
    school: "Dhanmondi Govt. Boys High School",
    detail: "SSC, Science",
    period: "2019",
  },
];

export const projects: Project[] = [
  {
    slug: "bazar-dor",
    title: "Bazar Dor",
    subtitle: "বাজার দর",
    summary:
      "Daily commodity prices in Bangladesh, with category browsing and secure sign-in.",
    description:
      "Bazar Dor is a modern, responsive web app that shows daily market prices for everyday commodities in Bangladesh, such as rice, lentils, oils, vegetables, fish, meat, eggs and spices. Users can see price changes, browse by category and check daily hikes or drops.",
    tech: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Better Auth",
      "MongoDB",
      "Vercel",
    ],
    features: [
      "Daily prices for rice, lentils, oils, vegetables, fish, meat, eggs and spices",
      "Browse products by category",
      "See daily price increases and decreases at a glance",
      "Sign in with email and password, Google or GitHub",
      "Responsive layout for phones, tablets and desktops",
    ],
    learned: [
      "Setting up authentication with Better Auth and its MongoDB adapter",
      "How OAuth sign-in works with Google and GitHub",
      "Structuring a Next.js App Router project and deploying it with environment variables on Vercel",
    ],
    live: "https://bazar-dor-tau-orcin.vercel.app/",
    github: "https://github.com/Itmum/Bazar-Dor",
    image: "/projects/bazardor.png",
  },
  {
    slug: "fitlog",
    title: "FitLog",
    subtitle: "Train with intent. Log every set.",
    summary:
      "A dark-themed gym companion for planning lifts and tracking weekly work.",
    description:
      "FitLog is a dark-themed gym companion built to remove clutter from your routine. Pick lifts from a workout library, add them to your daily plan, track your numbers and watch the week add up.",
    tech: [
      "Next.js (App Router)",
      "Tailwind CSS",
      "DaisyUI",
      "React Icons",
      "React Context",
      "React Toastify",
    ],
    features: [
      "Workout library to choose lifts from",
      "Daily plan where you log each exercise",
      "Metrics and weekly totals",
      "Toast notifications for quick feedback",
      "Clean dark interface made for fast daily use",
    ],
    learned: [
      "Managing shared state with useContext and useState, without extra libraries",
      "Fetching and using data from an external API",
      "Building quickly with DaisyUI components on top of Tailwind",
    ],
    live: "https://fitlog-three-lake.vercel.app/",
    github: "https://github.com/Itmum/FITLOG",
    image: "/projects/fitlog.png",
  },
  {
    slug: "js-mini-projects",
    title: "JS Mini Projects",
    subtitle: "Vanilla JavaScript practice",
    summary:
      "Small apps in plain JavaScript, like a color generator and an expense tracker.",
    description:
      "A collection of small projects built with raw JavaScript, HTML and CSS. They are where I practised the fundamentals before moving to React and Next.js.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: [
      "Color generator",
      "Expense tracker",
      "More small utilities, added over time",
    ],
    learned: [
      "DOM manipulation and event handling",
      "Organising JavaScript logic without a framework",
      "Why frameworks like React are useful, because I wrote the plain version first",
    ],
    live: "https://itmum.github.io/My-Web-MicroProjects/",
    github: "https://github.com/Itmum/My-Web-MicroProjects",
    image: "/projects/jsmini.png",
  },
];
