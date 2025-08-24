import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const educationRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: educationRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
    .fromTo(itemsRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" },
      "-=0.5"
    );
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  const educationData = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science Engineering",
      institution: "Your University",
      location: "City, Country",
      period: "2018 - 2022",
      description: "Focused on software development, algorithms, and data structures."
    },
    {
      degree: "Higher Secondary",
      field: "Science (PCM)",
      institution: "Your School",
      location: "City, Country", 
      period: "2016 - 2018",
      description: "Mathematics, Physics, and Chemistry with computer science."
    }
  ];

  return (
    <div ref={educationRef} className="min-h-screen bg-portfolio-darker py-20">
      <div className="container mx-auto px-6">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-6xl font-mono font-bold mb-16 text-center text-foreground"
        >
          Education
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              ref={addToRefs}
              className="relative pl-8 pb-12 border-l-2 border-portfolio-green/30 last:pb-0 group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-3 top-0 w-6 h-6 bg-portfolio-green rounded-full border-4 border-portfolio-dark group-hover:scale-125 transition-transform duration-300"></div>
              
              <div className="bg-portfolio-dark/50 backdrop-blur-sm rounded-lg p-6 border border-portfolio-green/20 hover:border-portfolio-green/40 transition-all duration-300 hover:transform hover:scale-[1.02]">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center space-x-2 mb-2 md:mb-0">
                    <GraduationCap className="w-5 h-5 text-portfolio-green" />
                    <h3 className="text-xl font-mono font-bold text-foreground">
                      {edu.degree}
                    </h3>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span className="font-mono">{edu.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span className="font-mono">{edu.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-portfolio-green font-mono font-semibold mb-2">
                  {edu.field}
                </p>
                <p className="text-foreground font-mono mb-3">
                  {edu.institution}
                </p>
                <p className="text-muted-foreground font-mono leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;