import type { Language } from "./language";

type LocalizedRecord = Record<string, unknown>;

export function localized(
  language: Language,
  record: LocalizedRecord,
  field: string,
): string {
  const germanField = `${field}-de`;

  if (language === "de" && typeof record[germanField] === "string") {
    return record[germanField];
  }

  return record[field] as string;
}

export function localizedList(
  language: Language,
  record: LocalizedRecord,
  field: string,
): string[] {
  const germanField = `${field}-de`;

  if (language === "de" && Array.isArray(record[germanField])) {
    return record[germanField] as string[];
  }

  return record[field] as string[];
}
