export type Language = "en" | "de";

export const LANGUAGE_STORAGE_KEY = "portfolio-language";

export function getStoredLanguage(): Language {
  const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return stored === "de" ? "de" : "en";
}
