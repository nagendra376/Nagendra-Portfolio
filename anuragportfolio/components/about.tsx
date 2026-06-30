import { site } from "@/config/site";
import { Reveal, SectionHeader } from "./reveal";

export function About() {
  return (
    <section className="mx-auto w-full max-w-content px-6 py-16">
      <SectionHeader id="about" index="01" title="about" />

      <div className="space-y-4 text-lg leading-relaxed text-muted">
        {site.about.map((para, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <p>{para}</p>
          </Reveal>
        ))}
      </div>

    </section>
  );
}
