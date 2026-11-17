import { motion } from "framer-motion";
import { Shell, SectionHeader } from "@/components/Layout";
import { site } from "@/config/site";
import { ExternalLink } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Experience() {
  if (!site.experience.length) return null;

  return (
    <div id="experience">
      <SectionHeader title="Experience" />
      <Shell>
        <Accordion
          type="single"
          collapsible
          defaultValue={`${site.experience[0]?.company}-0`}
          className="w-full"
        >
          {site.experience.map((job, i) => (
            <motion.div
              key={`${job.company}-${i}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <AccordionItem
                value={`${job.company}-${i}`}
                className="border-[var(--line)] px-4 sm:px-6"
              >
                <AccordionTrigger className="py-5 text-left hover:no-underline">
                  <div className="flex w-full flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-[15px] font-semibold text-[var(--fg)]">
                            {job.role}
                          </p>
                          {job.location && (
                            <span className="text-[11px] font-mono text-[var(--soft)] hidden sm:inline">
                              • {job.location}
                            </span>
                          )}
                        </div>
                        <p className="text-[13px] text-[var(--muted)]">
                          {job.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[var(--soft)] border border-[var(--line)] px-2.5 py-1 rounded-md bg-[var(--chip)]">
                        {job.period}
                      </span>
                      {job.url && (
                        <ExternalLink size={14} className="text-[var(--soft)]" />
                      )}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  {job.summary && (
                    <p className="text-[13.5px] font-medium text-[var(--fg)] mb-4 leading-relaxed">
                      {job.summary}
                    </p>
                  )}

                  {/* Render Sub-Projects if present (e.g. KNKY Creator, Agency, Admin) */}
                  {job.subProjects && job.subProjects.length > 0 ? (
                    <div className="space-y-4">
                      {job.subProjects.map((sub, sIdx) => (
                        <div
                          key={`${sub.name}-${sIdx}`}
                          className="rounded-lg border border-[var(--line)] bg-[var(--chip)]/40 p-4 transition-colors"
                        >
                          <div className="mb-2">
                            <h4 className="text-[14px] font-semibold text-[var(--fg)]">
                              {sub.name}
                            </h4>
                            {sub.tools && (
                              <div className="mt-2 flex flex-wrap gap-1.5">
                                {sub.tools.split(",").map((tool) => (
                                  <span
                                    key={tool.trim()}
                                    className="rounded border border-[var(--line)] bg-[var(--card)] px-2 py-0.5 font-mono text-[10px] text-[var(--soft)]"
                                  >
                                    {tool.trim()}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                          <ul className="mt-3 space-y-2 text-[13px] leading-relaxed text-[var(--muted)]">
                            {sub.points.map((pt, pIdx) => (
                              <li key={pIdx} className="flex gap-2">
                                <span className="text-[var(--soft)] font-mono select-none mt-0.5">
                                  •
                                </span>
                                <div>
                                  <strong className="text-[var(--fg)] font-medium">
                                    {pt.prefix}:
                                  </strong>{" "}
                                  <span>{pt.text}</span>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : job.points && job.points.length > 0 ? (
                    <div className="space-y-3">
                      {job.tools && (
                        <div className="mb-3 flex flex-wrap gap-1.5">
                          {job.tools.split(",").map((tool) => (
                            <span
                              key={tool.trim()}
                              className="rounded border border-[var(--line)] bg-[var(--chip)] px-2 py-0.5 font-mono text-[10px] text-[var(--soft)]"
                            >
                              {tool.trim()}
                            </span>
                          ))}
                        </div>
                      )}
                      <ul className="space-y-2 text-[13px] leading-relaxed text-[var(--muted)]">
                        {job.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex gap-2">
                            <span className="text-[var(--soft)] font-mono select-none mt-0.5">
                              •
                            </span>
                            <div>
                              <strong className="text-[var(--fg)] font-medium">
                                {pt.prefix}:
                              </strong>{" "}
                              <span>{pt.text}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p className="text-[13.5px] leading-relaxed text-[var(--muted)]">
                      {job.blurb}
                    </p>
                  )}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </Shell>
    </div>
  );
}
