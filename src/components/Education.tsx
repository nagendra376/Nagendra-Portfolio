import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

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
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    ).fromTo(
      itemsRef.current,
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
      degree: "Master of Computer Applications",
      field: "Computer Science Engineering",
      institution: "Sikkim Manipal University (SMU)",
      location: "Gangtok, Sikkim",
      period: "Currently pursuing",
      description: "Focused on advanced topics in software development.",
    },
    {
      degree: "Bachelor of Science",
      field: "In Information Technology",
      institution: "Nirmala Memorial Foundation College of Commerce & Science",
      location: "Mumbai, India",
      period: "2019 - 2022",
      description:
        "Specialized in software development, algorithms, and data structures.",
    },
  ];

  return (
    <div
      ref={educationRef}
      className="min-h-screen bg-portfolio-darker py-12 sm:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <h2
          ref={titleRef}
          className="text-2xl sm:text-4xl md:text-6xl font-mono font-bold mb-8 sm:mb-16 text-center text-foreground"
        >
          Education
        </h2>

        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="relative pl-6 sm:pl-8 pb-8 sm:pb-12 border-l-2 border-portfolio-green/30 last:pb-0 group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-2 sm:-left-3 top-0 w-4 h-4 sm:w-6 sm:h-6 bg-portfolio-green rounded-full border-2 sm:border-4 border-portfolio-dark group-hover:scale-125 transition-transform duration-300"></div>

              <div className="bg-portfolio-dark/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-portfolio-green/20 hover:border-portfolio-green/40 transition-all duration-300 hover:transform hover:scale-[1.02]">
                <div className="flex flex-col mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-portfolio-green flex-shrink-0" />
                    <h3 className="text-base sm:text-xl font-mono font-bold text-foreground">
                      {edu.degree}
                    </h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="font-mono">{edu.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="font-mono">{edu.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-portfolio-green font-mono font-semibold mb-2 text-sm sm:text-base">
                  {edu.field}
                </p>
                <p className="text-foreground font-mono mb-3 text-sm sm:text-base">
                  {edu.institution}
                </p>
                <p className="text-muted-foreground font-mono leading-relaxed text-xs sm:text-base">
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
