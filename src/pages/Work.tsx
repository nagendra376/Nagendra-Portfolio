import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Navigation from "../components/Navigation";
import { ExternalLink } from "lucide-react";

const Work = () => {
  const workRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      projectsRef.current?.children || [],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.3,
      }
    );
  }, []);

  const projects = [
    {
      title: "Knky",
      subtitle: "Adult Platform",
      description:
        "Currently, I’m working as a Frontend Developer on an ongoing project built with Next.js and Bootstrap. I’ve been responsible for developing multiple components and pages across the platform, including the reel section, which has been one of the most complex parts. The real challenge has been managing development across different modules at the same time, adapting quickly to each module’s requirements while ensuring smooth, consistent functionality throughout the project.",
      url: "",
    },
    {
      title: "v-Estate",
      subtitle: "Real Estate Platform",
      description:
        "when i was hired as an intern.. at that time i get to work on this project where i was assigned to build some POCs and the do the development on the dashboard as well as work on the different projects inhancements. It was built using ReactJs and tailwindcss. It was a great learning experience for me as a fresher to understand how real world projects are built and maintained.",
      url: "",
    },
    {
      title: "Esn India",
      subtitle: "Health Supplements E-commerce Website",
      description:
        "We developed the entire e-commerce website using the Shopify CMS platform. My responsibilities included designing the site layout, implementing e-commerce functionalities, and ensuring a user-friendly experience. I worked closely with the client to understand their needs and delivered a website that aligned with their vision and business goals.",
      url: "https://esnindia.in/",
    },
    {
      title: "Shagun Realtors",
      subtitle: "Real Estate related Website",
      description:
        "I was responsible for developing the entire website using the Wordpress CMS platform. I handled everything from designing the layout to implementing features and ensuring a smooth user experience. I was also pleased to handle the client's requirements and deliver a website that met their expectations effectively.",
      url: "http://shagunrealtors.in/",
    },

    {
      title: "SmsLocal",
      subtitle: "Bulk SMS Service Provider",
      description:
        "I worked as the co-manager of the website development team, where we built the entire platform from scratch while I also contributed as a content writer. Along with handling the technical side of the website, I managed SEO, customer relations, and SMS software testing, ensuring everything worked smoothly. The biggest challenge was maintaining high Google rankings across multiple new pages while balancing technical issues, content creation, and evolving client requirements, which helped me become a more structured and solution-driven professional.",
      url: "https://www.smslocal.com/",
    },
    {
      title: "My Country Mobile",
      subtitle: "International Call & SMS Service Provider",
      description:
        "I joined the firm as a PHP developer, where I handled the company’s main website—fixing MCM software bugs, improving page speed, managing SEO, and resolving all website-related issues. I also developed UI-friendly landing pages for better engagement and performance. The key challenge was balancing continuous bug fixes with optimization, SEO improvements, and creating clean, fast, and visually appealing pages, all while maintaining smooth functionality for a high-traffic platform.",
      url: "https://www.mycountrymobile.com/",
    },
    {
      title: "CallMama",
      subtitle: "International Calling, Messaging & Sms Service App",
      description:
        "As a web developer, I was responsible for maintaining and enhancing the CallMama website. My tasks included fixing bugs in the existing codebase, optimizing page load speeds, and ensuring the site was SEO-friendly. I also created new landing pages to improve user engagement and conversion rates. The main challenge was to juggle multiple responsibilities while ensuring the website remained functional and user-friendly for a global audience.",
      url: "https://www.callmama.com/",
    },
  ];

  return (
    <>
      <div
        ref={workRef}
        className="min-h-screen bg-portfolio-dark overflow-x-hidden w-full max-w-full pt-6 sm:pt-8"
      >
        <Navigation />

        <div className="pt-16 sm:pt-24 pb-12 sm:pb-16">
          <div className="container w-full mx-auto px-4 sm:px-6">
            <div
              ref={projectsRef}
              className="max-w-4xl space-y-8 sm:space-y-12 lg:space-y-16"
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="border-l-2 border-portfolio-green pl-4 sm:pl-6 lg:pl-8 hover:border-portfolio-green-hover transition-colors duration-300"
                >
                  <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-mono font-bold mb-2 sm:mb-4 text-portfolio-green">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:underline"
                      >
                        {project.title}
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                    ) : (
                      project.title
                    )}
                  </h1>
                  <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-mono text-foreground mb-3 sm:mb-6">
                    {project.subtitle}
                  </h2>
                  <p className="text-xs sm:text-base lg:text-lg font-mono text-muted-foreground leading-relaxed">
                    <span className="text-foreground font-semibold">
                      Thoughts | Role :
                    </span>{" "}
                    {project.description}
                  </p>
                </div>
              ))}
            </div>

            {/* WorkLog Link */}
            <div className="mt-12 sm:mt-16">
              <a
                href="/personal-projects"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono text-portfolio-green hover:text-portfolio-green-hover transition-colors"
              >
                View Personal Projects{" "}
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-6 sm:py-8 border-t border-portfolio-green/20">
          <div className="container mx-auto px-4 sm:px-6">
            <p className="text-center text-xs sm:text-sm font-mono text-muted-foreground">
              @2025, Nagendra Dwivedi
            </p>
          </div>
        </footer>
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

export default Work;
