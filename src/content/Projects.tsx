import { ArrowUpRight } from "lucide-react";

import { projects } from "../data/projects";
import { sectionLabels } from "../data/ui";
import type { Language } from "../utils/language";
import { localized, localizedList } from "../utils/localize";

type ProjectsProps = {
  language: Language;
};

export default function Projects({ language }: ProjectsProps) {

  return (
    <section id="3" className="scroll-mt-24">
      <p className="mb-10 text-xs font-medium uppercase tracking-[0.22em] text-[var(--text-subtle)]">
        {localized(language, sectionLabels, "projects")}
      </p>

      <div className="flex flex-col gap-12">
        {projects.map((project) => {
          const highlights = localizedList(language, project, "highlights");
          const primaryLink = project.links[0];

          return (
            <article
              key={project.slug}
              className="group relative grid grid-cols-[10rem_1fr] items-start gap-x-8 gap-y-3 rounded-md border border-transparent p-4 transition-colors duration-200 hover:border-[var(--beige-accent)]/40 hover:bg-[var(--beige-light)]/30"
            >
              <a
                href={primaryLink.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} — ${localized(language, primaryLink, "label")}`}
                className="absolute inset-0 rounded-md"
              />

              <div className="pointer-events-none overflow-hidden rounded-sm border border-[color-mix(in_srgb,var(--beige-deep)_55%,transparent)] bg-[color-mix(in_srgb,var(--beige-light)_35%,var(--beige-base))]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="block h-auto w-full object-contain"
                />
              </div>

              <div className="relative pointer-events-none">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-medium text-[var(--text-primary)]">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    aria-hidden="true"
                    strokeWidth={1.75}
                    className="h-5 w-5 shrink-0 text-[var(--text-subtle)] transition-transform duration-150 ease-out group-hover:-translate-y-0.5 group-hover:text-[var(--text-primary)]"
                  />
                </div>
                <p className="mt-3.5 text-[0.9375rem] leading-7 text-[var(--text-body)]">
                  {localized(language, project, "description")}
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

                <ul className="mt-5 flex list-none flex-wrap gap-x-2.5 gap-y-2 p-0">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="text-xs tracking-wide text-[var(--text-muted)]"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="relative z-10 mt-5 flex flex-wrap gap-4 pointer-events-auto">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs uppercase tracking-wider text-[var(--text-subtle)] transition-colors duration-200 hover:text-[var(--text-primary)]"
                    >
                      {localized(language, link, "label")}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
