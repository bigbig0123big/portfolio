"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { portfolioContent, type Language } from "@/lib/portfolio-content";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  content: (typeof portfolioContent)[Language];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const storageKey = "portfolio-language";

function getStoredLanguage(): Language {
  if (typeof window === "undefined") {
    return "en";
  }

  const stored = window.localStorage.getItem(storageKey);
  return stored === "th" ? "th" : "en";
}

export function LanguageProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [language, setLanguageState] = useState<Language>(() => getStoredLanguage());

  useEffect(() => {
    window.localStorage.setItem(storageKey, language);
    document.documentElement.lang = language;
    document.title = portfolioContent[language].title;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", portfolioContent[language].description);
    }
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => {
    return {
      language,
      setLanguage: setLanguageState,
      toggleLanguage: () => setLanguageState((current) => (current === "en" ? "th" : "en")),
      content: portfolioContent[language],
    };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
