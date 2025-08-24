import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeScene from './ThreeScene';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(titleRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
    )
    .fromTo(sceneRef.current,
      { opacity: 0, x: 50, scale: 0.8 },
      { opacity: 1, x: 0, scale: 1, duration: 1, ease: "power2.out" },
      "-=0.5"
    )
    .fromTo(descriptionRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.3"
    );
  }, []);

  return (
    <div ref={aboutRef} className="min-h-screen bg-portfolio-dark py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 
              ref={titleRef}
              className="text-4xl md:text-6xl font-mono font-bold mb-8 text-foreground leading-tight"
            >
              I solve business problems using code.
            </h2>
            <p 
              ref={descriptionRef}
              className="text-lg md:text-xl font-mono text-muted-foreground leading-relaxed"
            >
              I've worked with clients from all over the world to build their ecommerce stores by leveraging 
              technologies for frontend as well as backend
            </p>
          </div>
          
          <div ref={sceneRef} className="flex justify-center">
            <ThreeScene />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;