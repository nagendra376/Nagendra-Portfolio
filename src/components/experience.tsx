import { site } from "@/config/site";
import { Reveal, SectionHeader } from "./reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Experience() {
  if (!site.experience.length) return null;

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-12">
      <SectionHeader id="work" index="02" title="where I've worked" />

      <div className="space-y-4">
        <Accordion type="single" collapsible className="space-y-4">
          {site.experience.map((job, i) => (
            <Reveal key={`${job.company}-${i}`} delay={i * 0.06}>
              <AccordionItem
                value={`${job.company}-${i}`}
                className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-0 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-5 text-left hover:no-underline">
                  <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="font-semibold text-neutral-100 text-lg">
                        {job.company}
                      </h3>
                      <p className="text-sm font-medium text-emerald-400 mt-0.5">
                        {job.role}
                      </p>
                    </div>
                    <span className="flex-none font-mono text-xs text-neutral-400 border border-neutral-800 rounded-full px-3 py-1 bg-neutral-950/40">
                      {job.period}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  {job.blurb.includes("•") ? (
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-neutral-300 leading-relaxed">
                      {job.blurb.split("\n").map((point, idx) => (
                        <li key={`${job.company}-${idx}`}>
                          {point.replace(/^•\s*/, "")}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                      {job.blurb}
                    </p>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Reveal>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
