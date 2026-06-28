import { useEffect, useState } from "react";

import LanguageSwitcher from "../components/LanguageSwitcher";
import { useActiveSection } from "../hooks/useActiveSection";
import Introduction from "../Introduction";
import {
  getStoredLanguage,
  LANGUAGE_STORAGE_KEY,
  type Language,
} from "../utils/language";
import Experience from "./Experience";
import Projects from "./Projects";
import SideBar from "./SideBar";

export default function Content() {
  const [language, setLanguageState] = useState<Language>(() =>
    getStoredLanguage(),
  );

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const activeSection = useActiveSection();

  return (
    <>
      <div className="absolute top-6 right-6 z-10 lg:top-8 lg:right-60">
        <LanguageSwitcher language={language} setLanguage={setLanguage} />
      </div>

      <div className="flex w-full flex-col items-start justify-between gap-10 lg:flex-row lg:gap-40">
        <SideBar language={language} activeSection={activeSection} />

        <main className="flex w-full max-w-2xl flex-col gap-16 py-10 lg:w-[62%] lg:gap-24 lg:py-24">
          <Introduction language={language} />
          <Experience language={language} />
          <Projects language={language} />
        </main>
      </div>
    </>
  );
}
