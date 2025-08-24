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
    <div ref={aboutRef} className="min-h-screen bg-portfolio-dark py-20 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-shape absolute top-20 left-10 w-20 h-20 bg-portfolio-green/10 rounded-full animate-float-slow"></div>
        <div className="floating-shape absolute top-40 right-20 w-16 h-16 bg-portfolio-green/20 rounded-full animate-float-medium"></div>
        <div className="floating-shape absolute bottom-32 left-1/4 w-12 h-12 bg-portfolio-green/15 rounded-full animate-float-fast"></div>
        <div className="floating-shape absolute bottom-20 right-1/3 w-24 h-24 bg-portfolio-green/5 rounded-full animate-float-slow"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 
              ref={titleRef}
              className="text-3xl md:text-5xl lg:text-6xl font-mono font-bold mb-8 text-foreground leading-tight"
            >
              I solve business problems using code.
            </h2>
            <p 
              ref={descriptionRef}
              className="text-lg md:text-xl font-mono text-muted-foreground leading-relaxed mb-8"
            >
              I've worked with clients from all over the world to build their ecommerce stores by leveraging 
              technologies for frontend as well as backend
            </p>
            
            {/* Floating tech stack */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="floating-tech bg-portfolio-green/10 backdrop-blur-sm rounded-lg p-4 text-center animate-float-slow">
                <span className="text-portfolio-green font-mono text-sm">React</span>
              </div>
              <div className="floating-tech bg-portfolio-green/10 backdrop-blur-sm rounded-lg p-4 text-center animate-float-medium">
                <span className="text-portfolio-green font-mono text-sm">Next.js</span>
              </div>
              <div className="floating-tech bg-portfolio-green/10 backdrop-blur-sm rounded-lg p-4 text-center animate-float-fast">
                <span className="text-portfolio-green font-mono text-sm">TypeScript</span>
              </div>
              <div className="floating-tech bg-portfolio-green/10 backdrop-blur-sm rounded-lg p-4 text-center animate-float-medium">
                <span className="text-portfolio-green font-mono text-sm">Node.js</span>
              </div>
              <div className="floating-tech bg-portfolio-green/10 backdrop-blur-sm rounded-lg p-4 text-center animate-float-slow">
                <span className="text-portfolio-green font-mono text-sm">Python</span>
              </div>
              <div className="floating-tech bg-portfolio-green/10 backdrop-blur-sm rounded-lg p-4 text-center animate-float-fast">
                <span className="text-portfolio-green font-mono text-sm">AWS</span>
              </div>
            </div>
          </div>
          
          <div ref={sceneRef} className="flex justify-center">
            <div className="floating-scene animate-float-medium">
              <ThreeScene />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;