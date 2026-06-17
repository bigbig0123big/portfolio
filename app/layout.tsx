import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-en",
  display: "swap",
});

const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-thai",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-pi-jet-7xkyelfep1.vercel.app/"),
  title: {
    default: "Portfolio | Pongsit K.",
    template: "%s | Pongsit K.",
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
  authors: [{ name: "Pongsit K." }],
  creator: "Pongsit K.",
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Portfolio | Pongsit K.",
    description:
      "Modern web apps, AI tools, LINE OA, CRM, dashboards, and automation systems for business growth.",
    url: "https://portfolio-pi-jet-7xkyelfep1.vercel.app/",
    siteName: "Pongsit K.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "PONGSIT KANTHON (BIG) social preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Pongsit K.",
    description:
      "I build modern web apps, AI tools, and automation systems that help businesses grow.",
    images: ["/og-image.svg"],
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
      <body className={`${prompt.variable} ${kanit.variable} min-h-screen bg-white font-sans text-slate-950 antialiased dark:bg-ink dark:text-white`}>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
