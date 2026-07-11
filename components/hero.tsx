"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { site } from "@/config/site";
import { Socials } from "./socials";
import { RotateCw } from "lucide-react";

export function Hero() {
  const [imgIndex, setImgIndex] = useState(0);

  const handleNextImage = () => {
    const nextIndex = (imgIndex + 1) % site.profileImages.length;
    setImgIndex(nextIndex);
    window.dispatchEvent(new CustomEvent("profileImageChanged", { detail: nextIndex }));
  };

  const roles = [
    "Full Stack Developer.",
    "Backend Engineer.",
    "Open Source Contributor.",
    "Problem Solver."
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = roles[roleIndex];
    
    const typingSpeed = isDeleting ? 30 : 60;
    const delayBeforeDelete = 2000;
    const delayBeforeType = 400;

    const tick = () => {
      if (!isDeleting) {
        const nextText = fullText.slice(0, currentText.length + 1);
        setCurrentText(nextText);
        
        if (nextText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), delayBeforeDelete);
          return;
        }
      } else {
        const nextText = fullText.slice(0, currentText.length - 1);
        setCurrentText(nextText);
        
        if (nextText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          timer = setTimeout(() => {}, delayBeforeType);
          return;
        }
      }
      
      timer = setTimeout(tick, typingSpeed);
    };

    timer = setTimeout(tick, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden px-6"
    >
      {/* backdrop */}
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[50rem] w-[50rem] -translate-x-1/2 rounded-full bg-accent/5 blur-[160px]" />

      <div className="mx-auto w-full max-w-content pt-20">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-mono text-sm text-accent"
        >
          {site.greeting}
          <span className="ml-0.5 inline-block w-[2px] animate-blink bg-accent">&nbsp;</span>
        </motion.p>

        <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onClick={handleNextImage}
            className="relative h-28 w-28 shrink-0 sm:h-32 sm:w-32 group cursor-pointer select-none"
            title="Click to change profile image"
          >
            {/* Main Avatar Image */}
            <img
              src={site.profileImages[imgIndex]}
              alt="Profile"
              className="h-full w-full rounded-2xl object-cover border border-border shadow-xl transition-all pointer-events-none"
            />
            
            {/* Chromatic aberration split channel 1 on hover */}
            <img
              src={site.profileImages[imgIndex]}
              alt="Profile Glitch Red"
              className="absolute inset-0 h-full w-full rounded-2xl object-cover border border-border pointer-events-none opacity-0 group-hover:opacity-70 filter saturate-150 hue-rotate-[90deg] mix-blend-screen transition-all duration-75 ease-out glitch-img-1"
            />
            
            {/* Chromatic aberration split channel 2 on hover */}
            <img
              src={site.profileImages[imgIndex]}
              alt="Profile Glitch Blue"
              className="absolute inset-0 h-full w-full rounded-2xl object-cover border border-border pointer-events-none opacity-0 group-hover:opacity-70 filter saturate-150 hue-rotate-[240deg] mix-blend-screen transition-all duration-75 ease-out glitch-img-2"
            />

            {/* CRT scanline overlay */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden opacity-[0.18] group-hover:opacity-30 transition-opacity bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]">
              {/* Scanline glow swipe bar */}
              <div className="absolute inset-0 h-1 bg-white/20 blur-[1px] animate-scanline" />
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
              className="absolute -right-3 -top-3 rounded-full border border-border bg-surface p-1.5 text-muted transition-all hover:text-fg hover:scale-110 sm:opacity-100 opacity-0 group-hover:opacity-100 z-20 cursor-pointer"
              aria-label="Switch profile image"
            >
              <RotateCw size={15} strokeWidth={2} />
            </button>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fg to-muted">
              {site.name}.
            </span>
            <br />
            <span className="text-xl font-medium text-muted sm:text-2xl font-mono min-h-[36px] inline-block">
              {currentText}
              <span className="inline-block w-[2px] animate-blink bg-muted/60 ml-1">&nbsp;</span>
            </span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-all duration-300 hover:scale-[1.05] hover:shadow-lg hover:shadow-accent/20"
          >
            see my work
          </a>
          <Socials />
        </motion.div>


        {/* status / "now" pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 grid gap-3 sm:grid-cols-3"
        >
          {site.status.available && (
            <div className="flex items-center gap-2 rounded-2xl border bg-surface/30 px-4 py-3 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-muted">{site.status.availableText}</span>
            </div>
          )}
          <NowPill label="building" value={site.status.nowBuilding} />
          <NowPill label="learning" value={site.status.nowLearning} />
        </motion.div>
      </div>
    </section>
  );
}



function NowPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border bg-surface/30 px-4 py-3 text-sm">
      <span className="font-mono text-xs uppercase tracking-wider text-faint">
        {label}
      </span>
      <p className="mt-0.5 line-clamp-2 text-muted" title={value}>
        {value}
      </p>
    </div>
  );
}
