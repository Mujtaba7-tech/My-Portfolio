export const personalInfo = {
  name: "Mujtaba Farooqui",
  role: "Web Developer",
  tagline: "Frontend & Full-Stack Developer specializing in React.js, Astro.js, Tailwind CSS, and Laravel to build clean, responsive, and user-friendly web applications.",
  bio: "Hi, I'm Mujtaba Farooqui, a Web Developer based in Mumbai, Maharashtra. I recently completed my B.Tech from Sagar Institute of Science and Technology (7.72 CGPA) and currently work at Technoserve Software Solutions building responsive UI components with React.js and Astro.js, alongside full-stack Laravel applications. I focus on clean code, mobile-first design, fast performance, and intuitive user experiences.",
  avatar: "/Self-passport-image.jpeg",
  workspaceImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
  location: "Mumbai, Maharashtra, India",
  phone: "+91 9794480687",
  status: "Available for full-time roles & projects",
  email: "mujtabafarooqui7@gmail.com",
  gmailUrl: "https://mail.google.com/mail/?view=cm&fs=1&to=mujtabafarooqui7@gmail.com",
  github: "https://github.com",
  linkedin: "https://www.linkedin.com/in/mujtaba-farooqui-aab904249",
  resumeUrl: "/resume.pdf",
};

export const stats = [
  { label: "B.Tech CGPA", value: "7.72" },
  { label: "Industry Experience", value: "Web Dev" },
  { label: "Key Tech Stacks", value: "React & Laravel" },
  { label: "IIT & IBM Certs", value: "4+" },
];

export const skillCategories = [
  {
    name: "Frontend Development",
    description: "Developing modern, responsive, and accessible user interfaces",
    skills: [
      { name: "React.js", level: 92, color: "#38bdf8" },
      { name: "Astro.js", level: 88, color: "#ff5d01" },
      { name: "JavaScript (ES6+)", level: 90, color: "#facc15" },
      { name: "Tailwind CSS", level: 95, color: "#38bdf8" },
      { name: "HTML5 & CSS3", level: 96, color: "#e34f26" },
      { name: "Mobile-First Design", level: 94, color: "#10b981" },
    ],
  },
  {
    name: "Backend & Databases",
    description: "Server-side logic, relational & NoSQL databases, and REST APIs",
    skills: [
      { name: "Laravel & PHP", level: 88, color: "#f43f5e" },
      { name: "Node.js & Express", level: 82, color: "#22c55e" },
      { name: "MySQL", level: 86, color: "#00758f" },
      { name: "MongoDB", level: 84, color: "#10b981" },
      { name: "Python / Django", level: 78, color: "#3776ab" },
      { name: "RESTful APIs", level: 88, color: "#06b6d4" },
    ],
  },
  {
    name: "Workflow & Tools",
    description: "Version control, component systems, and development tooling",
    skills: [
      { name: "Git & GitHub", level: 90, color: "#f05032" },
      { name: "Blade Templating", level: 88, color: "#ef4444" },
      { name: "UI/UX & Performance", level: 90, color: "#8b5cf6" },
      { name: "Cross-Browser Compatibility", level: 92, color: "#38bdf8" },
      { name: "VS Code & Tooling", level: 95, color: "#007acc" },
      { name: "Client Collaboration", level: 90, color: "#10b981" },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "MediCart — Online Pharmacy & Medicine E-Commerce Platform",
    category: "Full Stack",
    description: "A comprehensive pharmacy e-commerce platform built with Laravel, PHP, MySQL, Blade, and Tailwind CSS. Features medicine browsing, search, prescription handling, inventory stock control, shopping cart, customer checkout, and a full admin management dashboard.",
    image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1200&q=80",
    tags: ["Laravel", "PHP", "MySQL", "Blade", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://medicart.wasmer.app/",
    githubUrl: null,
    status: "Live Production App",
    featured: true,
  },
  {
    id: 2,
    title: "Quiz Web-Based Application",
    category: "Full Stack",
    description: "A feature-rich quiz application offering user authentication, quiz creation, question management, real-time participant scoring, and instant result analytics for an engaging learning experience.",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Node.js", "MongoDB", "JavaScript", "HTML/CSS"],
    liveUrl: null,
    githubUrl: null,
    status: "In Development",
    featured: false,
  },
  {
    id: 3,
    title: "MP Tourism Web Portal",
    category: "Frontend",
    description: "A responsive travel portal providing rich, detailed guides and information about famous tourist destinations across Madhya Pradesh. Engineered with mobile-first layouts and fast interactive navigation.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
    tags: ["HTML5", "CSS3", "JavaScript", "Python (Django)", "MySQL"],
    liveUrl: null,
    githubUrl: null,
    status: "Academic Concept",
    featured: false,
  },
];

export const experiences = [
  {
    role: "Web Developer",
    company: "Technoserve Software Solutions",
    period: "11/2025 - Present",
    description: "Developing responsive web applications using HTML, CSS, and JavaScript. Building modern UI components with React.js and Astro.js, implementing mobile-first and cross-browser compatible designs, improving website performance, and collaborating with team members to deliver client requirements.",
    highlights: ["React.js & Astro.js", "Mobile-First Design", "Performance & UI/UX Optimization"],
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science & Engineering (CSE)",
    institution: "Sagar Institute of Science and Technology, Gandhinagar, Bhopal",
    period: "2021 - 2025",
    grade: "7.72 CGPA",
  },
  {
    degree: "Higher Secondary (Class XII)",
    institution: "New Angel's Senior Secondary School, Pratapgarh (UP)",
    period: "2021",
    grade: "69%",
  },
  {
    degree: "Secondary School (Class X)",
    institution: "KumudLata Convent School, Bara Jasra, Allahabad (UP)",
    period: "2018",
    grade: "60%",
  },
];

export const certifications = [
  {
    title: "Front-end Web Development (6-Week Internship)",
    issuer: "IBM SkillsBuild (CSRBOX)",
    year: "2024",
  },
  {
    title: "HTML, CSS, and JavaScript for Web Developers",
    issuer: "Johns Hopkins University (Coursera)",
    year: "2023",
  },
  {
    title: "Database Management System (DBMS)",
    issuer: "IIT Kharagpur (NPTEL)",
    year: "2023",
  },
  {
    title: "The Joy of Computing using Python",
    issuer: "IIT Madras (NPTEL)",
    year: "2024",
  },
];
