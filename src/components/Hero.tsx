import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const currentRef = useRef<HTMLParagraphElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    )
    .fromTo(currentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.3"
    )
    .fromTo(workRef.current?.children || [],
      { opacity: 0, y: 20, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
      "-=0.2"
    )
    .fromTo(socialRef.current?.children || [],
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
      "-=0.3"
    );
  }, []);

  return (
    <div ref={heroRef} className="min-h-screen flex items-center justify-center bg-portfolio-dark pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h1 
            ref={titleRef}
            className="text-5xl md:text-7xl font-mono font-bold mb-8 text-foreground"
          >
            Hi, I'm Sudeep Kuchara
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl font-mono mb-6 text-foreground flex items-center"
          >
            Senior frontend engineer at{' '}
            <span className="inline-block w-3 h-3 bg-portfolio-green rounded-full ml-2 animate-glow-pulse"></span>
          </p>
          
          <p 
            ref={currentRef}
            className="text-lg md:text-xl font-mono mb-12 text-muted-foreground"
          >
            Currently building ⚡ <span className="text-portfolio-green">V-retail</span> with my mates in the office.
          </p>

          <div ref={workRef} className="mb-16">
            <h2 className="text-2xl font-mono font-semibold mb-8 text-foreground">Recent work:</h2>
            <div className="flex flex-wrap gap-8 items-center">
              <div className="flex items-center space-x-2 group cursor-pointer">
                <span className="text-lg font-mono text-portfolio-green">⚡</span>
                <span className="text-lg font-mono text-foreground group-hover:text-portfolio-green transition-colors">
                  V-retail
                </span>
              </div>
              <div className="flex items-center space-x-2 group cursor-pointer">
                <span className="text-lg font-mono text-pink-500">●●</span>
                <span className="text-lg font-mono text-foreground group-hover:text-portfolio-green transition-colors">
                  KNKY
                </span>
              </div>
              <div className="flex items-center space-x-2 group cursor-pointer">
                <span className="text-lg font-mono text-blue-400">▣</span>
                <span className="text-lg font-mono text-foreground group-hover:text-portfolio-green transition-colors">
                  v-estate
                </span>
              </div>
            </div>
          </div>

          <div ref={socialRef} className="flex space-x-8">
            <a 
              href="https://github.com" 
              className="flex items-center space-x-2 text-foreground hover:text-portfolio-green transition-colors group"
            >
              <Github className="w-5 h-5 group-hover:animate-pulse" />
              <span className="font-mono">github (work)</span>
            </a>
            <a 
              href="https://github.com" 
              className="flex items-center space-x-2 text-foreground hover:text-portfolio-green transition-colors group"
            >
              <Github className="w-5 h-5 group-hover:animate-pulse" />
              <span className="font-mono">github (personal)</span>
            </a>
            <a 
              href="https://linkedin.com" 
              className="flex items-center space-x-2 text-foreground hover:text-portfolio-green transition-colors group"
            >
              <Linkedin className="w-5 h-5 group-hover:animate-pulse" />
              <span className="font-mono">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;