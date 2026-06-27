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
      <div className="absolute top-8 right-60 z-10">
        <LanguageSwitcher language={language} setLanguage={setLanguage} />
      </div>

      <div className="flex w-full items-start justify-between gap-40">
        <SideBar language={language} activeSection={activeSection} />

        <main className="flex w-[62%] max-w-2xl flex-col gap-24 py-24">
          <Introduction language={language} />
          <Experience language={language} />
          <Projects language={language} />
        </main>
      </div>
    </>
  );
}
