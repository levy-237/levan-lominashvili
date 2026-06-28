import { ArrowUpRight } from "lucide-react";

import { experience } from "../data/experience";
import { sectionLabels } from "../data/ui";
import type { Language } from "../utils/language";
import { localized, localizedList } from "../utils/localize";

type ExperienceProps = {
  language: Language;
};

export default function Experience({ language }: ExperienceProps) {

  return (
    <section id="2" className="scroll-mt-20 lg:scroll-mt-24">
      <p className="mb-10 text-xs font-medium uppercase tracking-[0.22em] text-[var(--text-subtle)]">
        {localized(language, sectionLabels, "experience")}
      </p>

      <div className="flex flex-col gap-12">
        {experience.map((item) => {
          const highlights = localizedList(language, item, "highlights");

          return (
            <article
              key={`${item.company}-${item.period}`}
              className="group grid grid-cols-1 gap-x-8 gap-y-2 rounded-md border border-transparent p-4 transition-colors duration-200 hover:border-[var(--beige-accent)]/40 hover:bg-[var(--beige-light)]/30 lg:grid-cols-[7.5rem_1fr] lg:gap-y-3"
            >
              <p className="pt-0.5 text-xs leading-normal text-[var(--text-subtle)]">
                {item.period}
              </p>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-medium text-[var(--text-primary)]">
                    {localized(language, item, "title")}
                  </h3>
                  <ArrowUpRight
                    aria-hidden="true"
                    strokeWidth={1.75}
                    className="h-5 w-5 shrink-0 text-[var(--text-subtle)] transition-transform duration-150 ease-out group-hover:-translate-y-0.5 group-hover:text-[var(--text-primary)]"
                  />
                </div>
                <p className="mt-1 text-[0.9375rem] text-[var(--text-muted)]">
                  {item.company} · {localized(language, item, "employmentType")}
                </p>
                <p className="mt-0.5 text-xs text-[var(--text-subtle)]">
                  {localized(language, item, "location")}
                </p>
                <p className="mt-3.5 text-[0.9375rem] leading-7 text-[var(--text-body)]">
                  {localized(language, item, "description")}
                </p>

                <ul className="mt-3.5 flex list-none flex-col gap-2 p-0">
                  {highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="relative pl-4 text-[0.9375rem] leading-[1.7] text-[var(--text-body)] before:absolute before:left-0 before:text-[var(--text-subtle)] before:content-['–']"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>

                <ul className="mt-4 flex list-none flex-wrap gap-x-2.5 gap-y-2 p-0">
                  {item.stack.map((tech) => (
                    <li
                      key={tech}
                      className="text-xs tracking-wide text-[var(--text-muted)]"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
