import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),
  title: {
    default: "Jah BIG — Full-stack Developer & AI Automation Developer",
    template: "%s | Jah BIG Portfolio",
  },
  description:
    "Premium portfolio website for a Full-stack Developer and AI Automation Developer building web apps, dashboards, AI tools, LINE OA, CRM, and automation systems.",
  keywords: [
    "Full-stack Developer",
    "AI Automation Developer",
    "Next.js Developer",
    "Web Developer",
    "Freelancer",
    "LINE OA Developer",
    "Dashboard Developer",
    "CRM System",
  ],
  authors: [{ name: "Jah BIG" }],
  creator: "Jah BIG",
  openGraph: {
    title: "Jah BIG — Full-stack Developer & AI Automation Developer",
    description:
      "Modern web apps, AI tools, LINE OA, CRM, dashboards, and automation systems for business growth.",
    url: "https://your-domain.com",
    siteName: "Jah BIG Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jah BIG Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jah BIG — Full-stack Developer & AI Automation Developer",
    description:
      "I build modern web apps, AI tools, and automation systems that help businesses grow.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white font-sans text-slate-950 antialiased dark:bg-ink dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
