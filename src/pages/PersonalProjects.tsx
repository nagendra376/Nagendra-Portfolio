import Navigation from "../components/Navigation";
import { ExternalLink } from "lucide-react";

const personalProjects = [
  {
    title: "Social Media App",
    subtitle: "A Frontend architectural Based project",
    description:
      "Hey everyone, This is a social media application, but it’s not intended to be a typical clone or replica of existing platforms. This is a personal project where I plan to implement multiple proofs of concept (POCs) as part of my learning journey. Based on my past professional experience, I’ll be applying the knowledge and patterns I’ve gained and evolving them within this project. I strongly believe that building POCs is one of the most effective ways to understand and design scalable, well-structured architectures.",
    url: "https://social-media-app-chi-three.vercel.app/",
  },
  {
    title: "Porche Design Clone",
    subtitle: "Porche Theme Website Clone",
    description:
      "A clone of the Porche design website built using React and TailwindCSS. currently, i am developing this project with my office mate as a office assignment project on timeLine Based animations using GSAP and three.js library for animations.",
    url: "https://timeline-activity.vercel.app/",
  },
  {
    title: "Snake and Ladders Game",
    subtitle: "Classic Board Game",
    description:
      "Currently i am developing this game using the Next js framework and tailwindcss for styling. The game features multiplayer support and interactive gameplay.",
    url: "https://github.com/nagendra376/Snkae-ladder-game",
  },
  {
    title: "Portfolio Website",
    subtitle: "Personal Portfolio",
    description:
      "Built with React and TailwindCSS, this site showcases my skills, experience, and projects. It features smooth animations and a responsive design.",
    url: "https://www.nagendradwivedi.dev/",
  },
];

const PersonalProjects = () => (
  <div className="min-h-screen bg-portfolio-dark overflow-x-hidden w-full max-w-full">
    <Navigation />
    <div className="pt-16 sm:pt-24 pb-12 sm:pb-16">
      <div className="container w-full mx-auto px-4 sm:px-6">
        <div className="max-w-4xl space-y-8 sm:space-y-12 lg:space-y-16">
          {personalProjects.map((project, index) => (
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
      </div>
    </div>
    <footer className="py-6 sm:py-8 border-t border-portfolio-green/20">
      <div className="container mx-auto px-4 sm:px-6">
        <p className="text-center text-xs sm:text-sm font-mono text-muted-foreground">
          @2025, Nagendra Dwivedi
        </p>
      </div>
    </footer>
  </div>
);

export default PersonalProjects;
