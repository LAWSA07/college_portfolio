export type LogEntry = {
  week: string;
  title: string;
  description: string;
  videoUrl: string;
  resources: {
    label: string;
    url: string;
  }[];
  chapters?: { time: number; title: string }[];
};

export const weeklyLogs: LogEntry[] = [
  {
    week: "Week 1",
    title: "Project Initialization & Setup",
    description:
      "Established the core project structure, configured Next.js with TypeScript, and implemented the initial design system.",
    videoUrl: "/videos/week1.mp4",
    resources: [
      { label: "GitHub Repo", url: "https://github.com/your-repo" },
      { label: "Figma Design", url: "https://figma.com/design" },
    ],
    chapters: [
      { time: 0, title: "Introduction" },
      { time: 120, title: "Tech Stack Setup" },
      { time: 240, title: "CI/CD Pipeline" },
    ],
  },
  {
    week: "Week 2",
    title: "Core Feature Development",
    description:
      "Implemented authentication flow and main dashboard interface with 3D visualization integration.",
    videoUrl: "/videos/week2.mp4",
    resources: [
      { label: "API Docs", url: "https://api.docs" },
      { label: "Testing Report", url: "https://test-reports.com" },
    ],
  },
];
