export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
  { name: "Logs", link: "/logs" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Music Transformer(ML model)",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "DeepFake Detection using EfficientNet",
    des: "This project implements a deepfake detection system using EfficientNet as the backbone of a convolutional neural network (CNN). The model is designed to classify video frames as either real or fake (deepfake).",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/LAWSA07/DeepFake-Detection",
  },
  {
    id: 2,
    title: "Handwritten Text Recognition - QUANT",
    des: "This project is a handwritten text recognition system that uses a convolutional neural network (CNN) to recognize and transcribe handwritten text from images.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/LAWSA07/quant",
  },
  {
    id: 3,
    title: "Job Tracking sites - JOBIFY",
    des: "job searching site that can ease your job in finding a job and also can track your job application status.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/LAWSA07/JOBIFY",
  },
  {
    id: 4,
    title: "Player Productivity Tracker (PPT)",
    des: "smart ai model that can track your productivity and also can give you suggestion to improve your productivity.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/LAWSA07/Player-Productivity-Tracker-PPT-",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborated with Himanshu Aswal's research team on a remarkable study, showcasing excellent teamwork in the research paper on the Neuroscience of Virtual Reality. The paper, co-authored with fellow teammate Krishna Sharma, was selected for the IEEE Conference 2023.",
    name: "Dr.Rahul Chauhan",
    title: "Head of Departement of Research and Development",
  },
  {
    quote:
      "Collaborated with Himanshu Aswal's research team on a remarkable study, showcasing excellent teamwork in the research paper on the Neuroscience of Virtual Reality. The paper, co-authored with fellow teammate Krishna Sharma, was selected for the IEEE Conference 2023.",
    name: "Dr.Rahul Chauhan",
    title: "Head of Departement of Research and Development",
  },
  {
    quote:
      "Collaborated with Himanshu Aswal's research team on a remarkable study, showcasing excellent teamwork in the research paper on the Neuroscience of Virtual Reality. The paper, co-authored with fellow teammate Krishna Sharma, was selected for the IEEE Conference 2023.",
    name: "Dr.Rahul Chauhan",
    title: "Head of Departement of Research and Development",
  },
  {
    quote:
      "Collaborated with Himanshu Aswal's research team on a remarkable study, showcasing excellent teamwork in the research paper on the Neuroscience of Virtual Reality. The paper, co-authored with fellow teammate Krishna Sharma, was selected for the IEEE Conference 2023.",
    name: "Dr.Rahul Chauhan",
    title: "Head of Departement of Research and Development",
  },
  {
    quote:
      "Collaborated with Himanshu Aswal's research team on a remarkable study, showcasing excellent teamwork in the research paper on the Neuroscience of Virtual Reality. The paper, co-authored with fellow teammate Krishna Sharma, was selected for the IEEE Conference 2023.",
    name: "Dr.Rahul Chauhan",
    title: "Head of Departement of Research and Development",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Codecraft Hackathon winners",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Developer",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Research paper on Neuroscience of Virtual Reality",
    desc: "done research paper on Neuroscience of Virtual Reality.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "AI ML Developer",
    desc: "create a trained model on deepfake face detection.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    links: "https://github.com/LAWSA07",
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];

export const weeklyLogs = [
  {
    id: 1,
    title: "Week 1: Introduction",
    desc: "sir told us about the basic structure of self introduction while applying for prestige companies",
    videoFileName: "videoplayback.mp4",
    links: [{ name: "Notes", url: "https://github.com/example1" }],
  },
  {
    id: 2,
    title: "Week 2: Resume structure:",
    desc: "Add meaningful objective behind everything one example sir gave why we will add family in introduction to add meaning in it.",
    video: "https://www.youtube.com/watch?v=example2",
    links: [{ name: "Notes", url: "https://github.com/example2" }],
  },
  {
    id: 3,
    title: "Week 3: crisp opportunities",
    desc: "sir told us about what companies wants from you and whatever they asks it should be clean and descriptive.",
    video: "https://www.youtube.com/watch?v=example3",
    links: [{ name: "Notes", url: "https://research.example3.com" }],
  },
];
