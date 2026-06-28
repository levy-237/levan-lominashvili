import type { Language } from "./utils/language";
import { introduction } from "./data/introduction";
import { sectionLabels } from "./data/ui";
import { localizedList, localized } from "./utils/localize";

type IntroductionProps = {
  language: Language;
};

export default function Introduction({ language }: IntroductionProps) {
  const paragraphs = localizedList(language, introduction, "paragraphs");

  return (
    <section id="1" className="max-w-xl scroll-mt-20 lg:scroll-mt-24">
      <p className="section-label mb-8 text-xs font-medium uppercase tracking-[0.22em]">
        {localized(language, sectionLabels, "about")}
      </p>

      <div className="section-body space-y-6">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
