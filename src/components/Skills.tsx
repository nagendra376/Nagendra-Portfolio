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
    <>
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
                Frontend UI Development:
              </h3>
              <ul className="space-y-3 sm:space-y-4 text-sm sm:text-lg font-mono text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-portfolio-green mr-2 sm:mr-4">•</span>
                  <span>
                    React, Next.js, and AngularJS for building dynamic
                    single-page applications; JavaScript (ES6+), TypeScript,
                    HTML, and CSS for core frontend logic and structure.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-green mr-2 sm:mr-4">•</span>
                  <span>Styling & UI Frameworks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-green mr-2 sm:mr-4">•</span>
                  <span>
                    Bootstrap, Tailwind CSS, SCSS (Sass), and Material UI for
                    responsive styling, modern component design, animations, and
                    consistent UI layouts.
                  </span>
                </li>
              </ul>
            </div>
            <div ref={templatingRef}>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-mono font-semibold mb-4 sm:mb-8 text-foreground">
                Web Animations & Interactive Experiences{" "}
              </h3>
              <ul className="space-y-3 sm:space-y-4 text-sm sm:text-lg font-mono text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-portfolio-green mr-2 sm:mr-4">•</span>
                  <span>
                    GSAP, Three.js, and the Web Animations API to create smooth
                    transitions, 3D effects, and interactive visual experiences.
                  </span>
                </li>
              </ul>
            </div>
            <div ref={templatingRef}>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-mono font-semibold mb-4 sm:mb-8 text-foreground">
                CMS / CRM Platforms{" "}
              </h3>
              <ul className="space-y-3 sm:space-y-4 text-sm sm:text-lg font-mono text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-portfolio-green mr-2 sm:mr-4">•</span>
                  <span>
                    Shopify and WordPress for developing commerce websites,
                    managing content, customizing themes, and building
                    functional web pages.
                  </span>
                </li>
              </ul>
            </div>

            <div ref={templatingRef}>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-mono font-semibold mb-4 sm:mb-8 text-foreground">
                Databases{" "}
              </h3>
              <ul className="space-y-3 sm:space-y-4 text-sm sm:text-lg font-mono text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-portfolio-green mr-2 sm:mr-4">•</span>
                  <span>
                    MongoDB (NoSQL) and MySQL (SQL) for handling data storage,
                    dynamic content, and application-level integrations.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer className="py-6 sm:py-8 border-t border-portfolio-green/20">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-center text-xs sm:text-sm font-mono text-muted-foreground">
            @2025, Nagendra Dwivedi
          </p>
        </div>
      </footer>
    </>
  );
};

export default Skills;
