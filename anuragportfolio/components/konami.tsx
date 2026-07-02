"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SEQUENCES = [
  [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "b", "a",
  ],
  ["a", "n", "u", "r", "a", "g"],
  ["j", "h", "a"],
];

/**
 * A small reward for the curious: the Konami code rains a little confetti
 * and flips a hidden "achievement". Moderate, tasteful gamification.
 */
export function Konami() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    let positions = SEQUENCES.map(() => 0);
    const onKey = (e: KeyboardEvent) => {
      // Ignore modifier keys so they don't break/reset the sequence (e.g. holding Shift for uppercase B/A)
      if (["Shift", "Control", "Alt", "Meta", "CapsLock"].includes(e.key)) {
        return;
      }
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      
      let hasUnlocked = false;
      positions = positions.map((pos, i) => {
        const seq = SEQUENCES[i];
        if (key === seq[pos]) {
          pos++;
          if (pos === seq.length) {
            hasUnlocked = true;
            return 0;
          }
          return pos;
        } else {
          return key === seq[0] ? 1 : 0;
        }
      });

      if (hasUnlocked) {
        setUnlocked(true);
        positions = SEQUENCES.map(() => 0);
        setTimeout(() => setUnlocked(false), 4000);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
