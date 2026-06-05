import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const revealEase = [0.16, 1, 0.3, 1] as const;

type RevealVariant = "up" | "left" | "right" | "scale" | "fade";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
  y?: number;
  "aria-label"?: string;
  "aria-labelledby"?: string;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  variant = "up",
  y = 18,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={className} aria-label={ariaLabel} aria-labelledby={ariaLabelledBy}>
        {children}
      </div>
    );
  }

  const motionState = {
    fade: {
      animate: { opacity: 1 },
      initial: { opacity: 0 }
    },
    left: {
      animate: { opacity: 1, x: 0 },
      initial: { opacity: 0, x: -28 }
    },
    right: {
      animate: { opacity: 1, x: 0 },
      initial: { opacity: 0, x: 28 }
    },
    scale: {
      animate: { opacity: 1, scale: 1, y: 0 },
      initial: { opacity: 0, scale: 0.985, y: 12 }
    },
    up: {
      animate: { opacity: 1, y: 0 },
      initial: { opacity: 0, y }
    }
  }[variant];

  return (
    <motion.div
      className={className}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      initial={motionState.initial}
      whileInView={motionState.animate}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.58, delay, ease: revealEase }}
    >
      {children}
    </motion.div>
  );
}
