export type ContactLink = {
  label: string;
  "label-de"?: string;
  href: string;
};

export const contact = {
  message:
    "I'm open to frontend and full-stack roles in Austria. Feel free to reach out — I'd love to connect.",
  "message-de":
    "Ich bin offen für Frontend- und Full-Stack-Rollen in Österreich. Melde dich gerne — ich freue mich auf den Austausch.",
  email: "levanilominashvili23@gmail.com",
  links: [
    {
      label: "GitHub",
      href: "https://github.com/levy-237",
    },
    {
      label: "LinkedIn",
      href: "#",
    },
  ] satisfies ContactLink[],
};
