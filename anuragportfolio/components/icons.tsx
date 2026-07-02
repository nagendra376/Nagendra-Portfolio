/**
 * Icons. UI glyphs come from lucide-react; the three brand logos
 * (GitHub / X / LinkedIn) are inline SVGs, since lucide removed brand
 * icons over trademark concerns. All share the same { className } API.
 */
import { Mail, FileText, ArrowUpRight as ArrowUpRightBase } from "lucide-react";

type P = { className?: string };

export const MailIcon = ({ className }: P) => (
  <Mail className={className} size={18} aria-hidden />
);

export const FileIcon = ({ className }: P) => (
  <FileText className={className} size={18} aria-hidden />
);

export const ArrowUpRight = ({ className }: P) => (
  <ArrowUpRightBase className={className} size={16} aria-hidden />
);
