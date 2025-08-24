import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
    .fromTo([frontendRef.current, templatingRef.current],
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" },
      "-=0.3"
    );
  }, []);

  return (
    <div ref={skillsRef} className="min-h-screen bg-portfolio-darker py-20">
      <div className="container mx-auto px-6">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-mono font-semibold mb-16 text-foreground text-center"
        >
          Following are the tools I've used in the past projects and I am familiar with
        </h2>

        <div className="max-w-4xl mx-auto space-y-16">
          <div ref={frontendRef}>
            <h3 className="text-2xl md:text-3xl font-mono font-semibold mb-8 text-foreground">
              Frontend libraries/frameworks:
            </h3>
            <ul className="space-y-4 text-lg font-mono text-muted-foreground">
              <li className="flex items-start">
                <span className="text-portfolio-green mr-4">•</span>
                React + NextJs or Gatsby to create single page web Applications
              </li>
              <li className="flex items-start">
                <span className="text-portfolio-green mr-4">•</span>
                VueJs 3.0 with options api for creating micro frontend functionalities
              </li>
            </ul>
          </div>

          <div ref={templatingRef}>
            <h3 className="text-2xl md:text-3xl font-mono font-semibold mb-8 text-foreground">
              Templating languages:
            </h3>
            <ul className="space-y-4 text-lg font-mono text-muted-foreground">
              <li className="flex items-start">
                <span className="text-portfolio-green mr-4">•</span>
                Liquid for Shopify commerce sites
              </li>
              <li className="flex items-start">
                <span className="text-portfolio-green mr-4">•</span>
                Php8 and Php7 for php based ecommerce sites and wordpress sites
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;