import { site } from "@/config/site";
import { GitHubIcon, TwitterIcon, LinkedInIcon, MailIcon, FileIcon, DiscordIcon, MediumIcon } from "./icons";

const items = [
  { key: "github", href: site.socials.github, label: "GitHub", Icon: GitHubIcon },
  { key: "twitter", href: site.socials.twitter, label: "Twitter / X", Icon: TwitterIcon },
  { key: "linkedin", href: site.socials.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { key: "medium", href: (site.socials as any).medium, label: "Medium", Icon: MediumIcon },
  { key: "email", href: site.socials.email, label: "Email", Icon: MailIcon },
  { key: "resume", href: site.socials.resume, label: "Résumé", Icon: FileIcon },
  { key: "discord", href: (site.socials as any).discord, label: "Discord", Icon: DiscordIcon },
];
