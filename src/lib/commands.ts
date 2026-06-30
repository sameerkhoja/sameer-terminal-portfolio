export type CommandName =
  | "home"
  | "about"
  | "work"
  | "experience"
  | "skills"
  | "education"
  | "contact"
  | "help"
  | "clear";

export type Command = {
  name: CommandName;
  description: string;
  aliases?: string[];
};

export const commands: Command[] = [
  { name: "home", description: "return to the opening screen", aliases: ["intro"] },
  { name: "about", description: "a quick introduction", aliases: ["whoami", "me"] },
  { name: "work", description: "selected product work", aliases: ["projects", "ls"] },
  { name: "experience", description: "career timeline", aliases: ["resume", "cv"] },
  { name: "skills", description: "languages and specialties", aliases: ["stack"] },
  { name: "education", description: "education", aliases: ["school"] },
  { name: "contact", description: "email and social links", aliases: ["links"] },
  { name: "help", description: "list available commands", aliases: ["?"] },
  { name: "clear", description: "clear command history", aliases: ["cls"] },
];

export const quickCommands: CommandName[] = [
  "about",
  "work",
  "experience",
  "skills",
  "contact",
  "help",
];

export function resolveCommand(input: string): Command | undefined {
  const token = input.trim().toLowerCase().split(/\s+/)[0];
  if (!token) return undefined;
  return commands.find(
    (command) => command.name === token || command.aliases?.includes(token),
  );
}

export function completeCommand(input: string): string | undefined {
  const token = input.trim().toLowerCase();
  if (!token || token.includes(" ")) return undefined;
  return commands.find((command) => command.name.startsWith(token))?.name;
}
