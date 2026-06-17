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

export type Language = "en" | "th";

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

export type SectionCopy = {
  eyebrow: string;
  title: string;
  description: string;
};

export type PortfolioCopy = {
  title: string;
  description: string;
  twitterDescription: string;
  navItems: NavItem[];
  hero: {
    badge: string;
    greetingLine1: string;
    greetingLine2: string;
    role: string;
    headline: string;
    primaryCta: string;
    secondaryCta: string;
    statSuffix: string;
    cardTitle: string;
    cardDescription: string;
    floatingTitle: string;
    floatingSubtitle: string;
  };
  about: SectionCopy;
  skills: SectionCopy;
  projects: SectionCopy;
  services: SectionCopy;
  experience: SectionCopy;
  testimonials: SectionCopy;
  contact: SectionCopy & {
    introTitle: string;
    introDescription: string;
    emailLabel: string;
    lineLabel: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
    formNote: string;
    toast: string;
  };
  footer: {
    description: string;
    copyright: string;
  };
  highlights: Highlight[];
  skillGroups: SkillGroup[];
  projectsList: Project[];
  servicesList: Service[];
  experiences: Experience[];
  testimonialsList: Testimonial[];
  stats: { value: string; label: string }[];
  trustBadges: { label: string; icon: LucideIcon }[];
};

const commonSkillGroups = [
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
] satisfies SkillGroup[];

const commonProjects = [
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
] satisfies Project[];

const commonServices = [
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
] satisfies Service[];

const commonHighlights = [
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
] satisfies Highlight[];

const commonExperiences = [
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
] satisfies Experience[];

const commonTestimonials = [
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
] satisfies Testimonial[];

const en: PortfolioCopy = {
  title: "Portfolio | Pongsit K.",
  description:
    "Premium portfolio website for a Full-stack Developer and AI Automation Developer building web apps, dashboards, AI tools, LINE OA, CRM, and automation systems.",
  twitterDescription: "I build modern web apps, AI tools, and automation systems that help businesses grow.",
  navItems: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Experience", href: "#experience" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    badge: "Available for freelance projects",
    greetingLine1: "Hi, I'm BIG",
    greetingLine2: "SGT. Pongsit Kanthon",
    role: "Full-stack Developer / AI Automation Developer",
    headline: "I build modern web apps, AI tools, and automation systems that help businesses grow.",
    primaryCta: "View Projects",
    secondaryCta: "Contact Me",
    statSuffix: "",
    cardTitle: "AI + Web Developer",
    cardDescription: "Building systems that look premium and work hard.",
    floatingTitle: "+ Modern Stack",
    floatingSubtitle: "Next.js · AI · Automation",
  },
  about: {
    eyebrow: "About",
    title: "Developer mindset with business execution.",
    description:
      "I combine clean engineering, thoughtful UI, and practical automation to create systems that help teams save time, increase sales, and operate with confidence.",
  },
  skills: {
    eyebrow: "Skills",
    title: "Modern stack for web, AI, and automation.",
    description:
      "A practical toolkit for building premium interfaces, reliable APIs, business dashboards, and automation systems that are easy to maintain.",
  },
  projects: {
    eyebrow: "Projects",
    title: "Selected work built for real business impact.",
    description:
      "Project concepts that show how I design scalable web systems, automation workflows, AI-powered tools, and premium client-facing experiences.",
  },
  services: {
    eyebrow: "Services",
    title: "Services designed to launch, automate, and scale.",
    description:
      "From premium landing pages to full dashboards and AI automation, each service is focused on real outcomes and clean delivery.",
  },
  experience: {
    eyebrow: "Experience",
    title: "Experience across web apps, AI, and automation.",
    description:
      "A practical timeline of roles and work areas focused on building usable systems, integrating AI, and shipping client-ready products.",
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "Trusted by clients who need speed and quality.",
    description: "Mock client feedback examples showing the kind of outcomes this portfolio is designed to communicate.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Have a project in mind? Let’s build it.",
    description:
      "Send a quick message about your website, dashboard, AI chatbot, LINE OA, CRM, or automation workflow.",
    introTitle: "Let’s talk about your next system.",
    introDescription:
      "I can help with premium websites, internal tools, AI automations, LINE OA, dashboards, CRM systems, and API integrations.",
    emailLabel: "Email",
    lineLabel: "LINE",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    formSubmit: "Send Message",
    formNote: "Mock submit only. Connect API route, Resend, EmailJS, or database later.",
    toast: "Message sent successfully!",
  },
  footer: {
    description: "Building premium web apps, AI tools, and automation systems for modern businesses.",
    copyright: "All rights reserved.",
  },
  highlights: commonHighlights,
  skillGroups: commonSkillGroups,
  projectsList: commonProjects,
  servicesList: commonServices,
  experiences: commonExperiences,
  testimonialsList: commonTestimonials,
  stats: [
    { value: "30+", label: "Projects Delivered" },
    { value: "12+", label: "Automation Flows" },
    { value: "5★", label: "Client Experience" },
  ],
  trustBadges: [
    { label: "SEO Ready", icon: ShieldCheck },
    { label: "Vercel Deploy", icon: Github },
    { label: "Premium UI", icon: Sparkles },
    { label: "Scalable Code", icon: BriefcaseBusiness },
  ],
};

const th: PortfolioCopy = {
  title: "Portfolio | Pongsit K.",
  description:
    "เว็บไซต์พอร์ตโฟลิโอระดับพรีเมียมสำหรับ Full-stack Developer และ AI Automation Developer ที่สร้างเว็บแอป แดชบอร์ด เครื่องมือ AI LINE OA ระบบ CRM และระบบอัตโนมัติ",
  twitterDescription: "ผมสร้างเว็บแอป AI tools และระบบอัตโนมัติที่ช่วยให้ธุรกิจเติบโต",
  navItems: [
    { label: "หน้าแรก", href: "#home" },
    { label: "เกี่ยวกับ", href: "#about" },
    { label: "สกิล", href: "#skills" },
    { label: "ผลงาน", href: "#projects" },
    { label: "บริการ", href: "#services" },
    { label: "ประสบการณ์", href: "#experience" },
    { label: "รีวิว", href: "#testimonials" },
    { label: "ติดต่อ", href: "#contact" },
  ],
  hero: {
    badge: "รับงานฟรีแลนซ์",
    greetingLine1: "สวัสดีผม บิ๊ก",
    greetingLine2: "สิบเอก พงษ์สิทธิ์ แก่นทน",
    role: "Full-stack Developer / AI Automation Developer",
    headline: "ผมสร้างเว็บแอปทันสมัย เครื่องมือ AI และระบบอัตโนมัติที่ช่วยให้ธุรกิจเติบโต",
    primaryCta: "ดูผลงาน",
    secondaryCta: "ติดต่อผม",
    statSuffix: "",
    cardTitle: "AI + Web Developer",
    cardDescription: "สร้างระบบที่ดูพรีเมียมและใช้งานได้จริง",
    floatingTitle: "+ Modern Stack",
    floatingSubtitle: "Next.js · AI · Automation",
  },
  about: {
    eyebrow: "เกี่ยวกับ",
    title: "คิดแบบนักพัฒนา แต่ทำงานแบบคนโฟกัสผลลัพธ์ทางธุรกิจ",
    description:
      "ผมผสานงานวิศวกรรมที่สะอาด UI ที่คิดมาแล้ว และ automation ที่ใช้ได้จริง เพื่อช่วยทีมประหยัดเวลา เพิ่มยอดขาย และทำงานได้มั่นใจขึ้น",
  },
  skills: {
    eyebrow: "สกิล",
    title: "สแตกที่เหมาะกับเว็บ AI และ automation",
    description:
      "ชุดเครื่องมือที่ใช้สร้างอินเทอร์เฟซระดับพรีเมียม API ที่เชื่อถือได้ แดชบอร์ดธุรกิจ และระบบอัตโนมัติที่ดูแลง่าย",
  },
  projects: {
    eyebrow: "ผลงาน",
    title: "ผลงานที่ออกแบบมาเพื่อผลลัพธ์ทางธุรกิจจริง",
    description:
      "ตัวอย่างโปรเจกต์ที่แสดงวิธีคิดในการออกแบบเว็บระบบที่ขยายได้ workflow automation เครื่องมือ AI และประสบการณ์ลูกค้าระดับพรีเมียม",
  },
  services: {
    eyebrow: "บริการ",
    title: "บริการที่พร้อมช่วยเปิดตัว อัตโนมัติ และขยายต่อ",
    description:
      "ตั้งแต่หน้า landing page ไปจนถึงแดชบอร์ดเต็มระบบและ AI automation ทุกบริการมุ่งเน้นผลลัพธ์จริงและการส่งงานที่เรียบร้อย",
  },
  experience: {
    eyebrow: "ประสบการณ์",
    title: "ประสบการณ์ด้านเว็บแอป AI และ automation",
    description:
      "ไทม์ไลน์การทำงานที่เน้นการสร้างระบบที่ใช้งานได้จริง เชื่อมต่อ AI และส่งมอบงานพร้อมใช้กับลูกค้า",
  },
  testimonials: {
    eyebrow: "รีวิว",
    title: "ลูกค้าที่ต้องการความเร็วและคุณภาพไว้วางใจได้",
    description: "ตัวอย่าง feedback ที่สื่อถึงผลลัพธ์แบบที่พอร์ตโฟลิโอนี้ต้องการนำเสนอ",
  },
  contact: {
    eyebrow: "ติดต่อ",
    title: "มีโปรเจกต์ในใจไหม มาลุยด้วยกัน",
    description:
      "ส่งข้อความสั้น ๆ เกี่ยวกับเว็บไซต์ แดชบอร์ด AI chatbot LINE OA CRM หรือ workflow automation ได้เลย",
    introTitle: "คุยกันเรื่องระบบถัดไปของคุณ",
    introDescription:
      "ผมช่วยทำเว็บไซต์ระดับพรีเมียม เครื่องมือภายใน AI automation LINE OA แดชบอร์ด ระบบ CRM และการเชื่อมต่อ API ได้",
    emailLabel: "อีเมล",
    lineLabel: "LINE",
    formName: "ชื่อ",
    formEmail: "อีเมล",
    formMessage: "ข้อความ",
    formSubmit: "ส่งข้อความ",
    formNote: "ตอนนี้เป็นฟอร์มตัวอย่าง ถ้าต้องการต่อ API route, Resend, EmailJS หรือฐานข้อมูล ค่อยเชื่อมเพิ่มได้",
    toast: "ส่งข้อความสำเร็จแล้ว!",
  },
  footer: {
    description: "สร้างเว็บแอป AI tools และระบบอัตโนมัติระดับพรีเมียมสำหรับธุรกิจยุคใหม่",
    copyright: "สงวนลิขสิทธิ์",
  },
  highlights: [
    {
      title: "ส่งงานไว",
      description: "ส่ง MVP หน้า landing page แดชบอร์ด และ automation ที่ดูเรียบร้อยภายใต้แผนงานชัดเจน",
      icon: Rocket,
    },
    {
      title: "โค้ดสะอาด",
      description: "TypeScript อ่านง่าย component ใช้ซ้ำได้ โครงสร้างไฟล์ขยายต่อได้ และดูแลง่าย",
      icon: Code2,
    },
    {
      title: "ระบบขยายได้",
      description: "ออกแบบมาเพื่อ API ฐานข้อมูล integration role ของผู้ใช้ และการเติบโตในอนาคต",
      icon: ServerCog,
    },
    {
      title: "แก้ปัญหาธุรกิจ",
      description: "ทุกฟีเจอร์คิดจาก conversion productivity automation และผลลัพธ์ที่วัดได้",
      icon: LineChart,
    },
  ],
  skillGroups: [
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
  ],
  projectsList: [
    {
      title: "AI LINE OA Chatbot",
      description: "ผู้ช่วย LINE OA อัจฉริยะสำหรับรับ lead ตอบ FAQ routing เข้า CRM และ workflow ธุรกิจ",
      stack: ["Next.js", "LINE API", "OpenAI", "Webhook"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-emerald-400 via-cyan-400 to-blue-500",
    },
    {
      title: "Law Firm Management System",
      description: "แดชบอร์ดจัดการคดีที่มีข้อมูลลูกค้า การติดตามเอกสาร อัปเดตสถานะ และ admin flow ที่ปลอดภัย",
      stack: ["React", "Supabase", "PostgreSQL", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-sky-400 via-indigo-400 to-violet-600",
    },
    {
      title: "Portfolio Website",
      description: "พอร์ตโฟลิโอแบบ responsive ระดับพรีเมียมพร้อม SEO animation ลื่น และ section ที่เน้น conversion",
      stack: ["Next.js", "TypeScript", "Framer Motion", "Vercel"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-zinc-300 via-white to-emerald-300",
    },
    {
      title: "E-commerce Dashboard",
      description: "แดชบอร์ด admin สำหรับ analytics ยอดขาย จัดการออเดอร์ stock metrics และ insight ลูกค้า",
      stack: ["Next.js", "Chart UI", "API", "Admin Panel"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-orange-300 via-pink-400 to-purple-600",
    },
    {
      title: "CRM System",
      description: "ระบบ pipeline ลูกค้า เตือนติดตามดีล หมายเหตุทีม และโครงสร้างข้อมูลพร้อมต่อ automation",
      stack: ["Node.js", "Supabase", "CRM", "Automation"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-lime-300 via-emerald-400 to-teal-500",
    },
    {
      title: "AI Content Generator",
      description: "เครื่องมือเขียนคอนเทนต์ด้วย AI สำหรับแคปชัน โฆษณา copy หน้า landing page บล็อก และ workflow การตลาด",
      stack: ["OpenAI API", "Next.js", "Prompt UX", "SaaS"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-fuchsia-400 via-violet-500 to-blue-500",
    },
  ],
  servicesList: [
    {
      title: "เว็บไซต์ / Landing Page",
      description: "เว็บไซต์สวยคมและปิดการขายได้ดี พร้อม responsive UI โครงสร้าง SEO และทิศทางภาพลักษณ์ระดับพรีเมียม",
      icon: Globe2,
    },
    {
      title: "Web Application",
      description: "เว็บแอป custom ที่มี authentication ฐานข้อมูล การเชื่อม API และสถาปัตยกรรม component ที่ขยายได้",
      icon: Code2,
    },
    {
      title: "Dashboard / Admin Panel",
      description: "แดชบอร์ดสำหรับทีม รายงาน workflow CRUD approval และ business analytics",
      icon: LayoutDashboard,
    },
    {
      title: "AI Chatbot",
      description: "ผู้ช่วย AI สำหรับขาย support ตอบคำถามฐานความรู้ คัดกรอง lead และเพิ่ม productivity ภายใน",
      icon: Bot,
    },
    {
      title: "LINE OA Integration",
      description: "Webhook, rich menu, flow CRM, logic broadcast, lead routing และ chatbot automation",
      icon: MessageCircle,
    },
    {
      title: "Automation Workflow",
      description: "n8n, Make, automation ด้วย API, report flow, สร้างเอกสาร และระบบแจ้งเตือน",
      icon: Workflow,
    },
    {
      title: "API Integration",
      description: "เชื่อมบริการภายนอก ระบบจ่ายเงิน CRM ฐานข้อมูล AI APIs และเครื่องมือภายใน",
      icon: Zap,
    },
  ],
  experiences: [
    {
      role: "Freelance Developer",
      period: "2023 — Present",
      description:
        "สร้างเว็บไซต์เฉพาะทาง landing page เครื่องมือภายใน แดชบอร์ด และ web app ฝั่งลูกค้าสำหรับ SME และ founder",
      tags: ["งานลูกค้า", "Web Apps", "Delivery"],
    },
    {
      role: "AI Automation Builder",
      period: "2024 — Present",
      description:
        "ออกแบบ workflow AI โดยใช้ OpenAI, Claude, n8n, Make, LINE OA และ API automation เพื่อลดงาน manual",
      tags: ["AI", "n8n", "OpenAI"],
    },
    {
      role: "Web Application Developer",
      period: "2022 — Present",
      description:
        "พัฒนาระบบ frontend และ backend ที่ขยายได้ด้วย React, Next.js, TypeScript, Node.js, Supabase และ PostgreSQL",
      tags: ["Next.js", "TypeScript", "Supabase"],
    },
    {
      role: "LINE OA / Chatbot Developer",
      period: "2024 — Present",
      description:
        "ทำ LINE Bot flow สำหรับ support ลูกค้า เก็บ lead ตอบอัตโนมัติ และเชื่อมระบบธุรกิจเข้าด้วยกัน",
      tags: ["LINE API", "Chatbot", "Webhook"],
    },
  ],
  testimonialsList: [
    {
      name: "Nicha S.",
      role: "Founder, Beauty Clinic",
      quote:
        "เว็บไซต์ดูพรีเมียมและโหลดเร็วมาก workflow จองคิวช่วยลดงาน admin ซ้ำ ๆ ของทีมได้ทันที",
    },
    {
      name: "Tanawat P.",
      role: "Operations Manager",
      quote:
        "เข้าใจปัญหาธุรกิจก่อนแล้วค่อยสร้างแดชบอร์ดที่ทีมใช้งานได้จริงในทุกวัน",
    },
    {
      name: "Arisa K.",
      role: "Marketing Lead",
      quote:
        "ระบบ AI automation ช่วยตอบลูกค้าและจัดการ lead ได้ดีขึ้นมาก งานออกมาดูมืออาชีพและแก้ไขต่อได้ง่าย",
    },
  ],
  stats: [
    { value: "30+", label: "โปรเจกต์ที่ส่งมอบ" },
    { value: "12+", label: "Automation Flows" },
    { value: "5★", label: "ประสบการณ์ลูกค้า" },
  ],
  trustBadges: [
    { label: "พร้อม SEO", icon: ShieldCheck },
    { label: "Deploy บน Vercel", icon: Github },
    { label: "UI พรีเมียม", icon: Sparkles },
    { label: "โค้ดขยายได้", icon: BriefcaseBusiness },
  ],
};

export const portfolioContent: Record<Language, PortfolioCopy> = { en, th };
