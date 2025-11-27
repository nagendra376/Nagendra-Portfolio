"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Github, Linkedin } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const currentRef = useRef<HTMLParagraphElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        currentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(
        workRef.current?.children || [],
        { opacity: 0, y: 20, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.2"
      )
      .fromTo(
        socialRef.current?.children || [],
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
        "-=0.3"
      );
  }, []);

  return (
    <div
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-portfolio-dark pt-16 sm:pt-20 overflow-x-hidden"
    >
      <div className="container w-full mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Section */}
          <div className="max-w-4xl order-1 lg:order-1">
            <h1
              ref={titleRef}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-mono font-bold mb-4 sm:mb-8 text-foreground "
              style={{ lineHeight: 1.2 }}
            >
              Hi, I'm Nagendra Dwivedi 👋
            </h1>

            <p
              ref={subtitleRef}
              className="text-base sm:text-xl md:text-2xl font-mono mb-4 sm:mb-6 text-foreground flex items-center flex-wrap"
            >
              Junior SDE at {""}
              <span className="inline-block w-2 h-2 sm:w-3 sm:h-3 bg-portfolio-green rounded-full ml-2 animate-glow-pulse"></span>
              <div
                className="flex items-center space-x-2 group cursor-pointer"
                onClick={() => window.open("https://iiclab.com/", "_blank")}
              >
                <span className="text-base sm:text-lg font-mono text-foreground group-hover:text-portfolio-green transition-colors">
                  &nbsp;Ink In Caps
                </span>
              </div>
            </p>

            <p
              ref={currentRef}
              className="text-sm sm:text-lg md:text-xl font-mono mb-8 sm:mb-12 text-muted-foreground"
            >
              Currently building ⚡{" "}
              <span className="text-portfolio-green">Knky </span> with my office
              teams.
            </p>

            <div ref={workRef} className="mb-10 sm:mb-16">
              <h2 className="text-lg sm:text-2xl font-mono font-semibold mb-4 sm:mb-8 text-foreground">
                Recent collaborated work:
              </h2>
              <div className="flex flex-wrap gap-4 sm:gap-8 items-center">
                <div
                  className="flex items-center space-x-2 group cursor-pointer"
                  onClick={() => window.open("https://knky.co/", "_blank")}
                >
                  <span className="text-base sm:text-lg font-mono text-portfolio-green">
                    <img
                      src={
                        new URL("../image/knkyLogo.svg", import.meta.url).href
                      }
                      alt="KNKY Logo"
                      width={28}
                      height={28}
                      className="inline-block w-6 h-6 sm:w-8 sm:h-8"
                    />
                  </span>
                  <span className="text-base sm:text-lg font-mono text-foreground group-hover:text-portfolio-green transition-colors">
                    KNKY
                  </span>
                </div>

                <div
                  className="flex items-center space-x-2 group cursor-pointer"
                  onClick={() =>
                    window.open("https://www.vestate.io/", "_blank")
                  }
                >
                  <span className="text-base sm:text-lg font-mono text-blue-400">
                    <span className="text-base sm:text-lg font-mono text-pink-500">
                      {" "}
                      <img
                        src={
                          new URL("../image/vestate.svg", import.meta.url).href
                        }
                        alt="v-estate Logo"
                        width={40}
                        height={80}
                        className="inline-block w-10 h-auto sm:w-[50px]"
                      />
                    </span>
                  </span>
                  <span className="text-base sm:text-lg font-mono text-foreground group-hover:text-portfolio-green transition-colors">
                    v-estate
                  </span>
                </div>
              </div>
            </div>

            <div ref={socialRef} className="flex flex-wrap gap-4 sm:gap-6">
              <a
                href="https://github.com/nagendraiic"
                className="flex items-center space-x-2 text-foreground hover:text-portfolio-green transition-colors group"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse" />
                <span className="font-mono text-sm sm:text-base">
                  github (work)
                </span>
              </a>
              <a
                href="https://github.com/nagendra376"
                className="flex items-center space-x-2 text-foreground hover:text-portfolio-green transition-colors group"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse" />
                <span className="font-mono text-sm sm:text-base">
                  github (personal)
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/nagendra-dwivedi-1049651b6/"
                className="flex items-center space-x-2 text-foreground hover:text-portfolio-green transition-colors group"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse" />
                <span className="font-mono text-sm sm:text-base">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Video Section */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-2 w-full">
            <div className="relative w-full max-w-xs sm:max-w-md aspect-video rounded-lg overflow-hidden border-2 border-portfolio-green glow-effect">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                src={new URL("../image/Nagendra.mp4", import.meta.url).href}
              >
                <source
                  src={new URL("../image/Nagendra.mp4", import.meta.url).href}
                  type="video/mp4"
                />
                {/* fallback content shown when video can't play */}
                <div className="w-full h-full bg-gradient-to-br from-portfolio-green/20 to-portfolio-dark flex items-center justify-center">
                  <span className="text-portfolio-green font-mono text-lg">
                    Nagendra Dwivedi
                  </span>
                </div>
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
