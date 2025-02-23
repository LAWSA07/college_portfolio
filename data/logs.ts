export const weeklyLogs: LogEntry[] = [
  //... existing entries
  {
    week: "Portfolio Walkthrough",
    title: "Architecture Deep Dive",
    description: "Detailed explanation of portfolio's technical implementation",
    videoUrl: "/videos/portfolio-demo.mp4",
    resources: [
      { label: "Source Code", url: "https://github.com/yourrepo" },
      { label: "Design System", url: "https://figma.com/yourdesign" },
    ],
    chapters: [
      { time: 0, title: "Introduction" },
      { time: 120, title: "3D Integration" },
      { time: 240, title: "CI/CD Pipeline" },
    ],
  },
];
