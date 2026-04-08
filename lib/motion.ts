import type { Transition, Variants } from "framer-motion";

export const premiumEase = [0.16, 1, 0.3, 1] as const;

export const premiumTransition: Transition = {
  duration: 0.8,
  ease: premiumEase
};

export const revealContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(10px)"
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: premiumTransition
  }
};

export const softReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.985
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: premiumTransition
  }
};
