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
      title: "SmsLocal",
      subtitle: "Bulk SMS Service Provider",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing ",
      url: "https://www.smslocal.com/",
    },
    // {
    //   title: "ReinventU",
    //   subtitle: "Florida based fitness influencer supplements store",
    //   description:
    //     "Possibly the longest and my most involved project which is still in continous development and functional feature iterations. I was the lead developer who worked alongside with couple designers and project manager.",
    //   url: "",
    // },
    // {
    //   title: "BahiaDays",
    //   subtitle: "Latina mom owned baby boy clothing store",
    //   description:
    //     "It was quite short but a fun project. Julia sent us a pretty neat design file and she was very adamant about its implementation being so perfect that we had to spend the entire day on figuring out the bug that was making the font-weight just a little thinner, haha.",
    //   url: "",
    // },
    // {
    //   title: "NEUX",
    //   subtitle: "Australian Fashion designer's new label's clothing store",
    //   description:
    //     "Brain child of Daisy, NEUX is a very creative label that blends luxury with soft aesthetics. I really loved working on this project from start to finish.",
    //   url: "",
    // },
    // {
    //   title: "SmokeTip",
    //   subtitle: "Electronic Cigarettes | E-Liquids | Vaporizers | Clearomizers",
    //   description:
    //     "First ever project, I built the first, second and final iteration of its frontend website. The development process was quite fun, the bug fixing at times was getting satisfying and annoying at the same time. The client was quite understanding to work with despite it being completed couple days later than originally planned.",
    //   url: "",
    // },
    // {
    //   title: "Slikraketten",
    //   subtitle: "Kids Candy store in Denmark",
    //   description:
    //     "I was the lead dev on this project who built all the functionalities with tremendous help from my project manager to keep the deadline in check and a designer. It was first project that needed to use reactive objects so i opted to use VueJs for its reactive programming capabilities and optionsAPI.",
    //   url: "",
    // },
    // {
    //   title: "Wheels For Less",
    //   subtitle:
    //     "A premier provider of name-brand wheels, and rim and tire package deals.",
    //   description:
    //     "They needed a backend microservice to fetch all the metadata for their wheels database so i went ahead after clearing and gather all the required details and started building the automated api. It need a tree based data fetching and i used a NOSQL database to store data from two apis. At the end it had about 25 million records stored on an aws ec2 instance. I learned a lot about docker and authorization headers on this project.",
    //   url: "",
    // },
  ];

  return (
    <div
      ref={workRef}
      className="min-h-screen bg-portfolio-dark overflow-x-hidden w-full max-w-full"
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
              href="#"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-mono text-portfolio-green hover:text-portfolio-green-hover transition-colors"
            >
              WorkLog <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
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
  );
};

export default Work;
