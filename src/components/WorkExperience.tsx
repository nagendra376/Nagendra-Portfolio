import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const WorkExperience = () => {
  const workRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: workRef.current,
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
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" },
      "-=0.5"
    );
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  const workData = [
    {
      position: "Web Developer",
      company: "Accenture",
      url: "https://www.accenture.com/in-en",
      location: "Mumbai, India",
      period: "2024 - 2025",
      description:
        "Worked on various web development projects using HTML, CSS, and JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript"],
      projects: ["GSK"],
    },
    {
      position: "Web Developer",
      company: "Webtactics",
      url: "https://webtactic.in/",
      location: "Mumbai, India",
      period: "2024 - 2024",
      description:
        "Developed responsive web applications and collaborated with design teams to implement pixel-perfect UIs.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "WordPress",
        "Shopify",
        "PHP",
        "MySQL",
      ],
      projects: ["Shagun", "Sunrise", "Esn India", "Internal Projects"],
    },
    {
      position: "Web Developer",
      company: "My Country Mobile",
      url: "https://www.mycountrymobile.com",
      location: "Mumbai, India",
      period: "2022 - 2024",
      description:
        "Started career building web applications and learning modern development practices.",
      technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"],
      projects: [
        "SmsLocal",
        "My Country Mobile",
        "Teloz",
        "RingCentral",
        "CallMama",
        "Internal Tools",
        "Landing Pages",
      ],
    },
  ];

  return (
    <div
      ref={workRef}
      className="min-h-screen bg-portfolio-dark py-12 sm:py-20"
    >
      <div className="container w-full mx-auto px-4 sm:px-6">
        <h2
          ref={titleRef}
          className="text-2xl sm:text-4xl md:text-6xl font-mono font-bold mb-8 sm:mb-16 text-center text-foreground"
        >
          Work Experience
        </h2>

        <div className="max-w-5xl mx-auto">
          {workData.map((work, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="relative pr-6 sm:pr-8 pb-8 sm:pb-12 border-r-2 border-portfolio-green/30 last:pb-0 group ml-auto"
            >
              {/* Timeline dot */}
              <div className="absolute -right-2 sm:-right-3 top-0 w-4 h-4 sm:w-6 sm:h-6 bg-portfolio-green rounded-full border-2 sm:border-4 border-portfolio-dark group-hover:scale-125 transition-transform duration-300"></div>

              <div className="bg-portfolio-darker/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-portfolio-green/20 hover:border-portfolio-green/40 transition-all duration-300 hover:transform hover:scale-[1.02]">
                <div className="flex flex-col mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-portfolio-green flex-shrink-0" />
                    <h3 className="text-base sm:text-xl font-mono font-bold text-foreground">
                      {work.position}
                    </h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="font-mono">{work.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="font-mono">{work.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-portfolio-green font-mono font-semibold mb-2 text-sm sm:text-base">
                  {work.url ? (
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 hover:underline"
                    >
                      <span>{work.company}</span>
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    </a>
                  ) : (
                    <span className="flex items-center space-x-2">
                      {work.company}
                    </span>
                  )}
                </p>

                <p className="text-muted-foreground font-mono leading-relaxed mb-4 text-xs sm:text-base">
                  {work.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-foreground font-mono font-semibold mb-2 text-sm sm:text-base">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {work.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 bg-portfolio-green/20 text-portfolio-green font-mono text-xs sm:text-sm rounded-full border border-portfolio-green/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                <div>
                  <h4 className="text-foreground font-mono font-semibold mb-2 text-sm sm:text-base">
                    Key Projects:
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {work.projects.map((project, projectIndex) => (
                      <span
                        key={projectIndex}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 bg-foreground/10 text-foreground font-mono text-xs sm:text-sm rounded-full border border-foreground/20"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
