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
        <Accordion type="single" collapsible className="w-full">
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
                      <div className="flex items-center gap-2">
                        <span className="text-[12px] font-mono uppercase tracking-[0.18em] text-[var(--soft)]">
                          {job.period}
                        </span>
                      </div>
                      <div>
                        <p className="text-[15px] font-semibold text-[var(--fg)]">
                          {job.role}
                        </p>
                        <p className="text-[13px] text-[var(--muted)]">
                          {job.company}
                        </p>
                      </div>
                    </div>
                    {job.url && (
                      <ExternalLink size={14} className="text-[var(--soft)]" />
                    )}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  {job.blurb.includes("•") ? (
                    <ul className="list-disc space-y-2 pl-5 text-[13.5px] leading-relaxed text-[var(--muted)]">
                      {job.blurb.split("\n").map((point, idx) => (
                        <li key={`${job.company}-${idx}`}>
                          {point.replace(/^•\s*/, "")}
                        </li>
                      ))}
                    </ul>
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
