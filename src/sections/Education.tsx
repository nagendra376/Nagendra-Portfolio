import { motion } from "framer-motion";
import { Shell, SectionHeader } from "@/components/Layout";
import { site } from "@/config/site";
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export function Education() {
  if (!site.education.length && !site.certifications.length) return null;

  return (
    <div id="education">
      <SectionHeader title="Education & Certifications" />
      <Shell className="px-6 py-6 sm:px-8 space-y-6">
        {/* Education Section */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <GraduationCap className="size-4 text-[var(--fg)]" />
            <h3 className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[var(--fg)]">
              Academic Degrees
            </h3>
          </div>

          <div className="grid gap-3.5 sm:grid-cols-2">
            {site.education.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.1 }}
                className="group flex flex-col justify-between rounded-xl border border-[var(--line)] bg-[var(--card)] p-4 shadow-sm transition-all duration-200 hover:border-[var(--soft)] hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-[14px] font-semibold text-[var(--fg)] leading-snug">
                      {edu.degree}
                    </h4>
                    {edu.status && (
                      <span className="shrink-0 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-500 flex items-center gap-1">
                        <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {edu.status}
                      </span>
                    )}
                    {edu.grade && (
                      <span className="shrink-0 rounded-md border border-[var(--line)] bg-[var(--chip)] px-2 py-0.5 font-mono text-[10px] font-medium text-[var(--fg)]">
                        {edu.grade}
                      </span>
                    )}
                  </div>

                  <p className="mt-1 text-[13px] text-[var(--muted)]">
                    {edu.institution}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-[var(--line)] pt-3 font-mono text-[11px] text-[var(--soft)]">
                  <span className="flex items-center gap-1">
                    <Calendar className="size-3" />
                    {edu.period}
                  </span>
                  {edu.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="size-3" />
                      {edu.location}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        {site.certifications.length > 0 && (
          <div className="pt-2">
            <div className="mb-4 flex items-center gap-2">
              <Award className="size-4 text-[var(--fg)]" />
              <h3 className="font-mono text-[12px] font-semibold uppercase tracking-wider text-[var(--fg)]">
                Certifications
              </h3>
            </div>

            <div className="grid gap-3.5 sm:grid-cols-2">
              {site.certifications.map((cert, idx) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.1 }}
                  className="flex items-center justify-between rounded-xl border border-[var(--line)] bg-[var(--card)] p-4 shadow-sm transition-all duration-200 hover:border-[var(--soft)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid size-9 shrink-0 place-items-center rounded-lg border border-[var(--line)] bg-[var(--chip)] text-emerald-500">
                      <CheckCircle2 className="size-4" />
                    </div>
                    <div>
                      <h4 className="text-[13.5px] font-semibold text-[var(--fg)]">
                        {cert.title}
                      </h4>
                      <p className="text-[12.5px] text-[var(--muted)]">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <div className="text-right font-mono text-[11px] text-[var(--soft)]">
                    <span>Issued {cert.issued}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </Shell>
    </div>
  );
}

export default Education;
