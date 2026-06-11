import type { LucideIcon } from "lucide-react";
import {
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  Figma,
  Github,
  Globe2,
  LayoutDashboard,
  LineChart,
  MessageCircle,
  Rocket,
  ServerCog,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Workflow,
  Zap,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Highlight = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
  gradient: string;
};

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Experience = {
  role: string;
  period: string;
  description: string;
  tags: string[];
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const profile = {
  name: "Jah BIG",
  initials: "JB",
  role: "Full-stack Developer / AI Automation Developer",
  headline:
    "I build modern web apps, AI tools, and automation systems that help businesses grow.",
  email: "hello@example.com",
  line: "@yourlineid",
  github: "https://github.com/yourusername",
  facebook: "https://facebook.com/yourprofile",
  resumeUrl: "/resume.pdf",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const highlights: Highlight[] = [
  {
    title: "Fast Delivery",
    description: "Ship polished MVPs, landing pages, dashboards, and automations with a clear delivery plan.",
    icon: Rocket,
  },
  {
    title: "Clean Code",
    description: "Readable TypeScript, reusable components, scalable folder structure, and maintainable UI systems.",
    icon: Code2,
  },
  {
    title: "Scalable System",
    description: "Architected for APIs, databases, integrations, user roles, and future business growth.",
    icon: ServerCog,
  },
  {
    title: "Business-focused Solution",
    description: "Every feature is designed around conversion, productivity, automation, and measurable outcomes.",
    icon: LineChart,
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: TerminalSquare,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive UI", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Node.js", "Express", "REST API", "Supabase", "PostgreSQL", "Authentication"],
  },
  {
    title: "AI / Automation",
    icon: BrainCircuit,
    skills: ["OpenAI API", "Claude API", "n8n", "Make", "LINE Bot", "Workflow Automation"],
  },
  {
    title: "Tools",
    icon: Figma,
    skills: ["GitHub", "Vercel", "Figma", "Replit", "Docker", "CI/CD"],
  },
];

export const projects: Project[] = [
  {
    title: "AI LINE OA Chatbot",
    description: "Smart LINE OA assistant for lead capture, FAQ automation, CRM routing, and business workflows.",
    stack: ["Next.js", "LINE API", "OpenAI", "Webhook"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-emerald-400 via-cyan-400 to-blue-500",
  },
  {
    title: "Law Firm Management System",
    description: "Case management dashboard with client records, document tracking, status updates, and secure admin flows.",
    stack: ["React", "Supabase", "PostgreSQL", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-sky-400 via-indigo-400 to-violet-600",
  },
  {
    title: "Portfolio Website",
    description: "Premium responsive portfolio with SEO, smooth animation, dark mode, and conversion-focused sections.",
    stack: ["Next.js", "TypeScript", "Framer Motion", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-zinc-300 via-white to-emerald-300",
  },
  {
    title: "E-commerce Dashboard",
    description: "Admin dashboard for sales analytics, order management, inventory metrics, and customer insights.",
    stack: ["Next.js", "Chart UI", "API", "Admin Panel"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-orange-300 via-pink-400 to-purple-600",
  },
  {
    title: "CRM System",
    description: "Customer pipeline, follow-up reminders, deal tracking, team notes, and automation-ready data structure.",
    stack: ["Node.js", "Supabase", "CRM", "Automation"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-lime-300 via-emerald-400 to-teal-500",
  },
  {
    title: "AI Content Generator",
    description: "AI writing tool for captions, ads, landing page copy, blog outlines, and reusable marketing workflows.",
    stack: ["OpenAI API", "Next.js", "Prompt UX", "SaaS"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-fuchsia-400 via-violet-500 to-blue-500",
  },
];

export const services: Service[] = [
  {
    title: "Website / Landing Page",
    description: "Modern high-converting websites with responsive UI, SEO structure, and premium visual direction.",
    icon: Globe2,
  },
  {
    title: "Web Application",
    description: "Custom web apps with authentication, database, API integration, and scalable component architecture.",
    icon: Code2,
  },
  {
    title: "Dashboard / Admin Panel",
    description: "Operational dashboards for teams, reports, CRUD workflows, approvals, and business analytics.",
    icon: LayoutDashboard,
  },
  {
    title: "AI Chatbot",
    description: "AI assistants for sales, support, knowledge base Q&A, lead qualification, and internal productivity.",
    icon: Bot,
  },
  {
    title: "LINE OA Integration",
    description: "LINE webhook, rich menu, CRM flow, broadcast logic, lead routing, and chatbot automation.",
    icon: MessageCircle,
  },
  {
    title: "Automation Workflow",
    description: "n8n, Make, API automation, reporting flows, document generation, and notification systems.",
    icon: Workflow,
  },
  {
    title: "API Integration",
    description: "Connect third-party services, payment systems, CRMs, databases, AI APIs, and internal tools.",
    icon: Zap,
  },
];

export const experiences: Experience[] = [
  {
    role: "Freelance Developer",
    period: "2023 — Present",
    description:
      "Built custom websites, landing pages, internal tools, dashboards, and client-facing web applications for SMEs and founders.",
    tags: ["Client Work", "Web Apps", "Delivery"],
  },
  {
    role: "AI Automation Builder",
    period: "2024 — Present",
    description:
      "Designed AI workflows using OpenAI, Claude, n8n, Make, LINE OA, and API automations to reduce manual operations.",
    tags: ["AI", "n8n", "OpenAI"],
  },
  {
    role: "Web Application Developer",
    period: "2022 — Present",
    description:
      "Developed scalable frontend and backend systems with React, Next.js, TypeScript, Node.js, Supabase, and PostgreSQL.",
    tags: ["Next.js", "TypeScript", "Supabase"],
  },
  {
    role: "LINE OA / Chatbot Developer",
    period: "2024 — Present",
    description:
      "Implemented LINE Bot flows for customer support, lead collection, automated replies, and business system integrations.",
    tags: ["LINE API", "Chatbot", "Webhook"],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Nicha S.",
    role: "Founder, Beauty Clinic",
    quote:
      "The website looks premium and loads very fast. The booking workflow helped our team reduce repetitive admin tasks immediately.",
  },
  {
    name: "Tanawat P.",
    role: "Operations Manager",
    quote:
      "He understood the business problem first, then built a clean dashboard that our staff can actually use every day.",
  },
  {
    name: "Arisa K.",
    role: "Marketing Lead",
    quote:
      "ระบบ AI automation ช่วยตอบลูกค้าและจัดการ lead ได้ดีขึ้นมาก งานออกมาดูมืออาชีพและแก้ไขต่อได้ง่าย",
  },
];

export const stats = [
  { value: "30+", label: "Projects Delivered" },
  { value: "12+", label: "Automation Flows" },
  { value: "5★", label: "Client Experience" },
];

export const trustBadges = [
  { label: "SEO Ready", icon: ShieldCheck },
  { label: "Vercel Deploy", icon: Github },
  { label: "Premium UI", icon: Sparkles },
  { label: "Scalable Code", icon: BriefcaseBusiness },
];
