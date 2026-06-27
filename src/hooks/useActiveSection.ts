import { useEffect, useState } from "react";

import { navItems } from "../data/ui";

const sectionIds = navItems.map((item) => item.id);

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const updateActiveSection = () => {
      const atPageEnd =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;

      if (atPageEnd) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      const offset = window.scrollY + window.innerHeight * 0.35;

      let current = sectionIds[0];

      for (const section of sections) {
        if (section.offsetTop <= offset) {
          current = section.id;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return activeSection;
}
