import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const frontendRef = useRef<HTMLDivElement>(null);
  const templatingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    ).fromTo(
      [frontendRef.current, templatingRef.current],
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" },
      "-=0.3"
    );
  }, []);

  return (
    <div
      ref={skillsRef}
      className="min-h-screen bg-portfolio-darker py-12 sm:py-20 overflow-x-hidden"
    >
      <div className="container w-full mx-auto px-4 sm:px-6">
        <h2
          ref={titleRef}
          className="text-xl sm:text-4xl md:text-6xl font-mono font-semibold mb-8 sm:mb-16 text-foreground text-start"
        >
          Tools I am proficient in:
        </h2>

        <div className="max-w-4xl space-y-10 sm:space-y-16">
          <div ref={frontendRef}>
            <h3 className="text-lg sm:text-2xl md:text-3xl font-mono font-semibold mb-4 sm:mb-8 text-foreground">
              Frontend libraries/frameworks:
            </h3>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-lg font-mono text-muted-foreground">
              <li className="flex items-start">
                <span className="text-portfolio-green mr-2 sm:mr-4">•</span>
                <span>
                  React + NextJs or AngularJs to create single page web
                  Applications
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-portfolio-green mr-2 sm:mr-4">•</span>
                <span>TypeScript, JavaScript (ES6+)</span>
              </li>
              <li className="flex items-start">
                <span className="text-portfolio-green mr-2 sm:mr-4">•</span>
                <span>
                  CSS libraries: Tailwind CSS, SCSS (Sass), Bootstrap, Material
                  UI
                </span>
              </li>
            </ul>
          </div>

          <div ref={templatingRef}>
            <h3 className="text-lg sm:text-2xl md:text-3xl font-mono font-semibold mb-4 sm:mb-8 text-foreground">
              CRM Tools:
            </h3>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-lg font-mono text-muted-foreground">
              <li className="flex items-start">
                <span className="text-portfolio-green mr-2 sm:mr-4">•</span>
                <span>Shopify commerce sites</span>
              </li>
              <li className="flex items-start">
                <span className="text-portfolio-green mr-2 sm:mr-4">•</span>
                <span>wordpress sites</span>
              </li>
            </ul>
          </div>
          <div ref={templatingRef}>
            <h3 className="text-lg sm:text-2xl md:text-3xl font-mono font-semibold mb-4 sm:mb-8 text-foreground">
              Databases:
            </h3>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-lg font-mono text-muted-foreground">
              <li className="flex items-start">
                <span className="text-portfolio-green mr-2 sm:mr-4">•</span>
                <span>MongoDB (NoSQL), MySQL (SQL)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
