import type { Language } from "../utils/language";

const languages: Language[] = ["en", "de"];

type LanguageSwitcherProps = {
  language: Language;
  setLanguage: (language: Language) => void;
};

export default function LanguageSwitcher({
  language,
  setLanguage,
}: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em]">
      {languages.map((name, index) => (
        <span key={name} className="flex items-center gap-2">
          {index > 0 && (
            <span className="text-[var(--text-subtle)]" aria-hidden="true">
              /
            </span>
          )}
          <button
            type="button"
            onClick={() => setLanguage(name)}
            className={
              language === name
                ? "text-[var(--text-primary)]"
                : "text-[var(--text-subtle)] transition-colors duration-200 hover:text-[var(--text-muted)]"
            }
            aria-pressed={language === name}
          >
            {name}
          </button>
        </span>
      ))}
    </div>
  );
}
