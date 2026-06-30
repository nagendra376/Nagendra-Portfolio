"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { site } from "@/config/site";
import { useTheme } from "./theme-provider";

const links = [
  { href: "#about", label: "about" },
  { href: "#work", label: "work" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

function SunMoon({ theme }: { theme: string }) {
  return theme === "dark" ? (
    <Sun size={16} aria-hidden />
  ) : (
    <Moon size={16} aria-hidden />
  );
}

export function Nav() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleProfileChange = (e: any) => setImgIndex(e.detail);
    window.addEventListener("profileImageChanged", handleProfileChange);
    return () => window.removeEventListener("profileImageChanged", handleProfileChange);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`flex w-full max-w-3xl items-center justify-between rounded-full px-4 py-2 transition-all duration-300 ${
          scrolled
            ? "border bg-surface/70 backdrop-blur-xl shadow-lg shadow-black/5"
            : "border border-transparent"
        }`}
      >
    </header>
  );
}
